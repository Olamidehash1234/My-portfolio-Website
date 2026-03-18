import { AVATAR, STACK, SKILLS } from '../../../utils/portfolioData';

export function About() {
  return (
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
            <img
              src={AVATAR}
              alt="Olamide Adeola"
              className="w-14 h-14 rounded-xl object-cover border border-border flex-shrink-0"
            />
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
  );
}
