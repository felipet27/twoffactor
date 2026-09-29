import Image, { type StaticImageData } from "next/image";

type ScrollSceneProps = {
  id: string;
  tag: string;
  title: React.ReactNode;
  copy: string;
  img: StaticImageData;
  alt: string;
  flip?: boolean;
};

export function ScrollScene({
  id,
  tag,
  title,
  copy,
  img,
  alt,
  flip = false,
}: ScrollSceneProps) {
  return (
    <section id={id} className={`scene ${flip ? "scene--flip" : ""}`}>
      <div className="scene__stage">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          {/* Texto */}
          <div className={flip ? "lg:order-2" : ""}>
            <p className="scene__eyebrow mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cyan-bright">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              {tag}
            </p>
            <h2 className="scene__title text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-chrome sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="scene__copy mt-6 max-w-md text-lg leading-relaxed text-muted">
              {copy}
            </p>
          </div>

          {/* Imagen con transformación 3D */}
          <div className={`relative ${flip ? "lg:order-1" : ""}`}>
            <div
              aria-hidden
              className="scene__glow pointer-events-none absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.35),transparent_65%)] blur-2xl"
            />
            <div className="scene__img relative aspect-[16/11] overflow-hidden rounded-3xl border border-cyan/20 ring-glow">
              <Image
                src={img}
                alt={alt}
                placeholder="blur"
                fill
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
