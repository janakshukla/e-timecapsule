/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          100: "#393e41",
          200: "#2d3134",                                       
          300: "#1f2123"
        },
        secondry: {
          100: "#f6f7eb",
          200: "#dfe0d4",
          300: "#c8c9be"
        },
        destructive: {
          100: "#e94f37",
          200: "#d94a34",
          300: "#c94430"
        }
      }
    }
  },
  plugins: [],
};