import { STATS } from '../../../utils/portfolioData';

export function Stats() {
  return (
    <section className="py-14 px-6 max-w-[90%] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS.map((s, i) => (
          <div key={i} className="stat-c text-center opacity-0">
            <div className="font-display font-extrabold text-4xl text-gold mb-1">{s.v}</div>
            <div className="font-mono text-xs text-muted tracking-widest uppercase">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
