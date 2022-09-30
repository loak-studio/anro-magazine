/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				'mango':['Black Mango'],
				'poppins':['Poppins'],
				'asset':['Asset']
			},
			gridTemplateColumns: {
				// Simple 16 column grid
				'14': 'repeat(14, minmax(0, 1fr))',
			}
		},
	},
	plugins: [],
}
