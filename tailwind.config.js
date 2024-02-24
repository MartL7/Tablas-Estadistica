import animations from '@midudev/tailwind-animations'
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
		extend: {
			colors: {
				'primary': '#333',
				'secondary': '#ddd'
			}
		},
	},
  plugins: [animations],
}

