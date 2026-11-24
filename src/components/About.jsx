import Section from './Section'
import { profile } from '../data/content'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-fog/90">
        {profile.about.map((p) => <p key={p}>{p}</p>)}
      </div>
    </Section>
  )
}
