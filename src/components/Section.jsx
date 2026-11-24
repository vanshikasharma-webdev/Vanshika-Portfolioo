export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[minmax(0,13rem)_1fr] md:gap-16 md:px-8">
        <div className="md:sticky md:top-24 md:self-start">
          <h2 id={`${id}-title`} className="font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          {intro && <p className="mt-3 text-sm leading-relaxed text-mute">{intro}</p>}
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}
