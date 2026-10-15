import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-5xl flex-col justify-center px-6">
      <p className="font-medium text-sky-400">Olá, eu sou</p>
      <h1 className="mt-2 text-3xl font-bold sm:text-5xl lg:text-6xl">{profile.name}</h1>
      <p className="mt-4 text-xl text-slate-300 sm:text-2xl">{profile.role}</p>
      <p className="mt-4 max-w-2xl text-slate-400">{profile.tagline}</p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#projetos"
          className="rounded-lg bg-sky-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-sky-400"
        >
          Ver projetos
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-slate-700 px-5 py-3 font-medium transition hover:border-sky-400 hover:text-sky-400"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-slate-700 px-5 py-3 font-medium transition hover:border-sky-400 hover:text-sky-400"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}