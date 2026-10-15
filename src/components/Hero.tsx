import { motion, type Variants } from 'motion/react'
import { profile } from '../data/profile'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto flex min-h-[80vh] max-w-5xl flex-col justify-center px-6"
    >
      <motion.p variants={item} className="font-medium text-sky-400">
        Olá, eu sou
      </motion.p>
      <motion.h1
        variants={item}
        className="mt-2 text-3xl font-bold sm:text-5xl lg:text-6xl"
      >
        {profile.name}
      </motion.h1>
      <motion.p variants={item} className="mt-4 text-xl text-slate-300 sm:text-2xl">
        {profile.role}
      </motion.p>
      <motion.p variants={item} className="mt-4 max-w-2xl text-slate-400">
        {profile.tagline}
      </motion.p>

      <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
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
      </motion.div>
    </motion.section>
  )
}