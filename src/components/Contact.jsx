import { Mail } from 'lucide-react'
import Section from './Section'
import { profile } from '../data/content'
import { GithubIcon, LinkedinIcon } from './Icons'

const row = 'group flex items-center justify-between gap-4 py-5 transition-colors hover:text-mint'

export default function Contact() {
  return (
    <Section id="contact" title="Contact" intro="Open to internships and entry-level roles.">
      <ul className="max-w-xl divide-y divide-line border-y border-line">
        <li><a href={`mailto:${profile.email}`} className={row}><span className="flex items-center gap-3"><Mail size={20} aria-hidden="true" /> {profile.email}</span></a></li>
        <li><a href={profile.github} target="_blank" rel="noopener noreferrer" className={row}><span className="flex items-center gap-3"><GithubIcon /> github.com/vanshikasharma-webdev</span><span className="sr-only">(opens in a new tab)</span></a></li>
        <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={row}><span className="flex items-center gap-3"><LinkedinIcon /> linkedin.com/in/vanshikasharma03</span><span className="sr-only">(opens in a new tab)</span></a></li>
      </ul>
    </Section>
  )
}
