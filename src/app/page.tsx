import {
  UserPlus,
  CalendarPlus,
  FileText,
  TrendingUp,
  CheckCircle,
  Check,
  X,
  Dumbbell,
  Layers,
  Stamp,
  Smartphone,
  Laptop,
  PlayCircle,
  Facebook,
  Instagram,
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-surface text-on-surface selection:bg-primary selection:text-on-primary">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          {" "}
          <div className="text-2xl font-black text-primary tracking-tighter font-headline">
            Planifit
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              className="text-on-surface-variant hover:text-on-surface transition-colors font-bold font-headline tracking-tight"
              href="#how-it-works"
            >
              Cómo funciona
            </a>
            <a
              className="text-on-surface-variant hover:text-on-surface transition-colors font-bold font-headline tracking-tight"
              href="#features"
            >
              Herramientas
            </a>
            <a
              className="text-on-surface-variant hover:text-on-surface transition-colors font-bold font-headline tracking-tight"
              href="#pricing"
            >
              Precios
            </a>
          </div>
          <button className="bg-primary-container text-on-primary font-bold px-6 py-2.5 rounded-xl hover:scale-95 transition-all duration-300 active:scale-90">
            Comenzar
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
        {/* Background blobs */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary-container rounded-full blur-[120px] -mr-96 -mt-96" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary rounded-full blur-[150px] -ml-72 -mb-72" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 text-primary text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              ¡Versión de prueba ya disponible!
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] font-headline">
              Crea programas de entrenamiento{" "}
              <span className="text-primary">profesionales</span> en minutos
            </h1>

            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed font-body">
              La herramienta que los entrenadores necesitan para diseñar,
              organizar y entregar rutinas personalizadas a sus clientes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-primary-container text-on-primary font-extrabold text-lg px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(132,204,22,0.3)] hover:shadow-[0_0_30px_rgba(132,204,22,0.5)] transition-all">
                Empezar gratis
              </button>
              <button className="border-2 border-outline-variant/30 text-on-surface font-bold text-lg px-8 py-4 rounded-xl hover:bg-surface-bright transition-all inline-flex items-center justify-center gap-2">
                <PlayCircle size={24} strokeWidth={1.5} />
                Ver demo
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-surface-container-highest rounded-[2.5rem] p-4 shadow-2xl border border-outline-variant/20">
              {/* Hero image placeholder — replace with <Image src="/hero.png" /> when available */}
              <div className="rounded-[1.75rem] w-full aspect-[16/10] bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low flex items-center justify-center">
                <Dumbbell
                  size={80}
                  strokeWidth={1}
                  className="text-primary/20"
                />
              </div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-surface-container-high p-6 rounded-2xl border border-outline-variant/30 shadow-2xl hidden md:block max-w-[240px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <TrendingUp size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">
                    Progreso Total
                  </p>
                  <p className="text-xl font-black font-headline">+24%</p>
                </div>
              </div>
              <div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[75%]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-surface-container-low" id="how-it-works">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 font-headline">
              Cómo funciona
            </h2>
            <div className="h-1.5 w-24 bg-primary rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-3xl bg-surface-container-high transition-transform duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-surface-bright flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                <UserPlus size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-headline">
                Agrega tus clientes
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Gestiona tu base de datos de atletas de forma centralizada. Todo
                en un solo lugar.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-surface-container-high transition-transform duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-surface-bright flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                <CalendarPlus size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-headline">
                Crea el programa
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Diseña rutinas personalizadas arrastrando ejercicios de nuestra
                base de datos inteligente.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-surface-container-high transition-transform duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-surface-bright flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                <FileText size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-headline">
                Exporta y envía
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Genera PDFs de alta calidad con tu propia marca y envíalos
                directamente a tus clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-surface" id="features">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 font-headline">
              Herramientas de alto rendimiento
            </h2>
            <p className="text-on-surface-variant text-lg">
              Todo lo que necesitas para escalar tu negocio de entrenamiento
              personal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Exercise Library — 8 cols */}
            <div className="md:col-span-8 p-10 rounded-[2rem] bg-surface-container-high border border-outline-variant/10 overflow-hidden relative group">
              <div className="relative z-10 max-w-md">
                <h3 className="text-3xl font-bold mb-4 text-primary font-headline">
                  Biblioteca de ejercicios
                </h3>
                <p className="text-on-surface-variant text-lg mb-6">
                  Crea y reutiliza ejercicios con enlaces a video. No pierdas
                  tiempo explicando la técnica una y otra vez.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle
                      size={20}
                      strokeWidth={1.5}
                      className="text-primary"
                    />
                    Videos integrados
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle
                      size={20}
                      strokeWidth={1.5}
                      className="text-primary"
                    />
                    Etiquetas personalizadas
                  </li>
                </ul>
              </div>
              <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <Dumbbell size={200} strokeWidth={1} />
              </div>
            </div>

            {/* Structured Programs — 4 cols */}
            <div className="md:col-span-4 p-10 rounded-[2rem] bg-secondary-container/10 border border-secondary/20 flex flex-col justify-between">
              <div>
                <Layers
                  size={48}
                  strokeWidth={1.5}
                  className="text-secondary mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 font-headline">
                  Programas estructurados
                </h3>
                <p className="text-on-surface-variant">
                  Organiza por días con series, repeticiones, intensidad y
                  descansos de forma granular.
                </p>
              </div>
            </div>

            {/* Professional PDF — 4 cols */}
            <div className="md:col-span-4 p-10 rounded-[2rem] bg-surface-container-high border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <Stamp
                  size={48}
                  strokeWidth={1.5}
                  className="text-primary mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 font-headline">
                  PDF profesional
                </h3>
                <p className="text-on-surface-variant">
                  Exporta con tu propio logo y colores. Mantén una imagen
                  corporativa de élite.
                </p>
              </div>
            </div>

            {/* Any Device — 8 cols */}
            <div className="md:col-span-8 p-10 rounded-[2rem] bg-surface-bright/20 border border-outline-variant/10 flex items-center justify-between gap-8 flex-col md:flex-row">
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4 font-headline">
                  Desde cualquier dispositivo
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Accede a tus planes desde el móvil mientras estás en el
                  gimnasio, o desde tu escritorio para sesiones de planificación
                  profunda.
                </p>
              </div>
              <div className="flex gap-4">
                <Smartphone
                  size={64}
                  strokeWidth={1}
                  className="text-on-surface-variant/50"
                />
                <Laptop
                  size={64}
                  strokeWidth={1}
                  className="text-on-surface-variant/50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-surface-container-lowest" id="pricing">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 font-headline">
              Planes para cada etapa
            </h2>
            <p className="text-on-surface-variant">
              Empieza gratis y escala a medida que crece tu cartera de clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Free Plan */}
            <div className="p-10 rounded-[2.5rem] bg-surface-container flex flex-col h-full border border-outline-variant/5">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 font-headline">
                  Plan Gratuito
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black font-headline">$0</span>
                  <span className="text-on-surface-variant font-medium">
                    /mes
                  </span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <Check size={20} strokeWidth={1.5} className="text-primary" />
                  Hasta 5 clientes
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <Check size={20} strokeWidth={1.5} className="text-primary" />
                  10 programas activos
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <Check size={20} strokeWidth={1.5} className="text-primary" />
                  30 ejercicios personalizados
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant/50">
                  <X size={20} strokeWidth={1.5} />
                  <span className="line-through">PDF sin marca de agua</span>
                </li>
              </ul>
              <button className="w-full py-4 px-6 rounded-xl font-bold border-2 border-outline-variant/30 hover:bg-surface-bright transition-all">
                Empezar gratis
              </button>
            </div>

            {/* Pro Plan */}
            <div className="p-10 rounded-[2.5rem] bg-surface-container-high relative border-2 border-primary flex flex-col h-full">
              <span className="absolute top-10 right-10 bg-primary text-on-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Más popular
              </span>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-2 font-headline">
                  Plan Pro
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black font-headline">
                    $9.99
                  </span>
                  <span className="text-on-surface-variant font-medium">
                    /mes
                  </span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 font-bold">
                  <CheckCircle
                    size={20}
                    strokeWidth={1.5}
                    className="text-primary fill-primary/20"
                  />
                  Clientes ilimitados
                </li>
                <li className="flex items-center gap-3 font-bold">
                  <CheckCircle
                    size={20}
                    strokeWidth={1.5}
                    className="text-primary fill-primary/20"
                  />
                  Programas ilimitados
                </li>
                <li className="flex items-center gap-3 font-bold">
                  <CheckCircle
                    size={20}
                    strokeWidth={1.5}
                    className="text-primary fill-primary/20"
                  />
                  Ejercicios ilimitados
                </li>
                <li className="flex items-center gap-3 font-bold">
                  <CheckCircle
                    size={20}
                    strokeWidth={1.5}
                    className="text-primary fill-primary/20"
                  />
                  PDF con tu propio logo
                </li>
                <li className="flex items-center gap-3 font-bold">
                  <CheckCircle
                    size={20}
                    strokeWidth={1.5}
                    className="text-primary fill-primary/20"
                  />
                  Envío por email directo
                </li>
              </ul>
              <button className="w-full py-4 px-6 rounded-xl font-black bg-primary text-on-primary hover:shadow-[0_0_20px_rgba(132,204,22,0.4)] transition-all">
                Comenzar prueba gratuita
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface border-t border-outline-variant/15">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-2xl font-black text-primary tracking-tighter font-headline">
              Planifit
            </div>
            <p className="text-sm text-on-surface-variant text-center md:text-left">
              Potenciando a los entrenadores del futuro.
            </p>
          </div>
          <div className="flex gap-8">
            <a
              className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
              href="#how-it-works"
            >
              Cómo funciona
            </a>
            <a
              className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
              href="#pricing"
            >
              Precios
            </a>
            <a
              className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
              href="mailto:contact@planifit.com"
            >
              Contacto
            </a>
          </div>
          <div className="flex gap-6">
            <a
              className="text-on-surface-variant/50 hover:text-primary transition-colors"
              href="https://www.facebook.com/planifitapp"
              aria-label="Facebook"
            >
              <Facebook size={24} strokeWidth={1.5} />
            </a>
            <a
              className="text-on-surface-variant/50 hover:text-primary transition-colors"
              href="https://www.instagram.com/planifitapp"
              aria-label="Instagram"
            >
              <Instagram size={24} strokeWidth={1.5} />
            </a>
          </div>
        </div>
        <div className="px-8 pb-8 max-w-7xl mx-auto text-center">
          <p className="text-xs text-on-surface-variant/50">
            © 2026 Planifit. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
