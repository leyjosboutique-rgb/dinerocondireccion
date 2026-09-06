import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ImageSlot } from "@/components/ImageSlot";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Entender bien el dinero · Organiza tu dinero desde cero" },
      {
        name: "description",
        content:
          "Guía práctica para saber a dónde se va tu dinero, crear una reserva y entender cómo dar tus primeros pasos hacia la inversión, aunque hoy no tengas grandes ingresos.",
      },
      {
        property: "og:title",
        content: "Entender bien el dinero · Organiza tu dinero desde cero",
      },
      {
        property: "og:description",
        content:
          "No necesitas ganar más para tener control. Primero necesitas saber qué hacer con el dinero que ya ganas.",
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
  currency: "ARS",
  price: "$19.999",
  compareAt: "$34.000",
  savings: "$14.001",
  discount: "41% OFF",
  bookValue: "$34.000",
  bonusesValue: "$79.000",
  totalValue: "$113.000",
};
const PRICE_LABEL = `${PRICING.price} ${PRICING.currency}`;

const CHIPS = [
  "💵 Descubre a dónde se va tu dinero",
  "🛡️ Crea una reserva que te proteja",
  "📈 Entiende cómo empezar a invertir",
  "⚡ Acceso inmediato · Pago único",
];

const PAINS = [
  {
    t: "Recibes dinero… y pocos días después ya no sabes dónde está.",
    d: "No sientes que hayas gastado demasiado, pero cuando revisas tu cuenta, el dinero simplemente desapareció.",
  },
  {
    t: "Cada gasto parece pequeño… hasta que llega el final del mes.",
    d: "No es necesariamente una compra grande. Son muchas decisiones pequeñas que nadie te enseñó a detectar.",
  },
  {
    t: "Quieres invertir, pero sientes que primero necesitas tener mucho más dinero.",
    d: "Y mientras esperas ganar más, sigues sin construir el hábito de hacer crecer lo que ya tienes.",
  },
  {
    t: "Sabes que deberías organizar tus finanzas, pero no sabes por dónde comenzar.",
    d: "Hay demasiados consejos, demasiadas opiniones y ninguna ruta clara para alguien que empieza desde cero.",
  },
];

const STEPS = [
  {
    t: "Primero entiendes",
    d: "Descubres exactamente hacia dónde se está yendo tu dinero.",
  },
  {
    t: "Después organizas",
    d: "Creas un sistema para que cada parte de tu dinero tenga una función antes de gastarla.",
  },
  {
    t: "Y entonces comienzas a crecer",
    d: "Construyes una reserva y empiezas a comprender cómo dar tus primeros pasos hacia la inversión de forma consciente.",
  },
];

const OUTCOMES = [
  "Puedes ver con claridad cuánto dinero realmente tienes disponible.",
  "Dejas de llegar al final del mes preguntándote en qué se fue todo.",
  "Comienzas a construir una reserva para que un imprevisto no se convierta automáticamente en una crisis.",
  "Empiezas a tomar decisiones con tu dinero antes de que el impulso las tome por ti.",
  "Tienes una ruta clara para comenzar a aprender sobre inversión sin sentir que necesitas ser experto.",
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
    o: "“No sé cómo organizar mi dinero sin sentir que tengo que controlar cada gasto.”",
    t: "El Sistema de las 3 Cuentas",
    d: "Para ayudarte a entender cómo separar tu dinero según su función y tomar decisiones con más claridad.",
    x: "De “no sé qué hacer con mi dinero” a “entiendo cuál es el siguiente paso para cada parte de mi dinero”.",
    v: "$12.000",
  },
  {
    n: 2,
    short: "La Planilla del Mes",
    o: "“Siempre termino preguntándome a dónde se fue mi dinero.”",
    t: "La Planilla del Mes",
    d: "Para ayudarte a ver con mayor claridad tus ingresos, gastos y decisiones financieras.",
    x: "De “sé que gasto, pero no sé exactamente en qué” a “puedo ver qué está sucediendo con mi dinero”.",
    v: "$10.000",
  },
  {
    n: 3,
    short: "Tu Primer Fondo de Emergencia",
    o: "“No puedo avanzar porque siempre aparece un gasto inesperado.”",
    t: "Tu Primer Fondo de Emergencia",
    d: "Para ayudarte a comenzar a construir una reserva que te permita enfrentar imprevistos con mayor tranquilidad.",
    x: "De vivir apagando incendios a comenzar a construir una red de seguridad.",
    v: "$11.000",
  },
  {
    n: 4,
    short: "Las 12 Preguntas Antes de Comprar Algo Caro",
    o: "“Sé que debería cuidar más mi dinero, pero termino tomando decisiones impulsivas.”",
    t: "Las 12 Preguntas Antes de Comprar Algo Caro",
    d: "Una guía para ayudarte a detenerte, evaluar una decisión importante y pensar antes de comprometer tu dinero.",
    x: "De comprar por impulso a tomar decisiones con mayor intención.",
    v: "$9.000",
  },
  {
    n: 5,
    short: "Tus Primeros US$100",
    o: "“No gano suficiente dinero para comenzar a invertir.”",
    t: "Tus Primeros US$100",
    d: "Para ayudarte a reducir la barrera mental de creer que necesitas tener una gran cantidad de dinero antes de comenzar a aprender.",
    x: "De “invertir es para cuando gane más” a “puedo comenzar a aprender y prepararme desde ahora”.",
    v: "$14.000",
  },
  {
    n: 6,
    short: "Cómo Salir de una Deuda Sin Vender tu Alma",
    o: "“Tengo deudas. Primero debería resolver eso antes de preocuparme por mejorar mis finanzas.”",
    t: "Cómo Salir de una Deuda Sin Vender tu Alma",
    d: "Para ayudarte a abordar tus obligaciones pendientes con mayor claridad y evitar decisiones financieras desesperadas.",
    x: "De sentir que tus deudas controlan todas tus decisiones a recuperar una dirección más clara.",
    v: "$13.000",
  },
  {
    n: 7,
    short: "El Dinero",
    o: "“Sé lo que debería hacer, pero siempre termino repitiendo los mismos errores.”",
    t: "El Dinero",
    d: "Porque mejorar tus finanzas no depende únicamente de conocer números. También depende de reconocer las decisiones y patrones que repites sin darte cuenta.",
    x: "De repetir decisiones en automático a comenzar a reconocer los patrones detrás de ellas.",
    v: "$10.000",
  },
];

/** Testimonios reales, agrupados por la objeción que ayudan a responder. */
const REVIEW_GROUPS = [
  {
    objection: "“Pensaba que necesitaba ganar más para comenzar.”",
    items: [
      {
        q: "Hice la planilla un mes entero por hacerle caso. Descubrí que se me iban casi cien mil pesos en cosas que ni recordaba. No gano un peso más que antes y ahora me queda.",
        n: "Gustavo R.",
        c: "Buenos Aires",
      },
      {
        q: "Se me rompió el termotanque en junio y por primera vez lo pagué sin tarjeta. La reserva ya estaba armada. Eso solo vale lo que salió el libro.",
        n: "Fabián L.",
        c: "La Plata",
      },
    ],
  },
  {
    objection: "“No sabía por dónde comenzar.”",
    items: [
      {
        q: "Lo leí en cuatro noches, quince minutos por vez. No es un libro de motivación: te hace sacar la calculadora.",
        n: "Diego A.",
        c: "Tucumán",
      },
    ],
  },
  {
    objection: "“Sabía que debía organizarme, pero nunca lograba hacerlo.”",
    items: [
      {
        q: "Lo que más me sirvió fue lo de las tres cuentas. Cobro y reparto el mismo día. Es una boludez y me cambió el mes entero.",
        n: "Hernán V.",
        c: "Mendoza",
      },
      {
        q: "Estuve a punto de vender la camioneta con la que trabajo para cubrir un mes malo. Leí el capítulo de deudas y no lo hice. Hoy sigo laburando con ella.",
        n: "Damián S.",
        c: "Córdoba",
      },
    ],
  },
];

const FEATURED = {
  q: "Tengo 61 y nunca había invertido un peso porque pensaba que había que tener capital. Arranqué con lo mínimo que dice el libro. Ya no soy el que mira de afuera.",
  n: "Marcelo P.",
  c: "Rosario",
  before: "Nunca había invertido nada.",
  insight: "Que no hacía falta tener capital para empezar.",
  after: "Comenzó con el monto mínimo que indica el libro.",
};

const MICRO_OBJECTIONS = [
  {
    q: "“No gano lo suficiente todavía.”",
    a: "Precisamente por eso es importante comenzar entendiendo qué hacer con el dinero que ya tienes.",
  },
  {
    q: "“No entiendo nada de inversiones.”",
    a: "No necesitas experiencia previa para comenzar por los conceptos fundamentales.",
  },
  {
    q: "“Tengo miedo de comprar y no usarlo.”",
    a: "El material está diseñado para que puedas avanzar paso a paso y a tu propio ritmo.",
  },
];

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

      {/* HERO */}
      <header className="hero-glow px-5 pb-16 pt-12 sm:pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-3xl font-extrabold leading-[1.1] sm:text-5xl">
            ¿Sientes que trabajas, ganas dinero… y aun así nunca sabes exactamente{" "}
            <span className="text-accent">a dónde se fue</span>?
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg font-semibold sm:text-xl">
            Aprende a organizar tu dinero, dejar de llegar justo a fin de mes, crear una reserva y
            comenzar a entender cómo invertir, incluso si hoy no tienes grandes ingresos.
          </p>

          <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
            No necesitas ganar más para empezar a tener control. Primero necesitas saber qué hacer
            con el dinero que ya ganas.
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
            <p className="mt-4 eyebrow">Guía práctica para organizar tu dinero desde cero</p>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Valoración: <Stars /> 4.9 · 7.480 lectores
          </p>

          <a href={CHECKOUT} className="btn-cta mt-8">
            Quiero tomar el control de mi dinero
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

      {/* 2. Identificación */}
      <Section
        eyebrow="Quizás te suena familiar"
        title="Si alguna de estas situaciones te resulta familiar, no significa que seas malo con el dinero. Simplemente nadie te enseñó a organizarlo."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {PAINS.map((p) => (
            <article key={p.t} className="card-surface p-6">
              <h3 className="text-lg font-bold">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href={CHECKOUT} className="btn-cta">
            Sí, esto me sucede → quiero saber qué hacer
          </a>
        </div>
      </Section>

      {/* 3. Reframe */}
      <Section>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <ImageSlot label="[IMAGEN DE APOYO — SUBIR DESPUÉS]" ratio="4 / 3" />
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              El problema no es solamente cuánto ganas. Es que nadie te enseñó{" "}
              <span className="text-accent">qué hacer con tu dinero cuando llega</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Cuando no existe un sistema, el dinero toma decisiones por ti. Se va primero en lo
              urgente, después en lo cómodo… y al final no queda nada para construir tranquilidad.
            </p>
          </div>
        </div>
      </Section>

      {/* 4. Método */}
      <Section eyebrow="El método" title="Tres pasos, en el orden correcto">
        <div className="grid gap-5 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <article key={s.t} className="card-surface p-6">
              <span className="font-display text-4xl font-black text-accent/40">{i + 1}</span>
              <h3 className="mt-2 text-lg font-bold uppercase">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
          <p className="font-display text-lg font-extrabold uppercase leading-snug sm:text-xl">
            El cambio no comienza cuando ganas más.
            <br />
            Comienza cuando dejas de preguntarte a dónde se fue tu dinero.
          </p>
          <a href={CHECKOUT} className="btn-cta mt-5">
            Quiero aprender el método
          </a>
        </div>
      </Section>

      {/* 5. Resultados */}
      <Section
        eyebrow="La transformación"
        title="Esto es lo que puede cambiar cuando dejas de manejar tu dinero en automático"
      >
        <ul className="space-y-4">
          {OUTCOMES.map((o, i) => (
            <li key={o} className="card-surface flex gap-4 p-5">
              <span className="font-display text-lg font-black text-accent/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">{o}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <a href={CHECKOUT} className="btn-cta">
            Quiero comenzar a organizar mi dinero
          </a>
        </div>
      </Section>

      {/* 6. Producto principal */}
      <Section
        eyebrow="Producto principal"
        title="No vas a recibir teoría para leer y olvidar. Vas a recibir una ruta para comenzar a aplicar."
      >
        <div className="card-surface grid gap-8 p-6 md:grid-cols-2 md:p-8">
          <div>
            <ImageSlot label="[MOCKUP DEL LIBRO — SUBIR DESPUÉS]" ratio="1 / 1" />
            <p className="mt-4 text-center eyebrow">Producto principal</p>
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
      </Section>

      {/* 7. Vista interna */}
      <Section
        eyebrow="Mira cómo es por dentro"
        title="Antes de comprar, mira exactamente lo que vas a recibir."
      >
        <div className="mx-auto max-w-3xl">
          <p className="-mt-4 mb-8 text-center text-muted-foreground">
            Esto no está diseñado para llenarte de teoría. El objetivo es ayudarte a comprender y
            aplicar los conceptos paso a paso.
          </p>
          <ImageSlot label="[INTERIOR DEL LIBRO — SUBIR DESPUÉS]" ratio="16 / 10" />
        </div>
      </Section>

      {/* 8. Bonos por objeción */}
      <Section
        eyebrow="Barreras resueltas"
        title="Quizás quieres tomar el control de tu dinero… pero todavía hay algunas cosas que te están frenando."
      >
        <p className="-mt-6 mb-10 text-center text-muted-foreground">
          Por eso, además del libro principal, recibirás herramientas diseñadas para ayudarte a
          superar los obstáculos más comunes antes de comenzar.
        </p>
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
                  Bono {b.n}: {b.t}
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
            El objetivo no es darte más contenido para consumir. Es ayudarte a eliminar las razones
            que normalmente hacen que las personas nunca comiencen.
          </p>
          <p className="mt-3 font-display text-lg font-extrabold">
            Menos confusión. Más claridad. Un siguiente paso a la vez.
          </p>
          <a href={CHECKOUT} className="btn-cta mt-5">
            Quiero acceder a todo el sistema
          </a>
        </div>
      </Section>

      {/* 9. Prueba social */}
      <Section
        eyebrow="Experiencias reales"
        title="Las mismas dudas que probablemente tienes ahora… también las tuvieron personas que ya comenzaron."
      >
        <p className="-mt-6 mb-10 text-center text-muted-foreground">
          Estas son experiencias reales de personas que decidieron dejar de improvisar con su
          dinero.
        </p>

        <div className="card-surface mb-10 grid items-center gap-6 p-6 md:grid-cols-[200px_1fr] md:p-8">
          <div>
            <ImageSlot label="[FOTO DEL TESTIMONIO — SUBIR DESPUÉS]" ratio="1 / 1" />
          </div>
          <div>
            <Stars />
            <p className="mt-3 text-lg font-semibold leading-relaxed">“{FEATURED.q}”</p>
            <p className="mt-3 text-sm font-bold">
              {FEATURED.n} <span className="font-normal text-muted-foreground">· {FEATURED.c}</span>
            </p>
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
                        <p className="text-xs text-muted-foreground">
                          {r.c} · Compra verificada
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-muted-foreground">
            No necesitas tener todo resuelto antes de comenzar. La mayoría de las personas comienza
            con dudas, información incompleta y sin saber cuál debería ser el primer paso. La
            diferencia está en comenzar a construir claridad antes de que otro mes vuelva a pasar en
            automático.
          </p>
          <a href={CHECKOUT} className="btn-cta mt-6">
            Quiero comenzar ahora
          </a>
        </div>
      </Section>

      {/* 10. Oferta */}
      <Section id="cb-precio" title="Todo lo que necesitas para comenzar a tomar el control de tu dinero.">
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
                    La ruta completa para organizar tu dinero desde cero.
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

      {/* 11. Microsección de objeciones */}
      <Section title="Quizás todavía estás pensando…">
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-3">
          {MICRO_OBJECTIONS.map((o) => (
            <article key={o.q} className="card-surface p-6">
              <h3 className="text-base font-bold">{o.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.a}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* 12. Cómo se recibe */}
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

      {/* 13. Garantía */}
      <Section title="Pruébalo sin sentir que estás asumiendo todo el riesgo.">
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

      {/* 14. FAQ */}
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

      {/* 15. CTA final */}
      <Section title="Dentro de unos meses seguirás tomando decisiones con tu dinero.">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mt-4 text-xl font-semibold">
            La pregunta es si seguirás tomándolas desde la improvisación… o desde la claridad.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            No necesitas resolver toda tu vida financiera hoy. Solo necesitas dejar de postergar el
            primer paso.
          </p>
          <a href={CHECKOUT} className="btn-cta mt-8">
            Quiero tomar el control de mi dinero
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
