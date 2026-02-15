/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Noto Sans SC', 'system-ui', 'sans-serif'],
				mono: ['Sometype Mono', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
			},
			colors: {
				primary: {
					50: '#eff6ff',
					100: '#dbeafe',
					200: '#bfdbfe',
					300: '#93c5fd',
					400: '#60a5fa',
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8',
					800: '#1e40af',
					900: '#1e3a8a',
					950: '#172554',
				},
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						'code::before': {
							content: '""',
						},
						'code::after': {
							content: '""',
						},
						code: {
							color: theme('colors.primary.600'),
							backgroundColor: theme('colors.gray.100'),
							padding: '0.25rem 0.375rem',
							borderRadius: '0.25rem',
							fontWeight: '500',
						},
					},
				},
				invert: {
					css: {
						code: {
							color: theme('colors.primary.400'),
							backgroundColor: theme('colors.gray.800'),
						},
					},
				},
			}),
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
