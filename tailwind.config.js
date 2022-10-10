module.exports = {
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				'slide': 'ping 9s linear',
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
