import Section from './Section'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10 border-l border-line pl-6">
        {experience.map((e) => (
          <li key={e.org} className="relative">
            <span aria-hidden="true" className="absolute -left-[1.9rem] top-2 h-2.5 w-2.5 rounded-full bg-mint" />
            <p className="text-sm text-mute">{e.dates} · {e.type}</p>
            <h3 className="mt-1 font-display text-xl font-bold">{e.role}</h3>
            <p className="text-fog/80">{e.org}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-mute marker:text-line">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
