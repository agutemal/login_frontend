import { useState } from 'react'
import type { FormEvent } from 'react'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <main className="min-h-screen bg-[#f5f9fc] px-5 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(24,59,86,0.14)] sm:min-h-[calc(100vh-4rem)]">
        <section className="relative hidden w-[46%] overflow-hidden bg-[#183b56] p-12 text-white lg:flex lg:flex-col lg:justify-between xl:p-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[36px] border-[#f4b942]/25" />
          <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full border-[46px] border-[#5fc2ba]/20" />
          <div className="relative">
            <div className="mb-16 flex items-center gap-3 text-lg font-bold tracking-wide">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f4b942] text-xl text-[#183b56]">+</span>
              NEXA
            </div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-[#f4b942]">Tu espacio digital</p>
            <h1 className="max-w-sm text-4xl font-bold leading-tight xl:text-5xl">Todo lo que necesitas, en un solo lugar.</h1>
          </div>
          <p className="relative max-w-xs text-sm leading-6 text-slate-300">Gestiona tus proyectos, conecta con tu equipo y haz que cada idea avance.</p>
        </section>

        <section className="flex w-full items-center justify-center px-6 py-12 sm:px-12 lg:w-[54%] lg:px-16 xl:px-24">
          <div className="w-full max-w-md">
            <div className="mb-10 lg:hidden">
              <div className="flex items-center gap-3 text-lg font-bold tracking-wide text-[#183b56]"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f4b942] text-xl">+</span>NEXA</div>
            </div>
            <div className="mb-8">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#159a9c]">Bienvenido de nuevo</p>
              <h2 className="text-3xl font-bold tracking-tight text-[#183b56] sm:text-4xl">Inicia sesión</h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">Accede a tu cuenta para continuar donde lo dejaste.</p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-bold text-[#183b56]" htmlFor="email">Correo electrónico</label>
                <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#183b56] outline-none transition placeholder:text-slate-400 focus:border-[#159a9c] focus:bg-white focus:ring-4 focus:ring-[#159a9c]/15" id="email" name="email" onChange={(event) => setEmail(event.target.value)} placeholder="tu@correo.com" required type="email" value={email} />
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <label className="block text-sm font-bold text-[#183b56]" htmlFor="password">Contraseña</label>
                  <a className="text-xs font-bold text-[#159a9c] transition hover:text-[#11787a]" href="#forgot-password">¿La olvidaste?</a>
                </div>
                <div className="relative">
                  <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 pr-20 text-sm text-[#183b56] outline-none transition placeholder:text-slate-400 focus:border-[#159a9c] focus:bg-white focus:ring-4 focus:ring-[#159a9c]/15" id="password" name="password" onChange={(event) => setPassword(event.target.value)} placeholder="Escribe tu contraseña" required type={showPassword ? 'text' : 'password'} value={password} />
                  <button aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'} className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-xs font-bold text-slate-500 hover:text-[#159a9c]" onClick={() => setShowPassword(!showPassword)} type="button">{showPassword ? 'Ocultar' : 'Mostrar'}</button>
                </div>
              </div>
              <label className="flex items-center gap-3 pt-1 text-sm text-slate-500"><input className="h-4 w-4 accent-[#159a9c]" type="checkbox" /> Recordarme en este dispositivo</label>
              <button className="w-full rounded-xl bg-[#159a9c] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#159a9c]/20 transition hover:-translate-y-0.5 hover:bg-[#11787a] focus:outline-none focus:ring-4 focus:ring-[#159a9c]/25" type="submit">Entrar a mi cuenta <span aria-hidden="true">→</span></button>
            </form>
            <p className="mt-8 text-center text-sm text-slate-500">¿Aún no tienes cuenta? <a className="font-bold text-[#159a9c] hover:text-[#11787a]" href="#create-account">Crear una cuenta</a></p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default LoginPage