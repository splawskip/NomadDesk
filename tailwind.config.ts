import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class', '[data-color-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
		colors: {
			'white': {
				'50': 'hsl(0, 0%, 100%)',
				'100': 'hsl(0, 0%, 94%)',
				'200': 'hsl(0, 0%, 86%)',
				'300': 'hsl(0, 0%, 74%)',
				'400': 'hsl(0, 0%, 60%)',
				'500': 'hsl(0, 0%, 49%)',
				'600': 'hsl(0, 0%, 40%)',
				'700': 'hsl(0, 0%, 32%)',
				'800': 'hsl(0, 0%, 27%)',
				'900': 'hsl(0, 0%, 24%)',
				'950': 'hsl(0, 0%, 16%)',
			},
		}
    },
  },
  plugins: [],
}
export default config
