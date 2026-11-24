import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Download, MapPin, Mail } from 'lucide-react'
import photo from '../assets/vanshika.jpg'
import { profile } from '../data/content'
import { GithubIcon, LinkedinIcon } from './Icons'

const btn = 'inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors'

export default function Hero() {
  const reduce = useReducedMotion()
  const rise = (delay) => reduce ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay, ease: 'easeOut' } }

  return (
    <section id="top" className="mx-auto flex min-h-screen max-w-6xl items-center px-5 pb-16 pt-28 md:px-8">
      <div className="grid w-full items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.p {...rise(0)} className="flex items-center gap-2 text-sm text-mute">
            <MapPin size={15} aria-hidden="true" /> {profile.location}
          </motion.p>
          <motion.h1 {...rise(0.08)} className="mt-4 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
          </motion.h1>
          <motion.p {...rise(0.16)} className="mt-4 font-display text-xl text-mint sm:text-2xl">{profile.headline}</motion.p>
          <motion.p {...rise(0.24)} className="mt-6 max-w-xl text-base leading-relaxed text-mute sm:text-lg">{profile.intro}</motion.p>
          <motion.div {...rise(0.32)} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={`${btn} bg-mint text-ink hover:bg-fog`}><ArrowDown size={16} aria-hidden="true" /> View Projects</a>
            <a href="#contact" className={`${btn} border border-line text-fog hover:border-mint hover:text-mint`}><Mail size={16} aria-hidden="true" /> Contact Me</a>
            <a href={profile.resume} download className={`${btn} text-mute hover:text-fog`}><Download size={16} aria-hidden="true" /> Resume</a>
          </motion.div>
          <motion.div {...rise(0.4)} className="mt-8 flex items-center gap-2">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in a new tab)" className="rounded-full border border-line p-3 text-mute transition-colors hover:border-mint hover:text-mint"><GithubIcon /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in a new tab)" className="rounded-full border border-line p-3 text-mute transition-colors hover:border-mint hover:text-mint"><LinkedinIcon /></a>
          </motion.div>
        </div>

        <motion.div {...rise(0.2)} className="mx-auto w-full max-w-[17rem] md:max-w-[19rem] md:justify-self-end">
          <div className="relative">
            <div aria-hidden="true" className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border border-mint/50" />
            <img
              src={photo}
              alt="Portrait of Vanshika Sharma"
              width="300"
              height="320"
              className="relative aspect-[15/16] w-full rounded-3xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
