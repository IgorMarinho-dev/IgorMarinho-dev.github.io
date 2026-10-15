import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Section from './Section'

export default function Projects() {
  return (
    <Section id="projetos" title="Projetos">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  )
}