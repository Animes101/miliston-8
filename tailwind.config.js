import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // <-- এটা দরকার ক্লাস বেইসড ডার্ক মোডের জন্য
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], // light ও dark থিম দুইটা enable রাখা যাবে
  },
};
