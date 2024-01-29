import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#d1bfec', 600: '#8442c7', 900: '#3d225b', 950: '#2b1b3e' };
const gray = { 100: '#f5f6fc', 200: '#ebedfa', 300: '#bec1d0', 400: '#8589a6', 500: '#525671', 700: '#33364f', 800: '#22243c', 900: '#161722' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};
