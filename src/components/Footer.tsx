import { useNavigate } from 'react-router-dom';
import { Icon } from './Icon';
import { AVATAR } from '../utils/portfolioData';

export default function Footer() {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0 });
  };

  return (
    <footer className="px-6 py-12 max-w-[100%] mx-auto">
      <div className="grid sm:grid-cols-3 gap-8 pb-10 border-b border-border">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <img src={AVATAR} alt="Olamide" className="nav-av" />
            <span className="font-display font-bold text-xl text-text">
              OA<span className="text-gold">.</span>
            </span>
          </div>
          <p className="font-body text-muted text-sm leading-relaxed max-w-xs">
            Senior Frontend Engineer based in Lagos, building exceptional web experiences one component at a time.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Navigation</p>
          <div className="space-y-2">
            {['/', '/projects', '/contact'].map((path, i) => {
              const labels = ['home', 'projects', 'contact'];
              return (
                <button
                  key={path}
                  onClick={() => navigateTo(path)}
                  className="block font-body text-sm text-muted hover:text-gold transition-colors capitalize"
                >
                  {labels[i]}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Connect</p>
          <div className="space-y-2">
            {[
              { l: 'GitHub', h: '#' },
              { l: 'LinkedIn', h: '#' },
              { l: 'Twitter / X', h: '#' },
              { l: 'Email', h: 'mailto:olamide@example.com' },
            ].map(({ l, h }) => (
              <a
                key={l}
                href={h}
                className="block font-body text-sm text-muted hover:text-gold transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-muted">© 2025 Olamide Adeola. Crafted with precision.</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-gold transition-colors"
        >
          Back to top <Icon n="arru" s={12} />
        </button>
      </div>
    </footer>
  );
}

