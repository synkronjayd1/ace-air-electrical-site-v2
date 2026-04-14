import * as React from 'react';
import { motion } from 'motion/react';
import { Wind, Thermometer, Zap, Shield, CheckCircle2, ArrowRight, Settings, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { IMAGES } from '@/src/constants/images';

const serviceDetails = [
  {
    id: 'split-systems',
    title: 'Split System Installation',
    description: 'The most popular choice for Adelaide homes, offering efficient cooling and heating for specific rooms.',
    icon: Wind,
    image: IMAGES.splitSystem,
    benefits: [
      'Energy efficient operation',
      'Quiet performance',
      'Cost-effective installation',
      'Individual room control',
      'Heating and cooling in one'
    ],
    seo: 'Adelaide split system installation, energy efficient AC Adelaide'
  },
  {
    id: 'ducted-ac',
    title: 'Ducted Air Conditioning',
    description: 'Complete whole-home climate control that is discreetly integrated into your ceiling or floor.',
    icon: Thermometer,
    image: IMAGES.ducted,
    benefits: [
      'Whole-home coverage',
      'Zoning capabilities',
      'Discreet vents',
      'Increases property value',
      'Uniform temperature control'
    ],
    seo: 'Adelaide ducted air conditioning, whole home climate control SA'
  },
  {
    id: 'multi-split',
    title: 'Multi-Split Systems',
    description: 'Connect multiple indoor units to a single outdoor compressor, ideal for homes with limited outdoor space.',
    icon: Settings,
    image: IMAGES.multiSplit,
    benefits: [
      'Space-saving design',
      'Flexible configurations',
      'Individual room control',
      'High efficiency',
      'Perfect for multi-story homes'
    ],
    seo: 'Multi-split systems Adelaide, space saving AC installation'
  },
  {
    id: 'servicing',
    title: 'AC Servicing & Repairs',
    description: 'Keep your system running at peak performance with regular maintenance and fast emergency repairs.',
    icon: Wrench,
    image: IMAGES.service,
    benefits: [
      'Prevent costly breakdowns',
      'Improve air quality',
      'Extend system lifespan',
      'Maintain energy efficiency',
      'Same-day emergency repairs'
    ],
    seo: 'Adelaide air conditioning servicing, AC repairs Adelaide'
  },
  {
    id: 'electrical',
    title: 'General Electrical Work',
    description: 'Licensed electrical services for residential and commercial properties across Adelaide.',
    icon: Zap,
    image: IMAGES.electrical,
    benefits: [
      'Switchboard upgrades',
      'LED lighting installation',
      'Safety switch testing',
      'Power point additions',
      'Full home rewiring'
    ],
    seo: 'Adelaide electrician, emergency electrician Adelaide, licensed sparky SA'
  }
];

export default function Services() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-navy text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8"
          >
            Our Professional Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            From cooling your home to powering your life, we provide expert air conditioning and electrical solutions across Adelaide.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {serviceDetails.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={cn(
                  "grid lg:grid-cols-2 gap-16 items-center",
                  index % 2 === 1 && "lg:flex-row-reverse"
                )}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={cn(index % 2 === 1 && "lg:order-2")}
                >
                  <div className="bg-brand-blue/10 text-brand-blue w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-4xl font-black text-brand-navy mb-6">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-4 mb-10">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="text-brand-orange" size={20} />
                        <span className="font-semibold text-brand-navy">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 bg-brand-navy text-white px-8 py-4 rounded-full font-bold hover:bg-brand-navy/90 transition-all shadow-lg shadow-brand-navy/20"
                  >
                    Request a Quote <ArrowRight size={20} />
                  </Link>
                  <p className="mt-6 text-xs text-gray-400 italic">
                    Keywords: {service.seo}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]",
                    index % 2 === 1 && "lg:order-1"
                  )}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent"></div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-brand-navy mb-2">10+</div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-black text-brand-navy mb-2">100%</div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Licensed & Insured</div>
            </div>
            <div>
              <div className="text-4xl font-black text-brand-navy mb-2">500+</div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-black text-brand-navy mb-2">24/7</div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-orange text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Need Fast, Reliable Service?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Call us now for same-day service in Adelaide or request a free quote online.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:+61423536561" 
              className="bg-brand-navy text-white px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 hover:scale-105 transition-all"
            >
              Call +61 423 536 561
            </a>
            <Link 
              to="/contact" 
              className="bg-white text-brand-navy px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 hover:scale-105 transition-all"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
