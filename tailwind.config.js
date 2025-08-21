/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}"
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}, fontSize: {
				'custom-32': '32px',
			},
			fontFamily: {
				manrope: ['Manrope', 'sans-serif'],
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			}, animation: {
				'scroll-y': 'scrollY 25s linear infinite',
				'scroll-y-reverse': 'scrollYReverse 25s linear infinite',
				'scroll': 'scrollX 8s linear infinite',
			},
			keyframes: {
				scrollY: {
					'0%': { transform: 'translateY(0%)' },
					'100%': { transform: 'translateY(-50%)' },
				},
				scrollYReverse: {
					'0%': { transform: 'translateY(-50%)' },
					'100%': { transform: 'translateY(0%)' },
				},
				scrollX: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-50%)' },
				},
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},
			screens: {
				xs: '487px',  // Add this if not present
				ssm: '639px', // Add a custom upper-bound name
			}, opacity: {
				51: '0.51',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}


