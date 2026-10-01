#!/usr/bin/env bash
# Sube el export estático (out/) a S3 e invalida CloudFront.
# Uso: S3_BUCKET=mi-bucket CF_DISTRIBUTION_ID=E123ABC ./scripts/deploy-s3.sh
# Requiere haber ejecutado antes `npm run build:static`.
set -euo pipefail

: "${S3_BUCKET:?Define S3_BUCKET}"
OUT_DIR="$(dirname "$0")/../out"
[ -f "$OUT_DIR/index.html" ] || { echo "No existe out/index.html. Ejecuta: npm run build:static" >&2; exit 1; }

# 1. Assets con hash: caché inmutable de 1 año (equivale a /_next/static/* en _headers).
aws s3 sync "$OUT_DIR/_next/static" "s3://$S3_BUCKET/_next/static" \
  --delete --cache-control "public,max-age=31536000,immutable"

# 2. Imágenes y frames: 1 día (equivale a /images/* en _headers).
for dir in images frames; do
  [ -d "$OUT_DIR/$dir" ] && aws s3 sync "$OUT_DIR/$dir" "s3://$S3_BUCKET/$dir" \
    --delete --cache-control "public,max-age=86400"
done

# 3. Resto (HTML, payloads RSC .txt, iconos): siempre revalidar.
aws s3 sync "$OUT_DIR" "s3://$S3_BUCKET" \
  --delete \
  --exclude "_next/static/*" --exclude "images/*" --exclude "frames/*" \
  --exclude "_headers" \
  --cache-control "public,max-age=0,must-revalidate"

# 4. Invalidar CloudFront (opcional).
if [ -n "${CF_DISTRIBUTION_ID:-}" ]; then
  aws cloudfront create-invalidation --distribution-id "$CF_DISTRIBUTION_ID" --paths "/*"
fi

echo "Despliegue completado en s3://$S3_BUCKET"
