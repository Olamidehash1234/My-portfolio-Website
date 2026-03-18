import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Icon } from '../../components/Icon';
import {
  AVATAR,
  PROJECTS,
  STACK,
  SKILLS,
  EXPERIENCE,
  SERVICES,
  TESTIMONIALS,
  EDUCATION,
  BLOGS,
  FAQ,
  STATS,
} from '../../utils/portfolioData';

gsap.registerPlugin(ScrollTrigger);

// FAQ Component
function FaqList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      {FAQ.map((item, i) => (
        <div key={i} className="faq-item">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-panel/60 transition-colors group"
          >
            <span className="font-display font-semibold text-sm md:text-base text-text group-hover:text-gold transition-colors pr-4">
              {item.q}
            </span>
            <span
              className={`text-gold flex-shrink-0 transition-transform duration-300 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            >
              <Icon n="chev" s={16} />
            </span>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5">
              <p className="font-body text-muted text-sm leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.25 });
      tl.fromTo('.he', { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });

      const chars = nameRef.current?.querySelectorAll('.hero-char') || [];
      tl.fromTo(
        chars,
        { opacity: 0, y: 52, rotationX: -38 },
        { opacity: 1, y: 0, rotationX: 0, stagger: 0.033, duration: 0.65, ease: 'power3.out' },
        '-=.15'
      );

      tl.fromTo('.hs', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, '-=.3');
      tl.fromTo('.hc', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=.35');
      tl.fromTo(
        '.hero-av-wrap',
        { opacity: 0, scale: 0.82 },
        { opacity: 1, scale: 1, duration: 0.85, ease: 'back.out(1.3)' },
        '-=.7'
      );
      tl.fromTo('.hscr', { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=.2');

      gsap.utils.toArray<Element>('.sr').forEach((el) =>
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 89%' },
          }
        )
      );

      gsap.utils.toArray<Element>('.srl').forEach((el) =>
        gsap.fromTo(
          el,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 89%' },
          }
        )
      );

      gsap.utils.toArray<Element>('.fc').forEach((el, i) =>
        gsap.fromTo(
          el,
          { opacity: 0, y: 46 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power2.out',
            delay: i * 0.1,
            scrollTrigger: { trigger: el, start: 'top 92%' },
          }
        )
      );

      gsap.utils.toArray<Element>('.stat-c').forEach((el, i) =>
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.92 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.55,
            ease: 'back.out(1.2)',
            delay: i * 0.07,
            scrollTrigger: { trigger: el, start: 'top 92%' },
          }
        )
      );

      gsap.utils.toArray<Element>('.skill-fill').forEach((el) =>
        ScrollTrigger.create({
          trigger: el,
          start: 'top 90%',
          once: true,
          onEnter: () => gsap.to(el, { scaleX: 1, duration: 1, ease: 'power2.out' }),
        })
      );

      gsap.utils.toArray<Element>('.sc').forEach((el, i) =>
        gsap.fromTo(
          el,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: 'power2.out',
            delay: i * 0.1,
            scrollTrigger: { trigger: el, start: 'top 91%' },
          }
        )
      );

      gsap.utils.toArray<Element>('.tc').forEach((el, i) =>
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            delay: i * 0.1,
            scrollTrigger: { trigger: el, start: 'top 91%' },
          }
        )
      );

      gsap.utils.toArray<Element>('.ec').forEach((el, i) =>
        gsap.fromTo(
          el,
          { opacity: 0, x: -18 },
          {
            opacity: 1,
            x: 0,
            duration: 0.55,
            ease: 'power2.out',
            delay: i * 0.1,
            scrollTrigger: { trigger: el, start: 'top 89%' },
          }
        )
      );

      gsap.utils.toArray<Element>('.bc').forEach((el, i) =>
        gsap.fromTo(
          el,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power2.out',
            delay: i * 0.1,
            scrollTrigger: { trigger: el, start: 'top 92%' },
          }
        )
      );
    });

    return () => ctx.revert();
  }, []);

  const nm = 'Olamide Adeola';

  return (
    <div>
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center pt-28 pb-16 px-6 max-w-[90%] mx-auto relative">
        <div
          className="absolute top-1/3 right-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(232,197,71,.05) 0%,transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(255,107,53,.04) 0%,transparent 70%)' }}
        />

        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
          {/* Text */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="he opacity-0 mb-5">
              <span className="sl">Available for work · Lagos, NG</span>
            </div>
            <h1
              ref={nameRef}
              className="hero-name font-display font-extrabold text-text leading-[0.9] mb-6"
              style={{ fontSize: 'clamp(2.9rem,7.2vw,6.2rem)', perspective: '600px' }}
            >
              Olamide Adeola
            </h1>
            <p className="hs opacity-0 font-body text-muted text-lg md:text-xl leading-relaxed max-w-xl mb-8">
              Senior Frontend Engineer — 4+ years turning complex product ideas into{' '}
              <em className="text-text not-italic font-medium">fast</em>,{' '}
              <em className="text-text not-italic font-medium">accessible</em>, and{' '}
              <em className="text-text not-italic font-medium">scalable</em> web applications with{' '}
              <span className="text-gold">React</span>, <span className="text-gold">TypeScript</span>, and{' '}
              <span className="text-gold">Node.js</span>.
            </p>
            <div className="hc opacity-0 flex flex-wrap gap-3 mb-5">
              <button
                onClick={() => {
                  navigate('/projects');
                  window.scrollTo({ top: 0 });
                }}
                className="flex items-center gap-2 px-6 py-3 bg-gold text-ink font-display font-bold text-sm rounded-md hover:bg-gold/90 transition-all"
              >
                View Work <Icon n="arr" s={14} />
              </button>
              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-border text-muted font-display font-semibold text-sm rounded-md hover:border-gold/40 hover:text-text transition-all"
              >
                <Icon n="cal" s={14} /> Book a Call
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-3 border border-border text-muted font-display font-semibold text-sm rounded-md hover:border-gold/40 hover:text-text transition-all"
              >
                <Icon n="dl" s={14} /> Resume
              </a>
            </div>
            <div className="hc opacity-0 flex gap-3">
              {['gh', 'li', 'tw'].map((n) => (
                <a
                  key={n}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted hover:text-gold hover:border-gold/40 transition-all"
                >
                  <Icon n={n} s={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end gap-5 flex-shrink-0">
            <div className="hero-av-wrap opacity-0">
              <img src={AVATAR} alt="Olamide Adeola" className="hero-av-img" />
              <div className="av-badge">
                <span className="avpulse" />
                Open to work
              </div>
            </div>
            <div className="flex gap-6">
              {[
                { v: '4+', l: 'Years' },
                { v: '40+', l: 'Projects' },
                { v: '12', l: 'Clients' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="font-display font-bold text-gold text-2xl">{s.v}</div>
                  <div className="font-mono text-muted text-xs">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hscr opacity-0 absolute bottom-8 left-6 flex items-center gap-3">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-gold/40" />
          <span className="font-mono text-muted text-xs">scroll</span>
        </div>
      </section>

      <div className="div" />

      {/* STATS */}
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

      <div className="div" />

      {/* ABOUT */}
      <section className="py-28 px-6 max-w-[90%] mx-auto">
        <div className="sr">
          <span className="sl">About me</span>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-5">
            <h2 className="sr font-display font-bold text-3xl md:text-4xl text-text leading-tight">
              I build things people <span className="text-gold">actually use.</span>
            </h2>
            <p className="sr font-body text-muted text-base leading-loose">
              For 4+ years I've worked end-to-end on products — owning the frontend from blank Figma frame to
              production deploy. Most notably, I led all client-side engineering at <strong className="text-text">Fastmeko</strong>,
              a growing Nigerian SaaS marketplace, building the design system, real-time features, and performance
              architecture from scratch.
            </p>
            <p className="sr font-body text-muted text-base leading-loose">
              I care about invisible details: sub-100ms interactions, semantic markup, zero layout shift, and code
              legible enough that the next engineer feels at home immediately.
            </p>
            <p className="sr font-body text-muted text-base leading-loose">
              Outside of work I write about frontend engineering, mentor junior developers, and contribute to open-source
              tooling in the Nigerian tech ecosystem.
            </p>
            <div className="sr flex items-center gap-4 pt-2 bg-panel border border-border rounded-xl p-4">
              <img src={AVATAR} alt="Olamide Adeola" className="w-14 h-14 rounded-xl object-cover border border-border flex-shrink-0" />
              <div>
                <p className="font-display font-bold text-text text-sm">Olamide Adeola</p>
                <p className="font-mono text-xs text-muted">Senior Frontend Engineer · Lagos, NG</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="avpulse" />
                  <span className="font-mono text-xs text-green-400/80">Available for projects</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <div className="sr">
              <p className="font-mono text-xs text-muted tracking-widest uppercase mb-3">Tech Stack</p>
              <div className="mq-wrap">
                <div className="mq-track">
                  {[...STACK, ...STACK].map((item, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 font-mono text-xs text-muted border border-border rounded-full px-4 py-1.5 hover:border-gold/30 hover:text-text transition-all cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="sr space-y-4 pt-1">
              <p className="font-mono text-xs text-muted tracking-widest uppercase">Proficiency</p>
              {SKILLS.map((sk) => (
                <div key={sk.n}>
                  <div className="flex justify-between mb-1.5">
                    <span className="font-mono text-xs text-muted">{sk.n}</span>
                    <span className="font-mono text-xs text-gold/70">{sk.v}%</span>
                  </div>
                  <div className="h-0.5 bg-border rounded-full overflow-hidden">
                    <div className="skill-fill" style={{ width: `${sk.v}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="div" />

      {/* SERVICES */}
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

      <div className="div" />

      {/* FEATURED WORK */}
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

      <div className="div" />

      {/* WORK EXPERIENCE */}
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

      <div className="div" />

      {/* TESTIMONIALS */}
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

      <div className="div" />

      {/* EDUCATION */}
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

      <div className="div" />

      {/* BLOG */}
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

      <div className="div" />

      {/* FAQ */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="sr text-center mb-12">
          <span className="sl" style={{ justifyContent: 'center' }}>
            FAQ
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text mt-2">Common Questions.</h2>
          <p className="font-body text-muted text-base mt-3 max-w-md mx-auto">Everything you might want to know before reaching out.</p>
        </div>
        <FaqList />
      </section>

      <div className="div" />

      {/* CTA */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center">
        <div className="sr">
          <span className="sl" style={{ justifyContent: 'center' }}>
            Let's connect
          </span>
        </div>
        <h2 className="sr font-display font-extrabold text-4xl md:text-6xl text-text leading-tight mb-5 mt-3">
          Let's Build <span className="text-gold">Together.</span>
        </h2>
        <p className="sr font-body text-muted text-lg max-w-lg mx-auto mb-10">
          Whether you have a product idea, need an engineering partner, or want to level-up your team's frontend — I'm ready to hear about
          it.
        </p>
        <div className="sr flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => {
              navigate('/contact');
              window.scrollTo({ top: 0 });
            }}
            className="flex items-center gap-2 px-7 py-3.5 bg-gold text-ink font-display font-bold text-sm rounded-md hover:bg-gold/90 transition-all"
          >
            Start a Conversation <Icon n="arr" s={14} />
          </button>
          <a
            href="mailto:olamide@example.com"
            className="flex items-center gap-2 px-7 py-3.5 border border-border text-muted font-display font-semibold text-sm rounded-md hover:border-gold/40 hover:text-text transition-all"
          >
            <Icon n="mail" s={14} /> Direct Email
          </a>
        </div>
      </section>
    </div>
  );
}
