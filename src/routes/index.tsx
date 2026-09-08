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
    short: "El Mapa de tu Dinero",
    d: "Descubre a dónde va tu dinero y cómo recuperar el control. Una herramienta para ver con claridad qué está pasando con el dinero que ya ganas.",
  },
  {
    n: 2,
    short: "Tu Número de Tranquilidad",
    d: "Calcula cuánto necesitas tener separado para estar cubierta ante cualquier imprevisto. Primero tranquilidad, después crecimiento.",
  },
  {
    n: 3,
    short: "El Primer Movimiento",
    d: "Tu guía paso a paso para aplicar el método desde hoy. De la intención a los resultados: terminas sabiendo qué mover primero.",
  },
];

/**
 * Testimonios reales, agrupados y ORDENADOS estratégicamente por la
 * objeción psicológica que cada bloque va desarmando, en esta secuencia:
 *  1. "No gano lo suficiente"        → identificación masiva
 *  2. "Un imprevisto me devuelve a cero" → activa el miedo
 *  3. "Ya sé que debería ahorrar"    → rompe la falsa sensación de saber
 *  4. "Mi situación es demasiado complicada" → reduce desesperanza
 *  5. "No tengo tiempo"              → elimina fricción
 *  6. "Ya es tarde / no tengo capital" → abre la puerta al crecimiento
 * IMPORTANTE: el contenido y el sentido de cada cita se mantuvo intacto
 * (no se inventó ni modificó ninguna experiencia). Solo se cambiaron 3
 * palabras de jerga exclusivamente argentina por su equivalente neutro,
 * para que el mensaje se entienda igual en cualquier país de LATAM:
 *  - "termotanque" → "calentador de agua"
 *  - "una boludez" → "algo simple"
 *  - "laburando" → "trabajando"
 * No se muestra la ciudad de los compradores (para no señalar un solo
 * país), aunque los testimonios siguen siendo reales.
 */
const PHOTO_ANDRES = "data:image/webp;base64,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";
const PHOTO_SAMUEL = "data:image/webp;base64,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";
const PHOTO_PABLO = "data:image/webp;base64,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";
const PHOTO_HERNAN_C = "data:image/webp;base64,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";
const PHOTO_FABIO = "data:image/webp;base64,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";
const PHOTO_DIEGO = "data:image/webp;base64,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";

const REVIEW_GROUPS = [
  {
    objection: "No gano lo suficiente",
    items: [
      {
        q: "Estaba convencido de que mi problema era ganar poco. Cada mes pensaba: 'cuando gane más, ahí sí voy a poder ahorrar'. Pero hice la planilla y me llevé una sorpresa bastante incómoda: no sabía en qué se me estaba yendo una parte importante de lo que ya ganaba. No me aumentaron el sueldo. No conseguí otro trabajo. Pero dejé de llegar a fin de mes preguntándome qué había pasado. Ahora, antes de gastar, sé exactamente qué estoy dejando sin dinero.",
        n: "Pablo L.",
        photo: PHOTO_PABLO,
      },
    ],
  },
  {
    objection: "Un imprevisto me devuelve a cero",
    items: [
      {
        q: "Durante años viví con la sensación de que estaba avanzando… hasta que aparecía algo inesperado: una reparación, una cuenta, cualquier problema. Y otra vez la tarjeta. Cuando se rompió el calentador de agua, por primera vez no sentí ese golpe en el estómago de pensar '¿y ahora de dónde saco esto?'. La reserva ya estaba ahí. Pagué el problema y seguí con mi vida.",
        n: "Fabio P.",
        photo: PHOTO_FABIO,
      },
    ],
  },
  {
    objection: "Ya sé que debería ahorrar",
    items: [
      {
        q: "Yo no necesitaba que nadie me dijera que tenía que ahorrar, eso ya lo sabía. El problema era que todos los meses pensaba que iba a empezar 'cuando sobrara algo'. Y nunca sobraba. Lo de separar el dinero el mismo día que cobro parecía demasiado simple como para cambiar algo, pero ahí estaba el problema: llevaba años esperando hacer algo complicado cuando necesitaba empezar con algo concreto. Ahora no intento ahorrar lo que queda. Primero decido qué parte no quiero volver a perder.",
        n: "Hernán C.",
        photo: PHOTO_HERNAN_C,
      },
    ],
  },
  {
    objection: "Mi situación es demasiado complicada",
    items: [
      {
        q: "Tuve un mes malo y llegué al punto de pensar en vender la camioneta con la que trabajo para pagar lo que debía. En ese momento me parecía una decisión lógica: estaba tan preocupado por apagar el incendio de ese mes que no pensaba en lo que iba a pasar después. Leer la parte de las deudas me hizo frenar antes de hacer algo que probablemente me habría dejado peor. No fue magia, seguía teniendo la deuda. Pero por primera vez tenía claro qué hacer antes de seguir perdiendo cosas para tapar problemas.",
        n: "Samuel R.",
        photo: PHOTO_SAMUEL,
      },
    ],
  },
  {
    objection: "No tengo tiempo",
    items: [
      {
        q: "Estuve a punto de no comprarlo porque pensé lo mismo que con otros libros: 'lo voy a leer y después quedará guardado'. Tengo poco tiempo y no quería meterme en otro curso lleno de teoría. Lo leía quince minutos por noche, y lo que me sorprendió es que no terminaba cada capítulo pensando 'qué interesante', sino 'esto lo puedo hacer hoy'. Antes sabía muchas cosas sobre dinero. Ahora hay cosas que realmente hago.",
        n: "Diego G.",
        photo: PHOTO_DIEGO,
      },
    ],
  },
  {
    objection: "Ya es tarde / no tengo suficiente capital",
    items: [
      {
        q: "Tengo 61 años y durante mucho tiempo pensé que invertir era algo que había dejado pasar. Veía hablar de fondos, acciones y dólares y siempre llegaba a la misma conclusión: 'eso es para gente que empezó antes y tiene dinero de sobra'. Lo que más me cambió no fue cuánto empecé a invertir, fue dejar de sentir que estaba mirando desde afuera. Empecé pequeño, muy pequeño. Pero ya no sigo esperando a que aparezca la cantidad perfecta para empezar.",
        n: "Andrés M.",
        photo: PHOTO_ANDRES,
      },
    ],
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
      <div className="sticky top-0 z-40 bg-[color:var(--gold)] px-4 py-2 text-center text-[color:oklch(0.2_0.04_70)]">
        <span className="font-display text-xs font-extrabold uppercase tracking-[0.12em] sm:text-sm">
          🔥 El precio de hoy termina en{" "}
          <span className="ml-1 rounded-md bg-black/10 px-2 py-0.5 tabular-nums">
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
                  className="shrink-0 whitespace-nowrap rounded-full border border-border bg-[oklch(0.93_0.03_75)] px-3 py-1 text-xs font-semibold text-slate-900"
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
        <div className="mt-6 text-center">
          <a href={CHECKOUT} className="btn-cta">
            Quiero todo esto en mis manos
          </a>
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
                        <div className="size-10 shrink-0 overflow-hidden rounded-full">
                          {r.photo ? (
                            <img
                              src={r.photo}
                              alt={r.n}
                              width={40}
                              height={40}
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <ImageSlot label="" ratio="1 / 1" className="!rounded-full !p-0" />
                          )}
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
            <div className="mx-auto max-w-sm overflow-hidden rounded-2xl">
              <img
                src="/stack-oferta-completa.webp"
                alt="Entender bien el dinero + Bono 1 el mapa de tu dinero + Bono 2 tu número de tranquilidad + Bono 3 el primer movimiento. 3 herramientas exclusivas incluidas sin costo."
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
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
      <Section tone="light" flush>
        <div className="bleed-mobile sm:mx-auto sm:max-w-lg">
          <img
            src="/garantia-7-dias.webp"
            alt="7 días de garantía. Tienes 7 días para revisar el material y decidir si es para ti. Si sientes que no te aporta valor, puedes solicitar la devolución según las condiciones indicadas. El riesgo de seguir sin entender qué pasa con tu dinero es tuyo todos los meses, el riesgo de probar el libro no tiene por qué serlo. Compra 100% segura, 7 días de garantía, material digital, pago único sin cargos extras."
            width={1024}
            height={1536}
            loading="lazy"
            decoding="async"
            className="h-auto w-full sm:rounded-2xl"
          />
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
          <p className="text-xl font-semibold">
            Probablemente no necesitas seguir acumulando información.
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
