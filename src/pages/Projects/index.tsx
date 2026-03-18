import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Icon } from '../../components/Icon';
import { PROJECTS } from '../../utils/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.ph',
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.65, ease: 'power2.out', delay: 0.15 }
      );

      gsap.utils.toArray<Element>('.pc').forEach((el, i) =>
        gsap.fromTo(
          el,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
            delay: 0.2 + i * 0.08,
            scrollTrigger: { trigger: el, start: 'top 93%' },
          }
        )
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 max-w-[90%] mx-auto">
      <div className="mb-14">
        <span className="ph sl opacity-0">Portfolio</span>
        <h1 className="ph opacity-0 font-display font-extrabold text-4xl md:text-6xl text-text leading-tight mt-2">
          Selected <span className="text-gold">Works</span>
        </h1>
        <p className="ph opacity-0 font-body text-muted text-lg max-w-lg mt-4">
          Products, tools, and experiments — built with precision and purpose.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <div
            key={p.id}
            className="pc opacity-0 card-hov bg-panel border border-border rounded-xl overflow-hidden group flex flex-col"
          >
            <div className="iz aspect-video overflow-hidden bg-dim">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-display font-bold text-base text-text group-hover:text-gold transition-colors leading-snug">
                  {p.title}
                </h3>
                {p.feat && (
                  <span className="flex-shrink-0 font-mono text-[9px] text-gold/80 border border-gold/20 px-2 py-0.5 rounded tracking-widest uppercase">
                    Featured
                  </span>
                )}
              </div>
              <p className="font-body text-muted text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-gold flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-gold/25 bg-gold/5 text-gold font-display font-semibold text-sm hover:bg-gold/10 transition-all"
              >
                <Icon n="globe" s={13} /> View Live <Icon n="ext" s={11} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
