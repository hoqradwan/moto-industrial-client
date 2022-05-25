module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1C4F82",
          secondary: "#7D919B",
          accent: "#EB6B47",
          neutral: "#23282F",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}
