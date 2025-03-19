const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      flowbite.content()
    ],
    
    theme: {
      extend: {
        fontFamily: {
          sans: ["Poppins", ...fontFamily.sans], // Set Poppins as the default sans font
          poppins: ["Poppins", "sans-serif"], // Custom utility
        },
      },
    },
    plugins: [flowbite.plugin(),require('tailwind-scrollbar-hide'), require('@tailwindcss/line-clamp')],
  };
  