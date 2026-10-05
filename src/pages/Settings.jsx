import { Bell,Check,Lock, Palette, Shield,Trash2,Globe,Download,Key,Sun,Moon,} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Settings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  const handleThemeToggle = (value) => {
    setDarkMode(value);
    document.documentElement.classList.toggle("dark", value);
    localStorage.setItem("theme", value ? "dark" : "light");
  };

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState("30 mins");
  const [language, setLanguage] = useState("English (US)");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <Navbar
        dashboard
        darkMode={darkMode}
        setDarkMode={handleThemeToggle}
        setSidebarOpen={setSidebarOpen}
      />

      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      <main className="pt-20 lg:pl-72">
        <div className="mx-auto max-w-full px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-500">
            Preferences
          </p>

          <h1 className="mt-2 text-3xl font-black text-slate-900 dark:text-white">
            Settings
          </h1>

          <div className="mt-8 space-y-6">
            
            <motion.section
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400">
                  <Bell size={19} />
                </div>

                <div>
                  <h2 className="font-bold text-slate-900 dark:text-white">
                    Notifications
                  </h2>
                  <p className="text-xs text-slate-400">
                    Manage how and when you receive updates.
                  </p>
                </div>
              </div>

              <div className="mt-6 divide-y divide-slate-100 dark:divide-slate-800">
                <div className="flex items-center justify-between py-4 first:pt-0">
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Email notifications
                    </p>
                    <p className="text-xs text-slate-400">
                      Receive weekly summaries and workspace alerts.
                    </p>
                  </div>
                  <button
                    onClick={() => setEmailNotifications((prev) => !prev)}
                    className={`flex h-7 w-12 items-center rounded-full p-1 transition ${
                      emailNotifications ? "bg-indigo-600" : "bg-slate-300 dark:bg-slate-700"
                    }`}
                  >
                    <motion.span
                      animate={{ x: emailNotifications ? 20 : 0 }}
                      className="h-5 w-5 rounded-full bg-white shadow"
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between py-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Push notifications
                    </p>
                    <p className="text-xs text-slate-400">
                      Instant alerts directly in your browser.
                    </p>
                  </div>
                  <button
                    onClick={() => setPushNotifications((prev) => !prev)}
                    className={`flex h-7 w-12 items-center rounded-full p-1 transition ${
                      pushNotifications ? "bg-indigo-600" : "bg-slate-300 dark:bg-slate-700"
                    }`}
                  >
                    <motion.span
                      animate={{ x: pushNotifications ? 20 : 0 }}
                      className="h-5 w-5 rounded-full bg-white shadow"
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between py-4 last:pb-0">
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      SMS alerts
                    </p>
                    <p className="text-xs text-slate-400">
                      Text messages for high-priority security warnings.
                    </p>
                  </div>
                  <button
                    onClick={() => setSmsAlerts((prev) => !prev)}
                    className={`flex h-7 w-12 items-center rounded-full p-1 transition ${
                      smsAlerts ? "bg-indigo-600" : "bg-slate-300 dark:bg-slate-700"
                    }`}
                  >
                    <motion.span
                      animate={{ x: smsAlerts ? 20 : 0 }}
                      className="h-5 w-5 rounded-full bg-white shadow"
                    />
                  </button>
                </div>
              </div>
            </motion.section>

            <motion.section
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                  <Shield size={19} />
                </div>

                <div>
                  <h2 className="font-bold text-slate-900 dark:text-white">
                    Security & Authentication
                  </h2>
                  <p className="text-xs text-slate-400">
                    Keep your account credentials safe and secure.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-5 border-t border-slate-100 pt-5 dark:border-slate-800">
                {/* 2FA */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Two-Factor Authentication (2FA)
                    </p>
                    <p className="text-xs text-slate-400">
                      Require an authenticator app code during sign-in.
                    </p>
                  </div>
                  <button
                    onClick={() => setTwoFactor((prev) => !prev)}
                    className={`flex h-7 w-12 items-center rounded-full p-1 transition ${
                      twoFactor ? "bg-indigo-600" : "bg-slate-300 dark:bg-slate-700"
                    }`}
                  >
                    <motion.span
                      animate={{ x: twoFactor ? 20 : 0 }}
                      className="h-5 w-5 rounded-full bg-white shadow"
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Inactivity Session Timeout
                    </p>
                    <p className="text-xs text-slate-400">
                      Automatically log out after a period of idleness.
                    </p>
                  </div>
                  <select
                    value={sessionTimeout}
                    onChange={(e) => setSessionTimeout(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    <option value="15 mins">15 minutes</option>
                    <option value="30 mins">30 minutes</option>
                    <option value="1 hour">1 hour</option>
                    <option value="Never">Never</option>
                  </select>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-800 dark:text-slate-300">
                    <Lock size={16} />
                    Change Password
                  </button>
                  <button className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-800 dark:text-slate-300">
                    <Key size={16} />
                    Manage API Keys
                  </button>
                </div>
              </div>
            </motion.section>

            <motion.section
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-violet-100 p-3 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400">
                  <Globe size={19} />
                </div>

                <div>
                  <h2 className="font-bold text-slate-900 dark:text-white">
                    Language & Region
                  </h2>
                  <p className="text-xs text-slate-400">
                    Configure your display language and regional settings.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 border-t border-slate-100 pt-5 dark:border-slate-800">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">
                    Display Language
                  </label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    <option value="English (US)">English (US)</option>
                    <option value="Spanish">Español</option>
                    <option value="French">Français</option>
                    <option value="German">Deutsch</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">
                    Time Zone
                  </label>
                  <select
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    defaultValue="UTC"
                  >
                    <option value="UTC">UTC (Coordinated Universal Time)</option>
                    <option value="EST">EST (Eastern Standard Time)</option>
                    <option value="PST">PST (Pacific Standard Time)</option>
                    <option value="IST">IST (Indian Standard Time)</option>
                  </select>
                </div>
              </div>
            </motion.section>

            <motion.section
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-purple-100 p-3 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400">
                  <Palette size={19} />
                </div>

                <div>
                  <h2 className="font-bold text-slate-900 dark:text-white">
                    Appearance
                  </h2>
                  <p className="text-xs text-slate-400">
                    Customize your workspace theme layout.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl bg-slate-50 p-4 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${darkMode ? "bg-purple-600 text-white" : "bg-indigo-600 text-white"}`}>
                    {darkMode ? <Moon size={16} /> : <Sun size={16} />}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      {darkMode ? "Dark Mode is Active" : "Light Mode is Active"}
                    </p>
                    <p className="text-xs text-slate-400">
                      Switch between light and dark themes seamlessly.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleThemeToggle(false)}
                    className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition ${
                      !darkMode
                        ? "bg-white text-indigo-600 shadow-sm dark:bg-slate-800 dark:text-white"
                        : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    }`}
                  >
                    <Sun size={14} />
                    <span>Light</span>
                  </button>
                  <button
                    onClick={() => handleThemeToggle(true)}
                    className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition ${
                      darkMode
                        ? "bg-slate-800 text-purple-400 shadow-sm dark:bg-slate-800 dark:text-purple-300"
                        : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    }`}
                  >
                    <Moon size={14} />
                    <span>Dark</span>
                  </button>
                </div>
              </div>
            </motion.section>

            <motion.section
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                  <Download size={19} />
                </div>

                <div>
                  <h2 className="font-bold text-slate-900 dark:text-white">
                    Data & Export
                  </h2>
                  <p className="text-xs text-slate-400">
                    Download copies of your workspace records.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5 dark:border-slate-800">
                <div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Export account archives
                  </p>
                  <p className="text-xs text-slate-400">
                    Get a JSON package of all logs, orders, and analytics data.
                  </p>
                </div>
                <button className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700">
                  <Download size={15} />
                  Download Archive
                </button>
              </div>
            </motion.section>

            <motion.section
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-950 dark:bg-red-950/20"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-red-100 p-3 text-red-600 dark:bg-red-950 dark:text-red-400">
                  <Trash2 size={19} />
                </div>

                <div>
                  <h2 className="font-bold text-red-700 dark:text-red-400">
                    Danger Zone
                  </h2>
                  <p className="text-xs text-red-500/70">
                    Irreversible actions related to your workspace account.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-red-200/60 pt-5 dark:border-red-900/50">
                <div>
                  <p className="text-sm font-semibold text-red-800 dark:text-red-300">
                    Permanently delete account
                  </p>
                  <p className="text-xs text-red-500/80">
                    Once deleted, your account and all associated data cannot be recovered.
                  </p>
                </div>
                <button className="rounded-xl border border-red-300 bg-white px-4 py-2.5 text-xs font-bold text-red-600 transition hover:bg-red-100 dark:border-red-900 dark:bg-red-950/50 dark:hover:bg-red-900">
                  Delete Account
                </button>
              </div>
            </motion.section>

          </div>
        </div>
      </main>
    </div>
  );
}