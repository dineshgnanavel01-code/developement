import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail, User, ArrowRight,ArrowLeft,CheckCircle,Sparkles,} from "lucide-react";
import { motion } from "framer-motion";
function NexoraLogo({ size = 48 }) {
  return (
    <motion.div
      whileHover={{
        rotateY: 180,
        rotateX: 10,
        scale: 1.08,
      }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 180,
      }}
      style={{
        width: size,
        height: size,
        transformStyle: "preserve-3d",
      }}
      className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 text-white shadow-xl shadow-indigo-600/25"
    >
      <div className="absolute inset-0 bg-white/10" />

      <svg
        width={size * 0.58}
        height={size * 0.58}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        <path
          d="M8 31V9L28 31V9"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 9L28 31"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.45"
        />
      </svg>

      <motion.div
        animate={{
          x: ["-120%", "140%"],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
        className="absolute inset-y-0 w-8 rotate-12 bg-white/20 blur-md"
      />
    </motion.div>
  );
}

export default function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must contain at least 6 characters";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    localStorage.setItem("userEmail", form.email);
    navigate("/login");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-10 transition-colors duration-300 dark:bg-slate-950 sm:px-6">

      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -30, 0],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-indigo-400/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -35, 0],
          y: [0, 25, 0],
          rotate: [0, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"
      />

      <div className="relative z-10 w-full max-w-md">

        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4"
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-xl py-2 text-sm font-semibold text-slate-500 transition-all duration-300 hover:-translate-x-1 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            <motion.span whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
              <ArrowLeft size={17} />
            </motion.span>
            <span>Back to Home</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 120,
            damping: 15,
          }}
          whileHover={{ y: -3 }}
          style={{
            transformStyle: "preserve-3d",
            perspective: 1200,
          }}
          className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900 sm:p-9"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative z-10">

            <div className="text-center">
              <motion.div
                whileHover={{ rotateY: 180, rotateX: 10, scale: 1.08 }}
                transition={{ duration: 0.5 }}
                style={{ transformStyle: "preserve-3d" }}
                className="mx-auto w-fit"
              >
                <NexoraLogo size={58} />
              </motion.div>

              <h1 className="mt-5 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                Create account
              </h1>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Join Nexora and manage everything in one place.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                >
                  Full Name
                </label>
                <div className="group relative mt-2">
                  <User
                    size={18}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-indigo-600"
                  />
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition duration-300 focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-600/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-indigo-500"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-xs font-medium text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                >
                  Email Address
                </label>
                <div className="group relative mt-2">
                  <Mail
                    size={18}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-indigo-600"
                  />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition duration-300 focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-600/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-indigo-500"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs font-medium text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                >
                  Password
                </label>
                <div className="group relative mt-2">
                  <Lock
                    size={18}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-indigo-600"
                  />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-10 pr-12 text-sm text-slate-900 outline-none transition duration-300 focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-600/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-0 top-0 flex h-full items-center pr-3.5 text-slate-400 transition hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-xs font-medium text-red-500">
                    {errors.password}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                >
                  Confirm Password
                </label>
                <div className="group relative mt-2">
                  <Lock
                    size={18}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-indigo-600"
                  />
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-10 pr-12 text-sm text-slate-900 outline-none transition duration-300 focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-600/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                    className="absolute right-0 top-0 flex h-full items-center pr-3.5 text-slate-400 transition hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {showConfirmPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-xs font-medium text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <label className="flex items-start gap-3 pt-1 text-xs text-slate-600 dark:text-slate-400 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-950"
                />
                <span>
                  I agree to the{" "}
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                    Terms & Conditions
                  </span>{" "}
                  and Privacy Policy.
                </span>
              </label>

              <motion.button
                whileHover={{
                  scale: 1.02,
                  rotateX: 3,
                  boxShadow: "0 15px 35px rgba(99,102,241,0.25)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                type="submit"
                style={{ transformStyle: "preserve-3d" }}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700"
              >
                <span>Create Account</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>
            </form>

            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Secure Features
              </span>
              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
            </div>

            <div className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
              <p className="flex items-center gap-2">
                <CheckCircle size={15} className="shrink-0 text-emerald-500" />
                Secure account management & full data encryption
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle size={15} className="shrink-0 text-emerald-500" />
                Instant access to your personalized workspace dashboard
              </p>
            </div>

            <p className="mt-7 border-t border-slate-100 pt-6 text-center text-sm text-indigo-500 dark:border-slate-800 dark:text-slate-400">
              Already have an account?{" "}
<Link
  to="/login"
  className="font-semibold text-blue-900 transition hover:text-indigo-500 hover:underline dark:text-indigo-600"
>
  Sign in
</Link>
            </p>

          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-center text-xs text-slate-400"
        >
          © 2026 Nexora. All rights reserved.
        </motion.p>

      </div>
    </main>
  );
}