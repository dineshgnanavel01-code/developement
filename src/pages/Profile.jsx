import { Camera, Mail, MapPin,Phone, Save, User,} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Profile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [form, setForm] = useState({
    name: "dina",
    email: "dina@nexora.com",
    phone: "+91 98765 43210",
    location: "Salem,TamilNadu India",
    bio: "Front End Developer and digital workspace enthusiast.",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile changes saved successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-50 transition-colors duration-300 dark:bg-slate-950">
      <Navbar
        dashboard
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      <main className="pt-20 lg:pl-72">
        <div className="mx-auto max-w-full px-4 py-8 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-500">
              Account
            </p>
            <h1 className="mt-2 text-3xl font-black text-slate-900 dark:text-white">
              Profile
            </h1>
          </div>

          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="h-fit rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-lg shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative mx-auto w-fit">
                <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 text-3xl font-black text-white shadow-xl shadow-indigo-600/25">
                  DG
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-xl border-2 border-white bg-indigo-600 text-white shadow-md dark:border-slate-900"
                >
                  <Camera size={15} />
                </motion.button>
              </div>

              <h2 className="mt-5 font-black text-slate-900 dark:text-white">
                Dina
              </h2>

              <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                Front End Developer
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800/80 dark:bg-slate-950/50">
                  <p className="text-lg font-black text-slate-900 dark:text-white">128</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Projects
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800/80 dark:bg-slate-950/50">
                  <p className="text-lg font-black text-slate-900 dark:text-white">4.9</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Rating
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 sm:p-8"
            >
              <form onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                    >
                      Full Name
                    </label>

                    <div className="group relative mt-2">
                      <User
                        size={17}
                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-indigo-600"
                      />
                      <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition duration-300 focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-600/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                    >
                      Email
                    </label>

                    <div className="group relative mt-2">
                      <Mail
                        size={17}
                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-indigo-600"
                      />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition duration-300 focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-600/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                    >
                      Phone
                    </label>

                    <div className="group relative mt-2">
                      <Phone
                        size={17}
                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-indigo-600"
                      />
                      <input
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition duration-300 focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-600/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                    >
                      Location
                    </label>

                    <div className="group relative mt-2">
                      <MapPin
                        size={17}
                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-indigo-600"
                      />
                      <input
                        id="location"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition duration-300 focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-600/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="bio"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                    >
                      Bio
                    </label>

                    <textarea
                      id="bio"
                      name="bio"
                      rows="4"
                      value={form.bio}
                      onChange={handleChange}
                      className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 outline-none transition duration-300 focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-600/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-indigo-500"
                    />
                  </div>
                </div>

                {/* SAVE BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="mt-6 flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700"
                >
                  <Save size={17} />
                  <span>Save Changes</span>
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>
      </main>
    </div>
  );
}