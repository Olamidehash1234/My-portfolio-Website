import { useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Icon } from '../../components/Icon';
import { AVATAR } from '../../utils/portfolioData';

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  type: string;
  budget: string;
  idea: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    type: '',
    budget: '',
    idea: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.ch',
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out', delay: 0.15 }
      );

      gsap.fromTo(
        '.ci',
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out', delay: 0.4 }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    gsap.to('.fw', {
      scale: 0.98,
      opacity: 0.5,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      onComplete: () => setIsSubmitted(true),
    });
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-[90%] mx-auto">
      <div className="mb-14">
        <span className="ch sl opacity-0">Contact</span>
        <h1 className="ch opacity-0 font-display font-extrabold text-4xl md:text-6xl text-text leading-tight mt-2">
          Project <span className="text-gold">Inquiry.</span>
        </h1>
        <p className="ch opacity-0 font-body text-muted text-lg max-w-xl mt-4">
          Tell me what you're building. I'll tell you if I can help — within 24 hours.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Left sidebar with contact info */}
        <div className="lg:col-span-2 space-y-7">
          <div className="ci opacity-0 flex items-center gap-4 mb-2">
            <img
              src={AVATAR}
              alt="Olamide"
              className="w-16 h-16 rounded-xl object-cover border border-border flex-shrink-0"
            />
            <div>
              <p className="font-display font-bold text-text">Olamide Adeola</p>
              <p className="font-mono text-xs text-muted">Senior Frontend Engineer</p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <span className="avpulse" />
                <span className="font-mono text-xs text-green-400/80">Available now</span>
              </div>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Direct lines</p>
            <div className="space-y-3.5">
              {[
                { l: 'Email', v: 'olamide@example.com', ic: 'mail', h: 'mailto:olamide@example.com' },
                { l: 'LinkedIn', v: 'in/olamide-adeola', ic: 'li', h: '#' },
                { l: 'Schedule', v: 'Book on Cal.com', ic: 'cal', h: 'https://cal.com' },
                { l: 'GitHub', v: 'github.com/olamide', ic: 'gh', h: '#' },
              ].map((item, i) => (
                <a key={i} href={item.h} className="ci opacity-0 flex items-center gap-3.5 group">
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg border border-border bg-panel text-muted group-hover:text-gold group-hover:border-gold/40 transition-all">
                    <Icon n={item.ic} s={13} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted">{item.l}</p>
                    <p className="font-body text-sm text-text group-hover:text-gold transition-colors">{item.v}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="ci opacity-0 bg-panel border border-border rounded-xl p-5">
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-3">Typical engagement</p>
            {['30-min intro call', 'Proposal + timeline', '2-week sprint cycles', 'Async Loom updates'].map(
              (s, i) => (
                <div key={i} className="flex items-center gap-2.5 mb-2 last:mb-0">
                  <span className="font-mono text-xs text-gold/60 w-4">0{i + 1}</span>
                  <span className="font-body text-sm text-muted">{s}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Right side with form */}
        <div className="lg:col-span-3">
          {isSubmitted ? (
            <div className="fw flex flex-col items-center justify-center text-center py-20 px-10 bg-panel border border-gold/20 rounded-2xl">
              <div className="w-14 h-14 rounded-full border-2 border-gold flex items-center justify-center mb-5 text-gold">
                <Icon n="chk" s={24} />
              </div>
              <h3 className="font-display font-bold text-2xl text-text mb-2">Message Received!</h3>
              <p className="font-body text-muted text-sm max-w-sm">
                Thanks {formData.name.split(' ')[0] || 'there'}! I'll review your project and follow up shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="fw space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="ff">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Name"
                    className="fi"
                  />
                  <label className="fl">Your Name</label>
                </div>
                <div className="ff">
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className="fi"
                  />
                  <label className="fl">Email Address</label>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="ff relative">
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="fi cursor-pointer"
                    style={formData.type ? {} : { color: 'transparent' }}
                  >
                    <option value="" disabled>
                      Type
                    </option>
                    <option value="webapp">Web App Dev</option>
                    <option value="consulting">Consulting</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="ds">Design System</option>
                    <option value="other">Other</option>
                  </select>
                  <label
                    className="fl"
                    style={
                      formData.type
                        ? {
                            top: '-10px',
                            left: '12px',
                            fontSize: '11px',
                            color: '#e8c547',
                            background: '#0a0a0b',
                            padding: '0 4px',
                            transform: 'none',
                          }
                        : {}
                    }
                  >
                    Project Type
                  </label>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
                    <Icon n="chev" s={13} />
                  </div>
                </div>

                <div className="ff relative">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="fi cursor-pointer"
                    style={formData.budget ? {} : { color: 'transparent' }}
                  >
                    <option value="" disabled>
                      Budget
                    </option>
                    <option value="1k-5k">$1k – $5k</option>
                    <option value="5k-15k">$5k – $15k</option>
                    <option value="15k-50k">$15k – $50k</option>
                    <option value="50k+">$50k+</option>
                    <option value="retainer">Ongoing retainer</option>
                  </select>
                  <label
                    className="fl"
                    style={
                      formData.budget
                        ? {
                            top: '-10px',
                            left: '12px',
                            fontSize: '11px',
                            color: '#e8c547',
                            background: '#0a0a0b',
                            padding: '0 4px',
                            transform: 'none',
                          }
                        : {}
                    }
                  >
                    Budget Range
                  </label>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
                    <Icon n="chev" s={13} />
                  </div>
                </div>
              </div>

              <div className="ff">
                <textarea
                  name="idea"
                  value={formData.idea}
                  onChange={handleChange}
                  rows={6}
                  required
                  placeholder="idea"
                  className="fi resize-none"
                  style={{ paddingTop: '22px' }}
                />
                <label
                  className="fl"
                  style={{
                    top: '18px',
                    transform: 'none',
                    ...(formData.idea
                      ? {
                          top: '-10px',
                          left: '12px',
                          fontSize: '11px',
                          color: '#e8c547',
                          background: '#0a0a0b',
                          padding: '0 4px',
                        }
                      : {}),
                  }}
                >
                  Tell Me About Your Idea
                </label>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 bg-gold text-ink font-display font-bold text-sm rounded-md hover:bg-gold/90 transition-all active:scale-[.99]"
              >
                Send Inquiry <Icon n="arr" s={14} />
              </button>

              <p className="font-mono text-xs text-muted text-center">
                No spam. Just a real conversation about your project.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
