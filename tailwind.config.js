// tailwind.config.js
import tailwindcssAnimate from 'tailwindcss-animate';
import daisyui from 'daisyui';

export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	daisyui: {
		themes: ["light"],
	},
	theme: {

		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
				Merriweather: ['Merriweather', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {}
		}
	},
	plugins: [
		tailwindcssAnimate,
		daisyui,
	],
};