import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Code2, Share2, Globe, Heart, CheckCircle2, Mail, Send, Phone, MapPin, ArrowUp,} from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 4000);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) return;

    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactForm({ name: "", email: "", message: "" });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-white text-slate-600 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800/80">
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3/4 h-32 bg-indigo-500/15 dark:bg-indigo-600/20 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-full px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 pb-16 border-b border-slate-200 dark:border-slate-800">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6">
            <Link to="/" className="group inline-flex items-center gap-3">
              <motion.div
                whileHover={{ rotateY: 180, rotateX: 10, scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 250 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-violet-700 text-lg font-black text-white shadow-lg shadow-indigo-500/25"
                style={{ transformStyle: "preserve-3d" }}>
                N
              </motion.div>
              <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Nexora
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 max-w-sm">
              Empowering digital workspaces with next-gen performance, real-time analytics, and sleek user experiences.
            </p>

            <div className="space-y-3 pt-1 text-sm">
              <motion.a
                whileHover={{ x: 4 }}
                href="mailto:dina@nexora.com"
                className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors w-fit">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 shadow-sm">
                  <Mail size={15} />
                </div>
                <span className="font-medium">dina@nexora.com</span>
              </motion.a>

              <motion.a
                whileHover={{ x: 4 }}
                href="tel:+919876543210"
                className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors w-fit"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 shadow-sm">
                  <Phone size={15} />
                </div>
                <span className="font-medium">+91 98765 43210</span>
              </motion.a>

              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 shadow-sm">
                  <MapPin size={15} />
                </div>
                <span className="font-medium">Salem, Tamil Nadu India</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Subscribe to our newsletter
              </p>
              
              <AnimatePresence mode="wait">
                {subscribed ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="flex items-center gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/40 px-4 py-2.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400 max-w-md shadow-sm" >
                    <CheckCircle2 size={18} className="shrink-0" />
                    <span>Thank you for subscribing!</span>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 max-w-md" >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-4 py-2.5 text-sm text-slate-900 dark:text-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-sm"/>
                    <motion.button
                      whileHover={{ scale: 1.04, y: -1 }}
                      whileTap={{ scale: 0.96 }}
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 hover:from-indigo-700 hover:to-violet-700 transition shrink-0">
                      <span>Join</span>
                      <ArrowRight size={16} />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7" >
            <div 
              style={{ transformStyle: "preserve-3d" }}
              className="rounded-3xl border border-slate-200/80 bg-slate-50/50 p-6 dark:border-slate-800 dark:bg-slate-900/50 sm:p-8 shadow-xl shadow-slate-900/5">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 shadow-sm">
                  <Mail size={18} />
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">Get in Touch</h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Have questions or need support? Drop us a line and our team will get back to you shortly.
              </p>

              <AnimatePresence mode="wait">
                {contactSubmitted ? (
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-10 text-center rounded-2xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/30 p-6">
                    <CheckCircle2 size={40} className="text-emerald-500 mb-3" />
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Thank you for reaching out. We will respond within 24 hours.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleContactSubmit}
                    className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          placeholder="Dina Miller"
                          className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-2.5 text-sm text-slate-900 dark:text-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-sm" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          placeholder="dina@example.com"
                          className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-2.5 text-sm text-slate-900 dark:text-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-sm"/>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Message
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="How can we help you today?"
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-2.5 text-sm text-slate-900 dark:text-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all resize-none shadow-sm"/>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/25 hover:from-indigo-700 hover:to-violet-700 transition" >
                      <Send size={16} />
                      <span>Send Message</span>
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Product
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/#features" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-block hover:translate-x-1 duration-200">
                  Features
                </a>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-block hover:translate-x-1 duration-200">
                  Dashboard
                </Link>
              </li>
              <li>
                <a href="/#analytics" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-block hover:translate-x-1 duration-200">
                  Analytics
                </a>
              </li>
              <li>
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 px-2.5 py-1 rounded-full border border-indigo-200/50 dark:border-indigo-900/50 shadow-sm">
                  <Sparkles size={12} /> Pro v2.4
                </motion.span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Resources
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#documentation" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-block hover:translate-x-1 duration-200">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#guides" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-block hover:translate-x-1 duration-200">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="#api" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-block hover:translate-x-1 duration-200">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-block hover:translate-x-1 duration-200">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Company
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-block hover:translate-x-1 duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-block hover:translate-x-1 duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-block hover:translate-x-1 duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-block hover:translate-x-1 duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4 col-span-2 sm:col-span-3 lg:col-span-1">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Connect
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Code2, href: "https://github.com", label: "Code Repository" },
                { icon: Share2, href: "https://twitter.com", label: "Social Feed" },
                { icon: Globe, href: "https://example.com", label: "Website" },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.15, y: -3, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-500 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:border-indigo-700 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-400 transition-colors shadow-sm">
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center md:text-left">
            &copy; {currentYear} Nexora Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <span>Crafted with</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} >
              <Heart size={14} className="text-red-500 fill-red-500" />
            </motion.span>
            <span>for high-performance workflows.</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.12, y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-500 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:border-indigo-700 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-400 transition-colors shadow-sm"
          >
            <ArrowUp size={19} />
          </motion.button>
        </div>

      </div>
    </footer>
  );
}