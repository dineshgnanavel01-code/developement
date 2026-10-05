/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef7ff",
          100: "#d9edff",
          200: "#bce0ff",
          300: "#8dcbff",
          400: "#57adff",
          500: "#288df5",
          600: "#1470df",
          700: "#1059c4",
          800: "#12499f",
          900: "#153f7e",
        },
      },

      boxShadow: {
        soft: "0 10px 40px rgba(15, 23, 42, 0.08)",
        glow: "0 0 40px rgba(40, 141, 245, 0.20)",

     
        "dark-soft":
          "0 10px 40px rgba(0, 0, 0, 0.25)",

        "dark-glow":
          "0 0 40px rgba(99, 102, 241, 0.25)",
      },

      animation: {
        float: "float 5s ease-in-out infinite",

        "fade-in":
          "fadeIn 0.6s ease-out",

        "slide-up":
          "slideUp 0.6s ease-out",

        "scale-in":
          "scaleIn 0.4s ease-out",

        "pulse-slow":
          "pulseSlow 3s ease-in-out infinite",

        "spin-slow":
          "spinSlow 8s linear infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },

          "50%": {
            transform: "translateY(-12px)",
          },
        },

        fadeIn: {
          from: {
            opacity: "0",
          },

          to: {
            opacity: "1",
          },
        },

        slideUp: {
          from: {
            opacity: "0",
            transform: "translateY(25px)",
          },

          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        scaleIn: {
          from: {
            opacity: "0",
            transform: "scale(0.9)",
          },

          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },

        
        pulseSlow: {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },

          "50%": {
            opacity: "0.75",
            transform: "scale(1.05)",
          },
        },

       
        spinSlow: {
          from: {
            transform: "rotate(0deg)",
          },

          to: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};