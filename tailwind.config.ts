import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
		colors: {
			primary: 'hsl(var(--color-primary))',
			secondary: 'hsl(var(--color-secondary))',
			accent: 'hsl(var(--color-accent))',
		}
    },
  },
  plugins: [],
}
export default config
