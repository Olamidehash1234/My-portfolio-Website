import { EDUCATION } from '../../../utils/portfolioData';

export function Education() {
  return (
    <section className="py-24 px-6 max-w-[90%] mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="sr">
          <span className="sl">Education</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text leading-tight">
            Academic <span className="text-gold">foundation.</span>
          </h2>
          <p className="font-body text-muted text-base mt-3 leading-relaxed">
            Rigorous CS education paired with continuous professional development keeps my fundamentals sharp.
          </p>
        </div>
        <div className="relative pl-8 space-y-8">
          <div className="absolute left-[11px] top-2 bottom-0 w-px bg-gradient-to-b from-gold to-transparent" />
          {EDUCATION.map((ed, i) => (
            <div key={i} className="srl relative">
              <div className="absolute -left-8 top-1.5 w-5 h-5 rounded-full border-2 border-gold/60 bg-ink flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gold" />
              </div>
              <div className="font-mono text-xs text-gold/70 mb-1">{ed.y}</div>
              <h3 className="font-display font-bold text-text text-base mb-0.5">{ed.d}</h3>
              <p className="font-body text-muted text-sm">{ed.s}</p>
              <span className="inline-block mt-2 font-mono text-xs text-dim border border-dim/50 rounded px-2 py-0.5">
                {ed.n}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
