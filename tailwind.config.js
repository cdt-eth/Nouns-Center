module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        cal: ["CalSans"],
      },
      colors: {
        "nouns-bg-grey": "#F2F2F2",
        "nouns-bg-blue": "#3E64FF",
        "nouns-bg-darkblue": "#1F1D28",
        "nouns-grey": "#7A7A7A",
        "nouns-blue": "#002AFF",
        "nouns-yellow": "#FDF45F",
        "nouns-border": "#C1C1C1",
        "nouns-pink": "#F39E9F",
        "nouns-brown": "#732C2B",
        "nouns-blue-border": "#8EA4FC",
      },
    },
    screens: {
      xs: "200px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
