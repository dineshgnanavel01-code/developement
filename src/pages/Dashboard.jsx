import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  ArrowUpRight, ArrowDownRight, BarChart3, DollarSign, MoreHorizontal, ShoppingBag, TrendingUp, Users, Plus, Sparkles, ArrowRight, Activity, Layers, CheckCircle2, Clock, AlertCircle, ShieldCheck, Server, Globe, Filter, Download, Search, Check, RefreshCw} from "lucide-react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

const initialOrders = [
  {
    id: "#NX-1024",
    customer: "Olivia Martin",
    email: "olivia.m@example.com",
    product: "Nexora Pro (Annual)",
    amount: "$249.00",
    status: "Completed",
    date: "Oct 5, 2026",
  },
  {
    id: "#NX-1023",
    customer: "James Wilson",
    email: "j.wilson@enterprise.io",
    product: "Business Plan",
    amount: "$149.00",
    status: "Processing",
    date: "Oct 5, 2026",
  },
  {
    id: "#NX-1022",
    customer: "Sophia Brown",
    email: "sophia.b@designhub.co",
    product: "Starter Plan",
    amount: "$79.00",
    status: "Completed",
    date: "Oct 4, 2026",
  },
  {
    id: "#NX-1021",
    customer: "Daniel Miller",
    email: "daniel.m@devlabs.net",
    product: "Nexora Pro (Monthly)",
    amount: "$249.00",
    status: "Pending",
    date: "Oct 4, 2026",
  },
  {
    id: "#NX-1020",
    customer: "Emma Watson",
    email: "emma@cinemagic.org",
    product: "Enterprise Custom",
    amount: "$899.00",
    status: "Completed",
    date: "Oct 3, 2026",
  },
  {
    id: "#NX-1019",
    customer: "Liam Johnson",
    email: "liam.j@techcore.io",
    product: "Business Plan",
    amount: "$149.00",
    status: "Completed",
    date: "Oct 3, 2026",
  },
];

const initialActivity = [
  {
    name: "Olivia Martin",
    action: "completed an annual subscription order",
    time: "2 minutes ago",
    category: "billing",
  },
  {
    name: "James Wilson",
    action: "created a new enterprise workspace account",
    time: "12 minutes ago",
    category: "user",
  },
  {
    name: "Sophia Brown",
    action: "upgraded tier from Starter to Pro",
    time: "28 minutes ago",
    category: "upgrade",
  },
  {
    name: "Daniel Miller",
    action: "submitted a priority API support request",
    time: "1 hour ago",
    category: "support",
  },
  {
    name: "Emma Watson",
    action: "provisioned 15 new developer seat licenses",
    time: "3 hours ago",
    category: "team",
  },
  {
    name: "System Security",
    action: "automated weekly SSL database backup completed",
    time: "5 hours ago",
    category: "system",
  },
];

const teamMembers = [
  { name: "Sarah Jenkins", role: "Lead Architect", tasksDone: 28, status: "Online", avatar: "SJ" },
  { name: "Alex Rivera", role: "UI/UX Director", tasksDone: 34, status: "Busy", avatar: "AR" },
  { name: "Marcus Chen", role: "Backend Lead", tasksDone: 19, status: "Online", avatar: "MC" },
  { name: "Elena Rostova", role: "DevOps Engineer", tasksDone: 42, status: "Offline", avatar: "ER" },
];

const initialTasks = [
  { id: 1, title: "Review quarterly security compliance report", tag: "Security", completed: true },
  { id: 2, title: "Deploy v2.5 microservice update to production cluster", tag: "Engineering", completed: true },
  { id: 3, title: "Approve budget reallocation for Q4 marketing campaign", tag: "Finance", completed: false },
  { id: 4, title: "Conduct 1-on-1 performance review with design team", tag: "Management", completed: false },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("nexora-theme") === "dark";
  });

  const [tasks, setTasks] = useState(initialTasks);
  const [orders, setOrders] = useState(initialOrders);
  const [orderSearchQuery, setOrderSearchQuery] = useState("");
  const [selectedStatusFilter, setSelectedStatusFilter] = useState("All");
  const [activityCategory, setActivityCategory] = useState("all");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    showToast("Task status updated");
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleRefreshData = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      showToast("Dashboard synchronized successfully");
    }, 1000);
  };

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesSearch = 
        order.customer.toLowerCase().includes(orderSearchQuery.toLowerCase()) ||
        order.email.toLowerCase().includes(orderSearchQuery.toLowerCase()) ||
        order.id.toLowerCase().includes(orderSearchQuery.toLowerCase());
      
      const matchesStatus = selectedStatusFilter === "All" || order.status === selectedStatusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [orders, orderSearchQuery, selectedStatusFilter]);

  const filteredActivity = useMemo(() => {
    if (activityCategory === "all") return initialActivity;
    return initialActivity.filter(act => act.category === activityCategory);
  }, [activityCategory]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("nexora-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-5 right-5 z-50 flex items-center gap-3 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-2xl dark:bg-slate-100 dark:text-slate-900"
          >
            <CheckCircle2 size={18} className="text-emerald-400 dark:text-emerald-600" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="lg:pl-[280px]">
        <Navbar
          dashboard
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="px-4 py-8 sm:px-6 lg:px-8 space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 25, rotateX: -5 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.01, rotateX: 1, rotateY: -1 }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-2xl shadow-indigo-500/10 dark:border-slate-800/80 dark:bg-slate-900 sm:p-8"
          >
            <motion.div
              animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="pointer-events-none absolute -right-16 -top-36 h-84 w-64 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl"
            />
            <motion.div
              animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="pointer-events-none absolute -bottom-26 right-32 h-78 w-48 rounded-full bg-violet-500/20 blur-2xl"
            />

            <div className="relative z-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-50 px-3.5 py-1.5 shadow-sm dark:bg-indigo-950/50"
                >
                  <Sparkles size={15} className="text-indigo-600 dark:text-indigo-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    {new Date().toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </motion.div>

                <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-700 bg-clip-text text-transparent dark:from-white dark:via-indigo-200 dark:to-slate-400">
                  Welcome back, Dina 👋
                </h1>

                <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
                  Here is your expanded real-time performance overview across your digital infrastructure.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <motion.button
                  onClick={handleRefreshData}
                  whileHover={{ scale: 1.06, y: -3 }}
                  whileTap={{ scale: 0.94 }}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-bold text-slate-700 shadow-lg shadow-slate-900/5 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <RefreshCw size={16} className={`text-indigo-500 ${isRefreshing ? "animate-spin" : ""}`} />
                  <span>Sync</span>
                </motion.button>

                <motion.button
                  onClick={() => showToast("Export logs package queued")}
                  whileHover={{ scale: 1.06, y: -3 }}
                  whileTap={{ scale: 0.94 }}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 shadow-lg shadow-slate-900/5 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <Download size={16} className="text-indigo-500" />
                  <span>Export Logs</span>
                </motion.button>

                <motion.button
                  onClick={() => showToast("New reporting modal initialized")}
                  whileHover={{ scale: 1.06, y: -3 }}
                  whileTap={{ scale: 0.94 }}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-600/30 transition hover:from-indigo-700 hover:to-violet-700"
                >
                  <Plus size={18} />
                  <span>Create Report</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard title="Total Revenue" value="$84,250" change="+18.2%" icon={DollarSign} />
            <StatCard title="Total Orders" value="1,248" change="+12.5%" icon={ShoppingBag} />
            <StatCard title="Active Users" value="8,549" change="+8.4%" icon={Users} />
            <StatCard title="System Uptime" value="99.98%" change="+0.04%" icon={Server} />
          </div>

          <div id="analytics" className="grid gap-6 xl:grid-cols-3">
            <motion.section
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -4, scale: 1.005 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 xl:col-span-2 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Revenue & Financial Trajectory
                  </p>
                  <h2 className="mt-1 text-3xl font-black tracking-tight">$84,250.00</h2>
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 rounded-xl bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-600 shadow-sm dark:bg-emerald-950/30 dark:text-emerald-400">
                    <ArrowUpRight size={15} />
                    +18.2%
                  </span>
                  <motion.button 
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-xl border border-slate-200 p-2 text-slate-400 transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800"
                  >
                    <MoreHorizontal size={18} />
                  </motion.button>
                </div>
              </div>

              <div className="relative mt-8 h-64">
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[100, 75, 50, 25, 0].map((item) => (
                    <div
                      key={item}
                      className="border-t border-dashed border-slate-200 dark:border-slate-800/80"
                    />
                  ))}
                </div>

                <svg
                  viewBox="0 0 800 250"
                  className="absolute inset-0 h-full w-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2.2, ease: "easeInOut" }}
                    d="M0 205 C70 180 95 190 145 150 C205 105 230 170 280 135 C335 95 365 115 410 125 C465 138 485 75 535 90 C590 108 615 55 665 72 C720 88 745 35 800 45 L800 250 L0 250 Z"
                    fill="url(#areaGradient)"
                  />

                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.2, ease: "easeInOut" }}
                    d="M0 205 C70 180 95 190 145 150 C205 105 230 170 280 135 C335 95 365 115 410 125 C465 138 485 75 535 90 C590 108 615 55 665 72 C720 88 745 35 800 45"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="mt-4 flex justify-between text-xs font-semibold uppercase tracking-wider text-slate-400">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"].map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </motion.section>

            <motion.section
              whileHover={{ y: -4, scale: 1.005 }}
              style={{ transformStyle: "preserve-3d" }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      System Health Score
                    </p>
                    <h2 className="mt-1 text-2xl font-black">Optimal</h2>
                  </div>

                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-sm dark:bg-indigo-950/50 dark:text-indigo-400"
                  >
                    <ShieldCheck size={22} />
                  </motion.div>
                </div>

                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="mx-auto my-6 flex h-36 w-36 items-center justify-center rounded-full border-[16px] border-indigo-600/15 shadow-inner dark:border-indigo-950"
                >
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border-[14px] border-indigo-600 border-r-transparent">
                    <div className="text-center">
                      <p className="text-2xl font-black">94%</p>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Index</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-3 pt-2">
                <div>
                  <div className="mb-1.5 flex justify-between text-xs font-semibold">
                    <span className="text-slate-500">API Gateway Response</span>
                    <span className="text-slate-900 dark:text-white">42ms</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div className="h-full rounded-full bg-emerald-500 w-[96%]" />
                  </div>
                </div>

                <div>
                  <div className="mb-1.5 flex justify-between text-xs font-semibold">
                    <span className="text-slate-500">Database Load</span>
                    <span className="text-slate-900 dark:text-white">28%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div className="h-full rounded-full bg-indigo-600 w-[28%]" />
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <motion.section
              whileHover={{ y: -3 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 sm:p-7"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-black">Team Workload & Status</h2>
                  <p className="mt-0.5 text-xs text-slate-400">Active engineering & design contributors</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-xl">
                  <Users size={14} /> 4 Online
                </span>
              </div>

              <div className="space-y-4">
                {teamMembers.map((member, i) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-bold text-white shadow-md">
                        {member.avatar}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">{member.name}</h4>
                        <p className="text-xs text-slate-400">{member.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right hidden sm:block">
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{member.tasksDone} Tasks</span>
                        <p className="text-[10px] text-slate-400">Completed this week</p>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        member.status === "Online" 
                          ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400" 
                          : member.status === "Busy"
                          ? "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400"
                          : "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                      }`}>
                        {member.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              whileHover={{ y: -3 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-black">Priority Action Items</h2>
                    <p className="mt-0.5 text-xs text-slate-400">Interactive workspace checklist</p>
                  </div>
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    {tasks.filter(t => t.completed).length} / {tasks.length} Done
                  </span>
                </div>

                <div className="space-y-3 mt-2">
                  {tasks.map((task) => (
                    <motion.div
                      key={task.id}
                      onClick={() => toggleTask(task.id)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        task.completed
                          ? "border-emerald-500/30 bg-emerald-50/30 dark:bg-emerald-950/20 text-slate-400 line-through"
                          : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 text-slate-900 dark:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`flex h-5 w-5 items-center justify-center rounded-lg border transition-colors ${
                          task.completed 
                            ? "bg-emerald-500 border-emerald-500 text-white" 
                            : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                        }`}>
                          {task.completed && <CheckCircle2 size={14} />}
                        </div>
                        <span className="text-xs font-semibold">{task.title}</span>
                      </div>

                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0">
                        {task.tag}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Click any task item to toggle completion</span>
                <span className="font-bold text-indigo-600 dark:text-indigo-400">All systems stable</span>
              </div>
            </motion.section>
          </div>

          <div id="orders" className="grid gap-6 xl:grid-cols-3">
            <motion.section
              whileHover={{ y: -4, scale: 1.005 }}
              style={{ transformStyle: "preserve-3d" }}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 xl:col-span-2 flex flex-col"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 p-6 dark:border-slate-800 sm:p-7 gap-4">
                <div>
                  <h2 className="text-lg font-black">Expanded Order Transactions</h2>
                  <p className="mt-0.5 text-xs text-slate-400">Showing recent customer subscriptions and licenses</p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="relative">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search orders..."
                      value={orderSearchQuery}
                      onChange={(e) => setOrderSearchQuery(e.target.value)}
                      className="rounded-xl border border-slate-200 bg-slate-50/50 pl-9 pr-3 py-1.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200"
                    />
                  </div>

                  <select
                    value={selectedStatusFilter}
                    onChange={(e) => setSelectedStatusFilter(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                  >
                    <option value="All">All Status</option>
                    <option value="Completed">Completed</option>
                    <option value="Processing">Processing</option>
                    <option value="Pending">Pending</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto flex-1">
                <table className="w-full min-w-[700px] text-left">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/50 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:border-slate-800 dark:bg-slate-950/50">
                      <th className="px-6 py-4">Order ID</th>
                      <th className="px-6 py-4">Customer</th>
                      <th className="px-6 py-4">Product Plan</th>
                      <th className="px-6 py-4">Amount</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Date</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                    {filteredOrders.length > 0 ? (
                      filteredOrders.map((order, index) => (
                        <motion.tr
                          key={order.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.04 }}
                          whileHover={{ backgroundColor: "rgba(99, 102, 241, 0.04)" }}
                          className="transition"
                        >
                          <td className="px-6 py-4 text-sm font-bold text-indigo-600 dark:text-indigo-400">
                            {order.id}
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm font-semibold text-slate-900 dark:text-white">{order.customer}</p>
                            <p className="text-xs text-slate-400">{order.email}</p>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                            {order.product}
                          </td>
                          <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">
                            {order.amount}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex items-center rounded-xl px-3 py-1 text-xs font-bold shadow-sm ${
                                order.status === "Completed"
                                  ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400"
                                  : order.status === "Processing"
                                  ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/30 dark:text-indigo-400"
                                  : "bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400"
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-xs text-slate-400">
                            {order.date}
                          </td>
                        </motion.tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="py-8 text-center text-xs text-slate-400">
                          No matching transaction records found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </motion.section>

            <motion.section
              whileHover={{ y: -4, scale: 1.005 }}
              style={{ transformStyle: "preserve-3d" }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-black">Live Activity Log</h2>
                    <p className="mt-0.5 text-xs text-slate-400">Latest workspace triggers</p>
                  </div>

                  <select
                    value={activityCategory}
                    onChange={(e) => setActivityCategory(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-600 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                  >
                    <option value="all">All Logs</option>
                    <option value="billing">Billing</option>
                    <option value="user">User</option>
                    <option value="upgrade">Upgrade</option>
                    <option value="support">Support</option>
                    <option value="team">Team</option>
                    <option value="system">System</option>
                  </select>
                </div>

                <div className="mt-6 space-y-5">
                  {filteredActivity.length > 0 ? (
                    filteredActivity.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-3.5 transition"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-xs font-bold text-indigo-600 shadow-sm dark:bg-indigo-950/50 dark:text-indigo-400">
                          {item.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-slate-900 dark:text-white leading-snug">
                            <span className="font-bold">{item.name}</span>{" "}
                            <span className="text-slate-500 dark:text-slate-400">{item.action}</span>
                          </p>
                          <p className="mt-1 text-xs text-slate-400">{item.time}</p>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <p className="py-6 text-center text-xs text-slate-400">No logs for this category.</p>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 cursor-pointer hover:underline">
                  Stream connected (WebSocket Active)
                </span>
              </div>
            </motion.section>
          </div>

          <motion.section
            id="customers"
            whileHover={{ y: -4, scale: 1.005 }}
            style={{ transformStyle: "preserve-3d" }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 sm:p-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-black">Customer & Audience Overview</h2>
                <p className="mt-0.5 text-xs text-slate-400">Detailed growth metrics and retention indicators</p>
              </div>

              <div className="flex items-center gap-1 rounded-xl bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-600 shadow-sm dark:bg-emerald-950/30 dark:text-emerald-400">
                <ArrowUpRight size={15} />
                +8.4%
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                ["New Signups", "1,284", "+14.2% vs last month"],
                ["Active Subscribers", "6,924", "+9.1% vs last month"],
                ["Enterprise Accounts", "482", "+18.5% vs last month"],
              ].map(([label, value, sub]) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-2xl border border-slate-100 bg-slate-50/50 p-5 shadow-sm dark:border-slate-800/80 dark:bg-slate-950/40"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {label}
                  </p>

                  <p className="mt-2 text-2xl font-black text-slate-900 dark:text-white">
                    {value}
                  </p>

                  <div className="mt-3 flex items-center gap-1 text-xs font-bold text-emerald-500">
                    <ArrowUpRight size={14} />
                    <span>{sub}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}