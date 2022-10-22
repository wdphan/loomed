/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Grotesk: ['Space Grotesk', 'sans-serif'],
				Inter: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
