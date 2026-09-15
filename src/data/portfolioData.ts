export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  longDescription?: string
  category: 'all' | 'open-source' | 'web' | 'mobile' | 'tools'
  tags: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
}

export interface Skill {
  name: string
  category: 'all' | 'backend' | 'frontend' | 'mobile' | 'devops' | 'design'
  level: number // 0-100
  color: 'blue' | 'green' | 'purple' | 'yellow' | 'coral' | 'teal' | 'orange'
  badgeText?: string
}

export interface ExperienceItem {
  period: string
  role: string
  company: string
  vendor?: string
  description: string
  highlights: string[]
  technologies: string[]
}

export interface EducationItem {
  period: string
  degree: string
  institution: string
  location: string
  details?: string
}

export const PERSONAL_INFO = {
  name: 'Rendy Harimayco',
  title: 'Senior Fullstack Engineer',
  headline: 'Engineering Scalable Web Architectures, Mobile Apps & Resilient Backends',
  tagline: 'Fullstack software engineer with over a decade of hands-on production experience.',
  bio: 'I build dependable software systems spanning responsive web interfaces, distributed backend services, and native or cross-platform mobile apps. My career began in hardware-level industrial automation before transitioning into fast-paced agency delivery and large-scale enterprise services at AIA Indonesia.',
  location: 'Bekasi, West Java, Indonesia',
  email: 'rendyharimayco@gmail.com',
  github: 'https://github.com/harimayco',
  twitter: 'https://twitter.com/harimayco',
  facebook: 'https://www.facebook.com/Harimayco',
  avatar: 'img/foto.jpg',
  quote: {
    text: 'I think everybody in this country should learn how to program a computer, because it teaches you how to think.',
    author: 'Steve Jobs',
    role: 'Co-Founder of Apple'
  },
  stats: [
    { number: '10+', label: 'Years in Production' },
    { number: '50+', label: 'Shipped Systems' },
    { number: '15+', label: 'Core Technologies' },
    { number: '100%', label: 'Code Ownership' }
  ]
}

export const SKILLS_DATA: Skill[] = [
  // Backend Systems
  { name: 'Node.js & Express / Nest', category: 'backend', level: 90, color: 'green', badgeText: 'Production' },
  { name: 'Golang', category: 'backend', level: 85, color: 'teal', badgeText: 'Advanced' },
  { name: 'PHP & Laravel / Lumen', category: 'backend', level: 95, color: 'coral', badgeText: 'Mastery' },
  { name: 'Java & Spring Boot', category: 'backend', level: 80, color: 'orange', badgeText: 'Proficient' },
  { name: 'Python', category: 'backend', level: 78, color: 'yellow', badgeText: 'Intermediate' },
  { name: 'REST & Event-Driven APIs', category: 'backend', level: 92, color: 'blue', badgeText: 'Production' },

  // Frontend & UI
  { name: 'Vue.js & Nuxt', category: 'frontend', level: 92, color: 'green', badgeText: 'Production' },
  { name: 'React & TypeScript', category: 'frontend', level: 88, color: 'blue', badgeText: 'Advanced' },
  { name: 'Modern CSS & 3D Clay UI', category: 'frontend', level: 94, color: 'purple', badgeText: 'Specialty' },
  { name: 'Modern DOM & Vanilla JS', category: 'frontend', level: 95, color: 'yellow', badgeText: 'Foundational' },

  // Mobile Engineering
  { name: 'Flutter & Dart (Cross-Platform)', category: 'mobile', level: 88, color: 'blue', badgeText: 'Production' },
  { name: 'iOS (Swift & Objective-C)', category: 'mobile', level: 82, color: 'orange', badgeText: 'Native' },
  { name: 'Android (Kotlin & Java)', category: 'mobile', level: 80, color: 'green', badgeText: 'Native' },

  // Infrastructure & Systems
  { name: 'Linux Administration (Ubuntu / CentOS)', category: 'devops', level: 90, color: 'yellow', badgeText: 'Sysadmin' },
  { name: 'Server Hardening, DNS & Firewalls', category: 'devops', level: 86, color: 'coral', badgeText: 'Security' },
  { name: 'Docker & Container Workflows', category: 'devops', level: 84, color: 'teal', badgeText: 'DevOps' },

  // Interface & Visual Design
  { name: 'UI/UX & Interactive Design', category: 'design', level: 85, color: 'purple', badgeText: 'Visual' },
  { name: 'Photoshop, CorelDRAW & Vector Tools', category: 'design', level: 82, color: 'teal', badgeText: 'Asset Prep' }
]

export const PROJECTS_DATA: Project[] = [
  {
    id: 'wmenu-builder',
    title: 'Laravel Menu Builder (WordPress Style)',
    subtitle: 'Open-Source Navigation Package for Laravel',
    description: 'A widely adopted Laravel package bringing WordPress-style drag-and-drop hierarchical menu structuring to Laravel applications with zero administrative hassle.',
    longDescription: 'Wmenu-builder is an open-source Laravel package built to simplify complex nested navigation management. It introduces a visual, drag-and-drop administrative panel powered by jQuery UI, handles depth serialization to relational databases, and supplies lightweight Blade helpers for immediate, optimized multi-level menu rendering in frontend templates.',
    category: 'open-source',
    tags: ['PHP', 'Laravel', 'Open Source', 'Drag & Drop', 'Composer Package'],
    image: 'img/web1.png',
    githubUrl: 'https://github.com/harimayco/wmenu-builder',
    featured: true
  },
  {
    id: 'pdfactions',
    title: 'PDFActions',
    subtitle: 'In-Browser Ghostscript WebAssembly Tool Suite',
    description: 'A high-performance, privacy-first PDF utility suite running Ghostscript via WebAssembly entirely in the client browser with zero server uploads.',
    longDescription: 'PDFActions is a privacy-first web utility suite providing fast compression, merging, splitting, and page rotation for PDF documents without third-party server exposure. By compiling Ghostscript to WebAssembly (WASM), document processing stays isolated inside the user sandbox, eliminating bandwidth bottlenecks and security compliance concerns while maintaining a tactile, friendly UI.',
    category: 'tools',
    tags: ['WebAssembly', 'Ghostscript WASM', 'React', 'Open Source', 'PDF Tools', 'Client-Side'],
    image: 'img/pdfactions.png',
    demoUrl: 'https://harimayco.github.io/PDFActions/',
    githubUrl: 'https://github.com/harimayco/PDFActions',
    featured: true
  },
  {
    id: 'aov-wallpaper',
    title: 'AOV Wallpaper Generator',
    subtitle: 'Interactive HTML5 Canvas Asset Composer',
    description: 'A hardware-accelerated canvas utility empowering Arena of Valor players to compose custom skin assets, typographies, and visual overlays into high-resolution wallpapers.',
    longDescription: 'Engineered using the native HTML5 2D Canvas rendering pipeline, this web application gives gaming communities an intuitive graphic workspace. Users can preview hero assets dynamically, position custom typography, configure filter blends, and export crystal-clear HD wallpapers on demand directly from their browser.',
    category: 'tools',
    tags: ['HTML5 Canvas', 'JavaScript', 'Gaming', 'CSS3', 'Image Processing'],
    image: 'img/aov.png',
    demoUrl: 'https://harimayco.github.io/aov_wallpaper_generator/',
    githubUrl: 'https://github.com/harimayco/aov_wallpaper_generator',
    featured: true
  },
  {
    id: 'pulsa-game-voucher',
    title: 'Game Voucher & Digital Goods Exchange',
    subtitle: 'Commerce Platform with Real-Time Balance Ledger',
    description: 'An integrated web platform and Flutter mobile application handling game voucher purchases with a custom balance ledger and automated payment verification.',
    longDescription: 'An end-to-end digital commerce solution designed around an ACID-compliant balance ledger system. Incorporates an administrative operational dashboard, distributor API bridges for automated pin procurement, payment gateway webhooks, and a responsive Flutter mobile client for customer purchases.',
    category: 'web',
    tags: ['Laravel', 'Flutter', 'MySQL', 'Payment Gateway', 'API Integration'],
    image: 'img/pulsagame.png',
    featured: true
  },
  {
    id: 'breaking-belize-news',
    title: 'Breaking Belize News',
    subtitle: 'High-Traffic Digital Journalism & Media Portal',
    description: 'The preeminent online news and investigative reporting network in Belize, engineered for high-concurrency readership, rapid caching, and rich multimedia distribution.',
    longDescription: 'Breaking Belize News (BBN) is one of the most widely read digital publications in Central America and the Caribbean. The platform is architected to handle massive surges in traffic during breaking news events, featuring edge caching, optimized content delivery, resilient CMS editorial workflows, and automated social distribution pipelines.',
    category: 'web',
    tags: ['High Traffic', 'Web Architecture', 'CMS', 'Performance', 'Edge Caching', 'News Media'],
    image: 'img/breakingbelizenews.png',
    demoUrl: 'https://breakingbelizenews.com',
    featured: true
  },
  {
    id: 'belize-live-news',
    title: 'Belize Live News',
    subtitle: 'Live Broadcasting & News Aggregation Hub',
    description: 'A real-time news aggregation and live stream broadcast destination delivering breaking coverage, community journalism, and video streams across Belize.',
    longDescription: 'Belize Live News serves as a centralized broadcast and news aggregation platform. Developed with responsive layout hierarchies, low-latency video player integrations, and dynamic content feeds, it delivers real-time updates seamlessly across mobile and desktop viewports.',
    category: 'web',
    tags: ['Live Streaming', 'News Hub', 'Video Integration', 'Responsive UI', 'Media Portal'],
    image: 'img/belizelivenews.png',
    demoUrl: 'https://belizelivenews.com',
    featured: true
  },
  {
    id: 'san-ignacio-belize',
    title: 'San Ignacio Belize',
    subtitle: 'Luxury Resort, Ecotourism & Booking Experience',
    description: 'An immersive hospitality and ecotourism portal showcasing luxury accommodations, guided rainforest expeditions, and direct reservation booking.',
    longDescription: 'San Ignacio Belize is an interactive destination and resort portal designed to convert international travelers. Features rich media galleries, seasonal rate calculations, multi-step direct booking workflows, and guided tour catalogues highlighting Belizean culture and natural biodiversity.',
    category: 'web',
    tags: ['Hospitality', 'Booking Engine', 'UI/UX', 'SEO Optimization', 'Interactive Media'],
    image: 'img/sanignaciobelize.png',
    demoUrl: 'https://sanignaciobelize.com',
    featured: true
  },
  {
    id: 'piranhamas-bot',
    title: 'Piranha MAS Bot',
    subtitle: 'Algorithmic Automated Trading & Strategy Platform',
    description: 'A high-conversion financial technology portal showcasing automated trading intelligence, algorithmic strategy backtesting, and client onboarding.',
    longDescription: 'Piranha MAS Bot is a cutting-edge algorithmic trading platform presentation and onboarding portal. Designed with modern financial dark-mode aesthetics, dynamic telemetry showcases, interactive feature walkthroughs, and automated subscription funneling for quantitative market participants.',
    category: 'tools',
    tags: ['Fintech', 'Trading Automation', 'Landing Experience', 'Algorithms', 'Interactive Web'],
    image: 'img/piranhamasbot.png',
    demoUrl: 'https://piranhamasbot.com/landing/',
    featured: true
  }
]

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    period: '2020 — Present',
    role: 'Senior Fullstack Engineer',
    company: 'AIA Indonesia',
    vendor: 'via PT Indocyber Global Teknologi',
    description: 'Spearheading frontend and backend implementations across customer portals, underwriting services, and enterprise insurance workflows.',
    highlights: [
      'Built and maintained high-throughput microservices using Golang, Node.js, and Spring Boot to streamline critical policy lifecycle operations.',
      'Constructed accessible, responsive interfaces in Vue.js and React that accelerated internal operational throughput and reduced user friction.',
      'Refactored database access layers and indexing across PostgreSQL and Oracle, ensuring transactional consistency and strict compliance.'
    ],
    technologies: ['Vue.js', 'React', 'Node.js', 'Golang', 'Java Spring Boot', 'Docker', 'Oracle / PostgreSQL']
  },
  {
    period: '2014 — 2020',
    role: 'Web & Systems Developer',
    company: 'PT. Avasoft Solutions',
    description: 'Delivered tailored web applications, custom e-commerce engines, and server management across a diverse portfolio of business clients.',
    highlights: [
      'Shipped more than 30 custom production web applications leveraging Laravel, CodeIgniter, and Vue.js on time and within scope.',
      'Architected bespoke content management systems and multi-platform mobile application integrations.',
      'Provisioned and maintained dedicated Linux environments (Ubuntu & CentOS), setting up Nginx, firewall configurations, DNS records, and SSL automation.'
    ],
    technologies: ['PHP', 'Laravel', 'CodeIgniter', 'Vue.js', 'jQuery', 'MySQL', 'Linux Sysadmin']
  },
  {
    period: '2012 — 2013',
    role: 'Industrial Automation & PLC Programmer',
    company: 'PT. Inti Otomasi Sarana',
    description: 'Designed and deployed Programmable Logic Controller (PLC) routines for natural gas distribution infrastructure projects in Sulawesi.',
    highlights: [
      'Programmed safety-critical ladder logic routines and automated control loops with Rockwell RSLogix 5000.',
      'Conducted on-site instrumentation commissioning, hardware signal validation, and SCADA monitoring integration under strict field safety guidelines.'
    ],
    technologies: ['Rockwell RSLogix 5000', 'PLC Ladder Logic', 'SCADA', 'Industrial Control']
  }
]

export const EDUCATION_DATA: EducationItem[] = [
  {
    period: '2012 — 2014',
    degree: 'Associate Degree (D3) in Informatics Engineering',
    institution: 'Politeknik Tugu',
    location: 'Jakarta, Indonesia',
    details: 'Focused on software engineering fundamentals, database architecture, and algorithms.'
  },
  {
    period: '2011 — 2012',
    degree: 'Professional Diploma in Computer Programming & Networking',
    institution: 'LP3T Nurul Fikri (LP3T-NF)',
    location: 'Bekasi, West Java',
    details: 'Specialized in web application development, Linux systems administration, and network routing.'
  },
  {
    period: '2008 — 2011',
    degree: 'Senior High School Diploma (Natural Sciences)',
    institution: 'MA Attaqwa Pusat Putra',
    location: 'Bekasi, West Java'
  }
]
