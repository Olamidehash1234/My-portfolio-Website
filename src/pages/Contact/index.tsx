import { useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ContactHeader } from './sections/ContactHeader';
import { ContactInfo } from './sections/ContactInfo';
import { ContactForm } from './sections/ContactForm';
import { ContactSuccess } from './sections/ContactSuccess';

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
      <ContactHeader />

      <div className="grid lg:grid-cols-5 gap-12">
        <ContactInfo />

        {/* Right side with form */}
        <div className="lg:col-span-3">
          {isSubmitted ? <ContactSuccess name={formData.name} /> : <ContactForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} />}
        </div>
      </div>
    </div>
  );
}
