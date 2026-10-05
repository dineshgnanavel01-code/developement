import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock,ArrowRight,ArrowLeft,Eye,EyeOff, AlertCircle,Sparkles,} from "lucide-react";
import { useState } from "react";
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

export default function Login() {
  const navigate = useNavigate();

  const DEMO_EMAIL = "demo@nexora.com";
  const DEMO_PASSWORD = "123456";

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const fillDemoAccount = () => {
    setForm({
      email: DEMO_EMAIL,
      password: DEMO_PASSWORD,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Please enter your email and password.");
      return;
    }

    if (
      form.email !== DEMO_EMAIL ||
      form.password !== DEMO_PASSWORD
    ) {
      setError(
        "Invalid login. Use the demo email and password below."
      );
      return;
    }

    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userEmail", form.email);

    navigate("/dashboard");
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

        {/* BACK TO HOME */}
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

        {/* LOGIN CARD */}
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

            {/* LOGIN TITLE */}
            <div className="text-center">
              <motion.div
                whileHover={{ rotateY: 180, rotateX: 10, scale: 1.08 }}
                transition={{ duration: 0.5 }}
                style={{ transformStyle: "preserve-3d" }}
                className="mx-auto w-fit"
              >
                <NexoraLogo size={58} />
              </motion.div>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                Welcome back
              </h2>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Sign in to continue to your Nexora workspace.
              </p>
            </div>

            <motion.div
              whileHover={{ y: -2, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-900/50 dark:bg-indigo-950/30"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-indigo-600 dark:text-indigo-400" />
                  <p className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                    Demo Account
                  </p>
                </div>

                <p className="mt-2 truncate text-xs text-slate-600 dark:text-slate-300">
                  Email: <span className="font-bold">demo@nexora.com</span>
                </p>

                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                  Password: <span className="font-bold">123456</span>
                </p>
              </div>

              <motion.button
                type="button"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={fillDemoAccount}
                className="shrink-0 rounded-lg bg-indigo-600 px-3.5 py-2 text-xs font-bold text-white shadow-md shadow-indigo-600/20 transition hover:bg-indigo-700"
              >
                Use Demo
              </motion.button>
            </motion.div>

            {/* ERROR BANNER */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="mt-5 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400"
              >
                <AlertCircle size={18} className="shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}

            {/* FORM */}
            <form className="mt-7 space-y-6" onSubmit={handleSubmit}>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                >
                  Email address
                </label>

                <div className="group relative mt-2">
                  <Mail
                    size={18}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-indigo-600"
                  />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="demo@nexora.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition duration-300 focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-600/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Password Input */}
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
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="123456"
                    value={form.password}
                    onChange={handleChange}
                    autoComplete="current-password"
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
              </div>

              {/* Options */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                <label className="flex cursor-pointer items-center gap-2 text-slate-600 dark:text-slate-400">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-950"
                  />
                  Remember me
                </label>

                <button
                  type="button"
                  onClick={() => alert("Password reset functionality can be connected here.")}
                  className="font-medium text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-400"
                >
                  Forgot password?
                </button>
              </div>

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
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700">
                <span>Sign In</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>

            </form>

            <p className="mt-7 text-center text-sm text-slate-500 dark:text-slate-400">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-indigo-600 transition hover:text-indigo-500 hover:underline dark:text-indigo-400"
              >
                Create one
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