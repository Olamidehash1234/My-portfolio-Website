import { Icon } from '../../../components/Icon';
import { TESTIMONIALS } from '../../../utils/portfolioData';

export function Testimonials() {
  return (
    <section className="py-28 px-6 max-w-[90%] mx-auto">
      <div className="sr mb-12">
        <span className="sl">Testimonials</span>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-text">What clients say.</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="tc tes-c opacity-0">
            <div className="text-gold/35">
              <Icon n="qt" s={26} />
            </div>
            <p className="font-body text-muted text-sm leading-loose flex-1 italic">"{t.tx}"</p>
            <div className="flex items-center gap-3 pt-3 border-t border-border">
              <img src={t.av} alt={t.n} className="w-10 h-10 rounded-full object-cover border border-border" />
              <div>
                <p className="font-display font-bold text-sm text-text">{t.n}</p>
                <p className="font-mono text-xs text-muted">{t.r}</p>
              </div>
              <div className="ml-auto flex gap-0.5">
                {Array(t.rt)
                  .fill(0)
                  .map((_, j) => (
                    <Icon key={j} n="star" s={11} c="text-gold" />
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
