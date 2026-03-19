import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Icon } from './Icon';
import { AVATAR } from '../utils/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    gsap.fromTo(
      mobileMenuRef.current,
      { x: '100%' },
      { x: '0%', duration: 0.5, ease: 'power3.out' }
    );
    gsap.fromTo(
      '.mi',
      { opacity: 0, y: 22 },
      { opacity: 1, y: 0, stagger: 0.08, delay: 0.18, duration: 0.4, ease: 'power2.out' }
    );
  };

  const closeMobileMenu = () => {
    gsap.to(mobileMenuRef.current, {
      x: '100%',
      duration: 0.4,
      ease: 'power3.in',
      onComplete: () => setIsMobileMenuOpen(false),
    });
  };

  const navigateTo = (path: string) => {
    navigate(path);
    closeMobileMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageName = () => {
    if (location.pathname === '/') return 'home';
    return location.pathname.replace('/', '');
  };

  const currentPage = getPageName();
  const links = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'blog', label: 'Blog', path: '/' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`glass-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-4'
        }`}
      >
        <div className="max-w-[90%] mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => navigateTo('/')}
            className="flex items-center gap-2.5 group"
          >
            <img src={AVATAR} alt="Olamide" className="nav-av group-hover:border-gold" />
            <span className="font-display font-bold text-xl tracking-tight text-text group-hover:text-gold transition-colors">
              OA<span className="text-gold">.</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {links.map(({ id, label, path }) => (
              <button
                key={id}
                onClick={() => navigateTo(path)}
                className={`text-sm font-body transition-colors relative group ${
                  currentPage === id ? 'text-gold' : 'text-muted hover:text-text'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                    currentPage === id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
            <button
              type="button"
              data-cal-namespace="free-consultation"
              data-cal-link="olamide-adeola-ogbndk/free-consultation"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-gold/30 bg-gold/5 text-gold text-sm font-display font-semibold hover:bg-gold/12 hover:border-gold/60 transition-all"
            >
              <Icon n="cal" s={13} /> Book a Consultation
            </button>
          </div>

          <button
            className="md:hidden text-text"
            onClick={isMobileMenuOpen ? closeMobileMenu : openMobileMenu}
          >
            <Icon n={isMobileMenuOpen ? 'x' : 'menu'} s={22} />
          </button>
        </div>
      </nav>

      <div ref={mobileMenuRef} className="mob-menu">
        <button
          className="absolute top-5 right-6 text-muted"
          onClick={closeMobileMenu}
        >
          <Icon n="x" s={24} />
        </button>
        {links.map(({ id, label, path }) => (
          <button
            key={id}
            onClick={() => navigateTo(path)}
            className="mi font-display font-bold text-4xl text-text hover:text-gold transition-colors"
          >
            {label}
          </button>
        ))}
        <button
          type="button"
          data-cal-namespace="free-consultation"
          data-cal-link="olamide-adeola-ogbndk/free-consultation"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          className="mi flex items-center gap-2 px-6 py-3 border border-gold/40 bg-gold/8 text-gold font-display font-semibold text-lg rounded-md"
        >
          <Icon n="cal" s={16} /> Book a Consult
        </button>
      </div>
    </>
  );
}

