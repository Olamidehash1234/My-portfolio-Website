import { useNavigate } from 'react-router-dom';
import { Icon } from '../../../components/Icon';
import { SERVICES } from '../../../utils/portfolioData';

export function Services() {
  const navigate = useNavigate();

  return (
    <section className="py-28 px-6 max-w-[90%] mx-auto">
      <div className="sr flex items-end justify-between mb-12">
        <div>
          <span className="sl">What I do</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text">Services</h2>
        </div>
        <button
          onClick={() => {
            navigate('/contact');
            window.scrollTo({ top: 0 });
          }}
          className="hidden md:flex items-center gap-2 text-sm text-muted hover:text-gold transition-colors"
        >
          Work together <Icon n="arr" s={13} />
        </button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SERVICES.map((s, i) => (
          <div key={i} className="sc svc-c opacity-0">
            <div className="w-10 h-10 rounded-lg border border-gold/25 bg-gold/8 flex items-center justify-center text-gold flex-shrink-0">
              <Icon n={s.ic} s={18} />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-text mb-2">{s.ti}</h3>
              <p className="font-body text-muted text-sm leading-relaxed">{s.de}</p>
            </div>
            <ul className="mt-auto space-y-1.5">
              {s.pts.map((pt, j) => (
                <li key={j} className="flex items-center gap-2 font-mono text-xs text-muted">
                  <Icon n="chk" s={11} c="text-gold flex-shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
