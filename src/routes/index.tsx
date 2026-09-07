import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ImageSlot } from "@/components/ImageSlot";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Entender bien el dinero" },
      {
        name: "description",
        content:
          "Entiende por qué, aunque trabajes y ganes dinero, terminas llegando justo a fin de mes. Aprende a detectar la fuga, construir una reserva segura e invertir desde US$100.",
      },
      {
        property: "og:title",
        content: "Entender bien el dinero",
      },
      {
        property: "og:description",
        content:
          "¿Sientes que con tu dinero siempre estás apagando incendios? Aprende a detectar la fuga, construir una reserva y invertir desde US$100.",
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

/** Sección 2 — Identificación inmediata. */
const SITUATIONS = [
  {
    t: "Cobras… pero a los pocos días no entiendes a dónde se fue el dinero.",
    d: "No hiciste \"una gran compra\", pero igual llegas al final del mes preguntándote qué pasó.",
  },
  {
    t: "Cada gasto parece pequeño… hasta que miras lo que te quedó.",
    d: "Cafés, domicilios, suscripciones, compras rápidas. Nada parece grave por separado, pero juntos se comen tu dinero.",
  },
  {
    t: "Quieres invertir, pero sientes que necesitas saber demasiado antes de empezar.",
    d: "Escuchas hablar de acciones, fondos y dólares, pero nadie te explica qué hacer primero.",
  },
  {
    t: "Cualquier imprevisto te desordena todo.",
    d: "Una reparación, una cuenta inesperada o un problema de salud puede obligarte a gastar dinero que no tenías pensado tocar.",
  },
];

/** Sección 3 — El nuevo mecanismo. */
const STAGES = [
  { n: "01", t: "Entiendes", d: "A dónde se está yendo tu dinero. No puedes mejorar algo que no puedes ver." },
  { n: "02", t: "Gastas sin culpa", d: "No se trata de dejar de disfrutar. Se trata de dejar de perder dinero sin darte cuenta." },
  { n: "03", t: "Construyes una reserva", d: "Para que un imprevisto deje de convertirse en una crisis." },
  { n: "04", t: "Empiezas a invertir", d: "Con una base más segura y sin sentir que estás apostando tu dinero." },
];

/** Sección 8 — Por qué el orden cambia todo. */
const ORDER_EXAMPLES = [
  "Pensar en invertir antes de tener claridad sobre lo que entra y lo que sale.",
  "Intentar ahorrar sin entender por qué ese dinero siempre termina usándose en otra cosa.",
  "Recortar gastos sin identificar cuáles decisiones son las que realmente generan presión.",
  "Buscar ganar más antes de revisar qué está pasando con los recursos que ya tienes.",
];

/** Sección 4 — Cómo se nota la diferencia en 60 días (future pacing). */
const CHANGES = [
  "Vas a dejar de preguntarte dónde desapareció tu dinero, y vas a empezar a ver tus gastos con más claridad.",
  "Vas a tener una reserva que te dé más tranquilidad. Aunque sea pequeña al principio, un imprevisto ya no va a desordenarte por completo.",
  "Vas a entender cómo dar tus primeros pasos para invertir, sin necesitar miles de dólares ni convertirte en experto.",
  "Vas a detectar gastos que hoy pasan completamente desapercibidos, y a decidir conscientemente qué quieres mantener y qué ya no.",
  "Vas a empezar a sentir algo que mucha gente no siente con su dinero: control.",
];

/** Sección 7 — Qué encontrarás en el libro (contenido real, reformulado). */
const INCLUDES = [
  {
    t: "Por qué tu dinero parece desaparecer sin que lo notes.",
    d: "Identificas el patrón antes de intentar corregirlo, en vez de solo lamentar el resultado a fin de mes.",
  },
  {
    t: "Cómo organizar tu dinero sin volverte esclavo de una planilla.",
    d: "Una forma simple, realista y sostenible de distribuir lo que entra. No se trata de controlar cada centavo, sino de saber qué está pasando.",
  },
  {
    t: "Cómo empezar a construir tu propia reserva.",
    d: "Para que un imprevisto deje de sentirse como un retroceso total y vuelvas a tener una base sobre la cual decidir.",
  },
  {
    t: "Cuándo tiene sentido dar tus primeros pasos para invertir.",
    d: "Sin necesitar grandes cantidades de dinero ni conocimientos avanzados. Primero comprendes el terreno, después avanzas.",
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
    d: "Para dejar de preguntarte cuánto puedes gastar y cuánto deberías guardar. Una forma simple de empezar a separar tu dinero con mayor claridad.",
    x: "De \"no sé qué hacer con mi dinero\" a \"sé cuál es el siguiente paso para cada parte de él\".",
  },
  {
    n: 2,
    short: "La Planilla del Mes",
    o: "Entenderlo es una cosa, aplicarlo en mi día a día es otra.",
    t: "La Planilla del Mes",
    d: "Para ver con claridad qué entra, qué sale y qué decisiones puedes mejorar. Porque es difícil mejorar algo que no puedes ver.",
    x: "De \"sé que gasto, pero no sé exactamente en qué\" a \"puedo ver con claridad qué está pasando con mi dinero\".",
  },
  {
    n: 3,
    short: "Tu Primer Fondo de Emergencia",
    o: "Mi situación no es perfecta, siempre aparece algo inesperado.",
    t: "Tu Primer Fondo de Emergencia",
    d: "Una guía para empezar a construir tranquilidad antes de asumir más riesgos. Aunque empieces de a poco, el objetivo es dejar de sentir que cualquier imprevisto puede tirarte todo abajo.",
    x: "De volver a cero cada vez que algo se complica, a tener una base que te sostiene.",
  },
  {
    n: 4,
    short: "Las 12 Preguntas Antes de Comprar",
    o: "A veces gasto por impulso y después me arrepiento.",
    t: "Las 12 Preguntas Antes de Comprar",
    d: "Para evitar compras impulsivas que después terminan pesando. Una pausa antes de decidir que puede ayudarte a comprar con más intención.",
    x: "De comprar por impulso a decidir con más calma y criterio.",
  },
  {
    n: 5,
    short: "Cómo Llegar a tus Primeros US$100",
    o: "Siento que necesito tener mucho más dinero antes de poder invertir.",
    t: "Cómo Llegar a tus Primeros US$100",
    d: "Una guía para transformar una meta aparentemente pequeña en tu primer punto de partida. Porque muchas veces no necesitas empezar enorme. Necesitas empezar.",
    x: "De \"eso es para cuando gane más\" a \"puedo empezar a entenderlo desde ahora\".",
  },
  {
    n: 6,
    short: "Cómo Salir de una Deuda Sin Vender tu Vida",
    o: "Tengo deudas, siento que primero debo resolver eso antes de avanzar en algo más.",
    t: "Cómo Salir de una Deuda Sin Vender tu Vida",
    d: "Para ordenar prioridades y recuperar margen, sin sentir que tienes que resolver toda tu situación de un día para el otro.",
    x: "De sentir que tus deudas deciden por ti a recuperar un poco de dirección.",
  },
  {
    n: 7,
    short: "Disciplina del Dinero",
    o: "Siempre termino dejándolo a medias, sé qué hacer pero no lo sostengo.",
    t: "Disciplina del Dinero",
    d: "Porque saber qué hacer no sirve si después vuelves automáticamente a los mismos hábitos. Entender es importante. Sostener mejores decisiones también.",
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
    a: "Si sientes que trabajas, cobras e intentas hacer las cosas bien y aun así llegas justo a fin de mes sin saber a dónde se fue tu dinero, es exactamente para eso. Está pensado para alguien que quiere entender su situación, no para expertos en finanzas.",
  },
  {
    q: "¿Necesito saber de finanzas?",
    a: "No. Está escrito para alguien que empieza desde cero, sin dar por hecho conocimientos previos ni usar lenguaje técnico innecesario.",
  },
  {
    q: "Gano poco, ¿igual me sirve?",
    a: "Sí. De hecho, gran parte del enfoque parte de entender mejor qué hacer con el dinero que hoy tienes. No necesitas empezar con una gran cantidad para empezar a ordenar tus decisiones.",
  },
  {
    q: "¿Puedo usarlo en mi país?",
    a: "Sí. Es un material 100% digital, así que puedes acceder a él desde cualquier país de Latinoamérica, sin importar la inflación o el contexto económico local.",
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
          {/* 2. Titular principal — elemento dominante */}
          <h1 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-extrabold leading-[1.15] sm:text-5xl">
            ¿Sientes que con tu dinero siempre estás{" "}
            <span className="text-accent">apagando incendios</span>?
          </h1>

          {/* 3. Imagen central de transformación */}
          <div className="mx-auto mt-8 max-w-md">
            <img
              src="/hero-fire-hombre-820.webp"
              alt="Hombre angustiado de noche frente a una olla en llamas con facturas, deudas y pagos vencidos ardiendo"
              width={820}
              height={820}
              fetchPriority="high"
              className="h-auto w-full rounded-2xl"
            />
          </div>

          {/* 4. Subtítulo de pacing */}
          <p className="mx-auto mt-8 max-w-md text-pretty text-base font-semibold leading-snug text-muted-foreground sm:text-lg">
            Aprende a detectar a dónde se te está escapando el dinero, construir una reserva
            segura e invertir desde US$100 para empezar a hacer crecer lo que hoy simplemente
            desaparece.
          </p>

          {/* 7. CTA */}
          <a href={CHECKOUT} className="btn-cta mt-8">
            Quiero tomar el control de mi dinero
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
      <Section title="Dime si alguna de estas te resulta demasiado familiar…">
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
            Si te identificaste con dos o más, no necesitas tener todo resuelto para empezar a
            ordenar tu situación.
          </p>
          <p className="mt-1 font-display text-lg font-extrabold">
            Necesitas entender qué está pasando con tu dinero y empezar a tomar mejores
            decisiones con él.
          </p>
        </div>
        <div className="mt-8 text-center">
          <a href={CHECKOUT} className="btn-cta">
            Sí. Esto es exactamente lo que me pasa
          </a>
        </div>
      </Section>

      {/* 3. Sección de frustración */}
      <Section title="Trabajas, cobras y te esfuerzas… pero igual sientes que nunca terminas de avanzar.">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-muted-foreground">
            Y eso cansa. Porque no se trata necesariamente de que seas irresponsable. Muchas
            veces simplemente nadie te enseñó qué hacer con tu dinero una vez que llega a tu
            cuenta.
          </p>
          <p className="mt-6 text-lg font-semibold">
            Este libro no busca que vivas contando monedas. Busca que entiendas cómo hacer que el
            esfuerzo que ya haces empiece a quedarse contigo.
          </p>
        </div>
        <div className="mt-8 text-center">
          <a href={CHECKOUT} className="btn-cta">
            Quiero dejar de sentir que mi dinero desaparece
          </a>
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
                "Ya apareció esto. ¿Qué hago ahora?"
              </p>
            </div>
            <div className="card-surface p-5">
              <p className="eyebrow">Decidir con más claridad</p>
              <p className="mt-2 text-sm text-muted-foreground">
                "Antes de que aparezca algo nuevo, ya sé qué necesito mirar."
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

      {/* 6. Reframe / nueva creencia */}
      <Section title="No siempre gana más el que termina con más.">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-muted-foreground">
            Muchas veces simplemente entiende mejor qué hacer con cada peso. Hay personas que
            ganan bien y siguen llegando justas. Y hay personas que, ganando menos, construyen
            ahorro, tranquilidad y patrimonio.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center">
          <p className="font-display text-xl font-extrabold uppercase leading-snug sm:text-2xl">
            La diferencia no siempre está en cuánto entra. Está en lo que haces después de que
            entra.
          </p>
        </div>
      </Section>

      {/* 7. El nuevo mecanismo */}
      <Section title="No necesitas hacer todo de golpe. Solo empezar en el orden correcto.">
        <p className="mx-auto -mt-4 mb-8 max-w-2xl text-center text-muted-foreground">
          La mayoría intenta invertir antes de ordenar su dinero. Y por eso se frustra. Aquí vas a
          seguir un camino simple:
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((s) => (
            <article key={s.t} className="card-surface p-6">
              <span className="font-display text-3xl font-black text-accent/40">{s.n}</span>
              <h3 className="mt-2 text-base font-bold uppercase">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
          <p className="font-display text-lg font-extrabold uppercase tracking-wide text-accent">
            El resultado
          </p>
          <p className="mt-1 text-lg font-semibold">
            Menos ansiedad. Más claridad. Mejores decisiones.
          </p>
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

      {/* 9. Cómo se nota la diferencia en 60 días */}
      <Section
        eyebrow="En los próximos 60 días"
        title="Así podrías empezar a notar la diferencia."
      >
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
            Todo lo que necesitas para dejar de improvisar con tu dinero: identificar en qué se
            va, organizarlo sin volverte esclavo de una planilla, construir tu reserva, y dar tus
            primeros pasos para invertir.
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
        eyebrow="Mira cómo se ve por dentro"
        title="No vas a recibir teoría para leer y olvidar."
      >
        <p className="mx-auto -mt-4 mb-8 max-w-xl text-center text-muted-foreground">
          Vas a encontrar explicaciones simples, ejemplos y herramientas para aplicar mientras
          avanzas.
        </p>
        <div className="mx-auto max-w-3xl">
          <ImageSlot label="[INTERIOR DEL LIBRO — SUBIR DESPUÉS]" ratio="16 / 10" />
        </div>
      </Section>

      {/* 13. Bonos */}
      <Section
        eyebrow="Y como leer sin aplicar no cambia nada"
        title="También recibes 7 herramientas para ponerlo en práctica."
      >
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
                  "{b.o}"
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
            No estás recibiendo solamente información. Estás recibiendo herramientas para
            empezar a aplicarla.
          </p>
        </div>
      </Section>

      {/* 14. Testimonios */}
      <Section title="No tienes que creerme. Mira lo que pasó cuando otras personas empezaron a entender su dinero.">
        <div className="card-surface mb-10 grid items-center gap-6 p-6 md:grid-cols-[200px_1fr] md:p-8">
          <div>
            <ImageSlot label="[FOTO DEL TESTIMONIO — SUBIR DESPUÉS]" ratio="1 / 1" />
          </div>
          <div>
            <Stars />
            <p className="mt-3 text-lg font-semibold leading-relaxed">"{FEATURED.q}"</p>
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
                "{g.objection}"
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
      <Section id="cb-precio" title="Todo lo que necesitas para dejar de improvisar con tu dinero.">
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
                Sí, quiero entender mi dinero
              </a>
              <p className="mt-3 text-xs text-muted-foreground">
                Pago único · Acceso inmediato · Sin suscripción
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                El costo de no entender tu dinero puede ser mucho mayor que el precio de aprender
                a manejarlo.
              </p>
              <div className="mx-auto mt-6 max-w-xs">
                <ImageSlot label="[MEDIOS DE PAGO — SUBIR DESPUÉS]" ratio="16 / 4" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 18. Cómo recibes el producto */}
      <Section eyebrow="Simple y rápido" title="Empezar es más simple de lo que parece.">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Haces tu compra.", "Eliges tu medio de pago y completas el proceso de forma segura."],
            ["Recibes el acceso.", "Te llega por correo con el libro y los 7 bonos incluidos."],
            ["Empiezas cuando quieras.", "Abres el material desde tu dispositivo y avanzas a tu ritmo."],
          ].map(([t, d], i) => (
            <article key={t} className="card-surface p-6 text-center">
              <span className="font-display text-4xl font-black text-accent/40">{i + 1}</span>
              <h3 className="mt-2 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-muted-foreground">
          En pocos minutos puedes pasar de "algún día tengo que ordenar mi dinero" a empezar de
          verdad.
        </p>
      </Section>

      {/* 17. Garantía */}
      <Section title="Pruébalo sin sentir que estás apostando tu dinero.">
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
              Tienes 7 días para revisar el material y decidir si es para ti. Si sientes que no
              te aporta valor, puedes solicitar la devolución según las condiciones indicadas.
            </p>
            <p className="mt-4 text-sm font-semibold">
              El riesgo de seguir sin entender qué pasa con tu dinero es tuyo todos los meses. El
              riesgo de probar el libro no tiene por qué serlo.
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
            No necesitas resolver toda tu vida financiera hoy. Solo necesitas dejar de postergar
            el momento de entenderla.
          </p>
          <ul className="mx-auto mt-6 max-w-md space-y-2 text-left text-sm text-muted-foreground">
            {[
              "cobras y no sabes dónde se fue;",
              "llegas justo sin entender por qué;",
              "cualquier imprevisto puede desordenarte;",
              "quieres ahorrar pero nunca terminas de empezar;",
              "te interesa invertir, pero no sabes cuál es el primer paso;",
            ].map((li) => (
              <li key={li} className="flex gap-2">
                <span className="text-accent">·</span>
                {li}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xl font-semibold">
            Entonces probablemente no necesitas seguir acumulando información.
          </p>
          <p className="mt-2 text-xl font-semibold">
            Necesitas empezar a entender qué hacer con la que ya tienes.
          </p>
          <p className="mt-6 text-lg font-extrabold">Entender bien el dinero</p>
          <a href={CHECKOUT} className="btn-cta mt-8">
            Quiero tomar el control de mi dinero
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Empieza por entender qué está pasando hoy. Después, empieza a decidir qué hacer con
            eso.
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
