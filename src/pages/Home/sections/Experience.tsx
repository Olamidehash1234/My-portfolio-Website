import { EXPERIENCE } from '../../../utils/portfolioData';

export function Experience() {
  return (
    <section className="py-28 px-6 max-w-[90%] mx-auto">
      <div className="sr grid md:grid-cols-2 gap-10 items-end mb-14">
        <div>
          <span className="sl">Experience</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text">
            Where I've <span className="text-gold">been.</span>
          </h2>
        </div>
        <p className="font-body text-muted text-base leading-loose">
          A track record of shipping at fast-growing Nigerian startups to established tech brands.
        </p>
      </div>
      <div className="relative pl-9 space-y-10 border-l border-border ml-3">
        {EXPERIENCE.map((e, i) => (
          <div key={i} className="ec opacity-0 relative group">
            <div className="absolute -left-[calc(2.25rem+4px)] top-2 w-[10px] h-[10px] rounded-full border-2 border-gold bg-ink group-hover:bg-gold transition-colors" />
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-mono text-xs text-gold/70 border border-gold/15 bg-gold/5 px-2.5 py-0.5 rounded-full">
                {e.p}
              </span>
              <span className="font-mono text-xs text-muted">{e.t}</span>
            </div>
            <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
              <h3 className="font-display font-bold text-lg text-text">{e.r}</h3>
              <span className="font-display font-semibold text-sm text-gold">{e.co}</span>
            </div>
            <p className="font-body text-muted text-sm leading-relaxed mb-3">{e.d}</p>
            <div className="flex flex-wrap gap-1.5">
              {e.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
