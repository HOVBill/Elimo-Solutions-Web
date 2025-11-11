const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5%)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.7 },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        borderPulse: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        hueShift: {
          "0%": { filter: "hue-rotate(0deg)" },
          "50%": { filter: "hue-rotate(180deg)" },
          "100%": { filter: "hue-rotate(360deg)" },
        },
      },
      animation: {
        "bounce-slow": "bounce-slow 3s ease-in-out infinite",
        "pulse-slow": "pulse-slow 2s ease-in-out infinite",
        glowPulse: "glowPulse 2s ease-in-out infinite",
        borderPulse: "borderPulse 2s ease-in-out infinite",
        hueShift: "hueShift 6s linear infinite",
      },
      colors: {
        primary: "#1F033D",
        secondary: "#AB01DE",
        accent: "#0D8DE6",
        customdark: "#0a0a1a",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".clip-path-octagon": {
          clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
        },
      };
      addUtilities(newUtilities, ["responsive"]);
    }),
  ],
};
