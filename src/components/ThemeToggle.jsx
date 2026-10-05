import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({
  darkMode,
  setDarkMode,
}) {
  const handleToggle = () => {
    setDarkMode((previousMode) => !previousMode);
  };

  return (
    <motion.button
      type="button"
      onClick={handleToggle}
      whileHover={{
        scale: 1.08,
        rotateY: 10,
      }}
      whileTap={{
        scale: 0.9,
      }}
      className="
        relative flex h-10 w-10
        items-center justify-center
        overflow-hidden rounded-xl
        border border-slate-200
        bg-white
        text-slate-600
        shadow-sm
        transition-all duration-300

        hover:border-indigo-300
        hover:text-indigo-600

        dark:border-slate-700
        dark:bg-slate-900
        dark:text-slate-300

        dark:hover:border-indigo-500
        dark:hover:text-indigo-400
      "
      aria-label={
        darkMode
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      title={
        darkMode
          ? "Switch to light mode"
          : "Switch to dark mode"
      } >
      <motion.div
        animate={{
          opacity: darkMode ? 1 : 0,
          scale: darkMode ? 1 : 0.5,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          absolute inset-0
          rounded-xl
          bg-indigo-500/10
        "/>

      <AnimatePresence
        mode="wait"
        initial={false} >
        {darkMode ? (
          <motion.div
            key="sun"
            initial={{
              opacity: 0,
              rotate: -90,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              rotate: 90,
              scale: 0.5,
            }}
            transition={{
              duration: 0.25,
            }}
            className="relative z-10">
            <Sun
              size={19}
              strokeWidth={2}
              className="text-amber-400"/>
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{
              opacity: 0,
              rotate: 90,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              rotate: -90,
              scale: 0.5,
            }}
            transition={{
              duration: 0.25,
            }}
            className="relative z-10">
            <Moon
              size={19}
              strokeWidth={2}
              className="text-indigo-600 dark:text-indigo-400"/>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}