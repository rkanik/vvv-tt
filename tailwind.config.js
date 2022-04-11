module.exports = {
	// important: '#tw',
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}'
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('tailwindcss-rtl')
	],
};
