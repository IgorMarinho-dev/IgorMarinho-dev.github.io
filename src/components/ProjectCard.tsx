import type { Project } from '../types'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-sky-500/60">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-400">{project.description}</p>

      <ul className="mt-4 space-y-1 text-sm text-slate-300">
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-sky-400">▹</span>
            {item}
          </li>
        ))}
      </ul>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-slate-800 px-3 py-1 text-xs text-sky-300"
          >
            {tech}
          </li>
        ))}
      </ul>

      <a
        href={project.repoUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-auto pt-6 text-sm font-medium text-sky-400 hover:underline"
      >
        Ver no GitHub →
      </a>
    </article>
  )
}