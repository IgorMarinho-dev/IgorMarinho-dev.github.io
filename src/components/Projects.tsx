import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import Section from './Section'

export default function Projects() {
  return (
    <Section id="projetos" title="Projetos">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 3) * 0.1} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}