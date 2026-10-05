import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
  positive = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      whileHover={{
        y: -8,
        rotateX: 3,
        rotateY: -3,
        scale: 1.02,
      }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 180,
        damping: 16,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-indigo-500/10 blur-2xl transition-all duration-500 group-hover:bg-indigo-500/20" />

      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <motion.div
            whileHover={{
              rotateY: 180,
              scale: 1.1,
            }}
            transition={{ duration: 0.45 }}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400"
          >
            <Icon size={21} />
          </motion.div>

          <div
            className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${
              positive
                ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400"
                : "bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-400"
            }`}
          >
            {change}
            <ArrowUpRight size={13} />
          </div>
        </div>

        <p className="mt-5 text-sm font-medium text-slate-500 dark:text-slate-400">
          {title}
        </p>

        <h3 className="mt-1 text-2xl font-black tracking-tight text-slate-900 dark:text-white">
          {value}
        </h3>

        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: positive ? "78%" : "42%" }}
            transition={{ delay: 0.4, duration: 1 }}
            className={`h-full rounded-full ${
              positive ? "bg-indigo-600" : "bg-red-500"
            }`}
          />
        </div>
      </div>
    </motion.div>
  );
}