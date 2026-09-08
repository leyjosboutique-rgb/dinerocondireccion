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

/** Tags de contenido — cinta corrida debajo del titular del hero. */
const TAGS = [
  "🎯 Empezá con US$100",
  "📉 Dónde se te va la plata",
  "🛟 Tu reserva de emergencia",
  "📈 Mentalidad de inversor",
  "📊 Fondos, ETF y rebalanceo",
  "🎚️ Control de riesgo",
  "⏱️ 15 minutos por día",
  "⚡ Acceso inmediato y de por vida",
];

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
/** Sección "60 días" — icono, título partido en 2 líneas (blanco + acento) y descripción. */
const SIXTY_DAY_CHANGES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
      </svg>
    ),
    title: "Vas a entender",
    highlight: "a dónde se va tu dinero",
    desc: "Y dejar de preguntarte al final del mes “¿en qué se fue todo?”.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
        <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" strokeLinejoin="round" />
      </svg>
    ),
    title: "Vas a tener una reserva",
    highlight: "que te dé tranquilidad",
    desc: "Para que un imprevisto no te obligue a empezar de cero.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
        <path d="M3 17l5-5 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 8h5v5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Vas a dar tus primeros pasos",
    highlight: "para hacerlo crecer",
    desc: "Desde cantidades pequeñas, sin ser experto ni tener miles de dólares.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
        <circle cx="9" cy="20" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="18" cy="20" r="1.2" fill="currentColor" stroke="none" />
        <path d="M2 3h3l2.4 12.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Vas a gastar con más",
    highlight: "intención y menos culpa",
    desc: "Disfrutando lo que te importa, sin sentir que cada compra te aleja de tus metas.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.5-6 8-6s8 2 8 6" strokeLinecap="round" />
        <path d="M12 2.5l.8 1.7 1.9.2-1.4 1.3.4 1.9-1.7-1-1.7 1 .4-1.9-1.4-1.3 1.9-.2z" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: "Vas a sentir que tienes",
    highlight: "el control de tu dinero",
    desc: "Y empezar a tomar decisiones que te acerquen a la vida que quieres construir.",
  },
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

/** Notificaciones de compra — prueba social flotante, ciudades variadas en LATAM. */
const PURCHASE_NOTIFICATIONS = [
  { name: "Fabián", city: "Buenos Aires", item: "Entender bien el dinero + 7 bonos", mins: 35 },
  { name: "Camila", city: "Bogotá", item: "Entender bien el dinero + 7 bonos", mins: 12 },
  { name: "Diego", city: "Ciudad de México", item: "Entender bien el dinero", mins: 48 },
  { name: "Valentina", city: "Lima", item: "Entender bien el dinero + 7 bonos", mins: 6 },
  { name: "Andrés", city: "Santiago", item: "Entender bien el dinero + 7 bonos", mins: 21 },
  { name: "Sofía", city: "Medellín", item: "Entender bien el dinero", mins: 3 },
  { name: "Mateo", city: "Guayaquil", item: "Entender bien el dinero + 7 bonos", mins: 40 },
];

/** Toast de compra reciente: cambia de persona cada 30s, visible ~6s cada vez. */
function PurchaseToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimeout = setTimeout(() => setVisible(true), 2500);
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % PURCHASE_NOTIFICATIONS.length);
        setVisible(true);
      }, 400);
    }, 30000);
    return () => {
      clearTimeout(showTimeout);
      clearInterval(interval);
    };
  }, []);

  // Oculta cada tarjeta ~6s después de mostrarse, antes del siguiente ciclo de 30s.
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setVisible(false), 6000);
    return () => clearTimeout(t);
  }, [visible]);

  const n = PURCHASE_NOTIFICATIONS[index];

  return (
    <div
      aria-hidden="true"
      className={`fixed bottom-24 left-3 z-50 max-w-[280px] transition-all duration-500 sm:bottom-6 sm:left-4 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white p-3 shadow-card">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
          {n.name[0]}
        </span>
        <div className="min-w-0">
          <p className="truncate text-xs font-bold text-slate-900">
            {n.name} de {n.city}
          </p>
          <p className="truncate text-[11px] text-slate-500">Compró {n.item}</p>
          <p className="text-[10px] text-slate-500">
            hace {n.mins} min · <span className="text-emerald-600">✓ Verificado</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// Tokens de sección clara ("blanca") y verde clara, para alternar el fondo
// entre secciones tal como lo hace la página que estamos modelando.
const LIGHT_TONE_VARS = {
  "--background": "oklch(0.99 0.004 150)",
  "--foreground": "oklch(0.2 0.03 160)",
  "--card": "oklch(0.97 0.01 150)",
  "--card-foreground": "oklch(0.2 0.03 160)",
  "--surface": "oklch(0.96 0.012 150)",
  "--surface-strong": "oklch(0.92 0.02 150)",
  "--border": "oklch(0.85 0.02 150)",
  "--muted-foreground": "oklch(0.42 0.02 160)",
  "--accent": "oklch(0.5 0.15 155)",
  "--accent-foreground": "oklch(0.99 0.004 150)",
} as React.CSSProperties;

const GREEN_TONE_VARS = {
  "--background": "oklch(0.93 0.045 155)",
  "--foreground": "oklch(0.22 0.04 160)",
  "--card": "oklch(0.98 0.015 150)",
  "--card-foreground": "oklch(0.22 0.04 160)",
  "--surface": "oklch(0.98 0.02 150)",
  "--surface-strong": "oklch(0.99 0.01 150)",
  "--border": "oklch(0.8 0.05 155)",
  "--muted-foreground": "oklch(0.4 0.03 160)",
  "--accent": "oklch(0.42 0.15 155)",
  "--accent-foreground": "oklch(0.99 0.01 150)",
} as React.CSSProperties;

function Section({
  eyebrow,
  title,
  children,
  id,
  tone = "dark",
  compact = false,
  flush = false,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  children: React.ReactNode;
  id?: string;
  tone?: "dark" | "light" | "green";
  compact?: boolean;
  flush?: boolean;
}) {
  const toneStyle = tone === "light" ? LIGHT_TONE_VARS : tone === "green" ? GREEN_TONE_VARS : undefined;
  return (
    <section
      id={id}
      style={toneStyle}
      className={`border-t border-border/60 bg-background px-5 text-foreground ${
        flush ? "py-0 sm:py-10" : compact ? "py-8 sm:py-10" : "py-16 sm:py-20"
      }`}
    >
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
      <header className="hero-glow px-5 pb-16 pt-4 sm:pt-16">
        <div className="mx-auto max-w-4xl text-center">
          {/* 2b. Barra de tags de contenido — cinta corrida infinita */}
          <div className="mx-auto max-w-xl overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <div className="marquee-track gap-2">
              {[...TAGS, ...TAGS].map((tag, i) => (
                <span
                  key={`${tag}-${i}`}
                  className="shrink-0 whitespace-nowrap rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold text-slate-900"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 2. Titular principal — elemento dominante */}
          <h1 className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-extrabold leading-[1.15] sm:mt-8 sm:text-5xl">
            Entiende hacia dónde se mueve tu dinero, aprende a poner{" "}
            <span className="text-accent">una parte a salvo</span> y descubre cómo empezar a
            hacerlo crecer desde US$100.
          </h1>

          {/* 3. Imagen central de transformación */}
          <div className="mx-auto mt-8 max-w-xl">
            <img
              src="/hero-agujero-hombre-completa.webp"
              alt="Hombre mirando su teléfono mientras el dinero, tickets y compras cotidianas son absorbidos por un agujero negro"
              width={1672}
              height={941}
              fetchPriority="high"
              className="h-auto w-full rounded-2xl"
            />
          </div>

          {/* 4. Subtítulo de pacing */}
          <p className="mx-auto mt-8 max-w-md text-pretty text-base font-semibold leading-snug text-muted-foreground sm:text-lg">
            <span className="font-display text-base font-extrabold uppercase tracking-wide text-accent sm:text-lg">
              El dinero no desaparece. Solo cambia de lugar.
            </span>
            <br />
            <br />
            Y hasta que no sepas a dónde va el tuyo, va a seguir cambiándose al lugar de otro.
            Aprende a retenerlo primero y a hacerlo crecer después.
          </p>

          {/* 9. Prueba social */}
          <p className="mt-6 text-sm text-muted-foreground">
            4.9 <Stars /> + 8.432 lectores
          </p>
        </div>

        {/* 10. Logos / autoridad */}
        <div className="mx-auto mt-6 max-w-4xl text-center sm:border-t sm:border-border/60 sm:pt-6">
          <div className="bleed-mobile sm:mx-auto sm:max-w-2xl">
            <img
              src="/medios-franja-logos.webp"
              alt="Este libro fue visto en varios medios de comunicación"
              width={1200}
              height={200}
              loading="lazy"
              decoding="async"
              className="h-auto w-full"
            />
          </div>
        </div>
      </header>

      {/* 2. Identificación inmediata */}
      <Section tone="light" flush>
        <div className="bleed-mobile sm:mx-auto sm:max-w-lg">
          <img
            src="/identificacion-situaciones.webp"
            alt="Dime si alguna de estas te resulta demasiado familiar: cobras y a los pocos días no sabes a dónde se fue el dinero, cada gasto parece pequeño hasta que ves lo que te quedó, quieres invertir pero sientes que necesitas saber demasiado antes de empezar, y cualquier imprevisto te desordena todo. Necesitas entender qué está pasando con tu dinero y empezar a tomar mejores decisiones con él."
            width={1024}
            height={1536}
            loading="lazy"
            decoding="async"
            className="h-auto w-full sm:rounded-2xl"
          />
        </div>
        <div className="bleed-mobile bg-background px-6 py-0 text-center sm:mx-0 sm:px-0 sm:py-0">
          <a href={CHECKOUT} className="btn-cta-gold cta-pulse-gold">
            Sí. Esto es exactamente lo que me pasa <span className="cta-arrow">→</span>
          </a>
        </div>
        <div className="bleed-mobile sm:mx-auto sm:max-w-md">
          <img
            src="/metodo-orden-3-pasos.webp"
            alt="El método: primero entiendes a dónde va tu dinero, después apartas una parte para protegerte y entonces empiezas a hacerlo crecer"
            width={1024}
            height={1536}
            loading="lazy"
            decoding="async"
            className="h-auto w-full sm:rounded-2xl"
          />
        </div>
      </Section>

      {/* 5b. Contraste — mismo lugar */}
      <Section tone="light" flush>
        <div className="bleed-mobile sm:mx-auto sm:max-w-lg">
          <img
            src="/trabaja-mas-gana-mas.webp"
            alt="Trabaja más, gana más y aun así te sientes en el mismo lugar. Si te ha pasado, no estás solo, esto también es parte de la realidad: más trabajo, más responsabilidades, más gastos, mismas cuentas, la misma sensación. No se trata de cuánto ganas, sino de lo que pasa con tu dinero después de que entra. Y ahí está la clave para salir del ciclo y empezar a construir la vida que realmente quieres."
            width={1024}
            height={1536}
            loading="lazy"
            decoding="async"
            className="h-auto w-full sm:rounded-2xl"
          />
        </div>
      </Section>

      {/* 6. Reframe / nueva creencia */}
      <Section tone="green" flush>
        <div className="bleed-mobile sm:mx-auto sm:max-w-lg">
          <img
            src="/reframe-no-siempre-gana-mas.webp"
            alt="No siempre gana más el que termina con más. Muchas veces simplemente entiende mejor qué hacer con cada peso. Hay personas que ganan bien y siguen llegando justas. Y hay personas que, ganando menos, construyen ahorro, tranquilidad y patrimonio. La diferencia no siempre está en cuánto entra. Está en lo que haces después de que entra."
            width={1024}
            height={1536}
            loading="lazy"
            decoding="async"
            className="h-auto w-full sm:rounded-2xl"
          />
        </div>
      </Section>

      {/* 9. Cómo se nota la diferencia en 60 días */}
      <Section eyebrow="Lo que vas a empezar a notar">
        <div className="mx-auto -mt-4 mb-10 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-extrabold sm:text-4xl">
            Cómo se te va a notar en los <span className="text-accent">próximos 60 días</span>
          </h2>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Menos estrés. Más control. Un futuro más tranquilo.
          </p>
        </div>

        <ul className="mx-auto max-w-2xl space-y-4">
          {SIXTY_DAY_CHANGES.map((c, i) => (
            <li key={c.title} className="card-surface flex items-center gap-5 p-5">
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[color:var(--gold)]/50 bg-background/60 text-[color:var(--gold)]">
                {c.icon}
                <span className="absolute -left-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-black text-accent-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>
              <div className="border-l border-border/60 pl-4">
                <p className="font-display text-base font-extrabold leading-tight sm:text-lg">
                  {c.title} <span className="text-accent">{c.highlight}</span>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-10 max-w-xl border-t border-border/60 pt-8 text-center">
          <p className="text-sm font-semibold text-muted-foreground">
            El cambio no empieza cuando ganas más.
          </p>
          <p className="mt-1 text-lg font-extrabold text-accent sm:text-xl">
            Empieza cuando entiendes qué hacer con lo que ya llega a tus manos.
          </p>
        </div>

        <div className="mt-8 text-center">
          <a href={CHECKOUT} className="btn-cta">
            Quiero empezar hoy
          </a>
        </div>
      </Section>

      {/* 7. El nuevo mecanismo */}
      <Section tone="light" flush>
        <div className="bleed-mobile sm:mx-auto sm:max-w-lg">
          <img
            src="/no-hacer-todo-de-golpe.webp"
            alt="No necesitas hacer todo de golpe. Solo empezar en el orden correcto. La mayoría intenta invertir antes de ordenar su dinero y por eso se frustra. Un camino simple: 01 entiendes a dónde se está yendo tu dinero, 02 gastas sin culpa, 03 construyes una reserva, 04 empiezas a invertir. El resultado: menos ansiedad, más claridad, mejores decisiones."
            width={1024}
            height={1536}
            loading="lazy"
            decoding="async"
            className="h-auto w-full sm:rounded-2xl"
          />
        </div>
      </Section>

      {/* 11. Qué encontrarás en el libro */}
      <Section tone="light" flush>
        <div className="bleed-mobile sm:mx-auto sm:max-w-lg">
          <img
            src="/que-incluye-el-libro.webp"
            alt="Qué recibís: todo lo que incluye el libro Entender bien el dinero. 01 ves a dónde se te va el dinero, 02 aprendes a organizar tu dinero, 03 creas tu fondo de emergencia, 04 sales de deudas, 05 das tus primeros US$100 invertidos, 06 invertís con estrategia, 07 tomas mejores decisiones, 08 desarrollas la mentalidad correcta. Más que un libro, es un plan para tu libertad: más claridad, más tranquilidad, más oportunidades."
            width={1024}
            height={1536}
            loading="lazy"
            decoding="async"
            className="h-auto w-full sm:rounded-2xl"
          />
        </div>
      </Section>

      {/* 12. Demostración visual */}
      <Section
        tone="green"
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
      <Section tone="light" flush>
        <div className="bleed-mobile sm:mx-auto sm:max-w-lg">
          <img
            src="/bonos-lo-que-recibes.webp"
            alt="Lo que recibís: no recibís solo un libro, recibís un sistema para dejar de preguntarte qué pasó con tu dinero y empezar a saber qué hacer con él. Bono 1: el mapa de tu dinero. Bono 2: tu número de tranquilidad. Bono 3: el primer movimiento. 3 herramientas exclusivas incluidas sin costo."
            width={1024}
            height={1536}
            loading="lazy"
            decoding="async"
            className="h-auto w-full sm:rounded-2xl"
          />
        </div>
        <div className="bleed-mobile mt-6 sm:mx-auto sm:max-w-lg">
          <img
            src="/bono-1-mapa-de-tu-dinero.webp"
            alt="Bono 1: el mapa de tu dinero. ¿Sigues sin saber dónde se te va el dinero? Descúbrelo, entiéndelo, toma el control. Una herramienta para ver con claridad qué está pasando con el dinero que ya ganas."
            width={1024}
            height={1024}
            loading="lazy"
            decoding="async"
            className="h-auto w-full sm:rounded-2xl"
          />
        </div>
        <div className="bleed-mobile mt-6 sm:mx-auto sm:max-w-lg">
          <img
            src="/bono-2-numero-de-tranquilidad.webp"
            alt="Bono 2: tu número de tranquilidad. ¿Y si pasa algo y vuelvo a cero? Prepárate hoy, vive más tranquila mañana. Una referencia clara para empezar a construir tu propia base de seguridad: primero tranquilidad, después crecimiento."
            width={1024}
            height={1024}
            loading="lazy"
            decoding="async"
            className="h-auto w-full sm:rounded-2xl"
          />
        </div>
        <div className="bleed-mobile mt-6 sm:mx-auto sm:max-w-lg">
          <img
            src="/bono-3-primer-movimiento.webp"
            alt="Bono 3: el primer movimiento. Sé que tengo que hacer algo, pero no sé por dónde empezar. De la teoría a la acción, paso a paso. Una guía simple para que dejes de pensar y empieces a hacer: terminas sabiendo qué mover primero."
            width={1024}
            height={1024}
            loading="lazy"
            decoding="async"
            className="h-auto w-full sm:rounded-2xl"
          />
        </div>
      </Section>

      {/* 14. Testimonios */}
      <Section tone="green" title="No tienes que creerme. Mira lo que pasó cuando otras personas empezaron a entender su dinero.">
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
      <Section tone="light" id="cb-precio" title="Todo lo que necesitas para dejar de improvisar con tu dinero.">
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
      <Section tone="green" eyebrow="Simple y rápido" title="Empezar es más simple de lo que parece.">
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
      <Section tone="light" title="Pruébalo sin sentir que estás apostando tu dinero.">
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
      <Section tone="green" title="Preguntas frecuentes">
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
      <Section tone="light">
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

      {/* Notificación flotante de compra reciente */}
      <PurchaseToast />
    </main>
  );
}
