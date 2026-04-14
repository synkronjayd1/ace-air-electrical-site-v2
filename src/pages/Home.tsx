import * as React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, CheckCircle2, Star, Shield, Clock, Zap, Thermometer, Wind, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '@/src/constants/images';

const services = [
  {
    title: 'Split Systems',
    description: 'Energy-efficient cooling and heating for individual rooms.',
    icon: Wind,
    href: '/services'
  },
  {
    title: 'Ducted Systems',
    description: 'Whole-home climate control with seamless integration.',
    icon: Thermometer,
    href: '/services'
  },
  {
    title: 'Electrical Services',
    description: 'From lighting to full switchboard upgrades.',
    icon: Zap,
    href: '/services'
  }
];

const testimonials = [
  {
    name: 'Sarah Jenkins',
    location: 'Glenelg',
    text: 'Ace Air was fantastic! They installed our new split system the same day we called. Professional, clean, and very reasonably priced.',
    rating: 5
  },
  {
    name: 'Mark Thompson',
    location: 'Adelaide Hills',
    text: 'Highly recommend these guys for any electrical work. They fixed a long-standing issue with our switchboard that others couldn\'t solve.',
    rating: 5
  },
  {
    name: 'Elena Rodriguez',
    location: 'North Adelaide',
    text: 'Great service from start to finish. The ducted system they installed is whisper quiet and works perfectly. Very happy customers!',
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_left,rgba(59,130,246,0.18),transparent_35%),linear-gradient(90deg,#f8fbff_0%,#edf3f8_48%,#f8fafc_100%)]" />
<div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0f172a]/6 via-transparent to-white/10" />
        

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Shield size={16} />
                <span>Adelaide's #1 Rated Air & Electrical</span>
              </div>
              <h1 className="text-4xl lg:text-7xl font-display font-black text-brand-navy leading-[1.1] mb-6">
                Adelaide’s Trusted <span className="text-brand-blue">Air Conditioning</span> & Electrical Experts
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
                Premium installation, servicing, and electrical solutions for Adelaide homes. Family-owned, same-day service, and 10+ years of local experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+61423536561" 
                  className="bg-brand-navy text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-navy/90 transition-all shadow-xl shadow-brand-navy/20"
                >
                  <Phone size={20} />
                  Call +61 423 536 561
                </a>
                <Link 
                  to="/contact" 
                  className="bg-white text-brand-navy border-2 border-brand-navy/10 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:border-brand-navy transition-all"
                >
                  Get a Free Quote
                  <ArrowRight size={20} />
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[IMAGES.avatar1, IMAGES.avatar2, IMAGES.avatar3, IMAGES.avatar4].map((avatar, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                      <img src={avatar} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-brand-gold mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-sm font-bold text-brand-navy">500+ Happy Adelaide Customers</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3]">
                <img 
                  src={IMAGES.hero} 
                  alt="Premium Air Conditioning Installation" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-gray-100">
                <div className="bg-brand-orange/10 p-3 rounded-xl">
                  <Clock className="text-brand-orange" size={32} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Response Time</p>
                  <p className="text-xl font-black text-brand-navy">Same-Day Service</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">Premium Brands We Install & Service</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            {['Daikin', 'Mitsubishi', 'Fujitsu', 'Panasonic', 'Samsung'].map(brand => (
              <span key={brand} className="text-2xl md:text-3xl font-black text-brand-navy tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-6">Our Premium Services</h2>
            <p className="text-lg text-gray-600">
              We provide comprehensive air conditioning and electrical solutions tailored to the unique Adelaide climate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="bg-brand-navy text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link to={service.href} className="text-brand-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-8">Why Adelaide Chooses Ace Air & Electrical</h2>
              <div className="space-y-6">
                {[
                  { title: '10+ Years Experience', desc: 'A decade of serving Adelaide homes and businesses with excellence.' },
                  { title: 'Family Owned & Operated', desc: 'Personal service from a local family who cares about your comfort.' },
                  { title: 'Fully Licensed & Insured', desc: 'Peace of mind knowing your property is in professional hands.' },
                  { title: 'Same-Day Quoting', desc: 'Fast, free quotes so you can get your project started immediately.' },
                  { title: 'Late-Night Availability', desc: 'Emergency service when you need it most, even after hours.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="text-brand-orange" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-navy mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={IMAGES.about} 
                  alt="Quality Workmanship" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 bg-brand-navy text-white p-10 rounded-3xl hidden md:block">
                <div className="text-5xl font-black text-brand-orange mb-2">10+</div>
                <div className="text-sm font-bold uppercase tracking-widest">Years of Local<br/>Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">What Our Customers Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We take pride in our work and our reputation in the Adelaide community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <div className="flex text-brand-gold mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} size={18} fill="currentColor" />)}
                </div>
                <p className="text-lg italic mb-8 text-gray-300 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.location}, SA</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-brand-blue/10 border border-brand-blue/10 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-brand-navy mb-8">
              Ready to Upgrade Your Comfort?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Get a free, no-obligation quote today. Whether it's a new AC installation or electrical repairs, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:+61423536561" 
                className="bg-brand-orange text-white px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl shadow-brand-orange/30"
              >
                <Phone size={24} />
                Call +61 423 536 561
              </a>
              <Link 
                to="/contact" 
                className="bg-brand-navy text-white px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl shadow-brand-navy/30"
              >
                Request a Quote
                <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
