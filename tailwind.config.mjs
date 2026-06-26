/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				// 中英文统一用阿里妈妈方圆体（含完整拉丁字形）；生僻字回退系统字体
				sans: ['Alimama FangYuanTi', 'system-ui', 'sans-serif'],
				mono: ['Sometype Mono', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
				// 展示字体：得意黑（标题/站点名）
				display: ['Smiley Sans', 'system-ui', 'sans-serif'],
			},
			colors: {
				// 现代靛蓝色系 — 比标准 blue 更有辨识度
				primary: {
					50: '#eef2ff',
					100: '#e0e7ff',
					200: '#c7d2fe',
					300: '#a5b4fc',
					400: '#818cf8',
					500: '#6366f1',
					600: '#4f46e5',
					700: '#4338ca',
					800: '#3730a3',
					900: '#312e81',
					950: '#1e1b4b',
				},
				// 暖色点缀 — 用于标签、强调、链接悬停
				accent: {
					50: '#fffbeb',
					100: '#fef3c7',
					200: '#fde68a',
					300: '#fcd34d',
					400: '#fbbf24',
					500: '#f59e0b',
					600: '#d97706',
					700: '#b45309',
					800: '#92400e',
					900: '#78350f',
				},
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						'code::before': { content: '""' },
						'code::after': { content: '""' },
						code: {
							color: theme('colors.primary.600'),
							backgroundColor: theme('colors.slate.100'),
							padding: '0.2rem 0.4rem',
							borderRadius: '0.3rem',
							fontWeight: '500',
							fontSize: '0.875em',
							border: `1px solid ${theme('colors.slate.200')}`,
						},
						pre: {
							lineHeight: '1.6',
							borderRadius: '0.75rem',
							boxShadow: theme('boxShadow.lg'),
						},
						'pre code': {
							fontSize: '0.875rem',
							border: 'none',
							backgroundColor: 'transparent',
							padding: '0',
						},
						// 引用块美化
						blockquote: {
							fontStyle: 'normal',
							borderLeftColor: theme('colors.primary.400'),
							borderLeftWidth: '4px',
							backgroundColor: theme('colors.slate.50'),
							padding: '1rem 1.25rem',
							borderRadius: '0 0.5rem 0.5rem 0',
							color: theme('colors.slate.700'),
						},
						// 链接样式
						a: {
							color: theme('colors.primary.600'),
							textDecoration: 'none',
							borderBottom: `1px solid ${theme('colors.primary.300')}`,
							transition: 'border-color 0.2s, color 0.2s',
							'&:hover': {
								color: theme('colors.primary.700'),
								borderBottomColor: theme('colors.primary.600'),
							},
						},
						// 图片
						img: {
							borderRadius: '0.75rem',
						},
						// 表格
						table: {
							borderRadius: '0.5rem',
							overflow: 'hidden',
						},
						thead: {
							borderBottomColor: theme('colors.slate.300'),
						},
						'thead th': {
							backgroundColor: theme('colors.slate.50'),
							fontWeight: '600',
						},
					},
				},
				invert: {
					css: {
						code: {
							color: theme('colors.primary.300'),
							backgroundColor: theme('colors.slate.800'),
							border: `1px solid ${theme('colors.slate.700')}`,
						},
						pre: {
							backgroundColor: '#1e293b !important',
							borderColor: theme('colors.slate.700'),
							boxShadow: 'none',
						},
						'pre code': {
							backgroundColor: 'transparent',
							border: 'none',
						},
						blockquote: {
							backgroundColor: theme('colors.slate.900'),
							color: theme('colors.slate.300'),
							borderLeftColor: theme('colors.primary.500'),
						},
						a: {
							color: theme('colors.primary.400'),
							borderBottomColor: theme('colors.primary.700'),
							'&:hover': {
								color: theme('colors.primary.300'),
								borderBottomColor: theme('colors.primary.500'),
							},
						},
						'thead th': {
							backgroundColor: theme('colors.slate.800'),
						},
						'thead': {
							borderBottomColor: theme('colors.slate.700'),
						},
					},
				},
			}),
			// 自定义动画
			animation: {
				'fade-in': 'fadeIn 0.6s ease-out forwards',
				'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
				'bounce-arrow': 'bounceArrow 2s ease-in-out infinite',
				'spin-slow': 'spin 8s linear infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				bounceArrow: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(6px)' },
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
