import Section from './Section'
import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="Levels are my own honest rating. Amber means I'm still learning it.">
      <dl className="divide-y divide-line">
        {skillGroups.map((g) => (
          <div key={g.title} className="grid gap-3 py-5 first:pt-0 sm:grid-cols-[8rem_1fr] sm:gap-6">
            <dt className="font-display text-base font-medium text-mute">{g.title}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s.name}
                    className={`rounded-full border px-3 py-1.5 text-sm ${s.progress ? 'border-amber/50 text-amber' : 'border-line bg-panel text-fog'}`}
                  >
                    {s.name}
                    {s.level && <span className="ml-2 text-mute">{s.level}</span>}
                    {s.progress && <span className="ml-2 text-xs">in progress</span>}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
