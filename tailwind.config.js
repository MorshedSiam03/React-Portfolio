/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins font
        montserrat: ["Montserrat", "sans-serif"], // Optionally, add Montserrat as well
      },
      boxShadow: {
        dark: "0px 4px 15px rgba(0, 0, 0, 0.4)", // example shadow for a soft dark effect
        light: "0 4px 15px rgba(255, 255, 255, 0.2)", // soft light shadow
        dual: " -10px -10px 20px rgba(255, 255, 255, 0.05), 10px 10px 20px rgba(0, 0, 0, 0.3)", // top-left light, bottom-right dark
      },
      colors: {
        
          Red: "#ff004f", // Default primary color
        
      },
    },
  },
  plugins: [require("daisyui")],
};
