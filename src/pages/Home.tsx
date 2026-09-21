
const Home = () => {
  return (
    <main className="min-h-screen bg-[#f5f9fc] px-5 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(24,59,86,0.14)]">
        <header className="flex items-center justify-between px-6 py-5 sm:px-10 lg:px-12">
          <a className="flex items-center gap-3 text-lg font-bold tracking-wide text-[#183b56]" href="/">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f4b942] text-xl">+</span>
            NEXA
          </a>
          <a className="rounded-xl border border-[#159a9c] px-4 py-2.5 text-sm font-bold text-[#159a9c] transition hover:bg-[#159a9c] hover:text-white" href="/login">Iniciar sesión</a>
        </header>

        <section className="relative overflow-hidden bg-[#183b56] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full border-[40px] border-[#f4b942]/25" />
          <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full border-[52px] border-[#5fc2ba]/20" />
          <div className="relative max-w-2xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-[#f4b942]">Tu espacio digital</p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Convierte tus ideas en avances reales.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">NEXA reúne tus proyectos, tareas y conversaciones para que tu equipo tenga claridad y pueda concentrarse en lo que importa.</p>
            <a className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#f4b942] px-6 py-3.5 text-sm font-bold text-[#183b56] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#ffd166] focus:outline-none focus:ring-4 focus:ring-[#f4b942]/30" href="/login">Entrar a NEXA <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#159a9c]">Todo en un solo lugar</p>
            <h2 className="text-3xl font-bold tracking-tight text-[#183b56] sm:text-4xl">Una forma más simple de trabajar juntos.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-100 bg-[#f8fbfc] p-6">
              <span className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-[#f4b942]/20 text-2xl text-[#183b56]">✓</span>
              <h3 className="text-lg font-bold text-[#183b56]">Proyectos claros</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">Organiza cada objetivo y mantén visible el siguiente paso.</p>
            </article>
            <article className="rounded-2xl border border-slate-100 bg-[#f8fbfc] p-6">
              <span className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-[#159a9c]/15 text-2xl text-[#159a9c]">↗</span>
              <h3 className="text-lg font-bold text-[#183b56]">Equipos conectados</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">Comparte avances y decisiones sin perder el contexto.</p>
            </article>
            <article className="rounded-2xl border border-slate-100 bg-[#f8fbfc] p-6">
              <span className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-[#183b56]/10 text-2xl text-[#183b56]">◎</span>
              <h3 className="text-lg font-bold text-[#183b56]">Progreso visible</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">Toma mejores decisiones con una visión actualizada.</p>
            </article>
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-slate-100 px-6 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <span>Haz que cada idea avance.</span>
          <a className="font-bold text-[#159a9c] hover:text-[#11787a]" href="/login">Comenzar ahora <span aria-hidden="true">→</span></a>
        </footer>
      </div>
    </main>
  )
}

export default Home