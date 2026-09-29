# Especificación Técnica

## Visión del Producto

El producto es una página web corporativa de una empresa de desarrollo de software que, mediante scroll‑down animation, entrega la experiencia de usuario más fluida y atractiva disponible en 2026. El Ingeniero de Sistemas define una arquitectura serverless‑edge que garantiza latencia mínima y alta disponibilidad, mientras que el Diseñador UX prescribe flujos de interacción intuitivos, jerarquías visuales claras y micro‑interacciones que guían al visitante sin sobrecargarlo. El Animador Web aporta técnicas de animación de última generación basadas en **CSS Scroll‑Driven Animations nativas** (`animation-timeline: scroll()` / `view()`, `scroll-timeline` y `view-timeline`), que corren en el hilo del compositor —fuera del *main thread*— para garantizar 60 FPS reales sin bloquear la interacción; la **View Transitions API** (misma página y cross‑document) para transiciones de sección y navegación sin costuras; **CSS `@property`**, container queries y `:has()` para jerarquías reactivas; y **WebGPU con React Three Fiber** para el escaparate 3D. GSAP (hoy 100 % gratuito, incluidos todos sus plugins) y la biblioteca **Motion** se reservan como complemento para secuencias complejas que el CSS nativo no cubre. El Especialista en Accesibilidad asegura que todas las animaciones respeten WCAG 2.2 AA, ofreciendo modos de reducción de movimiento (`prefers-reduced-motion`) y contraste ajustable. Finalmente, el Ingeniero de Rendimiento optimiza la carga mediante React Server Components, streaming SSR y Partial Prerendering, lazy‑loading, código dividido y assets optimizados, manteniendo una interacción instantánea (INP < 200 ms) incluso en dispositivos móviles de gama media.

---

## Usuarios Objetivo

- Desarrollador senior que busca presentar el portafolio de la empresa a potenciales clientes de forma impactante y rápida
- Estudiante de ingeniería de software que visita la web para conocer casos de estudio y oportunidades de empleo, requiriendo una navegación clara y accesible

---

## Funcionalidades

1. El usuario puede desplazarse verticalmente y observar animaciones sincronizadas con el scroll (CSS Scroll‑Driven Animations nativas) que resaltan los servicios ofrecidos
2. El usuario puede activar el modo de reducción de movimiento para desactivar animaciones intensas
3. El usuario puede cambiar entre temas claro y oscuro sin recargar la página
4. El usuario puede ver videos incrustados que se reproducen automáticamente al entrar en el viewport
5. El usuario puede descargar el brochure de la empresa en PDF con un solo clic
6. El usuario puede interactuar con un carrusel 3D de proyectos (WebGPU / React Three Fiber) utilizando gestos táctiles o mouse
7. El usuario puede consultar testimonios filtrados por sector mediante botones de filtro
8. El usuario puede compartir contenido en redes sociales mediante botones con meta‑tags Open Graph predefinidos
9. El usuario puede navegar mediante teclado y lectores de pantalla sin perder la continuidad de la animación
10. El usuario puede navegar entre secciones y rutas con transiciones fluidas mediante la View Transitions API
11. El usuario percibe navegación instantánea gracias al prerenderizado especulativo (Speculation Rules API)
12. El usuario puede recibir notificaciones de disponibilidad de nuevas secciones mediante un banner no intrusivo
13. El sistema permite generar páginas estáticas en el borde (edge) con Partial Prerendering para servir contenido pre‑renderizado
14. El sistema permite registrar métricas de interacción y rendimiento en tiempo real (incluido INP) mediante un endpoint serverless

---

## Flujos de Usuario

Exploración inicial: 1. El visitante accede a la URL principal. 2. La página carga el HTML estático y los estilos críticos. 3. Al hacer scroll, se activan las animaciones de introducción de la empresa mediante scroll timelines nativos.

Consulta de proyecto: 1. El usuario hace clic en la sección "Proyectos". 2. Se despliega un carrusel 3D con filtros por tecnología. 3. El usuario selecciona un proyecto y, mediante una View Transition, se abre una vista detallada con video y documentación.

Descarga de material: 1. El usuario navega a la sección "Recursos". 2. Hace clic en el botón de descarga del brochure. 3. Aparece un modal (elemento `<dialog>` / Popover API) de confirmación y el PDF se descarga automáticamente.

---

## Arquitectura Técnica

```
El sistema se despliega íntegramente sobre la plataforma edge de Cloudflare: Cloudflare Workers (mediante el adaptador OpenNext) ejecuta el render de Next.js en el borde, la red global de Cloudflare actúa como CDN, Cloudflare R2 almacena los assets pesados (PDF, imágenes) sin cargos de egress, Cloudflare Stream sirve el video con streaming adaptativo, Cloudflare Images entrega AVIF/WebP con LQIP, y Cloudflare Web Analytics registra los Core Web Vitals (incluido INP) sin cookies. El stack tecnológico incluye React 19 con Next.js 16 (App Router) para rendering híbrido con React Server Components, streaming SSR y Partial Prerendering (PPR), TypeScript para tipado estricto, Tailwind CSS v4 (motor Oxide) para diseño responsivo y sistema de tokens alineado con la guía de estilo del Diseñador UX. La capa de experiencia se construye sobre estándares nativos del navegador: las scroll‑down animations se implementan con CSS Scroll‑Driven Animations (animation-timeline, scroll-timeline y view-timeline), ejecutándose en el compositor para 60 FPS sin bloquear el hilo principal; las transiciones de sección y de ruta usan la View Transitions API (misma página y cross‑document); GSAP (gratuito) con ScrollTrigger y la librería Motion cubren secuencias complejas puntuales; y el escaparate de proyectos usa WebGPU con React Three Fiber (fallback a WebGL). Se aprovechan container queries, :has(), CSS @property, anclaje CSS (anchor positioning), la Popover API y el elemento <dialog> nativo para UI moderna y accesible. La navegación se percibe instantánea gracias a la Speculation Rules API (prerender/prefetch especulativo). Para accesibilidad, el Especialista en Accesibilidad configura ARIA attributes, foco visible y un toggle de reducción de movimiento que respeta prefers-reduced-motion y desactiva las animaciones. El Ingeniero de Rendimiento introduce lazy‑loading de imágenes, código dividido por rutas, prefetching de datos críticos y uso de WebP/AVIF. Seguridad incluye CSP estricto, Subresource Integrity, HTTPS obligatorio y sanitización de inputs en las funciones serverless. La arquitectura está diseñada para escalar horizontalmente, soportar picos de 100 k sesiones concurrentes y permitir despliegues continuos mediante GitHub Actions con pruebas automatizadas de rendimiento y accesibilidad.
```

---

## Requisitos No Funcionales

- Núcleo de Web Vitals en verde: LCP < 2,5 s, **INP < 200 ms** y CLS < 0,1 en el percentil 75 de dispositivos móviles
- Tiempo de carga (LCP) menor a 1,5 s en conexiones móviles de gama media
- WCAG 2.2 AA compliance, incluyendo modo de reducción de movimiento (`prefers-reduced-motion`)
- Soporte de 60 FPS en animaciones en dispositivos móviles con CPU de 2 GHz o menos, priorizando animaciones ejecutadas en el compositor
- Escalabilidad para 100 000 visitas simultáneas sin degradar la experiencia
- CSP, HTTPS y protección contra XSS en todas las peticiones
- Mantenimiento de código modular con cobertura de pruebas unitarias ≥ 80 %
