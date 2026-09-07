import { createFileRoute } from "@tanstack/react-router";
import { Fragment, useEffect, useState } from "react";
import { ImageSlot } from "@/components/ImageSlot";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Entender bien el dinero" },
      {
        name: "description",
        content:
          "Trabajas, cobras e intentas hacer las cosas bien, pero el mes se cierra sin la tranquilidad que esperabas. Entender bien el dinero te ayuda a ver qué está pasando con tus decisiones y a dejar de improvisar.",
      },
      {
        property: "og:title",
        content: "Entender bien el dinero",
      },
      {
        property: "og:description",
        content:
          "¿Por qué, incluso cuando te esfuerzas, tu dinero se sigue yendo en obligaciones antes de que puedas avanzar?",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const CHECKOUT = "#cb-precio";

/** Precio real y editable: cambia moneda, monto y formato desde aquí. */
const PRICING = {
  currency: "USD",
  price: "$13",
};
const PRICE_LABEL = `${PRICING.price} ${PRICING.currency}`;

/** Progresión de 3 pasos debajo de la imagen del hero. */
const HERO_STEPS = [
  { t: "Entiende", d: "Qué está pasando con tu dinero" },
  { t: "Protege", d: "Para dejar de volver a cero" },
  { t: "Avanza", d: "Cuando por fin empiezas a tener margen" },
];

/** Sección 2 — Identificación inmediata. */
const SITUATIONS = [
  {
    t: "Cobras y por unos días sientes que tienes margen.",
    d: "Después empiezan a aparecer pagos, compromisos y compras que ya tenías pendientes. Y sin que puedas señalar un momento exacto, esa sensación de margen desaparece.",
  },
  {
    t: "Consigues guardar algo… y algo más aparece para gastarlo.",
    d: "Un imprevisto, una compra que de pronto parece necesaria, algo pendiente que hay que cubrir. El dinero que ibas a guardar termina resolviendo urgencias en vez de construir una base.",
  },
  {
    t: "Escuchas todo el tiempo que deberías invertir o hacer crecer tu dinero.",
    d: "Pero por dentro piensas: “¿cómo voy a hacer eso si todavía no siento que tengo una base clara?” Y la idea de invertir se queda ahí, pendiente.",
  },
  {
    t: "Revisas tu dinero antes de decidir, pero igual no tienes certeza.",
    d: "No sabes con exactitud cuánto puedes gastar, cuánto necesitas, cuánto ya está comprometido, ni qué va a significar esa decisión el resto del mes.",
  },
];

/** Sección 7 — El cambio de enfoque. */
const STAGES = [
  { n: "01", t: "Observar", d: "Entender qué está ocurriendo realmente con tu dinero." },
  { n: "02", t: "Identificar", d: "Reconocer los patrones y las prioridades detrás de tus decisiones." },
  { n: "03", t: "Decidir", d: "Tomar decisiones con mayor intención, no solo por reacción." },
  { n: "04", t: "Continuar", d: "Construir decisiones que no tengan que reiniciarse por completo cada mes." },
];

/** Sección 8 — Por qué el orden cambia todo. */
const ORDER_EXAMPLES = [
  "Pensar en invertir antes de tener claridad sobre lo que entra y lo que sale.",
  "Intentar ahorrar sin entender por qué ese dinero siempre termina usándose en otra cosa.",
  "Recortar gastos sin identificar cuáles decisiones son las que realmente generan presión.",
  "Buscar ganar más antes de revisar qué está pasando con los recursos que ya tienes.",
];

/** Sección 9 — Future pacing. */
const CHANGES = [
  "Revisas una decisión con menos incertidumbre.",
  "Distingues con más claridad qué dinero está realmente disponible.",
  "Piensas con más calma antes de gastar.",
  "Dejas de sentir que cada mes empieza completamente desde cero.",
  "Sabes con más claridad cuál debería ser tu siguiente paso.",
];

/** Sección 11 — Qué encontrarás en el libro (contenido real, reformulado). */
const INCLUDES = [
  {
    t: "Por qué tu dinero desaparece sin que lo notes.",
    d: "Te permite identificar el patrón antes de intentar corregirlo, en vez de solo lamentar el resultado a fin de mes.",
  },
  {
    t: "Qué gastos afectan de verdad tu capacidad de guardar dinero.",
    d: "Así dejas de recortar al azar y empiezas a actuar sobre lo que realmente mueve la aguja.",
  },
  {
    t: "Cómo empezar a construir una reserva propia.",
    d: "Para que un imprevisto deje de sentirse como un retroceso total y vuelvas a tener una base sobre la cual decidir.",
  },
  {
    t: "Cuándo tiene sentido empezar a mirar la inversión.",
    d: "Para que no sea algo que sigues posponiendo por no sentirte “listo”, sino un paso que das con más criterio.",
  },
  {
    t: "Los conceptos básicos, explicados sin vueltas.",
    d: "Sin lenguaje técnico innecesario, para que puedas aplicar lo que lees en vez de solo acumularlo como otro consejo más.",
  },
  {
    t: "Un sistema que puedes sostener aunque hoy empieces de cero.",
    d: "Pensado para que no dependa de fuerza de voluntad, sino de un orden que puedas repetir mes a mes.",
  },
];

const BONUSES = [
  {
    n: 1,
    short: "El Sistema de las 3 Cuentas",
    o: "No sé por dónde empezar a organizar mi dinero.",
    t: "El Sistema de las 3 Cuentas",
    d: "Para ayudarte a darle una función clara a tu dinero apenas lo recibes, en vez de decidir todo sobre la marcha.",
    x: "De “no sé qué hacer con mi dinero” a “sé cuál es el siguiente paso para cada parte de él”.",
  },
  {
    n: 2,
    short: "La Planilla del Mes",
    o: "Entenderlo es una cosa, aplicarlo en mi día a día es otra.",
    t: "La Planilla del Mes",
    d: "Una forma simple de ver, semana a semana, qué está entrando, qué está saliendo y qué patrones se repiten.",
    x: "De “sé que gasto, pero no sé exactamente en qué” a “puedo ver con claridad qué está pasando con mi dinero”.",
  },
  {
    n: 3,
    short: "Tu Primer Fondo de Emergencia",
    o: "Mi situación no es perfecta, siempre aparece algo inesperado.",
    t: "Tu Primer Fondo de Emergencia",
    d: "Para que empieces a construir una base pensada justo para esos imprevistos que hoy te hacen retroceder.",
    x: "De volver a cero cada vez que algo se complica, a tener una base que te sostiene.",
  },
  {
    n: 4,
    short: "Las 12 Preguntas Antes de Comprar Algo Caro",
    o: "A veces gasto por impulso y después me arrepiento.",
    t: "Las 12 Preguntas Antes de Comprar Algo Caro",
    d: "Una guía corta para detenerte antes de una compra importante y decidir con más intención, no con más culpa.",
    x: "De comprar por impulso a decidir con más calma y criterio.",
  },
  {
    n: 5,
    short: "Tus Primeros US$100",
    o: "Siento que necesito tener mucho más dinero antes de poder invertir.",
    t: "Tus Primeros US$100",
    d: "Para ayudarte a bajar la barrera mental de creer que hace falta mucho capital para empezar a aprender sobre inversión.",
    x: "De “eso es para cuando gane más” a “puedo empezar a entenderlo desde ahora”.",
  },
  {
    n: 6,
    short: "Cómo Salir de una Deuda Sin Vender tu Alma",
    o: "Tengo deudas, siento que primero debo resolver eso antes de avanzar en algo más.",
    t: "Cómo Salir de una Deuda Sin Vender tu Alma",
    d: "Para ayudarte a mirar tus deudas con más claridad y evitar decisiones desesperadas mientras las resuelves.",
    x: "De sentir que tus deudas deciden por ti a recuperar un poco de dirección.",
  },
  {
    n: 7,
    short: "El Dinero",
    o: "Siempre termino dejándolo a medias, sé qué hacer pero no lo sostengo.",
    t: "El Dinero",
    d: "Porque mejorar tus finanzas no depende solo de saber qué hacer, sino de entender los patrones que te hacen volver a lo mismo.",
    x: "De repetir decisiones en automático a reconocer el patrón detrás de ellas.",
  },
];

/**
 * Testimonios reales, agrupados por la objeción que ayudan a responder.
 * IMPORTANTE: el contenido y el sentido de cada cita se mantuvo intacto
 * (no se inventó ni modificó ninguna experiencia). Solo se cambiaron 3
 * palabras de jerga exclusivamente argentina por su equivalente neutro,
 * para que el mensaje se entienda igual en cualquier país de LATAM:
 *  - "termotanque" → "calentador de agua"
 *  - "una boludez" → "algo simple"
 *  - "laburando" → "trabajando"
 * No se muestra la ciudad de los compradores (para no señalar un solo
 * país), aunque los testimonios siguen siendo reales.
 * La 4ª categoría queda como espacio reservado: NO se inventó ningún
 * testimonio para completarla — se agrega apenas Lele comparta uno real.
 */
const REVIEW_GROUPS = [
  {
    objection: "Pensaba que el problema era otro",
    items: [
      {
        q: "Hice la planilla un mes entero por hacerle caso. Descubrí que se me iban casi cien mil pesos en cosas que ni recordaba. No gano un peso más que antes y ahora me queda.",
        n: "Gustavo R.",
      },
      {
        q: "Se me rompió el calentador de agua en junio y por primera vez lo pagué sin tarjeta. La reserva ya estaba armada. Eso solo vale lo que salió el libro.",
        n: "Fabián L.",
      },
    ],
  },
  {
    objection: "Pensé que sería complicado",
    items: [
      {
        q: "Lo leí en cuatro noches, quince minutos por vez. No es un libro de motivación: te hace sacar la calculadora.",
        n: "Diego A.",
      },
    ],
  },
  {
    objection: "Necesitaba más claridad",
    items: [
      {
        q: "Lo que más me sirvió fue lo de las tres cuentas. Cobro y reparto el mismo día. Es algo simple y me cambió el mes entero.",
        n: "Hernán V.",
      },
      {
        q: "Estuve a punto de vender la camioneta con la que trabajo para cubrir un mes malo. Leí el capítulo de deudas y no lo hice. Hoy sigo trabajando con ella.",
        n: "Damián S.",
      },
    ],
  },
  {
    objection: "Podía relacionarlo con mi situación",
    items: [], // TODO(Lele): pegar aquí el testimonio real y se muestra automáticamente.
  },
];

const FEATURED = {
  q: "Tengo 61 y nunca había invertido un peso porque pensaba que había que tener capital. Arranqué con lo mínimo que dice el libro. Ya no soy el que mira de afuera.",
  n: "Marcelo P.",
  before: "Nunca había invertido nada.",
  insight: "Que no hacía falta tener capital para empezar.",
  after: "Comenzó con el monto mínimo que indica el libro.",
};

const FAQS = [
  {
    q: "¿Este libro es para mí?",
    a: "Si sientes que trabajas, cobras e intentas hacer las cosas bien y aun así no logras avanzar como esperabas, es exactamente para eso. Está pensado para alguien que quiere entender su situación, no para expertos en finanzas.",
  },
  {
    q: "¿Necesito saber de finanzas?",
    a: "No. Está escrito para alguien que empieza desde cero, sin dar por hecho conocimientos previos ni usar lenguaje técnico innecesario.",
  },
  {
    q: "¿Necesito tener mucho dinero para que me sirva?",
    a: "No. El objetivo inicial no es que tengas grandes cantidades, sino que entiendas qué está pasando con lo que ya tienes y qué decisión corresponde primero.",
  },
  {
    q: "¿Puedo usarlo en mi país?",
    a: "Sí. Es un material 100% digital, así que puedes acceder a él desde cualquier país de Latinoamérica.",
  },
  {
    q: "¿Cómo recibo el producto?",
    a: "Apenas se confirma tu pago, recibes el acceso al material en tu correo. Normalmente tarda menos de 5 minutos.",
  },
  {
    q: "¿Qué formas de pago existen?",
    a: "Puedes pagar con los medios disponibles en la pasarela de pago al momento de la compra.",
  },
  {
    q: "¿Cómo funciona la garantía?",
    a: "Tienes 7 días para revisar el material y decidir si es para ti, de acuerdo con las condiciones reales de la garantía.",
  },
];

const EXTRA_FAQS = [
  {
    q: "¿El precio es único o es una suscripción?",
    a: "Es un pago único. No hay suscripción ni cobros recurrentes.",
  },
  {
    q: "No me llegó el correo, ¿qué hago?",
    a: "Revisa las carpetas de Spam, Promociones y No deseado. Si no aparece, escríbenos con el correo y el nombre con el que compraste y te lo reenviamos el mismo día.",
  },
  {
    q: "¿Puedo leerlo desde el celular?",
    a: "Sí. El material está en PDF y puedes abrirlo en celular, computadora o tablet.",
  },
];

function Stars() {
  return <span className="text-[color:var(--gold)]">★★★★★</span>;
}

function useCountdown(seconds: number) {
  const [left, setLeft] = useState(seconds);
  useEffect(() => {
    const id = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const m = String(Math.floor(left / 60)).padStart(2, "0");
  const s = String(left % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function Section({
  eyebrow,
  title,
  children,
  id,
}: {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="border-t border-border/60 px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        {(eyebrow || title) && (
          <div className="mb-10 text-center">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && (
              <h2 className="mt-3 text-balance text-3xl font-extrabold sm:text-4xl">{title}</h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function LandingPage() {
  const timer = useCountdown(14 * 60 + 59);
  return (
    <main className="min-h-screen pb-24">
      {/* Barra superior */}
      <div className="sticky top-0 z-40 bg-[color:var(--primary)] px-4 py-2 text-center text-primary-foreground">
        <span className="font-display text-xs font-extrabold uppercase tracking-[0.12em] sm:text-sm">
          🔥 El precio de hoy termina en{" "}
          <span className="ml-1 rounded-md bg-primary-foreground/15 px-2 py-0.5 tabular-nums">
            {timer}
          </span>
        </span>
      </div>

      {/* 1. HERO */}
      <header className="hero-glow px-5 pb-16 pt-12 sm:pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Entender bien el dinero</p>

          {/* 2. Titular principal — elemento dominante */}
          <h1 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-extrabold leading-[1.15] sm:text-5xl">
            ¿Sientes que con tu dinero siempre estás{" "}
            <span className="text-accent">apagando incendios</span>?
          </h1>

          {/* 3. Subtítulo de pacing */}
          <p className="mx-auto mt-5 max-w-md text-pretty text-base font-semibold leading-snug text-muted-foreground sm:text-lg">
            Cobras. Resuelves lo urgente. Surge algo nuevo. Y cuando parece que vas a avanzar…
            vuelves a empezar.
          </p>

          {/* 4. Imagen central de transformación */}
          <div className="mx-auto mt-10 max-w-md">
            <img
              src="/hero-fire-hombre-completa-860.webp"
              alt="Hombre preocupado revisando sus finanzas de noche mientras facturas y deudas arden en un balde sobre su escritorio"
              width={860}
              height={573}
              fetchPriority="high"
              className="h-auto w-full rounded-2xl"
            />
          </div>

          {/* 5. Progresión de 3 pasos */}
          <div className="mx-auto mt-9 flex max-w-2xl flex-col items-stretch justify-center gap-2 sm:flex-row sm:items-center">
            {HERO_STEPS.map((s, i) => (
              <Fragment key={s.t}>
                <div className="card-surface flex-1 px-5 py-4 text-center">
                  <p className="font-display text-sm font-extrabold uppercase tracking-[0.14em] text-accent">
                    {s.t}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">{s.d}</p>
                </div>
                {i < HERO_STEPS.length - 1 && (
                  <span className="rotate-90 text-lg text-muted-foreground/50 sm:rotate-0" aria-hidden="true">
                    →
                  </span>
                )}
              </Fragment>
            ))}
          </div>

          {/* 6. Frase de mecanismo */}
          <p className="mx-auto mt-8 max-w-md text-balance font-display text-lg font-extrabold leading-snug sm:text-xl">
            El problema no siempre es cuánto ganas. A veces es que nadie te enseñó{" "}
            <span className="text-accent">qué hacer primero</span>.
          </p>

          {/* 7. CTA */}
          <a href={CHECKOUT} className="btn-cta mt-8">
            Quiero entender bien mi dinero
          </a>

          {/* 8. Microcopy de fricción */}
          <p className="mt-3 text-xs text-muted-foreground">
            Acceso inmediato · Pago único · Garantía de 7 días
          </p>

          {/* 9. Prueba social */}
          <p className="mt-6 text-sm text-muted-foreground">
            4.9 <Stars /> + 8.432 lectores
          </p>
        </div>

        {/* 10. Logos / autoridad */}
        <div className="mx-auto mt-10 max-w-4xl border-t border-border/60 pt-8 text-center">
          <p className="eyebrow">Este libro fue visto en</p>
          <div className="mt-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <div className="marquee-track gap-4">
              {[1, 2, 3, 4, 1, 2, 3, 4].map((l, i) => (
                <div key={i} className="w-36 shrink-0 sm:w-44">
                  <ImageSlot label={`[LOGO MEDIO ${l} — SUBIR DESPUÉS]`} ratio="16 / 6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* 11. Franja inferior de 3 reductores de fricción */}
      <div className="bg-surface-strong/70 px-5 py-8">
        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-4 text-center">
          {[
            ["$13 USD", "Sin barreras para empezar"],
            ["A tu ritmo", "Sin tener que entenderlo todo de una vez"],
            ["Pago único", "Sin suscripciones"],
          ].map(([a, b]) => (
            <div key={a}>
              <p className="font-display text-lg font-extrabold text-accent sm:text-xl">{a}</p>
              <p className="text-xs text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Identificación inmediata */}
      <Section title="Quizás el problema no es que no te alcance el dinero.">
        <div className="grid gap-5 sm:grid-cols-2">
          {SITUATIONS.map((s) => (
            <article key={s.t} className="card-surface p-6">
              <h3 className="text-lg font-bold">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
          <p className="text-muted-foreground">
            El problema no siempre es que no entre dinero.
          </p>
          <p className="mt-1 font-display text-lg font-extrabold">
            A veces es no tener suficiente claridad para decidir qué debe pasar con él.
          </p>
        </div>
      </Section>

      {/* 3. Alivio de culpa */}
      <Section title="Que te cueste manejar tu dinero no significa que seas malo con él.">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-muted-foreground">
            La mayoría de las personas nunca recibió una forma práctica de mirar su propia
            situación: cómo diferenciar prioridades, cómo ordenar decisiones, qué observar antes
            de actuar. Han escuchado consejos —ahorra, gasta menos, invierte, evita las deudas—
            pero eso no es lo mismo que tener una forma de pensar tu propio caso.
          </p>
          <p className="mt-6 text-lg font-semibold">
            Antes de intentar hacer más cosas con tu dinero, necesitas entender qué está
            ocurriendo con él.
          </p>
        </div>
      </Section>

      {/* 4. El problema invisible */}
      <Section title="El problema puede empezar antes de que aparezca el gasto.">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-muted-foreground">
            Muchas decisiones financieras parecen inevitables en el momento en que ocurren. Pero
            se vuelven difíciles porque terminas decidiendo recién después de que el dinero ya
            llegó y las necesidades ya aparecieron.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="card-surface p-5">
              <p className="eyebrow">Decidir desde la reacción</p>
              <p className="mt-2 text-sm text-muted-foreground">
                “Ya apareció esto. ¿Qué hago ahora?”
              </p>
            </div>
            <div className="card-surface p-5">
              <p className="eyebrow">Decidir con más claridad</p>
              <p className="mt-2 text-sm text-muted-foreground">
                “Antes de que aparezca algo nuevo, ya sé qué necesito mirar.”
              </p>
            </div>
          </div>
          <p className="mt-6 text-lg font-semibold">
            Esperar a que todo ocurra para recién entonces decidir te obliga a reaccionar todo el
            tiempo.
          </p>
        </div>
      </Section>

      {/* 5. El costo de seguir igual */}
      <Section title="Lo agotador no siempre es el dinero que falta. Es tener que reorganizarlo todo una y otra vez.">
        <ul className="mx-auto max-w-2xl space-y-4">
          {[
            "Cada imprevisto parece destruir el avance que habías logrado.",
            "Cada mes vuelve a sentirse como si empezaras desde cero.",
            "El dinero que guardas nunca termina de sentirse protegido.",
            "Las decisiones importantes se posponen una y otra vez.",
            "Sigues intentando hacer más, sin tener claro qué deberías cambiar primero.",
          ].map((c, i) => (
            <li key={c} className="card-surface flex gap-4 p-5">
              <span className="font-display text-lg font-black text-accent/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">{c}</p>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-xl text-center text-lg font-semibold">
          No quiero seguir resolviendo los mismos problemas una y otra vez.
        </p>
      </Section>

      {/* 6. El reframe principal */}
      <Section title="No necesitas tener todas las respuestas. Necesitas dejar de decidir sin saber cuál es la pregunta correcta.">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-muted-foreground">
            Antes de ahorrar más, invertir, recortar gastos o buscar otra fuente de ingresos,
            hace falta entender mejor qué está ocurriendo, qué se repite, qué se está llevando
            tus recursos y qué decisión corresponde primero.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center">
          <p className="font-display text-xl font-extrabold uppercase leading-snug sm:text-2xl">
            El problema no siempre es hacer poco. Puede ser hacer cosas sin una secuencia clara.
          </p>
        </div>
      </Section>

      {/* 7. El cambio de enfoque */}
      <Section title="Cuando entiendes mejor tu situación, tus decisiones empiezan a cambiar.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((s) => (
            <article key={s.t} className="card-surface p-6">
              <span className="font-display text-3xl font-black text-accent/40">{s.n}</span>
              <h3 className="mt-2 text-base font-bold uppercase">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* 8. Por qué el orden cambia todo */}
      <Section title="No todas las buenas decisiones son buenas decisiones para este momento.">
        <div className="mx-auto max-w-2xl">
          <p className="text-center text-muted-foreground">
            Puedes escuchar muy buenos consejos. Pero si intentas aplicarlos sin saber qué
            prioridad tienes en este momento, es fácil terminar frustrado. Por ejemplo:
          </p>
          <ul className="mt-6 space-y-3">
            {ORDER_EXAMPLES.map((e) => (
              <li key={e} className="flex gap-3 text-sm text-muted-foreground">
                <span className="text-accent">·</span>
                {e}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-lg font-semibold">
            Quizás no necesitas hacer todo. Necesitas saber qué tiene sentido hacer ahora.
          </p>
        </div>
      </Section>

      {/* 9. Future pacing */}
      <Section title="El cambio puede empezar antes de que tu situación financiera sea perfecta.">
        <ul className="mx-auto max-w-2xl space-y-4">
          {CHANGES.map((c) => (
            <li key={c} className="card-surface flex gap-3 p-5">
              <span className="text-accent">✓</span>
              <p className="text-sm leading-relaxed text-muted-foreground">{c}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <a href={CHECKOUT} className="btn-cta">
            Quiero empezar hoy
          </a>
        </div>
      </Section>

      {/* 10. Introducción del libro */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg font-semibold">
            Comprender esto es una cosa. Tener una guía para empezar a aplicarlo es otra.
          </p>
          <p className="mt-5 text-xl font-extrabold">Entender bien el dinero</p>
          <p className="mt-4 text-muted-foreground">
            Una guía para ayudarte a comprender mejor tu situación, identificar los patrones que
            se repiten, pensar con más claridad antes de decidir y avanzar sin intentar
            resolverlo todo de golpe.
          </p>
        </div>
      </Section>

      {/* 11. Qué encontrarás en el libro */}
      <Section
        eyebrow="Qué encontrarás"
        title="No se trata de leer más sobre dinero. Se trata de comenzar a entenderlo de una manera que puedas aplicar."
      >
        <div className="card-surface grid gap-8 p-6 md:grid-cols-2 md:p-8">
          <div>
            <ImageSlot label="[MOCKUP DEL LIBRO — SUBIR DESPUÉS]" ratio="1 / 1" />
            <p className="mt-4 text-center eyebrow">Entender bien el dinero</p>
          </div>
          <div className="space-y-5">
            {INCLUDES.map((it) => (
              <div key={it.t}>
                <p className="flex gap-2 text-sm font-semibold">
                  <span className="text-accent">✓</span>
                  {it.t}
                </p>
                <p className="mt-1 pl-6 text-xs leading-relaxed text-muted-foreground">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 12. Demostración visual */}
      <Section
        eyebrow="Mira cómo es por dentro"
        title="Antes de comprar, mira exactamente lo que vas a recibir."
      >
        <div className="mx-auto max-w-3xl">
          <ImageSlot label="[INTERIOR DEL LIBRO — SUBIR DESPUÉS]" ratio="16 / 10" />
        </div>
      </Section>

      {/* 13. Bonos */}
      <Section title="Y probablemente, mientras lees esto, ya estás pensando algunas cosas.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BONUSES.map((b) => (
            <article key={b.n} className="card-surface flex flex-col overflow-hidden">
              <ImageSlot
                label="[PORTADA DEL BONO — SUBIR DESPUÉS]"
                ratio="16 / 10"
                className="rounded-none border-0 border-b-2"
              />
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm font-semibold leading-snug text-muted-foreground">
                  “{b.o}”
                </p>
                <h3 className="mt-3 text-base font-bold leading-snug">{b.t}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
                <p className="mt-4 border-t border-border pt-3 text-xs leading-relaxed text-muted-foreground">
                  <span className="eyebrow block">Transformación</span>
                  {b.x}
                </p>
                <p className="mt-3 text-xs font-semibold text-accent">INCLUIDO HOY</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
          <p className="text-muted-foreground">
            No están aquí para darte más cosas que consumir. Están aquí para resolver las razones
            que normalmente hacen que las personas no comiencen.
          </p>
        </div>
      </Section>

      {/* 14. Testimonios */}
      <Section title="Personas con dudas parecidas a las tuyas, antes de empezar.">
        <div className="card-surface mb-10 grid items-center gap-6 p-6 md:grid-cols-[200px_1fr] md:p-8">
          <div>
            <ImageSlot label="[FOTO DEL TESTIMONIO — SUBIR DESPUÉS]" ratio="1 / 1" />
          </div>
          <div>
            <Stars />
            <p className="mt-3 text-lg font-semibold leading-relaxed">“{FEATURED.q}”</p>
            <p className="mt-3 text-sm font-bold">{FEATURED.n}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                ["Antes", FEATURED.before],
                ["Descubrimiento", FEATURED.insight],
                ["Después", FEATURED.after],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-border p-3">
                  <p className="eyebrow">{k}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-8">
          {REVIEW_GROUPS.map((g) => (
            <div key={g.objection}>
              <p className="mb-4 text-center font-display text-sm font-bold text-accent">
                “{g.objection}”
              </p>
              {g.items.length > 0 ? (
                <div className="grid gap-5 md:grid-cols-2">
                  {g.items.map((r) => (
                    <article key={r.n} className="card-surface flex flex-col p-6">
                      <Stars />
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {r.q}
                      </p>
                      <div className="mt-5 flex items-center gap-3">
                        <div className="size-10 shrink-0">
                          <ImageSlot label="" ratio="1 / 1" className="!rounded-full !p-0" />
                        </div>
                        <div>
                          <p className="text-sm font-bold">{r.n}</p>
                          <p className="text-xs text-muted-foreground">Compra verificada</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="flex w-full items-center justify-center rounded-2xl border-2 border-dashed border-border bg-surface-strong/60 p-6 text-center">
                  <p className="mx-auto max-w-[32ch] text-xs text-muted-foreground/80">
                    [TESTIMONIO REAL — AGREGAR DESPUÉS]
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* 15. Stack de la oferta */}
      <Section id="cb-precio" title="Todo lo que necesitas para empezar con más claridad.">
        <div className="card-surface mx-auto max-w-2xl overflow-hidden">
          <div className="bg-[color:var(--primary)] py-2 text-center font-display text-xs font-extrabold uppercase tracking-[0.16em] text-primary-foreground">
            Oferta por tiempo limitado
          </div>
          <div className="p-6 sm:p-8">
            <div className="mx-auto max-w-sm">
              <ImageSlot label="[MOCKUP FINAL DEL PRODUCTO + BONOS — SUBIR DESPUÉS]" ratio="4 / 3" />
            </div>
            <ul className="mt-7 divide-y divide-border text-sm">
              <li className="flex items-start justify-between gap-4 py-3">
                <span>
                  <strong>Entender bien el dinero</strong>
                  <span className="block text-xs text-muted-foreground">
                    La guía completa para dejar de improvisar con tu dinero.
                  </span>
                </span>
                <span className="shrink-0 text-xs font-semibold text-accent">INCLUIDO</span>
              </li>
              {BONUSES.map((b) => (
                <li key={b.n} className="flex items-start justify-between gap-4 py-3">
                  <span>
                    <strong className="font-semibold">
                      Bono {b.n} · {b.short}
                    </strong>
                    <span className="block text-xs text-muted-foreground">{b.d}</span>
                  </span>
                  <span className="shrink-0 text-xs font-semibold text-accent">INCLUIDO</span>
                </li>
              ))}
              <li className="flex justify-between py-3 text-muted-foreground">
                <span>Garantía de 7 días</span>
                <span className="font-semibold text-accent">INCLUIDA</span>
              </li>
            </ul>

            {/* 16. Precio y CTA */}
            <div className="mt-7 text-center">
              <p className="text-sm font-semibold">Hoy accedes a todo por</p>
              <p className="font-display text-5xl font-black text-accent">{PRICE_LABEL}</p>
              <p className="mt-4 text-xs text-muted-foreground">
                Este precio se mantiene por{" "}
                <span className="font-bold tabular-nums text-foreground">{timer}</span>
              </p>
              <a href="#cb-precio" className="btn-cta mt-6 w-full">
                Quiero obtener Entender bien el dinero
              </a>
              <p className="mt-3 text-xs text-muted-foreground">
                Pago único · Acceso inmediato · Sin suscripción
              </p>
              <div className="mx-auto mt-6 max-w-xs">
                <ImageSlot label="[MEDIOS DE PAGO — SUBIR DESPUÉS]" ratio="16 / 4" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 18. Cómo recibes el producto */}
      <Section eyebrow="Simple y rápido" title="Comenzar te lleva menos tiempo del que imaginas.">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Realizas la compra.", "Completas el pago con el medio disponible al momento de comprar."],
            ["Recibes tu acceso.", "Te llega por correo con el libro y los 7 bonos incluidos."],
            ["Puedes comenzar.", "Avanzas a tu propio ritmo, desde donde estás hoy."],
          ].map(([t, d], i) => (
            <article key={t} className="card-surface p-6 text-center">
              <span className="font-display text-4xl font-black text-accent/40">{i + 1}</span>
              <h3 className="mt-2 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* 17. Garantía */}
      <Section title="¿Qué pasa si esto no es lo que esperabas?">
        <div className="card-surface mx-auto grid max-w-3xl items-center gap-6 p-8 md:grid-cols-[200px_1fr]">
          <div className="mx-auto w-44">
            <ImageSlot
              label="[SELLO DE GARANTÍA — SUBIR DESPUÉS]"
              ratio="1 / 1"
              className="!rounded-full"
            />
          </div>
          <div>
            <p className="font-display text-2xl font-black text-accent">7 días de garantía</p>
            <p className="mt-3 text-muted-foreground">
              Tienes 7 días para revisar el material y decidir si es para ti, de acuerdo con las
              condiciones reales de la garantía.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted-foreground">
              {["Compra 100% segura", "7 días de garantía", "Material digital", "Pago único"].map(
                (b) => (
                  <span key={b} className="rounded-full border border-border px-3 py-1">
                    {b}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* 19. FAQ */}
      <Section title="Preguntas frecuentes">
        <div className="mx-auto max-w-3xl space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="card-surface group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold">
                {f.q}
                <span className="text-accent transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
          <p className="pt-6 text-center eyebrow">Preguntas adicionales</p>
          {EXTRA_FAQS.map((f) => (
            <details key={f.q} className="card-surface group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold">
                {f.q}
                <span className="text-accent transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* 20. Cierre final */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-muted-foreground">
            Trabajas. Cobras. Intentas hacer las cosas mejor. Pero muchas veces sigues sin tener
            la sensación de entender del todo qué está ocurriendo con tu dinero.
          </p>
          <p className="mt-6 text-xl font-semibold">
            No tienes que resolver toda tu situación hoy.
          </p>
          <p className="mt-2 text-xl font-semibold">
            Pero puedes dejar de tomar decisiones sin entender primero qué estás mirando.
          </p>
          <p className="mt-6 text-lg font-extrabold">Entender bien el dinero</p>
          <a href={CHECKOUT} className="btn-cta mt-8">
            Quiero empezar a entender mejor mi dinero
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Acceso inmediato · Pago único · 7 días de garantía
          </p>
        </div>
      </Section>

      <footer className="border-t border-border/60 px-5 py-10 text-center text-xs text-muted-foreground">
        <p>Entender bien el dinero · Producto digital · Pago único</p>
        <p className="mt-2">Acceso inmediato por correo · Garantía de 7 días</p>
      </footer>

      {/* Barra fija inferior */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface-strong/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <p className="font-display text-lg font-extrabold text-accent">{PRICE_LABEL}</p>
          <a href={CHECKOUT} className="btn-cta !px-6 !py-3 text-sm">
            Quiero empezar
          </a>
        </div>
      </div>
    </main>
  );
}
