const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./data/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			'xs': '475px',
			...defaultTheme.screens,
		},
		extend: {
			animation: {
				'slide': 'ping 9s linear',
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [
		require('tailwind-scrollbar'),
	],
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/react-tailwindcss-select/dist/index.esm.js"],
};
