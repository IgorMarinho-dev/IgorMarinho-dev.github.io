import { profile } from '../data/profile'
import Section from './Section'

export default function About() {
  return (
    <Section id="sobre" title="Sobre mim">
      <div className="max-w-3xl space-y-4 leading-relaxed text-slate-300">
        {profile.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}