import { Icon } from '../../../components/Icon';
import { AVATAR } from '../../../utils/portfolioData';

export function ContactInfo() {
  const CAL_NAMESPACE = "free-consultation";
  const CAL_LINK = "olamide-adeola-ogbndk/free-consultation";

  return (
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
            item.ic === 'cal' ? (
              <button
                key={i}
                type="button"
                data-cal-namespace={CAL_NAMESPACE}
                data-cal-link={CAL_LINK}
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                className="ci opacity-0 flex items-center gap-3.5 group"
              >
                <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg border border-border bg-panel text-muted group-hover:text-gold group-hover:border-gold/40 transition-all">
                  <Icon n={item.ic} s={13} />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted">{item.l}</p>
                  <p className="font-body text-sm text-text group-hover:text-gold transition-colors">{item.v}</p>
                </div>
              </button>
            ) : (
              <a key={i} href={item.h} className="ci opacity-0 flex items-center gap-3.5 group">
                <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg border border-border bg-panel text-muted group-hover:text-gold group-hover:border-gold/40 transition-all">
                  <Icon n={item.ic} s={13} />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted">{item.l}</p>
                  <p className="font-body text-sm text-text group-hover:text-gold transition-colors">{item.v}</p>
                </div>
              </a>
            )
          ))}
        </div>
      </div>

      <div className="ci opacity-0 bg-panel border border-border rounded-xl p-5">
        <p className="font-mono text-xs text-muted uppercase tracking-widest mb-3">Typical engagement</p>
        {['30-min intro call', 'Proposal + timeline', '2-week sprint cycles', 'Async Loom updates'].map((s, i) => (
          <div key={i} className="flex items-center gap-2.5 mb-2 last:mb-0">
            <span className="font-mono text-xs text-gold/60 w-4">0{i + 1}</span>
            <span className="font-body text-sm text-muted">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
