import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ImageSlot } from "@/components/ImageSlot";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Entender bien el dinero · Deja de improvisar con tu dinero" },
      {
        name: "description",
        content:
          "El problema no es solo que tu dinero desaparezca. Es que decides qué hacer con él demasiado tarde. Una guía para dejar de improvisar y entender qué hacer primero.",
      },
      {
        property: "og:title",
        content: "Entender bien el dinero · Deja de improvisar con tu dinero",
      },
      {
        property: "og:description",
        content:
          "¿Tu dinero desaparece antes de que tengas tiempo de decidir qué hacer con él? Descubre por qué y qué hacer primero.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const CHECKOUT = "#cb-precio";

/** Precio editable: cambia moneda, monto y formato desde aquí. */
const PRICING = {
  currency: "USD",
  price: "$13",
  compareAt: "$22",
  savings: "$9",
  discount: "41% OFF",
  bookValue: "$22",
  bonusesValue: "$50",
  totalValue: "$72",
};
const PRICE_LABEL = `${PRICING.price} ${PRICING.currency}`;

const CHIPS = [
  "💵 Descubre a dónde se va tu dinero",
  "🛡️ Crea una reserva que te proteja",
  "📈 Entiende cómo empezar a invertir",
  "⚡ Acceso inmediato · Pago único",
];

/** Sección 2 — El espejo: línea de tiempo del mes típico. */
const MIRROR = [
  {
    n: "1",
    t: "Llega el dinero",
    d: "Por unos días sientes tranquilidad. Piensas: “Este mes sí voy a organizarme.”",
  },
  {
    n: "2",
    t: "Empiezan los gastos normales",
    d: "Comida. Transporte. Pagos. Suscripciones. Compras pequeñas. Nada parece demasiado importante por separado.",
  },
  {
    n: "3",
    t: "Aparece algo inesperado",
    d: "Y el dinero que pensabas guardar termina teniendo otro destino.",
  },
  {
    n: "4",
    t: "Llega el final del mes",
    d: "Y vuelve la misma pregunta: “¿En qué se fue todo?”",
  },
];

/** Sección 5 — El nuevo mecanismo. */
const MECHANISM = [
  {
    n: "01",
    t: "Claridad",
    d: "Entender qué está ocurriendo realmente con tu dinero.",
  },
  {
    n: "02",
    t: "Control",
    d: "Decidir qué función tendrá antes de que desaparezca en gastos automáticos.",
  },
  {
    n: "03",
    t: "Protección",
    d: "Comenzar a construir una base para que un imprevisto no te obligue a empezar desde cero.",
  },
  {
    n: "04",
    t: "Crecimiento",
    d: "Comprender cómo dar los siguientes pasos cuando ya tienes una base más clara.",
  },
];

/** Sección 6 — Crear deseo. */
const DESIRE_LIST = [
  "No preguntarte constantemente: “¿Cuánto puedo gastar?”",
  "No sentir culpa después de cada compra.",
  "No depender de recordar mentalmente todos tus gastos.",
  "No sentir que un imprevisto puede desordenar todo.",
];

/** Sección 7 — Por qué los consejos anteriores no fueron suficientes. */
const PREVIOUS_ADVICE = [
  "Ahorrar",
  "Invertir",
  "Eliminar gastos",
  "Crear presupuestos",
  "Generar más ingresos",
  "Crear fondos de emergencia",
];

const INCLUDES = [
  "Entender por qué tu dinero desaparece sin darte cuenta.",
  "Detectar los gastos que realmente afectan tu capacidad de ahorrar.",
  "Crear una reserva para dejar de sentir que cualquier imprevisto puede desordenarte.",
  "Entender cuándo tiene sentido comenzar a aprender sobre inversión.",
  "Comprender los primeros conceptos sin lenguaje innecesariamente complicado.",
  "Crear un sistema que puedas mantener incluso si hoy estás comenzando desde cero.",
];

const BONUSES = [
  {
    n: 1,
    short: "El Sistema de las 3 Cuentas",
    o: "“No sé cómo organizar mi dinero.”",
    t: "El Sistema de las 3 Cuentas",
    d: "Para ayudarte a entender cómo separar tu dinero según su función y tomar decisiones con más claridad.",
    x: "De “no sé qué hacer con mi dinero” a “entiendo cuál es el siguiente paso para cada parte de mi dinero”.",
    v: "$8",
  },
  {
    n: 2,
    short: "La Planilla del Mes",
    o: "“No sé exactamente a dónde se va mi dinero.”",
    t: "La Planilla del Mes",
    d: "Para ayudarte a ver con mayor claridad tus ingresos, gastos y decisiones financieras.",
    x: "De “sé que gasto, pero no sé exactamente en qué” a “puedo ver qué está sucediendo con mi dinero”.",
    v: "$6",
  },
  {
    n: 3,
    short: "Tu Primer Fondo de Emergencia",
    o: "“Siempre aparece algo inesperado.”",
    t: "Tu Primer Fondo de Emergencia",
    d: "Para ayudarte a comenzar a construir una reserva que te permita enfrentar imprevistos con mayor tranquilidad.",
    x: "De vivir apagando incendios a comenzar a construir una red de seguridad.",
    v: "$7",
  },
  {
    n: 4,
    short: "Las 12 Preguntas Antes de Comprar Algo Caro",
    o: "“Termino tomando malas decisiones cuando voy a gastar.”",
    t: "Las 12 Preguntas Antes de Comprar Algo Caro",
    d: "Una guía para ayudarte a detenerte, evaluar una decisión importante y pensar antes de comprometer tu dinero.",
    x: "De comprar por impulso a tomar decisiones con mayor intención.",
    v: "$6",
  },
  {
    n: 5,
    short: "Tus Primeros US$100",
    o: "“No tengo suficiente dinero para comenzar.”",
    t: "Tus Primeros US$100",
    d: "Para ayudarte a reducir la barrera mental de creer que necesitas tener una gran cantidad de dinero antes de comenzar a aprender.",
    x: "De “invertir es para cuando gane más” a “puedo comenzar a aprender y prepararme desde ahora”.",
    v: "$9",
  },
  {
    n: 6,
    short: "Cómo Salir de una Deuda Sin Vender tu Alma",
    o: "“Tengo deudas.”",
    t: "Cómo Salir de una Deuda Sin Vender tu Alma",
    d: "Para ayudarte a abordar tus obligaciones pendientes con mayor claridad y evitar decisiones financieras desesperadas.",
    x: "De sentir que tus deudas controlan todas tus decisiones a recuperar una dirección más clara.",
    v: "$8",
  },
  {
    n: 7,
    short: "El Dinero",
    o: "“Sé lo que debería hacer, pero termino repitiendo los mismos patrones.”",
    t: "El Dinero",
    d: "Porque mejorar tus finanzas no depende únicamente de conocer números. También depende de reconocer las decisiones y patrones que repites sin darte cuenta.",
    x: "De repetir decisiones en automático a comenzar a reconocer los patrones detrás de ellas.",
    v: "$6",
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
 * Por pedido de Lele, no se muestra la ciudad de los compradores (para no
 * señalar un solo país), aunque los testimonios siguen siendo reales.
 * La 4ª categoría del brief ("no sabía nada de finanzas o inversiones")
 * queda como espacio reservado: NO se inventó ningún testimonio para
 * completarla — se agrega apenas Lele comparta uno real.
 */
const REVIEW_GROUPS = [
  {
    objection: "“Pensaba que mi problema era únicamente ganar poco.”",
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
    objection: "“Yo tampoco sabía por dónde comenzar.”",
    items: [
      {
        q: "Lo leí en cuatro noches, quince minutos por vez. No es un libro de motivación: te hace sacar la calculadora.",
        n: "Diego A.",
      },
    ],
  },
  {
    objection: "“Siempre intentaba organizarme y terminaba abandonando.”",
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
    objection: "“Pensaba que necesitaba saber más antes de empezar.”",
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
    q: "¿Qué incluye exactamente?",
    a: "El libro completo Entender bien el dinero en PDF, más los 7 bonos. Listo para leer en el celular, la computadora o la tablet, y también para imprimir.",
  },
  {
    q: "¿El material es digital o físico?",
    a: "Es 100% digital. No pagas envío ni esperas días. Si prefieres el papel, puedes imprimirlo.",
  },
  {
    q: "¿Cómo recibo el acceso?",
    a: "Apenas se confirma el pago, recibes todo el material en tu correo. Suele tardar menos de 5 minutos.",
  },
  {
    q: "¿Necesito conocimientos previos?",
    a: "No. El material está pensado para personas que quieren entender desde la base, sin asumir conocimientos previos.",
  },
  {
    q: "¿Sirve si actualmente gano poco?",
    a: "El objetivo no es que comiences con grandes cantidades, sino que entiendas qué puedes hacer con lo que ya tienes y cómo construir una estructura desde ahí.",
  },
  {
    q: "¿Cuánto tiempo necesito para revisar el contenido?",
    a: "Los capítulos son cortos y cada uno cierra con algo concreto para aplicar. Puedes avanzar a tu propio ritmo.",
  },
  {
    q: "¿Qué métodos de pago aceptan?",
    a: "Puedes pagar con los medios disponibles en la pasarela de pago al momento de la compra.",
  },
  {
    q: "¿El precio es único o es una suscripción?",
    a: "Es un pago único. No hay suscripción ni cobros recurrentes.",
  },
  {
    q: "¿Cómo funciona la garantía?",
    a: "Tienes 7 días para revisar el material y decidir si es para ti, de acuerdo con las condiciones reales de la garantía.",
  },
];

const EXTRA_FAQS = [
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
          <h1 className="text-balance text-3xl font-extrabold leading-[1.15] sm:text-5xl">
            El problema no es que tu dinero desaparezca.
            <br />
            El problema es que decides qué hacer con él{" "}
            <span className="text-accent">demasiado tarde</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg font-semibold sm:text-xl">
            Trabajas. Recibes dinero. Pagas algunas cosas. Y cuando finalmente piensas en ahorrar,
            invertir o avanzar… queda mucho menos de lo que esperabas.
          </p>
          <div className="mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
            <div className="marquee-track gap-3">
              {[...CHIPS, ...CHIPS].map((c, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-md">
            <ImageSlot
              label="[VIDEO O IMAGEN PRINCIPAL DEL PRODUCTO — SUBIR DESPUÉS]"
              ratio="1 / 1"
            />
            <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
              No siempre se trata de cuánto ganas. Muchas veces se trata de decidir qué hacer con
              tu dinero antes de que el mes lo decida por ti.
            </p>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            4.9 <Stars /> + 8.432 lectores
          </p>
          <a href={CHECKOUT} className="btn-cta mt-8">
            Quiero entender qué está pasando con mi dinero
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Acceso inmediato · Pago único · Material digital
          </p>
        </div>
        {/* Prensa */}
        <div className="mx-auto mt-14 max-w-4xl border-t border-border/60 pt-8 text-center">
          <p className="eyebrow">Este libro fue visto en</p>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[1, 2, 3, 4].map((l) => (
              <ImageSlot key={l} label={`[LOGO MEDIO ${l} — SUBIR DESPUÉS]`} ratio="16 / 6" />
            ))}
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="bg-surface-strong/70 px-5 py-8">
        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-4 text-center">
          {[
            ["Desde cero", "Sin conocimientos previos"],
            ["15 min", "Por día"],
            ["Pago único", "Sin suscripción"],
          ].map(([a, b]) => (
            <div key={a}>
              <p className="font-display text-lg font-extrabold text-accent sm:text-xl">{a}</p>
              <p className="text-xs text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. El espejo */}
      <Section
        eyebrow="¿Te suena familiar?"
        title="Quizás esto es lo que ocurre cada mes sin que te des cuenta…"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MIRROR.map((m) => (
            <article key={m.t} className="card-surface p-6">
              <span className="font-display text-4xl font-black text-accent/40">{m.n}</span>
              <h3 className="mt-2 text-base font-bold uppercase leading-snug">{m.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.d}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
          <p className="text-muted-foreground">
            El problema no es que no quieras mejorar.
          </p>
          <p className="mt-1 font-display text-lg font-extrabold">
            Es que estás intentando tomar decisiones demasiado tarde.
          </p>
          <a href={CHECKOUT} className="btn-cta mt-5">
            Sí, esto me pasa → quiero cambiarlo
          </a>
        </div>
      </Section>

      {/* 3. El costo de seguir improvisando */}
      <Section title="El problema no es solo perder dinero. Es seguir perdiendo meses.">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-muted-foreground">
            Porque cada mes que pasa sin un sistema claro puede sentirse igual. Te prometes que vas
            a ahorrar. Piensas que cuando ganes un poco más será diferente. Guardas consejos sobre
            dinero que después nunca aplicas. Y cuando llega el siguiente mes, vuelves a empezar
            desde el mismo lugar.
          </p>
          <p className="mt-6 text-lg font-semibold">
            No porque no seas capaz. Sino porque estás intentando avanzar sin un orden claro.
          </p>
        </div>
      </Section>

      {/* 4. El gran reframe */}
      <Section title="Quizás no necesitas ganar más dinero primero. Quizás necesitas decidir antes.">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-muted-foreground">
            Cuando tu dinero llega sin una función clara, otras cosas terminan decidiendo por él:
            tus gastos, tus urgencias, tus impulsos, tus imprevistos, las decisiones que tomas en
            automático.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center">
          <p className="font-display text-xl font-extrabold uppercase leading-snug sm:text-2xl">
            El dinero sin dirección siempre encuentra una dirección.
          </p>
        </div>
      </Section>

      {/* 5. El nuevo mecanismo */}
      <Section
        eyebrow="El nuevo mecanismo"
        title="No necesitas hacerlo todo de una vez. Necesitas saber qué va primero."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MECHANISM.map((s) => (
            <article key={s.t} className="card-surface p-6">
              <span className="font-display text-3xl font-black text-accent/40">{s.n}</span>
              <h3 className="mt-2 text-base font-bold uppercase">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
          <p className="font-display text-lg font-extrabold uppercase leading-snug sm:text-xl">
            Primero entiendes. Después decides. Luego construyes.
          </p>
          <a href={CHECKOUT} className="btn-cta mt-5">
            Quiero seguir este orden
          </a>
        </div>
      </Section>

      {/* 6. Crear deseo */}
      <Section title="Imagina recibir tu dinero y ya saber qué hacer con él.">
        <div className="mx-auto max-w-2xl">
          <ul className="space-y-4">
            {DESIRE_LIST.map((d) => (
              <li key={d} className="card-surface flex gap-3 p-5">
                <span className="text-accent">✓</span>
                <p className="text-sm leading-relaxed text-muted-foreground">{d}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold">
              No se trata de controlar cada centavo de tu vida.
            </p>
            <p className="mt-1 font-display text-xl font-extrabold text-accent">
              Se trata de que tu dinero deje de controlarte a ti.
            </p>
            <a href={CHECKOUT} className="btn-cta mt-6">
              Quiero que mi dinero deje de controlarme
            </a>
          </div>
        </div>
      </Section>

      {/* 7. Por qué los consejos anteriores no fueron suficientes */}
      <Section title="El problema probablemente no es que te falte información. Probablemente ya tienes demasiada.">
        <div className="mx-auto max-w-2xl">
          <p className="text-center text-muted-foreground">Ya has visto consejos sobre:</p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {PREVIOUS_ADVICE.map((a) => (
              <span
                key={a}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground"
              >
                {a}
              </span>
            ))}
          </div>
          <p className="mt-6 text-center text-muted-foreground">
            Todo parece importante. Todo parece urgente. Y cuando todo parece importante, no sabes
            qué hacer primero.
          </p>
          <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
            <p className="text-muted-foreground">
              Entender bien el dinero no fue creado para darte más consejos aislados.
            </p>
            <p className="mt-1 font-display text-lg font-extrabold text-accent">
              Fue creado para ayudarte a entender el orden.
            </p>
          </div>
        </div>
      </Section>

      {/* 8. Presentación del libro */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xl font-semibold">Por eso existe ENTENDER BIEN EL DINERO.</p>
          <p className="mt-4 text-muted-foreground">
            Una guía diseñada para ayudarte a comprender mejor qué está ocurriendo con tu dinero y
            construir una base más clara para tomar mejores decisiones.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            No es otro curso de finanzas. No es una colección interminable de consejos. Es una guía
            para dejar de improvisar y comenzar a entender qué hacer primero.
          </p>
        </div>
      </Section>

      {/* 9. Qué recibirás */}
      <Section
        eyebrow="Qué recibirás"
        title="No se trata de leer más sobre dinero. Se trata de comenzar a entenderlo de una manera que puedas aplicar."
      >
        <div className="card-surface grid gap-8 p-6 md:grid-cols-2 md:p-8">
          <div>
            <ImageSlot label="[MOCKUP DEL LIBRO — SUBIR DESPUÉS]" ratio="1 / 1" />
            <p className="mt-4 text-center eyebrow">Entender bien el dinero</p>
          </div>
          <div>
            <h3 className="text-xl font-extrabold">Entender bien el dinero</h3>
            <p className="mt-2 text-sm text-muted-foreground">Vas a aprender a:</p>
            <ul className="mt-5 space-y-3">
              {INCLUDES.map((it) => (
                <li key={it} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="text-accent">✓</span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-3xl">
          <p className="-mb-2 mt-2 text-center text-sm text-muted-foreground">
            Antes de comprar, mira exactamente lo que vas a recibir.
          </p>
          <div className="mt-6">
            <ImageSlot label="[INTERIOR DEL LIBRO — SUBIR DESPUÉS]" ratio="16 / 10" />
          </div>
        </div>
      </Section>

      {/* 10. Bonos como conversación con las objeciones */}
      <Section title="Y probablemente mientras lees esto estás pensando algunas cosas…">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BONUSES.map((b) => (
            <article key={b.n} className="card-surface flex flex-col overflow-hidden">
              <ImageSlot
                label="[PORTADA DEL BONO — SUBIR DESPUÉS]"
                ratio="16 / 10"
                className="rounded-none border-0 border-b-2"
              />
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm font-semibold leading-snug text-muted-foreground">{b.o}</p>
                <h3 className="mt-3 text-base font-bold leading-snug">
                  {b.t}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
                <p className="mt-4 border-t border-border pt-3 text-xs leading-relaxed text-muted-foreground">
                  <span className="eyebrow block">Transformación</span>
                  {b.x}
                </p>
                <p className="mt-3 text-xs font-semibold text-accent">
                  Valor <s className="text-muted-foreground">{b.v}</s> — INCLUIDO HOY
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
          <p className="text-muted-foreground">
            No agregamos estos materiales para darte más cosas que consumir. Los agregamos para
            ayudarte a resolver las razones que normalmente hacen que las personas nunca comiencen.
          </p>
          <a href={CHECKOUT} className="btn-cta mt-5">
            Quiero acceder a todo el sistema
          </a>
        </div>
      </Section>

      {/* 11. Testimonios como respuesta a objeciones */}
      <Section
        eyebrow="Dudas parecidas a las tuyas"
        title="Las dudas que probablemente tienes ahora también las tuvieron otras personas antes de comenzar."
      >
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
                {g.objection}
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
        <div className="mx-auto mt-10 max-w-2xl text-center">
          <a href={CHECKOUT} className="btn-cta">
            Quiero comenzar ahora
          </a>
        </div>
      </Section>

      {/* 12. Oferta */}
      <Section id="cb-precio" title="Todo lo que necesitas para comenzar a entender mejor tu dinero.">
        <div className="mx-auto mb-8 max-w-xl text-center">
          <p className="text-muted-foreground">
            La pregunta no es cuánto cuesta seguir sin saber qué hacer con tu dinero.
          </p>
          <p className="mt-1 text-lg font-semibold">
            La pregunta es cuánto tiempo más quieres seguir improvisando.
          </p>
        </div>
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
                    La ruta completa para dejar de improvisar con tu dinero.
                  </span>
                </span>
                <span className="shrink-0 font-semibold">{PRICING.bookValue}</span>
              </li>
              {BONUSES.map((b) => (
                <li key={b.n} className="flex items-start justify-between gap-4 py-3">
                  <span>
                    <strong className="font-semibold">
                      Bono {b.n} · {b.short}
                    </strong>
                    <span className="block text-xs text-muted-foreground">{b.d}</span>
                  </span>
                  <span className="shrink-0 text-right">
                    <s className="block text-xs text-muted-foreground">{b.v}</s>
                    <span className="text-xs font-semibold text-accent">INCLUIDO</span>
                  </span>
                </li>
              ))}
              <li className="flex justify-between py-3 text-muted-foreground">
                <span>Garantía de 7 días</span>
                <span className="font-semibold text-accent">INCLUIDA</span>
              </li>
            </ul>
            <div className="mt-7 text-center">
              <p className="text-sm text-muted-foreground">
                Valor total <s>{PRICING.totalValue}</s>
              </p>
              <p className="mt-2 text-sm font-semibold">Hoy accedes a todo por</p>
              <p className="font-display text-5xl font-black text-accent">{PRICE_LABEL}</p>
              <p className="mt-2 text-sm font-semibold">
                Ahorras {PRICING.savings} · {PRICING.discount}
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                Este precio se mantiene por{" "}
                <span className="font-bold tabular-nums text-foreground">{timer}</span>
              </p>
              <a href="#cb-precio" className="btn-cta mt-6 w-full">
                Quiero acceder ahora
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

      {/* Cómo se recibe */}
      <Section eyebrow="Simple y rápido" title="Comenzar te lleva menos tiempo del que imaginas.">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Compras de forma segura.", "Eliges tu medio de pago y confirmas la compra."],
            [
              "Recibes acceso al material.",
              "Te llega por correo con el libro y los 7 bonos incluidos.",
            ],
            [
              "Comienzas por el primer paso.",
              "Avanzas a tu propio ritmo, capítulo por capítulo.",
            ],
          ].map(([t, d], i) => (
            <article key={t} className="card-surface p-6 text-center">
              <span className="font-display text-4xl font-black text-accent/40">{i + 1}</span>
              <h3 className="mt-2 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* 13. Reducción de riesgo */}
      <Section title="No tienes que decidirlo todo sin ver primero el material.">
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

      {/* FAQ */}
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

      {/* 14. Future pacing */}
      <Section title="Dentro de unos meses seguirás tomando decisiones con tu dinero.">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mt-4 text-xl font-semibold">
            La única pregunta es si seguirás improvisándolas.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Puedes seguir esperando a ganar más. Puedes seguir guardando consejos que algún día
            aplicarás. Puedes seguir prometiéndote que el próximo mes será diferente.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold">
            O puedes comenzar a entender qué está pasando ahora.
          </p>
        </div>
      </Section>

      {/* 15. CTA final */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <a href={CHECKOUT} className="btn-cta">
            Quiero empezar a entender bien mi dinero
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Acceso inmediato · Pago único · Material digital · 7 días de garantía
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
          <div>
            <p className="text-[11px] text-muted-foreground line-through">
              Antes {PRICING.compareAt}
            </p>
            <p className="font-display text-lg font-extrabold text-accent">{PRICE_LABEL}</p>
          </div>
          <a href={CHECKOUT} className="btn-cta !px-6 !py-3 text-sm">
            Quiero empezar
          </a>
        </div>
      </div>
    </main>
  );
}
