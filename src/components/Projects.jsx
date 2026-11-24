import { useCallback, useRef, useState } from 'react'
import Section from './Section'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projects } from '../data/content'

export default function Projects() {
  const [active, setActive] = useState(null)
  const trigger = useRef(null)

  const open = (project, el) => { trigger.current = el; setActive(project) }
  const close = useCallback(() => {
    setActive(null)
    trigger.current?.focus()
  }, [])

  return (
    <Section id="projects" title="Projects" intro="Open any project for the full details.">
      <div className="space-y-6">
        {projects.map((p) => <ProjectCard key={p.id} project={p} onOpen={open} />)}
      </div>
      <ProjectModal project={active} onClose={close} />
    </Section>
  )
}
