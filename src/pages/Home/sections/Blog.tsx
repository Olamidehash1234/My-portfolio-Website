import { Icon } from '../../../components/Icon';
import { BLOGS } from '../../../utils/portfolioData';

export function Blog() {
  return (
    <section className="py-28 px-6 max-w-[90%] mx-auto">
      <div className="sr flex items-end justify-between mb-12">
        <div>
          <span className="sl">Writing</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text">From the blog.</h2>
        </div>
        <a href="#" className="hidden md:flex items-center gap-2 text-sm text-muted hover:text-gold transition-colors">
          All posts <Icon n="arr" s={13} />
        </a>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {BLOGS.map((b, i) => (
          <a key={i} href="#" className="bc blog-c opacity-0 group cursor-pointer">
            <div className="iz aspect-video overflow-hidden bg-dim">
              <img src={b.img} alt={b.ti} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="tag">{b.tg}</span>
                <span className="font-mono text-xs text-muted flex items-center gap-1">
                  <Icon n="clk" s={11} />
                  {b.rd} read
                </span>
              </div>
              <h3 className="font-display font-bold text-sm text-text leading-snug mb-2 group-hover:text-gold transition-colors">
                {b.ti}
              </h3>
              <p className="font-mono text-xs text-muted">{b.dt}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
