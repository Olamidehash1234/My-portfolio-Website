export const AVATAR = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=90&fit=crop&crop=face';

export const PROJECTS = [
  {
    id: 1,
    title: 'Fastmeko Platform',
    desc: 'Full-product SaaS marketplace. Real-time inventory, dynamic pricing engine, and a custom analytics dashboard — built end-to-end.',
    tags: ['Next.js', 'TypeScript', 'Zustand', 'Chart.js', 'Tailwind'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    feat: true,
  },
  {
    id: 2,
    title: 'Atomic UI Design System',
    desc: '80+ accessible components across 4 products. Storybook docs, visual regression testing, full a11y compliance.',
    tags: ['React', 'Storybook', 'Radix UI', 'CSS-in-JS'],
    img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
    feat: true,
  },
  {
    id: 3,
    title: 'Real-Time Collaboration Tool',
    desc: 'WebSocket CRDT workspace with presence indicators, canvas drawing layer, and offline conflict resolution.',
    tags: ['React', 'Node.js', 'WebSockets', 'CRDT'],
    img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80',
    feat: true,
  },
  {
    id: 4,
    title: 'E-Commerce Checkout',
    desc: 'Conversion-optimised multi-step checkout — smart address auto-fill, fraud signals, sub-2s LCP.',
    tags: ['Next.js', 'Stripe', 'Motion', 'PostgreSQL'],
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    feat: false,
  },
  {
    id: 5,
    title: 'AI Pipeline Dashboard',
    desc: 'Admin panel for LLM pipeline management — live log streaming, model performance charts, granular RBAC.',
    tags: ['React', 'TypeScript', 'Recharts', 'TanStack Query'],
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    feat: false,
  },
  {
    id: 6,
    title: 'Portfolio CMS',
    desc: 'Headless MDX blog with ISR, syntax highlighting, and reading-time analytics on Next.js 14 App Router.',
    tags: ['Next.js 14', 'MDX', 'Contentlayer', 'Vercel'],
    img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
    feat: false,
  },
];

export const STACK = [
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'GraphQL',
  'Tailwind CSS',
  'PostgreSQL',
  'AWS',
  'Docker',
  'Figma',
  'Zustand',
  'Prisma',
  'Redis',
  'Vitest',
  'Playwright',
  'Radix UI',
  'Storybook',
  'Vercel',
];

export const SKILLS = [
  { n: 'React / Next.js', v: 96 },
  { n: 'TypeScript', v: 92 },
  { n: 'Node.js / Express', v: 85 },
  { n: 'UI/UX & Figma', v: 88 },
  { n: 'Performance Engineering', v: 90 },
  { n: 'Testing (Vitest/PW)', v: 78 },
  { n: 'GraphQL / REST', v: 83 },
  { n: 'AWS / DevOps', v: 73 },
];

export const EXPERIENCE = [
  {
    p: '2022 – Present',
    r: 'Senior Frontend Engineer',
    co: 'Fastmeko',
    t: 'Full-time',
    d: 'Led all client-side engineering — design system (80+ components), real-time inventory features, and performance architecture. Reduced LCP from 4.2s → 1.1s. Grew the frontend team from 2 to 6 engineers.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'AWS'],
  },
  {
    p: '2021 – 2022',
    r: 'Frontend Engineer',
    co: 'Kobo360',
    t: 'Full-time',
    d: 'Built the logistics tracking dashboard serving 12,000+ drivers in real time. Implemented offline-first PWA capability for low-connectivity regions across Nigeria and Kenya.',
    tags: ['React', 'GraphQL', 'PWA', 'Maps API'],
  },
  {
    p: '2020 – 2021',
    r: 'Frontend Developer',
    co: 'Freelance',
    t: 'Contract',
    d: 'Delivered 10+ client projects — e-commerce storefronts to internal tools. Maintained 5-star reviews. Built recurring relationships with 4 long-term clients.',
    tags: ['React', 'Tailwind', 'Stripe', 'Contentful'],
  },
  {
    p: '2019 – 2020',
    r: 'Junior Web Developer',
    co: 'TechCabal Media',
    t: 'Internship',
    d: 'Maintained and improved editorial CMS frontend. Shipped accessibility fixes that improved screen-reader experience across 200+ articles.',
    tags: ['JavaScript', 'HTML/CSS', 'WordPress'],
  },
];

export const SERVICES = [
  {
    ic: 'mon',
    ti: 'Web App Development',
    de: 'From SaaS dashboards to consumer products — I architect and build React-based frontends that are fast, accessible, and maintainable.',
    pts: ['Next.js & React SPA', 'TypeScript everywhere', 'Design system architecture', 'CI/CD & deployment'],
  },
  {
    ic: 'lay',
    ti: 'Design System Creation',
    de: 'Component libraries your team actually wants to use — with full docs, a11y, and Storybook integration.',
    pts: ['80+ reusable components', 'Token-based theming', 'Storybook docs', 'Visual regression testing'],
  },
  {
    ic: 'cpu',
    ti: 'Performance Engineering',
    de: 'Poor Web Vitals hurting conversions? I audit, diagnose, and fix Core Web Vitals to measurable business outcomes.',
    pts: ['LCP / CLS / INP audits', 'Bundle optimisation', 'Image & font strategy', 'Edge & CDN config'],
  },
  {
    ic: 'pen',
    ti: 'Technical Consulting',
    de: 'Need a second brain for architecture decisions, code reviews, or team mentoring? Focused consulting engagements available.',
    pts: ['Architecture review', 'Code audits', 'Team workshops', 'Hiring panels'],
  },
];

export const TESTIMONIALS = [
  {
    n: 'Adesola Okafor',
    r: 'CTO, Fastmeko',
    av: 'https://i.pravatar.cc/80?img=33',
    rt: 5,
    tx: "Olamide didn't just build our frontend — he defined how we think about it. The design system he created became the single source of truth for the entire product team. Exceptional technical depth and product intuition.",
  },
  {
    n: 'Kunle Adeyemi',
    r: 'CEO, Kobo360',
    av: 'https://i.pravatar.cc/80?img=57',
    rt: 5,
    tx: "The real-time tracking dashboard shipped on time and under budget. Our drivers in low-bandwidth areas could actually use it. Olamide cares about the end user in a way that's rare.",
  },
  {
    n: 'Yetunde Balogun',
    r: 'Product Manager, Paystack',
    av: 'https://i.pravatar.cc/80?img=47',
    rt: 5,
    tx: "Brought him in for a performance audit — he found issues our entire team had missed and presented solutions non-engineers could understand. Would hire again without hesitation.",
  },
];

export const EDUCATION = [
  { y: '2016–2020', d: 'B.Sc. Computer Science', s: 'University of Lagos', n: 'Second Class Upper Honours' },
  { y: '2022', d: 'Meta Frontend Developer', s: 'Coursera / Meta', n: 'Professional Certificate' },
  { y: '2023', d: 'AWS Cloud Practitioner', s: 'Amazon Web Services', n: 'Certified' },
];

export const BLOGS = [
  {
    ti: 'Why I Ditched useEffect for TanStack Query (And Never Looked Back)',
    dt: 'Mar 12, 2025',
    rd: '7 min',
    tg: 'React',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
  },
  {
    ti: 'The Hidden Cost of CSS-in-JS at Scale — A Real-World Case Study',
    dt: 'Feb 28, 2025',
    rd: '11 min',
    tg: 'Performance',
    img: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&q=80',
  },
  {
    ti: "Building Nigeria's First Offline-First Logistics PWA",
    dt: 'Jan 15, 2025',
    rd: '9 min',
    tg: 'PWA',
    img: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=600&q=80',
  },
];

export const FAQ = [
  {
    q: 'What types of projects do you take on?',
    a: 'Primarily product-focused work: SaaS platforms, internal tools, design systems, and performance engineering. I do my best work when I own the problem end-to-end, not just implementing a spec.',
  },
  {
    q: 'What does your typical engagement look like?',
    a: 'Most projects start with a 30-min discovery call, followed by a proposal with timeline and cost breakdown. I work in 2-week sprints with async Loom updates and weekly syncs.',
  },
  {
    q: 'Do you work with non-technical founders?',
    a: 'Absolutely. Half my clients are non-technical. I translate tech decisions into plain language so you can make informed product choices without needing an interpreter.',
  },
  {
    q: 'What is your availability and timezone?',
    a: 'Based in Lagos (WAT, UTC+1). Flexible overlap hours for EU and EST clients. Currently available for new engagements starting Q3 2025.',
  },
  {
    q: 'Do you offer equity-based compensation?',
    a: "For the right product with strong fundamentals, yes. Open to hybrid cash + equity arrangements on early-stage projects. Let's talk.",
  },
];

export const STATS = [
  { v: '4+', l: 'Years Experience' },
  { v: '40+', l: 'Projects Shipped' },
  { v: '12', l: 'Happy Clients' },
  { v: '~1s', l: 'Avg LCP Achieved' },
];
