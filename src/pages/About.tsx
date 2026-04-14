import * as React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Shield, Heart, CheckCircle2, MapPin } from 'lucide-react';
import { IMAGES } from '@/src/constants/images';

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
              <h1 className="text-5xl md:text-7xl font-black text-brand-navy mb-8 leading-tight">
                Family Owned. <br/>
                <span className="text-brand-blue">Adelaide Proud.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ace Air & Electrical Adelaide was founded with a simple mission: to provide premium, reliable service to our local community. With over 10 years of experience, we've built our reputation on trust, quality workmanship, and a commitment to customer satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-black text-brand-navy mb-1">10+</div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Years Experience</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-brand-navy mb-1">500+</div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Projects Completed</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src={IMAGES.about} 
                  alt="Family Business" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-orange/10 p-3 rounded-xl text-brand-orange">
                    <Heart size={32} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Our Core Value</p>
                    <p className="text-xl font-black text-brand-navy">Customer First</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-6">What We Stand For</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're not just another tradie business. We're your partners in home comfort and safety.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Uncompromising Quality',
                desc: 'We use only the best brands and materials. If we wouldn\'t put it in our own home, we won\'t put it in yours.',
                icon: Award
              },
              {
                title: 'Local Expertise',
                desc: 'Being Adelaide locals, we understand the specific climate challenges and electrical requirements of South Australian homes.',
                icon: MapPin
              },
              {
                title: 'Transparent Pricing',
                desc: 'No hidden fees or surprise costs. We provide clear, upfront quotes so you know exactly what to expect.',
                icon: Shield
              }
            ].map((value, i) => (
              <div key={i} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-brand-navy text-white mb-8 group-hover:bg-brand-orange transition-all group-hover:-translate-y-2">
                  <value.icon size={36} />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Experience Section */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src={IMAGES.aboutGrid1} className="rounded-2xl aspect-square object-cover" alt="Work" referrerPolicy="no-referrer" />
                  <img src={IMAGES.aboutGrid2} className="rounded-2xl aspect-[3/4] object-cover" alt="Work" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-4 pt-8">
                  <img src={IMAGES.aboutGrid3} className="rounded-2xl aspect-[3/4] object-cover" alt="Work" referrerPolicy="no-referrer" />
                  <img src={IMAGES.aboutGrid4} className="rounded-2xl aspect-square object-cover" alt="Work" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-black mb-8">Professionalism You Can Count On</h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Our team consists of fully licensed electricians and air conditioning specialists who are passionate about their craft. We stay up-to-date with the latest industry standards and technologies to ensure you get the best possible solution.
              </p>
              <div className="space-y-4">
                {[
                  'Fully Licensed Electricians (PGE)',
                  'ARC Certified AC Specialists',
                  'Public Liability Insured',
                  'Clean & Respectful of Your Home',
                  'Clear Communication Throughout'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-orange" size={20} />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-8">Experience the Ace Difference</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join the hundreds of Adelaide families who trust us with their home's climate and electrical needs.
          </p>
          <div className="flex justify-center">
            <a 
              href="tel:+61423536561" 
              className="bg-brand-orange text-white px-10 py-5 rounded-full font-bold text-xl shadow-xl shadow-brand-orange/30 hover:scale-105 transition-all"
            >
              Call +61 423 536 561
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
