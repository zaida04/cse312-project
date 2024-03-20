/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#2563eb",
          "secondary": "#0ea5e9",
          "accent": "#22d3ee",
          "neutral": "#111827",
          "base-100": "#1f2937",
          "info": "#0ea5e9",
          "success": "#22c55e",
          "warning": "#fde047",
          "error": "#ef4444",
        },
      },
      "dark",
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  plugins: [require("daisyui")],
}

