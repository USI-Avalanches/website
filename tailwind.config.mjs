/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'avalanche-blue': '#002451',
				'avalanche-red': '#DC222D',
				'background': '#101923'
			},
			dropShadow: {
				'avalanche-shadow': ['-6px 4px 0 #002451', '-3px 3px 0 #DC222D'],
				'avalanche-shadow-invisible': ['0 0 0 #002451', '0 0 0 #DC222D']
			}
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require('tailwindcss-intersect'),
		require('@tailwindcss/typography'),
	],
}
