import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('https://formspree.io/f/xppadoqg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const json = await res.json();

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMessage(json?.errors?.[0]?.message ?? 'Something went wrong. Please try again.');
        setSubmitStatus('error');
      }
    } catch {
      setErrorMessage('Network error — please check your connection and try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal">
            Let's Connect
          </h2>
          <div className="h-1.5 w-16 bg-primary mx-auto rounded-full" />
          <p className="text-slate-500 font-sans text-sm sm:text-base">
            Have questions about my e-waste research, project documentation, or coding projects? Send a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Creator Profile & Socials */}
          <div className="lg:col-span-5 space-y-8 bg-slate-50/70 p-8 rounded-3xl border border-slate-100">
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-charcoal">Yash Patil</h3>
              <p className="text-slate-500 font-sans text-sm sm:text-base leading-relaxed">
                B.Tech Student, IT Specialization. Interested in web development, camera systems, and green tech advocacy.
              </p>
            </div>

            {/* Social channels cards list */}
            <div className="space-y-4">
              <a
                href="mailto:yash.patil24@vit.edu.in"
                className="flex items-center space-x-3.5 p-3 rounded-xl bg-white border border-slate-100 hover:border-rose-200 hover:text-rose-600 transition-all group shadow-2xs"
              >
                <div className="p-2 bg-rose-50 rounded-lg text-rose-600 group-hover:bg-rose-100">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-slate-600 font-sans text-xs sm:text-sm font-semibold">Email</span>
              </a>

              <a
                href="https://github.com/rockyashp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3.5 p-3 rounded-xl bg-white border border-slate-100 hover:border-slate-300 hover:text-slate-800 transition-all group shadow-2xs"
              >
                <div className="p-2 bg-slate-100 rounded-lg text-slate-800 group-hover:bg-slate-200">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </div>
                <span className="text-slate-600 font-sans text-xs sm:text-sm font-semibold">GitHub</span>
              </a>

              <a
                href="https://linkedin.com/yashpatil28"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3.5 p-3 rounded-xl bg-white border border-slate-100 hover:border-blue-200 hover:text-blue-600 transition-all group shadow-2xs"
              >
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-100">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <span className="text-slate-600 font-sans text-xs sm:text-sm font-semibold">LinkedIn</span>
              </a>

              <a
                href="https://instagram.com/me_n_yashp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3.5 p-3 rounded-xl bg-white border border-slate-100 hover:border-pink-200 hover:text-pink-600 transition-all group shadow-2xs"
              >
                <div className="p-2 bg-pink-50 rounded-lg text-pink-600 group-hover:bg-pink-100">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <span className="text-slate-600 font-sans text-xs sm:text-sm font-semibold">Instagram</span>
              </a>
            </div>
          </div>


          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative">
            <AnimatePresence mode="wait">
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-primary" />
                  </motion.div>
                  <h3 className="font-display font-extrabold text-xl text-charcoal">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-500 font-sans text-xs sm:text-sm max-w-sm">
                    Thank you, Yash has received your communication. I will review it and follow up as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-4 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                >
                  {/* Validation Alert */}
                  {errorMessage && (
                    <div className="flex items-center space-x-2.5 p-3.5 bg-rose-50 border border-rose-100 text-rose-800 rounded-xl text-xs font-semibold">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl font-sans text-sm focus:outline-none focus:border-primary focus:bg-white transition-all text-charcoal"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl font-sans text-sm focus:outline-none focus:border-primary focus:bg-white transition-all text-charcoal"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Message Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your details here..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl font-sans text-sm focus:outline-none focus:border-primary focus:bg-white transition-all text-charcoal resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-primary hover:bg-primary-hover disabled:bg-slate-300 text-white font-sans font-bold text-sm sm:text-base rounded-xl transition-all flex items-center justify-center space-x-2.5 cursor-pointer shadow-md disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                    <Send className={`w-4 h-4 transition-transform ${isSubmitting ? 'animate-bounce' : 'group-hover:translate-x-0.5'}`} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
