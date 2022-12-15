/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-green": "#EDF8ED",
        "text-green": "#4CB950",
        "input-green": "#DBF1DC",
        "grad-light": "#4CB950",
        "grad-dark": "#1D6B20",
        "btn-green": "#1D6B20",
        "gen-bg": "rgba(76, 185, 80, 0.05)",
        "bg-light": "#F6FBF6",
        "text-red": "#EB5757",
        "text-gray": "#4F4F4F",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
