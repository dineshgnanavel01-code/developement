import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {LayoutDashboard,LogOut,Settings, ShoppingBag, User, X, Sparkles, Menu, Moon, Sun,} from "lucide-react";

export default function Sidebar({ open, setOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Orders", path: "/orders", icon: ShoppingBag },
    { name: "Profile", path: "/profile", icon: User },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userEmail");
    setOpen(false);
    navigate("/login", { replace: true });
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {!isDesktop && !open && (
        <header className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 backdrop-blur-md lg:hidden">
          <div className="flex items-center gap-3">
            <motion.button
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-slate-200 border border-slate-800 shadow-sm"
              aria-label="Open sidebar"
            >
              <Menu size={20} />
            </motion.button>

            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-700 text-white shadow-md shadow-indigo-500/30">
                <Sparkles size={17} />
              </div>
              <span className="text-base font-black tracking-tight text-white">
                Nexora
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={toggleDarkMode}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-slate-300 border border-slate-800 shadow-sm"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <Link
              to="/profile"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-xs font-bold text-white shadow-md border border-slate-800"
              aria-label="User Profile"
            >
              DG
            </Link>
          </div>
        </header>
      )}
      <AnimatePresence>
        {open && !isDesktop && (
          <motion.div
            key="sidebar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{
          x: isDesktop || open ? 0 : "-100%",
        }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-y-0 left-0 z-50 flex w-[280px] max-w-[85vw] flex-col border-r border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-950"
      >
        <div className="flex h-full min-h-0 flex-col">
        
          <div className="flex h-20 shrink-0 items-center justify-between border-b border-slate-200 px-5 dark:border-slate-800">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="group flex min-w-0 items-center gap-3"
            >
              <motion.div
                whileHover={{ rotateY: 18, rotateX: -10, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-700 text-white shadow-lg shadow-indigo-500/30"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Sparkles size={19} />
              </motion.div>

              <div className="min-w-0">
                <div className="truncate text-lg font-black tracking-tight text-slate-900 dark:text-white">
                  Nexora
                </div>
                <p className="truncate text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Digital Platform
                </p>
              </div>
            </Link>

            <motion.button
              type="button"
              whileHover={{ rotate: 90, scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white lg:hidden"
              aria-label="Close sidebar"
            >
              <X size={20} />
            </motion.button>
          </div>
          <nav className="min-h-0 flex-1 overflow-y-auto p-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Workspace
            </p>

            <div className="space-y-2">
              {menu.map((item, index) => {
                const Icon = item.icon;
                const active = isActive(item.path);

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => !isDesktop && setOpen(false)}
                      className="group relative block rounded-2xl"
                    >
                      {active && (
                        <motion.div
                          layoutId="activeGlow"
                          className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-indigo-500/40 via-violet-500/20 to-indigo-500/40 blur-sm"
                          transition={{ type: "spring", stiffness: 320, damping: 28 }}
                        />
                      )}

                      <motion.div
                        whileHover={{ x: active ? 0 : 4 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative flex items-center gap-3 overflow-hidden rounded-2xl px-3 py-3 text-sm font-semibold transition-all duration-300 ${
                          active
                            ? "border border-indigo-400/20 bg-gradient-to-r from-indigo-600 via-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/25"
                            : "border border-transparent text-slate-500 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-800 dark:hover:bg-slate-900 dark:hover:text-white"
                        }`}
                      >
                        {active && (
                          <motion.div
                            layoutId="activeAccent"
                            className="absolute bottom-2 left-0 top-2 w-1 rounded-r-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.9)]"
                            transition={{ type: "spring", stiffness: 350, damping: 28 }}
                          />
                        )}

                        <motion.div
                          whileHover={{ rotateY: 20, rotateX: -12, scale: 1.12 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 350, damping: 15 }}
                          className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                            active
                              ? "bg-white/15 shadow-inner shadow-white/10"
                              : "bg-slate-100 group-hover:bg-indigo-100 dark:bg-slate-800 dark:group-hover:bg-indigo-950/60"
                          }`}
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          <Icon
                            size={18}
                            strokeWidth={active ? 2.4 : 2}
                            className={`transition-all duration-300 ${
                              active
                                ? "text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.35)]"
                                : "text-slate-500 group-hover:text-indigo-600 dark:text-slate-400 dark:group-hover:text-indigo-400"
                            }`}
                          />
                        </motion.div>

                        <span className={`relative z-10 flex-1 truncate ${active ? "font-bold" : "font-semibold"}`}>
                          {item.name}
                        </span>

                        {active && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0, x: 8 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 18 }}
                            className="relative z-10 flex h-6 w-6 items-center justify-center rounded-lg bg-white/10"
                          >
                            <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
                          </motion.div>
                        )}
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </nav>
          <div className="shrink-0 px-4 pb-3">
            <div className="relative overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-purple-50 p-4 dark:border-indigo-900/40 dark:from-indigo-950/40 dark:to-purple-950/30">
              <div className="relative z-10">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-md shadow-indigo-600/25">
                    <Sparkles size={15} />
                  </div>
                  <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300">
                    Nexora Pro
                  </span>
                </div>
                <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Unlock advanced analytics and powerful workspace tools.
                </p>
                <button
                  type="button"
                  className="mt-3 text-xs font-bold text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Upgrade now →
                </button>
              </div>
            </div>
          </div>
          <div className="p-4 pt-0 shrink-0">
            <div className="group flex items-center gap-3 rounded-2xl border border-transparent bg-slate-50 p-3 transition-all hover:border-slate-200 hover:shadow-md dark:bg-slate-900 dark:hover:border-slate-800">
              <div className="relative shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white shadow-md">
                  DG
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-slate-50 bg-emerald-500 dark:border-slate-900" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-slate-900 dark:text-white">
                  Dina
                </p>
                <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                  dina@nexora.com
                </p>
              </div>

              <motion.button
                type="button"
                whileHover={{ scale: 1.12, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleLogout();
                }}
                title="Logout"
                aria-label="Logout"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-950/30 dark:hover:text-red-400"
              >
                <LogOut size={17} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
}