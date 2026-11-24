import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, profile } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    nav.forEach(([id]) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect() }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const link = (id) =>
    `rounded-md px-3 py-2 text-sm transition-colors ${active === id ? 'text-mint' : 'text-mute hover:text-fog'}`

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors ${scrolled || open ? 'border-b border-line bg-ink/90 backdrop-blur' : ''}`}>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="font-display text-lg font-bold tracking-tight" onClick={() => setOpen(false)}>
          {profile.name.split(' ')[0]}<span className="text-mint">.</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {nav.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} className={link(id)} aria-current={active === id ? 'true' : undefined}>{label}</a></li>
          ))}
        </ul>
        <button
          type="button"
          className="rounded-md p-2 text-fog md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-ink px-5 pb-4 md:hidden">
          {nav.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className={`block py-3 text-base ${active === id ? 'text-mint' : 'text-fog'}`}>{label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
