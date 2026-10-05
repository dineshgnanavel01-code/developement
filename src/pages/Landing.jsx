import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight,BarChart3, CheckCircle2, Clock3, Layers3,ShieldCheck,Sparkles,Users, Zap,} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const features = [
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "Understand your business with clean dashboards and powerful real-time insights.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description:
      "Built for speed so your team can focus on important work without unnecessary delays.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Keep your entire team connected with simple workflows and shared information.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    description:
      "Modern security features keep your business data safe and protected.",
  },
  {
    icon: Layers3,
    title: "Easy Integration",
    description:
      "Connect the tools you already use and build a workflow that fits your business.",
  },
  {
    icon: Clock3,
    title: "Save More Time",
    description:
      "Automate repetitive work and spend more time growing your business.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    review:
      "Nexora completely changed how our team manages daily operations. Everything feels simple and organized.",
  },
  {
    name: "Michael Chen",
    role: "Founder",
    review:
      "The dashboard gives me exactly the information I need. It has become an essential part of our workflow.",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Lead",
    review:
      "Beautiful interface, excellent performance, and incredibly easy for our whole team to use.",
  },
];

export default function Landing({ darkMode, setDarkMode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-36 lg:pb-28">
        <motion.div
          animate={{ scale: [1, 1.15, 1], y: [-15, 15, -15] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="pointer-events-none absolute left-1/4 top-10 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl dark:bg-indigo-500/20"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], y: [15, -15, 15] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
          className="pointer-events-none absolute right-10 top-32 h-96 w-96 rounded-full bg-purple-500/15 blur-3xl dark:bg-purple-500/20"/>

        <div className="mx-auto grid max-w-full items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-700 shadow-sm dark:border-indigo-900/80 dark:bg-indigo-950/60 dark:text-indigo-300">
              <Sparkles size={15} />
              The smarter way to work
            </motion.div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Manage your business{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:via-violet-400 dark:to-purple-400">
                smarter
              </span>{" "}
              with Nexora.
            </h1>

            <p className="mt-6 max-w-8xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              One powerful workspace platform for analytics, team collaboration, streamlined workflow management, and accelerated business growth.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/signup"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-indigo-600/30 transition-all hover:from-indigo-700 hover:to-violet-700">
                  <span>Start Free</span>
                  <ArrowRight size={17} />
                </Link>
              </motion.div>

              <motion.a
                href="#features"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800/80">
                Explore Features
              </motion.a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                Free to start
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                Cancel anytime
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative" >
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900 sm:p-6">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 dark:border-slate-800/80 dark:bg-slate-950/60">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Revenue</p>
                    <h3 className="mt-1 text-2xl font-black text-slate-900 dark:text-white">$48,290</h3>
                  </div>

                  <span className="rounded-xl bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-600 shadow-sm dark:bg-emerald-950/40 dark:text-emerald-400">
                    +24.8%
                  </span>
                </div>

                <div className="mt-8 flex h-44 items-end gap-2.5">
                  {[35, 50, 42, 70, 58, 80, 68, 92, 76, 100, 84, 95].map(
                    (height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: index * 0.04 + 0.3, duration: 0.6, ease: "easeOut" }}
                        whileHover={{ scaleY: 1.05, backgroundColor: "#818cf8" }}
                        className="flex-1 rounded-t-lg bg-indigo-600/90 shadow-md shadow-indigo-500/30 dark:bg-indigo-500"/>
                    )
                  )}
                </div>

                <div className="mt-4 flex justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul</span>
                  <span>Sep</span>
                  <span>Dec</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  ["12.4K", "Users"],
                  ["8.7K", "Orders"],
                  ["94.8%", "Growth"],
                ].map(([value, label], idx) => (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm dark:border-slate-800/80 dark:bg-slate-950/40">
                    <p className="text-lg font-black text-slate-900 dark:text-white">{value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>
      <section id="features" className="border-t border-slate-200 bg-slate-100/60 py-24 dark:border-slate-800 dark:bg-slate-900/30">
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Powerful Features
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Everything your team needs to scale
            </h2>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              A comprehensive modular toolkit engineered to simplify workflows and elevate productivity across your organization.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2 } }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 transition duration-300 dark:border-slate-800 dark:bg-slate-900">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-sm dark:bg-indigo-950/50 dark:text-indigo-400">
                    <Icon size={22} />
                  </motion.div>

                  <h3 className="mt-5 text-lg font-black text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-24">
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Testimonials
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Loved by growing teams worldwide
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2 } }}
                style={{ transformStyle: "preserve-3d" }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900" >
                <div className="flex gap-1 text-amber-400">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-base">{star}</span>
                  ))}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  “{item.review}”
                </p>

                <div className="mt-6 flex items-center gap-3.5 border-t border-slate-100 pt-5 dark:border-slate-800/80">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 font-black text-indigo-600 shadow-sm dark:bg-indigo-950/50 dark:text-indigo-400">
                    {item.name.split(" ").map((n) => n[0]).join("")}
                  </div>

                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{item.name}</p>
                    <p className="text-xs text-slate-400">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <motion.div 
          whileHover={{ scale: 1.005 }}
          style={{ transformStyle: "preserve-3d" }}
          className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-400 to-purple-400 px-6 py-16 text-center text-white shadow-2xl shadow-indigo-600/30 sm:px-12">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Ready to work smarter?
          </h2>

         <p className="mx-auto mt-3 max-w-xl text-sm text-slate-700 dark:text-white sm:text-base">
  Join thousands of forward-thinking teams using Nexora to automate operations and accelerate business growth.
</p>

          <motion.div whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.95 }} className="mt-8 inline-block">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 rounded-2xl bg-indigo-500 px-8 py-4 font-bold text-indigo-600 shadow-xl shadow-black/10 transition-all hover:bg-indigo-400" >
              <span>Create Your Account</span>
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}