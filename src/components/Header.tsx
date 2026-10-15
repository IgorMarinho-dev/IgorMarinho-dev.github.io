import { motion, useScroll, useSpring } from 'motion/react'

const links = [
  { href: '#projetos', label: 'Projetos' },
  { href: '#tecnologias', label: 'Tecnologias' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="font-bold text-sky-400">
          IM
        </a>
        <ul className="flex gap-4 text-sm text-slate-300 sm:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-sky-400">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <motion.div
        style={{ scaleX }}
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-sky-400"
      />
    </header>
  )
}