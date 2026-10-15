import { skills } from '../data/skills'
import Reveal from './Reveal'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="tecnologias" title="Tecnologias">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, index) => (
          <Reveal key={group.area} delay={(index % 4) * 0.1} className="h-full">
            <div className="h-full rounded-xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-sm font-medium uppercase tracking-wide text-slate-400">
                {group.area}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-slate-800 px-3 py-1 text-sm text-sky-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}