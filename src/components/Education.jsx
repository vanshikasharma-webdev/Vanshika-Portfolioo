import Section from './Section'
import { education } from '../data/content'

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="space-y-10 border-l border-line pl-6">
        {education.map((e) => (
          <li key={e.school} className="relative">
            <span aria-hidden="true" className="absolute -left-[1.9rem] top-2 h-2.5 w-2.5 rounded-full bg-mint" />
            {e.dates && <p className="text-sm text-mute">{e.dates}</p>}
            <h3 className="mt-1 font-display text-xl font-bold">{e.degree}</h3>
            <p className="text-fog/80">{e.school}</p>
            <p className="mt-1 text-sm text-mute">{e.place}{e.note ? ` · ${e.note}` : ''}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
