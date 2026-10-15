import { profile } from '../data/profile'

const links = [
  { label: 'GitHub', href: profile.github, external: true },
  { label: 'LinkedIn', href: profile.linkedin, external: true },
  { label: 'E-mail', href: `mailto:${profile.email}`, external: false },
]

export default function Footer() {
  return (
    <footer id="contato" className="scroll-mt-20 border-t border-slate-800">
      <div className="mx-auto max-w-5xl px-6 py-12 text-center">
        <p className="text-lg font-semibold">Vamos conversar?</p>
        <p className="mt-2 text-sm text-slate-400">{profile.email}</p>

        <ul className="mt-6 flex justify-center gap-6 text-sm">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external && { target: '_blank', rel: 'noreferrer' })}
                className="font-medium text-sky-400 transition hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-xs text-slate-500">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  )
}