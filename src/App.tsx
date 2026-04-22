/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Phone, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Droplets, 
  Wrench, 
  Flame, 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  Star,
  CheckCircle2,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  {
    id: 'water-heater',
    title: 'Water Heater Repair',
    description: 'Specializing in tankless and high-efficiency gas/electric units for consistent hot water.',
    icon: Flame,
  },
  {
    id: 'leak-detection',
    title: 'Leak Detection',
    description: 'Non-invasive, acoustic technology to find hidden leaks under slabs and behind walls.',
    icon: Search,
  },
  {
    id: 'drain-cleaning',
    title: 'Drain Cleaning',
    description: 'Hydro-jetting and professional snaking to clear the toughest blockages.',
    icon: Droplets,
  },
  {
    id: 'piping',
    title: 'Piping & Repiping',
    description: 'Safe, durable solutions for leaking pipes or full-home repiping using premium materials.',
    icon: Wrench,
  }
];

const TRUST_FACTORS = [
  { text: 'Licensed & Insured', icon: ShieldCheck },
  { text: 'A+ BBB Rating', icon: CheckCircle2 },
  { text: 'Upfront Pricing', icon: CheckCircle2 },
  { text: '24/7 Emergency Service', icon: Clock },
];

const TESTIMONIALS = [
  {
    name: 'Sarah Jennings',
    location: 'Myers Park',
    text: 'The most professional plumbing experience I\'ve ever had. They arrived within 30 minutes for a burst pipe and handled it perfectly. High-end service for high-end homes.',
    rating: 5
  },
  {
    name: 'Mark Davidson',
    location: 'South End',
    text: 'As a property manager, I need reliability. Queen City Premier is my first call for every leak or repair. Their communication is unmatched.',
    rating: 5
  },
  {
    name: 'Eleanor Vance',
    location: 'Uptown',
    text: 'Upfront pricing and expert knowledge. They replaced our water heater system and the craftsmanship was visibly superior. Highly recommend.',
    rating: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden antialiased bg-brand-navy">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white text-brand-navy shadow-lg py-3' : 'bg-white text-brand-navy py-4'
        }`}
      >
        <div className="container mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-gold flex items-center justify-center rounded-sm">
              <span className="text-white font-black text-xl">Q</span>
            </div>
            <div className="flex flex-col">
              <span className="text-brand-navy font-black text-lg leading-none tracking-tighter">QUEEN CITY</span>
              <span className="text-brand-navy/70 font-bold text-[10px] uppercase tracking-widest leading-none mt-0.5">PREMIER PLUMBING</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-brand-navy font-bold text-xs uppercase tracking-wider">
            <a href="#services" className="hover:text-brand-gold transition-colors">Services</a>
            <a href="#about" className="hover:text-brand-gold transition-colors">Commercial</a>
            <a href="#testimonials" className="hover:text-brand-gold transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-brand-gold transition-colors">Emergency</a>
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold text-red-600 flex items-center gap-1 uppercase tracking-tighter">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span> 24/7 EMERGENCY
              </span>
              <a href="tel:7045550123" className="font-black text-lg text-brand-navy leading-none">(704) 555-0123</a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-brand-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white border-t border-brand-navy/5 shadow-2xl py-8 px-6 lg:hidden"
            >
              <nav className="flex flex-col gap-6 text-brand-navy font-black text-xl">
                <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>Commercial</a>
                <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Reviews</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Emergency Service</a>
                <div className="pt-6 border-t border-brand-navy/10">
                  <p className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-2">CALL NOW</p>
                  <a href="tel:7045550123" className="flex items-center gap-4 text-brand-navy text-2xl font-black">
                    <Phone size={24} />
                    <span>(704) 555-0123</span>
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1920" 
            alt="Premium Interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/40" />
        </div>

        <div className="container mx-auto px-8 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 py-20"
          >
            <span className="text-brand-gold font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Serving Myers Park & Greater Charlotte</span>
            <h1 className="text-white font-black text-6xl md:text-8xl leading-none mb-8 tracking-tight">
              Charlotte's Most <span className="text-brand-gold underline decoration-4 underline-offset-12">Trusted</span> Plumbing Pros
            </h1>
            <p className="text-white opacity-90 text-xl md:text-2xl mb-12 leading-relaxed max-w-xl font-medium">
              Fast, professional, and reliable service. We handle the luxury plumbing needs of Charlotte's most distinguished properties.
            </p>
            <div className="flex gap-8">
              <div className="border-l-2 border-brand-gold/30 pl-4">
                <h4 className="text-white text-3xl font-black leading-none">60 Min</h4>
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mt-1">Avg. Response</p>
              </div>
              <div className="border-l-2 border-brand-gold/30 pl-4">
                <h4 className="text-white text-3xl font-black leading-none">20+ Years</h4>
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mt-1">Local Expertise</p>
              </div>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-brand-gold text-white px-10 py-5 font-black uppercase tracking-widest hover:brightness-110 transition-all text-sm flex items-center justify-center gap-2"
              >
                Schedule Dispatch Now
              </a>
              <a 
                href="tel:7045550123" 
                className="border border-white/20 text-white px-10 py-5 font-black uppercase tracking-widest hover:bg-white/5 transition-all text-sm flex items-center justify-center"
              >
                (704) 555-0123
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white text-brand-navy py-6 border-t border-brand-navy/5">
        <div className="container mx-auto px-8 flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-4">
          <div className="flex items-center gap-2 font-bold text-[11px] uppercase tracking-widest">
            <ShieldCheck size={18} className="text-green-600" /> Licensed & Insured
          </div>
          <div className="flex items-center gap-2 font-bold text-[11px] uppercase tracking-widest">
            <Star size={18} className="text-brand-gold" /> A+ BBB Rated
          </div>
          <div className="flex items-center gap-2 font-bold text-[11px] uppercase tracking-widest">
            <CheckCircle2 size={18} className="text-blue-600" /> Upfront Pricing
          </div>
          <div className="flex items-center gap-2 font-bold text-[11px] uppercase tracking-widest">
            <Clock size={18} className="text-red-600" /> 24/7 Service
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-50 text-brand-navy">
        <div className="container mx-auto px-8 text-center mb-24">
          <h2 className="text-brand-navy font-black text-5xl md:text-6xl mb-4 italic tracking-tighter">Elite Services</h2>
          <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.4em]">Master Licensed Plumbing Solutions</p>
        </div>

        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-brand-navy/5">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-12 bg-white border-r border-b border-brand-navy/5 hover:bg-brand-navy hover:text-white transition-all duration-500"
              >
                <service.icon className="text-brand-gold mb-8 group-hover:text-white transition-colors" size={40} strokeWidth={1.5} />
                <h3 className="font-black text-2xl mb-4 uppercase leading-none tracking-tight">{service.title}</h3>
                <p className="opacity-70 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="flex items-center gap-3 font-black text-[10px] uppercase tracking-widest group-hover:text-brand-gold transition-colors">
                  Details <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-32 bg-brand-navy relative">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden bg-brand-navy-dark border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Team" 
                  className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-12 text-brand-navy hidden lg:block shadow-2xl">
                <h3 className="font-black text-5xl leading-none">20+</h3>
                <p className="font-bold text-[10px] uppercase tracking-widest mt-2 opacity-60">Years of Service</p>
              </div>
            </div>

            <div>
              <span className="text-brand-gold font-black text-[10px] uppercase tracking-[0.4em] mb-6 block">The Legacy of QCPP</span>
              <h2 className="text-white font-black text-6xl leading-none mb-10 tracking-tight">
                Engineering <span className="text-brand-gold italic">Precision</span> in Every Pipe.
              </h2>
              <div className="space-y-10">
                <p className="text-white/70 text-lg leading-relaxed font-medium">
                  We maintain the infrastructure of Charlotte's most distinguished properties. From Myers Park to South End, we've built our reputation on unmatched punctuality and uncompromising quality.
                </p>
                <div className="grid gap-6">
                  {[
                    'Master NC Licensed Contractors',
                    'High-End Fixture Specialists',
                    'Acoustic Leak Detection Tech',
                    'Priority Dispatch for Partners'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-5 border-b border-white/5 pb-4 last:border-0">
                      <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                      <span className="text-white font-bold text-xs uppercase tracking-wider">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-brand-navy-dark overflow-hidden">
        <div className="container mx-auto px-8 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <h2 className="text-white font-black text-5xl tracking-tighter leading-none mb-4 italic">The Talk of <br />The City</h2>
            <div className="w-20 h-1 bg-brand-gold" />
          </div>
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
            {TESTIMONIALS.slice(0, 2).map((t, idx) => (
              <div key={idx} className="p-8 bg-brand-navy border-l-2 border-brand-gold">
                <p className="text-white/70 italic text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-brand-gold font-black text-[10px] uppercase tracking-widest">{t.name}</p>
                    <p className="text-white/40 text-[9px] font-bold uppercase mt-1">Charlotte, NC</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="bg-white flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-16 md:p-24 bg-brand-navy text-white flex flex-col justify-center">
            <h2 className="font-black text-5xl md:text-7xl leading-none mb-10 tracking-tight italic">Request Dispatch.</h2>
            <p className="text-white/60 text-lg mb-12 max-w-sm font-medium">Professional dispatch within minutes. Our master plumbers are standing by 24/7.</p>
            
            <div className="space-y-8">
              <div className="group">
                <p className="text-brand-gold font-black text-[10px] uppercase tracking-[0.2em] mb-2">Priority Line</p>
                <a href="tel:7045550123" className="text-4xl font-black hover:text-brand-gold transition-colors leading-none">(704) 555-0123</a>
              </div>
              <div className="flex gap-4 items-center opacity-40">
                <MapPin size={20} />
                <span className="font-bold text-xs uppercase tracking-widest">Charlotte HQ • Dispatch Center</span>
              </div>
            </div>
        </div>

        <div className="lg:w-1/2 p-16 md:p-24 bg-white text-brand-navy">
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Full Name</label>
                <input type="text" placeholder="John Smith" className="w-full border-b border-slate-200 py-3 font-bold text-sm outline-none focus:border-brand-gold transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Phone Number</label>
                <input type="tel" placeholder="(704) 555-0123" className="w-full border-b border-slate-200 py-3 font-bold text-sm outline-none focus:border-brand-gold transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Issue Description</label>
              <textarea rows={2} placeholder="Emergency leak? Water heater failure?" className="w-full border-b border-slate-200 py-3 font-bold text-sm outline-none focus:border-brand-gold transition-colors resize-none"></textarea>
            </div>
            <button className="w-full bg-brand-gold text-white font-black py-6 uppercase tracking-widest text-xs hover:brightness-110 transition-all shadow-xl shadow-brand-gold/10">
              Schedule Dispatch Now
            </button>
            <p className="text-center text-[10px] font-bold text-slate-300 uppercase tracking-widest">Premium Service Guaranteed</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy-dark border-t border-white/5">
        <div className="grid lg:grid-cols-3">
          <div className="p-12 border-r border-white/5 space-y-8">
            <h4 className="text-brand-gold text-[10px] font-black uppercase tracking-widest">Core Services</h4>
            <ul className="grid grid-cols-2 gap-4 text-[11px] font-medium text-white/70">
              <li className="hover:text-white cursor-pointer">Leak Detection</li>
              <li className="hover:text-white cursor-pointer">Water Heaters</li>
              <li className="hover:text-white cursor-pointer">Drain Cleaning</li>
              <li className="hover:text-white cursor-pointer">Gas Lines</li>
              <li className="hover:text-white cursor-pointer">Sewer Repair</li>
              <li className="hover:text-white cursor-pointer">Repiping</li>
            </ul>
          </div>
          <div className="p-12 border-r border-white/5 space-y-8">
            <h4 className="text-brand-gold text-[10px] font-black uppercase tracking-widest">Operating Areas</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] font-bold text-white/40 uppercase tracking-widest">
              <span>Charlotte</span><span>Concord</span><span>Huntersville</span><span>Matthews</span><span>Ballantyne</span><span>Davidson</span>
            </div>
          </div>
          <div className="p-12 flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-brand-gold flex items-center justify-center rounded-sm">
                <span className="text-white font-black text-xs">Q</span>
              </div>
              <span className="text-white font-black text-xs tracking-tighter">QUEEN CITY PREMIER</span>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-white/20 text-[9px] uppercase tracking-[0.2em]">
              <span>© 2024 QCPP</span>
              <span>All Rights Reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
