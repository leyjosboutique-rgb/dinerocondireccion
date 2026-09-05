import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ImageSlot } from "@/components/ImageSlot";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Entender bien el dinero · Tomá el control" },
      {
        name: "description",
        content:
          "Entendé qué está haciendo tu dinero, construí una reserva y aprendé a invertir desde US$100. Libro digital con 7 bonos y acceso de por vida.",
      },
      { property: "og:title", content: "Entender bien el dinero · Tomá el control" },
      {
        property: "og:description",
        content:
          "Dejá de reaccionar al dinero: entendé qué pasa con lo que ganás, protegelo y aprendé a hacerlo crecer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const CHECKOUT = "#cb-precio";

const CHIPS = [
  "💵 Descubrí dónde se está escapando tu dinero",
  "🛡️ Construí una reserva que te proteja",
  "📈 Empezá a invertir incluso desde US$100",
  "⚡ Acceso inmediato y de por vida",
];

const PAINS = [
  {
    t: "Cobrás… y dos semanas después ya no sabés qué pasó.",
    d: "No hiciste una compra enorme. No te fuiste de viaje. No compraste algo que puedas señalar. Simplemente se fue: un poco acá, otro poco allá. Y cuando llega fin de mes, lo único claro es que trabajaste… pero no quedó nada.",
  },
  {
    t: "Cuando aparece un problema, tu futuro paga la cuenta.",
    d: "Se rompe algo. Baja el trabajo. Un cliente no paga. Entonces usás el ahorro, vendés algo o usás la tarjeta. Solucionás el problema de hoy… pero hacés más difícil el mañana.",
  },
  {
    t: "Querés invertir, pero seguís esperando tener suficiente.",
    d: "Te decís: cuando me sobre, empiezo. Pero pasan los meses, después los años, y nunca sobra. Porque lo que sobra sin un sistema casi siempre encuentra una forma de desaparecer.",
  },
  {
    t: "Un imprevisto te devuelve al punto cero.",
    d: "Una reparación. Una cuenta inesperada. Una urgencia. Y otra vez empezás desde cero.",
  },
];

const STEPS = [
  {
    t: "VER",
    d: "Primero descubrís qué está haciendo tu dinero: qué entra, qué sale, qué gastos importan y cuáles son esas pequeñas fugas que terminan decidiendo cómo llegás a fin de mes. Porque no podés dirigir algo que no podés ver.",
  },
  {
    t: "PROTEGER",
    d: "Después construís una reserva. Una parte de tu dinero que no está para gastar: está para protegerte. Para que un imprevisto no destruya lo que venías construyendo.",
  },
  {
    t: "CRECER",
    d: "Y recién entonces llega la inversión: fondos, ETF, diversificación, rebalanceo y control del riesgo. No desde la desesperación de ganar rápido, sino para construir algo que querés conservar y hacer crecer.",
  },
];

const OUTCOMES = [
  {
    b: "Sabés cuánto dinero podés gastar sin culpa.",
    r: " Porque cada parte ya tiene una dirección.",
  },
  {
    b: "Un imprevisto deja de significar empezar desde cero.",
    r: " Tenés una estructura pensada para protegerte.",
  },
  {
    b: "Ya no esperás tener miles para dar tu primer paso.",
    r: " Empezás desde lo que hoy sí podés separar.",
  },
  {
    b: "Podés separar tus primeros US$100 con intención.",
    r: " Sin improvisar ni comprometer lo que necesitás.",
  },
  {
    b: "Entendés qué estás haciendo antes de invertir.",
    r: " Y tomás decisiones con más criterio y menos reacción.",
  },
];

const INCLUDES = [
  "Entender qué está pasando con tu dinero",
  "Detectar fugas y gastos invisibles",
  "Organizar el dinero de forma consciente",
  "Construir una reserva de seguridad",
  "Manejar deudas sin improvisar",
  "Entender cómo funcionan las primeras inversiones",
  "Conocer ETF, fondos, diversificación y control del riesgo",
  "Empezar incluso si hoy solo podés separar US$100",
];

const BONUSES = [
  {
    n: 1,
    t: "El Sistema de las 3 Cuentas: cómo repartir lo que cobrás el mismo día que entra",
    d: "Para que tu dinero no se reparta solo mientras gastás. Usá tres cuentas, tres porcentajes y una regla para decidir su destino apenas cobrás.",
    v: "$12.000",
  },
  {
    n: 2,
    t: "La Planilla del Mes: dónde se te va la plata que jurás que no gastaste",
    d: "Para que no tengas que organizar todo de memoria. Registrá 30 días y detectá con claridad las fugas que se comen tu sueldo.",
    v: "$10.000",
  },
  {
    n: 3,
    t: "Tu Primer Fondo de Emergencia: cuánto guardar si cobrás por mes y en pesos",
    d: "Para que un imprevisto no te devuelva a cero. Calculá cuánto necesitás para tres meses y dónde resguardarlo.",
    v: "$11.000",
  },
  {
    n: 4,
    t: "Las 12 Preguntas Antes de Comprar Algo Caro",
    d: "Para que una compra impulsiva no decida por vos. Respondé 12 preguntas en dos minutos y comprá con más criterio.",
    v: "$9.000",
  },
  {
    n: 5,
    t: "Qué Hacer con tus Primeros US$100 (y con los Primeros US$1.000)",
    d: "Para que dejar de esperar sea más fácil. Seguí dos hojas de ruta con montos, orden y errores comunes para dar tu primer paso.",
    v: "$14.000",
  },
  {
    n: 6,
    t: "Cómo Salir de una Deuda Sin Vender lo que te Da de Comer",
    d: "Para que resolver una deuda no destruya tu fuente de ingresos. Conocé qué pagar primero, qué negociar y qué proteger.",
    v: "$13.000",
  },
  {
    n: 7,
    t: "Diccionario del Dinero: 90 términos que se usan para dejarte afuera",
    d: "Para que los términos financieros no te dejen afuera. Consultá 90 conceptos explicados en dos líneas y decidí entendiendo.",
    v: "$10.000",
  },
];

const REVIEWS = [
  {
    q: "Hice la planilla un mes entero por hacerle caso. Descubrí que se me iban casi cien mil pesos en cosas que ni recordaba. No gano un peso más que antes y ahora me queda.",
    n: "Gustavo R.",
    c: "Buenos Aires",
  },
  {
    q: "Estuve a punto de vender la camioneta con la que trabajo para cubrir un mes malo. Leí el capítulo de deudas y no lo hice. Hoy sigo laburando con ella.",
    n: "Damián S.",
    c: "Córdoba",
  },
  {
    q: "Tengo 61 y nunca había invertido un peso porque pensaba que había que tener capital. Arranqué con lo mínimo que dice el libro. Ya no soy el que mira de afuera.",
    n: "Marcelo P.",
    c: "Rosario",
  },
  {
    q: "Lo que más me sirvió fue lo de las tres cuentas. Cobro y reparto el mismo día. Es una boludez y me cambió el mes entero.",
    n: "Hernán V.",
    c: "Mendoza",
  },
  {
    q: "Se me rompió el termotanque en junio y por primera vez lo pagué sin tarjeta. La reserva ya estaba armada. Eso solo vale lo que salió el libro.",
    n: "Fabián L.",
    c: "La Plata",
  },
  {
    q: "Lo leí en cuatro noches, quince minutos por vez. No es un libro de motivación: te hace sacar la calculadora.",
    n: "Diego A.",
    c: "Tucumán",
  },
];

const FAQS = [
  {
    q: "¿Qué incluye exactamente?",
    a: "El libro completo Entender bien el dinero · De US$100 a US$15.000+ en PDF, más los 7 bonos. Listo para leer en el celular, la computadora o la tablet, y también para imprimir. Acceso de por vida.",
  },
  {
    q: "¿Es material físico o digital?",
    a: "Es 100% digital. Por eso no pagás envío, no esperás días y cuesta bastante menos que la edición impresa. Si preferís el papel, podés imprimirlo.",
  },
  {
    q: "¿Cómo y cuándo me llega?",
    a: "Apenas se confirma el pago te llega automáticamente a tu correo, con todo incluido. Suele tardar menos de 5 minutos.",
  },
  {
    q: "No me llegó el mail, ¿qué hago?",
    a: "Primero revisá Spam, Promociones y No deseado: el 90% de las veces está ahí. Si no aparece, escribinos con el mail y el nombre con el que compraste y te lo reenviamos el mismo día.",
  },
  {
    q: "¿Cuánto tiempo por día necesito?",
    a: "Quince minutos alcanzan. Los capítulos son cortos y cada uno cierra con un número para calcular o algo concreto para hacer ese día.",
  },
  {
    q: "Gano poco. ¿Igual me sirve?",
    a: "Es justamente para eso. Todo el libro está armado alrededor de la idea de empezar con montos chicos: US$100 o su equivalente en pesos.",
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
            Aprendé por qué se te va el dinero, cómo armar una reserva segura e{" "}
            <span className="text-accent">invertir desde US$100 para llegar a tener miles</span>
          </h1>

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
            <ImageSlot label="Portada / antes y después del libro" ratio="1 / 1" />
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-pretty text-muted-foreground">
            <strong className="text-foreground">Entender bien el dinero</strong> te da las tres
            cosas en el orden que funcionan:{" "}
            <strong className="text-foreground">ver en qué se te va</strong>, cortar las fugas para
            que deje de evaporarse, y después{" "}
            <strong className="text-foreground">invertirlo con cabeza de inversor</strong>. De tus{" "}
            <strong className="text-foreground">primeros US$100</strong> a un portafolio de
            US$15.000 o más.
          </p>

          <p className="mt-6 text-sm text-muted-foreground">
            Valoración: <Stars /> 4.9 · 7.480 lectores
          </p>

          <a href={CHECKOUT} className="btn-cta mt-8">
            Quiero entender mi dinero
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Acceso inmediato · Garantía de 7 días · Pago único
          </p>
        </div>

        {/* Prensa */}
        <div className="mx-auto mt-14 max-w-4xl border-t border-border/60 pt-8 text-center">
          <p className="eyebrow">Este libro fue visto en</p>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {["Logo medio 1", "Logo medio 2", "Logo medio 3", "Logo medio 4"].map((l) => (
              <ImageSlot key={l} label={l} ratio="16 / 6" />
            ))}
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="bg-surface-strong/70 px-5 py-8">
        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-4 text-center">
          {[
            ["Desde US$100", "Para arrancar"],
            ["15 min", "Por día"],
            ["De por vida", "Pago único"],
          ].map(([a, b]) => (
            <div key={a}>
              <p className="font-display text-lg font-extrabold text-accent sm:text-xl">{a}</p>
              <p className="text-xs text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dolores */}
      <Section eyebrow="Esto es para vos si" title="¿Te sentís identificado con alguna de estas?">
        <div className="grid gap-5 sm:grid-cols-2">
          {PAINS.map((p) => (
            <article key={p.t} className="card-surface p-6">
              <h3 className="text-lg font-bold">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-muted-foreground">
          Si dijiste que sí a dos o más, el problema no es tu sueldo. Es que nunca te dieron el
          sistema.
        </p>
        <div className="mt-8 text-center">
          <a href={CHECKOUT} className="btn-cta">
            Sí, me pasa exactamente eso
          </a>
        </div>
      </Section>

      {/* Método */}
      <Section eyebrow="El método" title="Por qué funciona y por qué el orden importa">
        <p className="mx-auto max-w-3xl text-center text-muted-foreground">
          Casi todos arrancan por el final: buscan dónde invertir antes de saber cuánto les queda.{" "}
          <strong className="text-foreground">
            Primero hay que ver a dónde va la plata, después blindar una parte, y recién ahí hacerla
            crecer.
          </strong>{" "}
          El que se saltea los dos primeros pasos no invierte: apuesta.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <article key={s.t} className="card-surface p-6">
              <span className="font-display text-4xl font-black text-accent/40">{i + 1}</span>
              <h3 className="mt-2 text-lg font-bold">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
          <p className="eyebrow">El resultado</p>
          <p className="mt-2 font-display text-xl font-extrabold">
            Primero ordenás. Después protegés. Y recién ahí invertís.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Lo que cambia todo no es cuánto ganás: es qué hacés con lo que ya te entra, y con qué
            cabeza lo mirás.
          </p>
        </div>
      </Section>

      {/* Resultados */}
      <Section eyebrow="Lo que vas a lograr" title="Cómo se te va a notar en los próximos 60 días">
        <ul className="space-y-4">
          {OUTCOMES.map((o, i) => (
            <li key={o.b} className="card-surface flex gap-4 p-5">
              <span className="font-display text-lg font-black text-accent/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">{o.b}</strong>
                {o.r}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <a href={CHECKOUT} className="btn-cta">
            Quiero empezar hoy
          </a>
        </div>
      </Section>

      {/* Narrativa */}
      <Section>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <ImageSlot label="Antes y después: de llegar justo a tener una reserva" ratio="4 / 3" />
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Trabajás más que nadie y sos el que menos tiene guardado
            </h2>
            <p className="mt-4 text-muted-foreground">
              Cobrás. Pagás. Tapás agujeros. Y a los diez días estás igual que el mes pasado.
            </p>
            <blockquote className="mt-5 border-l-2 border-accent pl-4 text-sm italic text-muted-foreground">
              "—Trabajé más que todos. ¿Por qué no me quedé con nada? —Porque trabajaste para tu
              dinero. Él hizo que el dinero trabajara."
            </blockquote>
            <p className="mt-5 text-muted-foreground">
              <strong className="text-foreground">
                Este libro no arranca por enseñarte a ganar más.
              </strong>{" "}
              Arranca por que lo que ya ganás deje de evaporarse.
            </p>
            <a href={CHECKOUT} className="btn-cta mt-6">
              Quiero que deje de evaporarse
            </a>
          </div>
        </div>
      </Section>

      {/* Qué recibís */}
      <Section eyebrow="Qué recibís" title="Todo lo que incluye el libro">
        <div className="card-surface grid gap-8 p-6 md:grid-cols-2 md:p-8">
          <ImageSlot label="Mockup del libro principal" ratio="1 / 1" />
          <div>
            <span className="eyebrow">Entregable principal</span>
            <h3 className="mt-2 text-xl font-extrabold">
              Entender bien el dinero · De US$100 a US$15.000+
            </h3>
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

      {/* Por dentro */}
      <Section eyebrow="Contenido real" title="Mirá cómo se ve por dentro">
        <div className="mx-auto max-w-3xl">
          <ImageSlot label="Páginas interiores del libro" ratio="16 / 10" />
          <p className="mt-5 text-center text-sm text-muted-foreground">
            Páginas reales del libro. Nada de relleno ni teoría suelta: cada capítulo cierra con un
            número para calcular y algo concreto para hacer.
          </p>
        </div>
      </Section>

      {/* Bonos */}
      <Section eyebrow="Pero no termina ahí…" title="7 bonos exclusivos">
        <p className="-mt-6 mb-10 text-center text-sm text-muted-foreground">
          Valor real de $79.000 — hoy incluidos sin costo
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BONUSES.map((b) => (
            <article key={b.n} className="card-surface flex flex-col overflow-hidden">
              <ImageSlot label={`Portada bono ${b.n}`} ratio="16 / 10" className="rounded-none border-0 border-b-2" />
              <div className="flex flex-1 flex-col p-5">
                <span className="eyebrow">#{b.n} · Bono de hoy</span>
                <h3 className="mt-2 text-base font-bold leading-snug">{b.t}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
                <p className="mt-4 text-xs font-semibold text-accent">
                  Valor <s className="text-muted-foreground">{b.v}</s> — HOY GRATIS
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          {[
            ["7.480", "Lectores"],
            ["4.9", "Calificación"],
            ["7 días", "De garantía"],
          ].map(([a, b]) => (
            <div key={a} className="card-surface py-5">
              <p className="font-display text-xl font-extrabold text-accent">{a}</p>
              <p className="text-xs text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonios */}
      <Section eyebrow="Resultados reales" title="Lo que dicen quienes ya lo leyeron">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <article key={r.n} className="card-surface flex flex-col p-6">
              <Stars />
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{r.q}</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="size-10 shrink-0">
                  <ImageSlot label="" ratio="1 / 1" className="!p-0 !rounded-full" />
                </div>
                <div>
                  <p className="text-sm font-bold">{r.n}</p>
                  <p className="text-xs text-muted-foreground">{r.c} · Compra verificada</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Oferta */}
      <Section id="cb-precio" title="Llevátelo con los 7 bonos">
        <div className="card-surface mx-auto max-w-2xl overflow-hidden">
          <div className="bg-[color:var(--primary)] py-2 text-center font-display text-xs font-extrabold uppercase tracking-[0.16em] text-primary-foreground">
            Oferta por tiempo limitado
          </div>
          <div className="p-6 sm:p-8">
            <h3 className="text-center text-xl font-extrabold">
              Entender bien el dinero · De US$100 a US$15.000+
            </h3>
            <div className="mx-auto mt-6 max-w-sm">
              <ImageSlot label="Libro + bonos (pack completo)" ratio="4 / 3" />
            </div>

            <ul className="mt-7 divide-y divide-border text-sm">
              <li className="flex justify-between py-2.5">
                <span>Entender bien el dinero · libro completo</span>
                <span className="font-semibold">$34.000</span>
              </li>
              {BONUSES.map((b) => (
                <li key={b.n} className="flex justify-between py-2.5 text-muted-foreground">
                  <span>
                    Bono {b.n} · {b.t.split(":")[0]}
                  </span>
                  <span className="font-semibold text-accent">GRATIS</span>
                </li>
              ))}
              <li className="flex justify-between py-2.5 text-muted-foreground">
                <span>Garantía de 7 días</span>
                <span className="font-semibold text-accent">INCLUIDA</span>
              </li>
            </ul>

            <div className="mt-7 text-center">
              <p className="text-sm text-muted-foreground">
                Valor de referencia del libro <s>$34.000</s>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Hoy, todo junto, por un solo pago de:
              </p>
              <p className="font-display text-5xl font-black text-accent">$19.999 ARS</p>
              <p className="mt-2 text-sm font-semibold">Ahorrás $14.001 · 41% OFF</p>
              <p className="mt-4 text-xs text-muted-foreground">
                Este precio se mantiene por{" "}
                <span className="font-bold tabular-nums text-foreground">{timer}</span>
              </p>
              <a href="#cb-precio" className="btn-cta mt-6 w-full">
                Lo quiero ahora
              </a>
              <p className="mt-3 text-xs text-muted-foreground">
                Compra 100% segura · Lo recibís por correo apenas se confirma el pago · Pago único
              </p>
              <div className="mx-auto mt-6 max-w-xs">
                <ImageSlot label="Medios de pago aceptados" ratio="16 / 4" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Pasos */}
      <Section eyebrow="Simple y rápido" title="Cómo lo recibís, en 3 pasos">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Comprás", "Tocás el botón, completás tus datos y pagás por el medio que prefieras."],
            [
              "Lo recibís por mail",
              "En menos de 5 minutos te llega el libro completo con los 7 bonos. No hay envíos ni esperas.",
            ],
            [
              "Empezás hoy mismo",
              "Abrís el capítulo 1, hacés el primer cálculo y ya arrancaste. Quince minutos alcanzan.",
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

      {/* Garantía */}
      <Section title="Satisfacción garantizada y riesgo cero">
        <div className="card-surface mx-auto grid max-w-3xl items-center gap-6 p-8 md:grid-cols-[180px_1fr]">
          <div className="mx-auto w-40">
            <ImageSlot label="Sello de garantía 7 días" ratio="1 / 1" className="!rounded-full" />
          </div>
          <div>
            <p className="text-muted-foreground">
              Leelo, hacé la planilla del primer mes, calculá tu reserva. Si en{" "}
              <strong className="text-foreground">7 días</strong> sentís que no era para vos,
              escribís un mail y listo.
            </p>
            <p className="mt-3 text-muted-foreground">
              Te devolvemos el <strong className="text-foreground">100% de lo que pagaste</strong> y
              encima te quedás con todo el material.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted-foreground">
              {["Compra 100% segura", "7 días de garantía", "Reembolso sin vueltas", "Acceso de por vida"].map(
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
            <p className="text-[11px] text-muted-foreground line-through">Antes $34.000</p>
            <p className="font-display text-lg font-extrabold text-accent">$19.999 ARS</p>
          </div>
          <a href={CHECKOUT} className="btn-cta !px-6 !py-3 text-sm">
            Lo quiero
          </a>
        </div>
      </div>
    </main>
  );
}
