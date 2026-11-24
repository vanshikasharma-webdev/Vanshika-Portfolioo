import { Award, BadgeCheck, Loader } from 'lucide-react'
import Section from './Section'
import { achievement, certifications } from '../data/content'

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements & Certifications">
      <div className="flex gap-4 rounded-2xl border border-line bg-panel p-6">
        <Award className="mt-1 shrink-0 text-mint" aria-hidden="true" />
        <div>
          <h3 className="font-display text-xl font-bold">{achievement.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-mute">{achievement.text}</p>
        </div>
      </div>
      <ul className="mt-6 divide-y divide-line">
        {certifications.map((c) => (
          <li key={c.title} className="flex gap-4 py-5">
            {c.progress
              ? <Loader className="mt-0.5 shrink-0 text-amber" size={20} aria-hidden="true" />
              : <BadgeCheck className="mt-0.5 shrink-0 text-mint" size={20} aria-hidden="true" />}
            <div>
              <h3 className="font-medium">{c.title}</h3>
              {c.meta && <p className={`text-sm ${c.progress ? 'text-amber' : 'text-mute'}`}>{c.meta}</p>}
              {c.topics && <p className="mt-2 max-w-xl text-sm leading-relaxed text-mute">Covers {c.topics}.</p>}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
