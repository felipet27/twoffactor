#!/usr/bin/env bash
# Crea (una sola vez) la distribución CloudFront con OAC delante del bucket S3
# y añade al bucket la política que permite leer solo a esa distribución.
# Uso: AWS_PROFILE=aws-personal S3_BUCKET=twoffactor.com ./scripts/setup-cloudfront.sh
# Opcional: CERT_ARN=arn:aws:acm:us-east-1:... para servir en twoffactor.com y www.
set -euo pipefail

: "${S3_BUCKET:?Define S3_BUCKET}"
OAC_NAME="${S3_BUCKET}-oac"
POLICY_SID="AllowCloudFrontOAC"

ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
REGION=$(aws s3api get-bucket-location --bucket "$S3_BUCKET" --query LocationConstraint --output text)
[ "$REGION" = "None" ] && REGION="us-east-1"
ORIGIN_DOMAIN="${S3_BUCKET}.s3.${REGION}.amazonaws.com"
echo "Cuenta $ACCOUNT_ID · bucket $S3_BUCKET ($REGION)"

# 1. Origin Access Control (se reutiliza si ya existe).
OAC_ID=$(aws cloudfront list-origin-access-controls \
  --query "OriginAccessControlList.Items[?Name=='$OAC_NAME'].Id | [0]" --output text)
if [ "$OAC_ID" = "None" ] || [ -z "$OAC_ID" ]; then
  OAC_ID=$(aws cloudfront create-origin-access-control --origin-access-control-config \
    "Name=$OAC_NAME,SigningProtocol=sigv4,SigningBehavior=always,OriginAccessControlOriginType=s3" \
    --query OriginAccessControl.Id --output text)
fi
echo "OAC: $OAC_ID"

# 2. Distribución.
TMP=$(mktemp -d)
S3_BUCKET="$S3_BUCKET" ORIGIN_DOMAIN="$ORIGIN_DOMAIN" OAC_ID="$OAC_ID" CERT_ARN="${CERT_ARN:-}" \
python3 - > "$TMP/dist.json" <<'EOF'
import json, os, time
cert = os.environ["CERT_ARN"]
bucket = os.environ["S3_BUCKET"]
cfg = {
  "CallerReference": f"{bucket}-{int(time.time())}",
  "Comment": f"Sitio estatico {bucket}",
  "Enabled": True,
  "DefaultRootObject": "index.html",
  "HttpVersion": "http2and3",
  "IsIPV6Enabled": True,
  "PriceClass": "PriceClass_100",
  "Origins": {"Quantity": 1, "Items": [{
    "Id": "s3-origin",
    "DomainName": os.environ["ORIGIN_DOMAIN"],
    "OriginAccessControlId": os.environ["OAC_ID"],
    "S3OriginConfig": {"OriginAccessIdentity": ""},
  }]},
  "DefaultCacheBehavior": {
    "TargetOriginId": "s3-origin",
    "ViewerProtocolPolicy": "redirect-to-https",
    "Compress": True,
    # Managed-CachingOptimized: respeta el Cache-Control que pone deploy-s3.sh.
    "CachePolicyId": "658327ea-f89d-4fab-a63d-7e88639e58f6",
    "AllowedMethods": {"Quantity": 2, "Items": ["GET", "HEAD"],
                       "CachedMethods": {"Quantity": 2, "Items": ["GET", "HEAD"]}},
  },
  # Con OAC, S3 responde 403 a objetos inexistentes.
  "CustomErrorResponses": {"Quantity": 2, "Items": [
    {"ErrorCode": c, "ResponsePagePath": "/404.html", "ResponseCode": "404",
     "ErrorCachingMinTTL": 60} for c in (403, 404)]},
}
if cert:
  cfg["Aliases"] = {"Quantity": 2, "Items": [bucket, f"www.{bucket}"]}
  cfg["ViewerCertificate"] = {"ACMCertificateArn": cert, "SSLSupportMethod": "sni-only",
                              "MinimumProtocolVersion": "TLSv1.2_2021"}
else:
  cfg["ViewerCertificate"] = {"CloudFrontDefaultCertificate": True}
print(json.dumps(cfg))
EOF
read -r DIST_ID DIST_DOMAIN < <(aws cloudfront create-distribution \
  --distribution-config "file://$TMP/dist.json" \
  --query 'Distribution.[Id,DomainName]' --output text)
echo "Distribución: $DIST_ID ($DIST_DOMAIN)"

# 3. Política del bucket: añade el permiso de lectura para la distribución
#    conservando las sentencias existentes.
aws s3api get-bucket-policy --bucket "$S3_BUCKET" --query Policy --output text \
  > "$TMP/old.json" 2>/dev/null || echo '{"Version":"2012-10-17","Statement":[]}' > "$TMP/old.json"
SID="$POLICY_SID" BUCKET="$S3_BUCKET" ARN="arn:aws:cloudfront::$ACCOUNT_ID:distribution/$DIST_ID" \
python3 - "$TMP/old.json" > "$TMP/policy.json" <<'EOF'
import json, os, sys
p = json.load(open(sys.argv[1]))
p["Statement"] = [s for s in p["Statement"] if s.get("Sid") != os.environ["SID"]]
p["Statement"].append({
  "Sid": os.environ["SID"], "Effect": "Allow",
  "Principal": {"Service": "cloudfront.amazonaws.com"},
  "Action": "s3:GetObject",
  "Resource": f"arn:aws:s3:::{os.environ['BUCKET']}/*",
  "Condition": {"StringEquals": {"AWS:SourceArn": os.environ["ARN"]}},
})
print(json.dumps(p))
EOF
aws s3api put-bucket-policy --bucket "$S3_BUCKET" --policy "file://$TMP/policy.json"
rm -rf "$TMP"

echo
echo "Listo. Despliega con:"
echo "  S3_BUCKET=$S3_BUCKET CF_DISTRIBUTION_ID=$DIST_ID ./scripts/deploy-s3.sh"
echo "URL: https://$DIST_DOMAIN"
