/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"../../node_modules/@bsc/home/src/**/*.{js,ts,jsx,tsx}",
		"../../node_modules/@bsc/dashboard/src/presentation/views/dashboard/**/*.{js,ts,jsx,tsx}",
		"../../node_modules/@bsc/seguridades/src/presentation/views/seguridades/**/*.{js,ts,jsx,tsx}",
		"../../node_modules/primereact/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				robotoslab: ["RobotoSlab", "sans-serif"],
				ptsans: ["PTSans", "sans-serif"],
				prozalibre: ["ProzaLibre", "sans-serif"],
				comfortaa: ["Comfortaa", "sans-serif"],
				raleway: ["Raleway", "sans-serif"],
			},
		},
		screens: {
			'sm': '640px',
			// => @media (min-width: 640px) { ... }
	  
			'md': '768px',
			// => @media (min-width: 768px) { ... }
	  
			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }
	  
			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }
	  
			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		  }
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}

