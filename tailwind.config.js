import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */




module.exports = {
    darkMode: ["class"],
    content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
  	extend: {
  		colors: {
  			transparent: 'transparent',
  			current: 'currentColor',
  			white: '#ffffff',
  			text: '#2E2E2E',
  			main: '#48934E',
  			secmain: '#D2F8D3',
  			sec: '#385B3B',
  			shadow: '#28F93B4D',
  			outline: '#1A9A25',
  			textsec: '#2E2E2EB2',
  			textsecc: '#808080',
  			heading: '#4C4C4C',
  			
  			
  			
  			
  		},
  		fontFamily: {
  			poppins: ["Poppins", "sans-serif"]
  		}
  	}
  },
  plugins: [
    require("flowbite/plugin"),
    flowbite.plugin(),
      require("tailwindcss-animate")
],
};