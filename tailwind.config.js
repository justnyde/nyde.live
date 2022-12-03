const colors = require("tailwindcss/colors")

module.exports = {
    mode: "jit",
    purge: ['./src/**/**/*', './src/pages/*.{js,ts,jsx,tsx}', './src/components/*.{js,ts,jsx,tsx}', './src/layouts/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: { 
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        ...colors
      },
      fontFamily: {
        'sans': ['Inter', 'Helvatica', 'Arial', 'sans-serif'],
        'secular': ['Secular One', "Arial", "sans-serif"]
      },
      extend: {
        colors: {
          primary: {
            DEFAULT: "var(--primary)",
            100: "var(--primary-100)",
            200: "var(--primary-200)",
            300: "var(--primary-300)",
            400: "var(--primary-400)",
            500: "var(--primary-500)",
            600: "var(--primary-600)",
            700: "var(--primary-700)",
            800: "var(--primary-800)",
            900: "var(--primary-900)",
          },
          dark: {
            100: "rgba(0, 0, 0, .1)",
            200: "rgba(0, 0, 0, .2)",
            300: "rgba(0, 0, 0, .3)",
            400: "rgba(0, 0, 0, .4)",
            500: "rgba(0, 0, 0, .5)",
            600: "rgba(0, 0, 0, .6)",
            700: "rgba(0, 0, 0, .7)",
            800: "rgba(0, 0, 0, .8)",
            900: "rgba(0, 0, 0, .9)",
          }
        }
      },
    },
    variants: {
      extend: {},
    },
    daisyui: {
      themes: []
    },
    plugins: [require("daisyui")],
}