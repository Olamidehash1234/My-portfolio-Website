import { useState } from 'react';
import { Icon } from '../../../components/Icon';
import { FAQ } from '../../../utils/portfolioData';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="sr text-center mb-12">
        <span className="sl" style={{ justifyContent: 'center' }}>
          FAQ
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-text mt-2">Common Questions.</h2>
        <p className="font-body text-muted text-base mt-3 max-w-md mx-auto">Everything you might want to know before reaching out.</p>
      </div>
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
    </section>
  );
}
