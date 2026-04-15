import * as React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Clock, Shield, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '@/src/constants/images';

export default function Contact() {
  const [formStatus, setFormStatus] = React.useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setFormStatus('submitting');

  try {
    const response = await fetch("https://n8n.synkron.com.au/webhook-test/5bb8acba-dd34-42d1-b3ec-3dc89bebfedb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        suburb,
        service,
        message,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit");
    }

    setFormStatus('success');
  } catch (error) {
    console.error(error);
    setFormStatus('error');
  }
};

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-navy text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8"
          >
            Get a Free Quote
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Need urgent service or planning a new installation? Fill out the form below or call us directly for same-day quoting.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-brand-navy mb-8">Contact Information</h3>
                <div className="space-y-8">
                  <a href="tel:+61423536561" className="flex items-start gap-4 group">
                    <div className="bg-brand-blue/10 p-4 rounded-2xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Call Us</p>
                      <p className="text-xl font-bold text-brand-navy">+61 423 536 561</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-orange/10 p-4 rounded-2xl text-brand-orange">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Service Area</p>
                      <p className="text-xl font-bold text-brand-navy">All of Adelaide, SA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold/10 p-4 rounded-2xl text-brand-gold">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Availability</p>
                      <p className="text-xl font-bold text-brand-navy">Same-Day & Late-Night</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                <h4 className="text-lg font-bold text-brand-navy mb-4 flex items-center gap-2">
                  <Shield className="text-brand-orange" size={20} />
                  Licensed & Insured
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  We are fully licensed electricians and ARC certified air conditioning specialists. Your property is protected with comprehensive public liability insurance.
                </p>
                <div className="flex items-center gap-2 text-brand-blue font-bold text-sm">
                  <CheckCircle2 size={16} />
                  
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-brand-navy/5 border border-gray-100">
                {formStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-3xl font-black text-brand-navy mb-4">Quote Request Received!</h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Thank you for contacting Ace Air & Electrical. We'll be in touch shortly to discuss your project.
                    </p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="text-brand-blue font-bold hover:underline"
                    >
                      Send another request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-navy uppercase tracking-wider ml-1">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe"
                          className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-blue focus:bg-white outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-navy uppercase tracking-wider ml-1">Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          placeholder="0400 000 000"
                          className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-blue focus:bg-white outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-navy uppercase tracking-wider ml-1">Service Required</label>
                        <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-blue focus:bg-white outline-none transition-all appearance-none">
                          <option>Split System Installation</option>
                          <option>Ducted Air Conditioning</option>
                          <option>Multi-Split System</option>
                          <option>AC Servicing & Repair</option>
                          <option>Electrical Services</option>
                          <option>Other / Not Sure</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-navy uppercase tracking-wider ml-1">Suburb</label>
                        <input 
                          required
                          type="text" 
                          placeholder="e.g. Glenelg"
                          className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-blue focus:bg-white outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-navy uppercase tracking-wider ml-1">Your Message</label>
                      <textarea 
                        rows={5}
                        placeholder="Tell us about your project or emergency..."
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-blue focus:bg-white outline-none transition-all resize-none"
                      ></textarea>
                    </div>

                    <button 
                      disabled={formStatus === 'submitting'}
                      type="submit"
                      className="w-full bg-brand-orange text-white py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-brand-orange/90 transition-all shadow-xl shadow-brand-orange/20 disabled:opacity-70"
                    >
                      {formStatus === 'submitting' ? 'Sending...' : (
                        <>
                          Send Quote Request
                          <Send size={20} />
                        </>
                      )}
                    </button>
                    <p className="text-center text-sm text-gray-500">
                      Or call us for immediate assistance: <a href="tel:+61423536561" className="text-brand-navy font-bold hover:underline">+61 423 536 561</a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-gray-200 relative overflow-hidden">
        <img 
          src={IMAGES.map} 
          alt="Adelaide Map" 
          className="w-full h-full object-cover opacity-50 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 flex items-center gap-4">
            <div className="bg-brand-orange p-3 rounded-2xl text-white">
              <MapPin size={32} />
            </div>
            <div>
              <p className="font-black text-brand-navy text-xl">Serving All of Adelaide</p>
              <p className="text-gray-500">Same-day service available across the metro area.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
