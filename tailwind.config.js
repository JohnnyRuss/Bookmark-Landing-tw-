module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-blue": "hsl(231, 69%, 60%)",
        "app-dark-blue": "hsl(229, 31%, 21%)",
        "app-dark-blue-tr": "rgba(37, 43, 70, 0.9)",
        "app-grayish-blue": "hsl(229, 8%, 60%)",
        "app-red": "hsl(0, 94%, 66%)",
        "app-white": "#ffffff",
        "app-gray": "#E8E8E8",
      },
      fontSize: {
        "app-h1": "36px",
        "app-h2": "28px",
        "app-h3": "22px",
        "app-sm": "12px",
      },
      fontFamily: {
        "sans-serif": ["Rubik"],
      },
      maxWidth: {
        "1/4": "25%",
        "1/3": "33%",
        40: "40%",
        "1/2": "50%",
        80: "80%",
        85: "85%",
      },
      screens: {
        mobile: "17.5em", //280px
        "mobile-lg": "31.25em", //500px
        tablet: "42.5em", //680px
        "tablet-lg": "60em", //960px
        desktop: "75em", //1200px
      },
      animation: {
        "collapse-right": "collapse-right 0.3s ease-out",
        "move-bottom": "move-bottom 0.2s ease-out",
      },
      keyframes: {
        "collapse-right": {
          "0%": { width: "0%", opcity: "0" },
          "100%": { width: "100%", opacity: "1" },
        },
        "move-bottom": {
          "0%": { transform: "translateY(-1.5rem)", opcity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugin: [],
};
