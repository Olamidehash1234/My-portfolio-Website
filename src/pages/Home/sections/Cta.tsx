import { useNavigate } from 'react-router-dom';
import { Icon } from '../../../components/Icon';

export function Cta() {
  const navigate = useNavigate();

  return (
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
  );
}
