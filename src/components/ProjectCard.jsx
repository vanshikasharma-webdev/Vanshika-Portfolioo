import { ArrowUpRight } from 'lucide-react'

export function Tags({ tags }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((t) => <li key={t} className="rounded-md bg-ink px-2.5 py-1 text-xs text-mint ring-1 ring-line">{t}</li>)}
    </ul>
  )
}

export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="grid overflow-hidden rounded-2xl border border-line bg-panel sm:grid-cols-[1fr_1.1fr]">
      <div className="aspect-[16/10] sm:aspect-auto sm:min-h-64">
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover"
            style={{ objectPosition: project.imagePosition }}
          />
        ) : (
          <ul aria-label="Mini-projects" className="flex h-full flex-wrap content-center gap-2 bg-ink p-6">
            {project.list.map((item) => (
              <li key={item} className="rounded-md border border-line px-2.5 py-1.5 text-sm text-fog">{item}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex flex-col p-6">
        <p className="text-sm text-mute">{project.category}</p>
        <h3 className="mt-1 font-display text-2xl font-bold tracking-tight">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-mute">{project.summary}</p>
        <div className="mt-4"><Tags tags={project.tags} /></div>
        <button
          type="button"
          onClick={(e) => onOpen(project, e.currentTarget)}
          className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-mint hover:text-fog"
          aria-haspopup="dialog"
        >
          View Details <ArrowUpRight size={16} aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}
