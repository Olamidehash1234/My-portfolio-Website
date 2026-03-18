import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../../components/Icon';
import { AVATAR } from '../../../utils/portfolioData';

export function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const navigate = useNavigate();
  const nm = 'Olamide Adeola';

  return (
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
            {nm.split('').map((char, i) => (
              <span key={i} className="hero-char">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
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
  );
}
