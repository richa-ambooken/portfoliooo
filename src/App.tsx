/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowDown, 
  ArrowRight,
  Instagram,
  Linkedin,
  Twitter
} from 'lucide-react';

// --- Types ---

interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  category?: string;
  span?: string;
}

interface DesignSlide {
  title: string;
  subtitle: string;
  image: string;
}

interface DesignProject {
  id: number;
  title: string;
  slides: DesignSlide[];
}

// --- Components ---

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#121212]/60 backdrop-blur-md">
      <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <a className="font-headline font-bold text-2xl tracking-tighter text-tertiary" href="#">
          Richa
        </a>
        <div className="hidden md:flex items-center gap-12">
          <a className="font-headline tracking-tight text-lg text-primary hover:text-tertiary transition-colors" href="#web-projects">
            Projects
          </a>
          <a className="font-headline tracking-tight text-lg text-primary hover:text-tertiary transition-colors" href="#about">
            About
          </a>
          <a className="font-headline tracking-tight text-lg text-primary hover:text-tertiary transition-colors" href="#design-showcase">
            Design
          </a>
        </div>
        <button className="bg-tertiary text-on-tertiary px-6 py-2 rounded-md font-medium hover:scale-95 active:scale-90 transition-transform duration-300">
          Hire Me
        </button>
      </nav>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-8 md:px-20 max-w-7xl mx-auto" id="hero">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-label text-sm uppercase tracking-[0.3em] text-on-surface-variant mb-6"
      >
        Available for freelance
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-headline text-5xl md:text-8xl font-extrabold tracking-tighter leading-tight mb-8 max-w-4xl"
      >
        Hey, I'm <span className="text-tertiary italic text-glow">Richa</span>, Designer and Developer.
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed"
      >
        Crafting digital experiences where technical precision meets expressive soul. Specializing in high-end editorial interfaces and scalable web solutions.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 flex items-center gap-8"
      >
        <a className="flex items-center gap-2 text-primary group cursor-pointer" href="#about">
          <span className="font-label uppercase tracking-widest text-sm">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section className="bg-surface-container-low py-32 px-8 md:px-20" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-5 aspect-[4/5] rounded-xl overflow-hidden relative group">
          <img 
            alt="Richa's Portrait" 
            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700" 
            src="/Screenshot20260322074635.png"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-surface-tint/5 pointer-events-none"></div>
        </div>
        <div className="md:col-span-7">
          <h2 className="font-headline text-4xl md:text-5xl mb-8 leading-tight">
            Bridging the gap between <br/><span className="text-primary">Logic & Aesthetics.</span>
          </h2>
          <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
            <p>With a background rooted in both computer science and visual communication, I don't just build websites—I curate digital spaces. I believe that every line of code should serve a purpose, and every pixel should tell a story.</p>
            <p>My approach is editorial by nature. I value whitespace, intentional asymmetry, and the power of subtle interaction. Whether I'm architecting a complex AI integration or refining a brand's visual identity, my focus remains on clarity and character.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="font-label text-xs uppercase tracking-widest text-tertiary mb-2">Technical</p>
              <p className="text-on-surface font-medium">Python, C, C++, HTML, CSS, JavaScript, MongoDB, MySQL, Node.js, React</p>
            </div>
            <div>
              <p className="font-label text-xs uppercase tracking-widest text-tertiary mb-2">Creative</p>
              <p className="text-on-surface font-medium">Adobe Photoshop, Figma, Canva, UI/UX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WebProjects = () => {
  const projects: Project[] = [
    {
      title: "The Fluid Retailer",
      category: "Retail Innovation",
      description: "A seamless, mobile-first ecosystem for the modern shopper. Scan, pay, and transition effortlessly.",
      image: "/WelcometoFuture.png",
      link: "https://shopping-renamed.onrender.com",
      span: "md:col-span-8"
    },
    {
      title: "AI Text Humaniser",
      description: "Bridging the gap between algorithms and authenticity.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHoU14lm-Km1T_NMq7zysjORpPxq4RxGU4LWuTuJXkFLBJS4zhY-iXgGREsYCuIQ2cbmwD2zfYVYsn1QuWAISh0XMc8Hu0vtmuXWuxyM-ftXrMYUE06pVGAs0u5gUjB5J9S1YVgiLNlnDAeoynccjPKGUh2VhH3n0tn0hiCIgbRO7V_STDAGWXKA8kqdFXNDciM0Z3ZXp7V61QH9OikrbHt0GcD4y7EnfPHneuUTOv4Gx3Y5abgk9g8VrgBIFOXvHOWxPxDttwRM4K",
      link: "https://ai-text-humaniser.onrender.com/",
      span: "md:col-span-4"
    },
    {
      title: "Egg Catcher",
      description: "A whimsical, physics-based interaction experiment built with JavaScript and p5.js.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuAXe44yx3MAZS3pNGFLU8zaBdzOjn3Ek6XEDkOSnf7XBBsokZz-maFZb4ewcsG5xuAV0D4FPJ1q7j4_pS4M5FIrlIarGsGYCOXGKBO5u4t-cRKqLDz9LBd6ctAR1XqKBUVsWG7qgPeC-gzQy4_OljxsCCnpypg5fQbndnt7Sg30sC6UFbPeiUGfzdFPxfo8SUepy_LUl1ui5YhlgmWtPHC-EZC7_EARSlGIy5BHRceytZiMSEOxfwigBkIwvdCSdgtv06egYEttjF",
      link: "https://richa-ambooken.github.io/portfolio/game/index.html",
      span: "md:col-span-4"
    },
    {
      title: "Model Failure and Risk Analysis",
      description: "A data-driven dashboard designed for visualizing systemic risks in predictive modeling.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkx31wGS-XyFY4lTDhD2F9RJpklfy2JplgPdFR5YZGCCKEutCiAlKEboJXzFmHJ3-rK1QrQHplP4vNK_hovluDC6V_rwuPPL5VqG79xF0O3hEPQDvIqYUSRxLZgwj57MChSQBwtC99miZQS40rcOUwKFm9QejaA_Hw0gJfsREk6kk8Ix2ZeeqywbVE6AN_Bet7DVfosXg44QndFZ4bWlTYgHVarBrXMXP8OkgP1NaX-043XJkSv4FNiaQ4jrWSqYCOHjvVXTz0whyU",
      span: "md:col-span-4"
    },
    {
      title: "Pastel Pantry",
      description: "A minimalist e-commerce concept for artisanal pantry staples with a focus on typography.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHX5oviKfr4VtfA2wSNYIYmBZzvr45SJ6TgHDpiGQfauiZW4ykMAkEyNKfvjmCop1ZqPDBgp6hELVEhZYNcxdb1OeOb00wUJr5z8H355_RXTMMtaYGUHRLjQiu_8wd6k9ArsqPY9EjRcaZfGU43CP14AsNYIybPL0ssNY8cbZkOkpSlGhIoKxlzEyaYl3fqdz6Lszs_XmMOiil75Hz8pxLULTLEXuv4t74BOsYzfyeIakooK5gSo3C38VX6dgfhSytW9Fu3aIQCuBO",
      link: "https://richa-ambooken.github.io/portfolio/foodweb/index.html",
      span: "md:col-span-4"
    }
  ];

  return (
    <section className="py-32 px-8 md:px-20 max-w-7xl mx-auto" id="web-projects">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <span className="font-label text-sm uppercase tracking-widest text-on-surface-variant">Featured Work</span>
          <h2 className="font-headline text-5xl mt-4">Web Projects</h2>
        </div>
        <p className="max-w-xs text-on-surface-variant text-right md:text-left">Selected digital platforms built with a focus on performance and soul.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {projects.map((project, idx) => (
          <a 
            key={idx}
            className={`${project.span} group cursor-pointer block`} 
            href={project.link} 
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`relative overflow-hidden rounded-xl bg-surface-container-high ${project.span?.includes('col-span-8') ? 'aspect-[16/9]' : 'aspect-[4/5]'} mb-6`}>
              <img 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={project.image}
                referrerPolicy="no-referrer"
              />
              {project.category && (
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-tertiary font-label text-xs uppercase tracking-widest mb-2">{project.category}</span>
                  <h3 className="font-headline text-3xl">{project.title}</h3>
                </div>
              )}
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline text-2xl mb-2">{project.title}</h3>
                <p className="text-on-surface-variant max-w-md">{project.description}</p>
              </div>
              <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

const DesignCarousel = ({ project }: { project: DesignProject }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % project.slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + project.slides.length) % project.slides.length);

  return (
    <div className="px-8 md:px-20 max-w-7xl mx-auto mb-32">
      <h3 className="font-headline text-3xl mb-12 italic text-tertiary">{project.title}</h3>
      <div className="relative max-w-4xl mx-auto">
        <button 
          className="absolute -left-12 md:-left-20 top-1/2 -translate-y-1/2 z-10 p-2 text-primary hover:text-tertiary transition-colors"
          onClick={prev}
        >
          <ChevronLeft className="w-10 h-10" />
        </button>
        <button 
          className="absolute -right-12 md:-right-20 top-1/2 -translate-y-1/2 z-10 p-2 text-primary hover:text-tertiary transition-colors"
          onClick={next}
        >
          <ChevronRight className="w-10 h-10" />
        </button>
        
        <div className="relative overflow-hidden rounded-xl shadow-2xl shadow-black/40 bg-surface-container-high">
          <AnimatePresence mode="wait">
            <motion.div 
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="aspect-[4/5] w-full">
                <img 
                  alt={project.slides[current].title} 
                  className="w-full h-full object-cover" 
                  src={project.slides[current].image}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 bg-surface-container-high">
                <h4 className="font-label text-xs uppercase tracking-[0.3em] text-primary">{project.slides[current].subtitle}</h4>
                <p className="font-headline text-2xl mt-2 italic text-on-surface">{project.slides[current].title}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-8 overflow-x-auto pb-2 no-scrollbar">
          {project.slides.map((slide, idx) => (
            <button 
              key={idx}
              className={`flex-shrink-0 w-12 h-16 rounded overflow-hidden border-2 transition-all ${idx === current ? 'border-primary opacity-100' : 'border-transparent opacity-40 hover:opacity-100'}`}
              onClick={() => setCurrent(idx)}
            >
              <img className="w-full h-full object-cover" src={slide.image} referrerPolicy="no-referrer" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const DesignShowcase = () => {
  const designProjects: DesignProject[] = [
    {
      id: 1,
      title: "Unhinged Mixtape",
      slides: [
        { title: "Unhinged Mixtape - Cover Art", subtitle: "Concept Art", image: "/202511161215150000.png" },
        { title: "Turning Music into Melodies", subtitle: "Creative Direction", image: "/202511161215150001.png" },
        { title: "Our Services", subtitle: "Strategy", image: "/202511161215160004.png" },
        { title: "Our Edge", subtitle: "Branding", image: "/202511161215160003.png" },
        { title: "Who Are We", subtitle: "Identity", image: "/202511161215160002.png" },
        { title: "Let's build the next movement", subtitle: "Movement", image: "/202511161215160005.png" }
      ]
    },
    {
      id: 2,
      title: "Sakhi - Lyric Sheet",
      slides: [
        { title: "Sakhi - Series 01", subtitle: "Visual Identity", image: "/WhatsAppImage20260322at114035AM.png" },
        { title: "Sakhi - Series 02", subtitle: "Visual Identity", image: "/WhatsAppImage20260322at114035AM1.png" }
      ]
    },
    {
      id: 3,
      title: "SeaBerry - Brand & Vehicle Identity",
      slides: [
        { title: "SeaBerry - Delivery Fleet", subtitle: "Vehicle Graphics", image: "/WhatsAppImage20260322at113839AM.png" },
        { title: "SeaBerry - Communication Poster", subtitle: "Brand Identity", image: "/WhatsAppImage20260322at114522AM.png" }
      ]
    },
    {
      id: 4,
      title: "Designs for the brand Artisan by Nikhita",
      slides: [
        { title: "Artisan - Website Sale", subtitle: "E-commerce", image: "/WhatsAppImage20260322at114010AM.png" },
        { title: "Artisan - Shop the Style", subtitle: "Editorial", image: "/WhatsAppImage20260322at113840AM.png" },
        { title: "Artisan - Brand Story", subtitle: "Marketing", image: "/WhatsAppImage20260322at114009AM.png" },
        { title: "Artisan - Our Favorites", subtitle: "Editorial", image: "/WhatsAppImage20260322at113840AM1.png" }
      ]
    }
  ];

  return (
    <section className="bg-surface-container-lowest py-32" id="design-showcase">
      <div className="px-8 md:px-20 max-w-7xl mx-auto mb-20">
        <span className="font-label text-sm uppercase tracking-widest text-on-surface-variant">Creative Outlet</span>
        <h2 className="font-headline text-5xl mt-4">Design & Posters</h2>
      </div>
      {designProjects.map((project) => (
        <div key={project.id}>
          <DesignCarousel project={project} />
        </div>
      ))}
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface-container py-12 px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <a className="font-headline font-bold text-2xl tracking-tighter text-tertiary" href="#">
          Richa
        </a>
        <div className="flex gap-8 text-on-surface-variant">
          <a className="hover:text-tertiary transition-colors" href="#">
            <Instagram className="w-6 h-6" />
          </a>
          <a className="hover:text-tertiary transition-colors" href="#">
            <Linkedin className="w-6 h-6" />
          </a>
          <a className="hover:text-tertiary transition-colors" href="#">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
        <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest">
          © 2024 Richa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32">
        <Hero />
        <About />
        <WebProjects />
        <DesignShowcase />
      </main>
      <Footer />
    </div>
  );
}
