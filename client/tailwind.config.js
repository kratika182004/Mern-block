// tailwind.config.js
import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
   
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    
    // Your project files
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
 // Flowbite React components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite, // Flowbite plugin
  ],
};
