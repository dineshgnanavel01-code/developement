import { Bell, ChevronDown, LogOut, Menu, Settings, Sparkles, User, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({
  darkMode,
  setDarkMode,
  dashboard = false,
  setSidebarOpen,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  const publicLinks = [
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  const dashboardLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Profile", path: "/profile" },
    { name: "Settings", path: "/settings" },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl transition-colors duration-300 dark:border-slate-800/70 dark:bg-slate-950/85">
        <div className="mx-auto flex h-16 max-w-full items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Left Side: Sidebar Toggle (Dashboard) & Logo */}
          <div className="flex items-center gap-3">
            {dashboard && setSidebarOpen && (
              <motion.button
                type="button"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSidebarOpen(true)}
                aria-label="Open sidebar"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 xl:hidden">
                <Menu size={20} />
              </motion.button>
            )}

            <Link to="/" className="group flex items-center gap-3">
              <motion.div
                whileHover={{ rotateY: 180, rotateX: 10, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-600 to-purple-600 text-lg font-black text-white shadow-lg shadow-indigo-500/30"
                style={{ transformStyle: "preserve-3d" }}>
                N
              </motion.div>

              <div className="min-w-0">
                <span className="block truncate text-lg sm:text-xl font-black tracking-tight text-slate-900 dark:text-white">
                  Nexora
                </span>
                <p className="block truncate text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Digital Workspace
                </p>
              </div>
            </Link>
          </div>

          {/* Tablet & Desktop Navigation Links (Visible on md screens and up) */}
          {!dashboard && (
            <nav className="hidden items-center gap-1 md:flex">
              {publicLinks.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={(e) => handleNavClick(e, item.id)}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-400">
                  {item.name}
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 origin-left scale-x-0 rounded-full bg-indigo-500 transition-transform duration-300 group-hover:scale-x-100" />
                </motion.button>
              ))}
            </nav>
          )}

          {/* Right Side Controls */}
          {dashboard ? (
            <div className="flex items-center gap-2 sm:gap-3">
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="View notifications"
                className="relative hidden sm:flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                <Bell size={18} />
                <motion.span 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900" 
                />
              </motion.button>

              <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 sm:gap-2 rounded-xl px-2 sm:px-3 py-2 transition shadow-sm ${
                      isActive
                        ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400"
                        : "text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                    }`
                  }>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-bold text-white shadow-md">
                    DG
                  </div>
                  <ChevronDown size={15} className="hidden sm:block" />
                </NavLink>
              </motion.div>
            </div>
          ) : (
            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

              <div className="hidden items-center gap-2 md:flex">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/login"
                    className="rounded-xl px-1 py-1 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800">
                    Login
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/signup"
                    className="group flex items-center px-1 py-1  gap-1 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:from-indigo-700 hover:to-violet-700">
                    Get Started
                    <Sparkles size={12} className="transition-transform group-hover:rotate-12"/>
                  </Link>
                </motion.div>
              </div>

              {/* Mobile Menu Trigger Button (Appears below md viewports) */}
              {!dashboard && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileOpen(true)}
                  aria-label="Open mobile menu"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-200 md:hidden">
                  <Menu size={23} />
                </motion.button>
              )}
            </div>
          )}
        </div>
      </motion.header>

      {/* Mobile & Small Screen Drawer Sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"/>

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 z-[70] flex h-screen w-[85%] max-w-sm flex-col border-l border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-950 md:hidden">
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 font-black text-white shadow-md">
                    N
                  </div>
                  <div>
                    <span className="block text-lg font-black text-slate-900 dark:text-white">
                      Nexora
                    </span>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Digital Workspace
                    </span>
                  </div>
                </Link>

                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close mobile menu"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-300">
                  <X size={20} />
                </motion.button>
              </div>

              <nav className="mt-10 space-y-2">
                {dashboard
                  ? dashboardLinks.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                            isActive
                              ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                              : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-900"
                          }`}>
                        {item.name}
                      </NavLink>
                    ))
                  : publicLinks.map((item) => (
                      <motion.button
                        key={item.name}
                        whileHover={{ x: 4 }}
                        onClick={(e) => handleNavClick(e, item.id)}
                        className="flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm font-semibold text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-900">
                        {item.name}
                      </motion.button>
                    ))}
              </nav>

              <div className="mt-auto space-y-3">
                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3 dark:bg-slate-900">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Appearance
                  </span>
                  <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>

                {dashboard ? (
                  <>
                    <Link
                      to="/profile"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900">
                      <User size={18} />
                      Profile
                    </Link>

                    <Link
                      to="/settings"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900">
                      <Settings size={18} />
                      Settings
                    </Link>

                    <button
                      onClick={logout}
                      className="flex w-full items-center gap-3 rounded-xl border border-red-200 p-3 text-left text-sm font-semibold text-red-500 transition hover:bg-red-50 dark:border-red-950 dark:hover:bg-red-950/30">
                      <LogOut size={18} />
                      Logout
                    </button>
                  </>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to="/login"
                      onClick={() => setMobileOpen(false)}
                      className="rounded-xl border border-slate-200 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:text-white dark:hover:bg-slate-900">
                      Login
                    </Link>

                    <Link
                      to="/signup"
                      onClick={() => setMobileOpen(false)}
                      className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3 text-center text-sm font-semibold text-white shadow-md shadow-indigo-600/30">
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}