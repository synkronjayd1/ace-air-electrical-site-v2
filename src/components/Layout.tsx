import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, Facebook, Instagram, Shield, Clock, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { IMAGES } from '@/src/constants/images';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-brand-navy text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+61423536561" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
              <Phone size={14} className="text-brand-orange" />
              <span>+61 423 536 561</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-brand-orange" />
              <span>Adelaide, South Australia</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock size={14} className="text-brand-orange" />
              Same-Day Service Available
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/" className="flex items-center">
  <img 
  src="/images/logo.jpg" 
  alt="logo" 
  className="h-16 w-48 object-contain bg-red-200"
/>
</Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-orange",
                    location.pathname === item.href ? "text-brand-orange" : "text-brand-navy"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-brand-orange text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-orange/90 transition-all shadow-lg shadow-brand-orange/20"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-brand-navy"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block px-3 py-4 text-base font-semibold rounded-md",
                      location.pathname === item.href ? "bg-brand-navy/5 text-brand-orange" : "text-brand-navy"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center bg-brand-orange text-white px-6 py-4 rounded-xl font-bold"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Floating Call Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a 
          href="tel:+61423536561" 
          className="bg-brand-orange text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce"
        >
          <Phone size={24} fill="currentColor" />
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-brand-navy text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <Link to="/" className="flex items-center gap-2">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Award className="text-brand-orange" size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-display font-bold leading-none tracking-tight">ACE AIR &</span>
                  <span className="text-sm font-display font-semibold text-brand-orange leading-none tracking-wider">ELECTRICAL ADELAIDE</span>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Adelaide's trusted experts for premium air conditioning and electrical services. Family-owned with 10+ years of experience.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-brand-orange transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-brand-orange transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link to={item.href} className="hover:text-brand-orange transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Our Services</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link to="/services" className="hover:text-brand-orange transition-colors">Split System Installation</Link></li>
                <li><Link to="/services" className="hover:text-brand-orange transition-colors">Ducted Air Conditioning</Link></li>
                <li><Link to="/services" className="hover:text-brand-orange transition-colors">Multi-Split Systems</Link></li>
                <li><Link to="/services" className="hover:text-brand-orange transition-colors">Electrical Services</Link></li>
                <li><Link to="/services" className="hover:text-brand-orange transition-colors">AC Servicing & Repairs</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-brand-orange shrink-0" />
                  <a href="tel:+61423536561" className="hover:text-brand-orange transition-colors">+61 423 536 561</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-orange shrink-0" />
                  <span>Adelaide, South Australia</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield size={18} className="text-brand-orange shrink-0" />
                  <span>Fully Licensed & Insured</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Ace Air & Electrical Adelaide. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
