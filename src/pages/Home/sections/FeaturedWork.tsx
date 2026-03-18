import { useNavigate } from 'react-router-dom';
import { Icon } from '../../../components/Icon';
import { PROJECTS } from '../../../utils/portfolioData';

export function FeaturedWork() {
  const navigate = useNavigate();

  return (
    <section className="py-28 px-6 max-w-[90%] mx-auto">
      <div className="sr flex items-end justify-between mb-12">
        <div>
          <span className="sl">Featured Works</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text">Selected Projects</h2>
        </div>
        <button
          onClick={() => {
            navigate('/projects');
            window.scrollTo({ top: 0 });
          }}
          className="hidden md:flex items-center gap-2 text-sm text-muted hover:text-gold transition-colors"
        >
          All projects <Icon n="arr" s={13} />
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {PROJECTS.filter((p) => p.feat).map((p) => (
          <div key={p.id} className="fc opacity-0 card-hov bg-panel border border-border rounded-xl overflow-hidden group">
            <div className="iz aspect-video overflow-hidden bg-dim">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold text-base text-text mb-2 group-hover:text-gold transition-colors">
                {p.title}
              </h3>
              <p className="font-body text-muted text-sm leading-relaxed mb-4 line-clamp-2">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.slice(0, 3).map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center md:hidden">
        <button
          onClick={() => {
            navigate('/projects');
            window.scrollTo({ top: 0 });
          }}
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-gold transition-colors"
        >
          All projects <Icon n="arr" s={13} />
        </button>
      </div>
    </section>
  );
}
