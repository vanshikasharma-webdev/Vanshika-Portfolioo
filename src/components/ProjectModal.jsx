import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import { Tags } from './ProjectCard'

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!project) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey) }
  }, [project, onClose])

  const t = reduce ? { duration: 0 } : { duration: 0.2 }

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={t}
          onClick={onClose}
        >
          <motion.div
            role="dialog" aria-modal="true" aria-labelledby="modal-title"
            className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-line bg-panel sm:rounded-2xl"
            initial={reduce ? false : { y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={reduce ? { opacity: 0 } : { y: 24, opacity: 0 }} transition={t}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 p-6 pb-0">
              <div>
                <p className="text-sm text-mute">{project.category}</p>
                <h3 id="modal-title" className="font-display text-2xl font-bold tracking-tight">{project.title}</h3>
              </div>
              <button ref={closeRef} type="button" onClick={onClose} aria-label="Close project details" className="rounded-full border border-line p-2 text-mute hover:text-fog">
                <X size={18} />
              </button>
            </div>
            {project.image && (
              <img src={project.image} alt={project.imageAlt} className="mt-5 max-h-[22rem] w-full bg-ink object-contain" />
            )}
            <div className="space-y-5 p-6">
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-fog/90 marker:text-mint">
                {project.details.map((d) => <li key={d}>{d}</li>)}
              </ul>
              {project.list && (
                <p className="text-sm text-mute">Includes: {project.list.join(', ')}.</p>
              )}
              <div>
                <p className="mb-2 text-sm text-mute">Technologies</p>
                <Tags tags={project.stack.split(', ')} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
