/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#242424",
          "200": "rgba(28, 27, 41, 0.4)",
          "300": "rgba(28, 27, 41, 0.21)",
        },
        white: "#fff",
        "button-normal": "#ff5733",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        vazirmatn: "Vazirmatn",
        viga: "Viga",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      lg: "18px",
      base: "16px",
      "13xl": "32px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};