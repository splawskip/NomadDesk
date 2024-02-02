/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		outputFileTracingIncludes: {
		  '/*': ['./posts/**/*'],
		},
	},
}

module.exports = nextConfig
