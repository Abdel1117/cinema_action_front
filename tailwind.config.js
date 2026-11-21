/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0a",
          raised: "#141414",
        },
        line: {
          DEFAULT: "#2a2a2a",
          strong: "#6b6b6b",
        },
        paper: {
          DEFAULT: "#f5f5f5",
          line: "#d4d4d4",
        },
        mute: {
          DEFAULT: "#a3a3a3",
          soft: "#8a8a8a",
          ink: "#525252",
        },
        signal: {
          DEFAULT: "#d71e28",
          hover: "#b5141d",
          text: "#ff5a5f",
        },
      },
      fontFamily: {
        display: ['"Anton"', "Impact", "sans-serif"],
        sans: ['"Archivo Variable"', "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      maxWidth: {
        page: "90rem",
        prose: "40rem",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
}
