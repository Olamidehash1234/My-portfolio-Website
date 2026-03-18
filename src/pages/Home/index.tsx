import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Hero } from './sections/Hero';
import { Stats } from './sections/Stats';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { FeaturedWork } from './sections/FeaturedWork';
import { Experience } from './sections/Experience';
import { Testimonials } from './sections/Testimonials';
import { Education } from './sections/Education';
import { Blog } from './sections/Blog';
import { Faq } from './sections/Faq';
import { Cta } from './sections/Cta';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.25 });
      tl.fromTo('.he', { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });

      const chars = document.querySelectorAll('.hero-char');
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

  return (
    <div>
      <Hero />
      <div className="div" />

      <Stats />
      <div className="div" />

      <About />
      <div className="div" />

      <Services />
      <div className="div" />

      <FeaturedWork />
      <div className="div" />

      <Experience />
      <div className="div" />

      <Testimonials />
      <div className="div" />

      <Education />
      <div className="div" />

      <Blog />
      <div className="div" />

      <Faq />
      <div className="div" />

      <Cta />
    </div>
  );
}
