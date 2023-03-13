const nextTranslate = require('next-translate');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

const configWithTranslate = nextTranslate({
	...nextConfig,
	webpack(config) {
		return config;
	},
});

module.exports = configWithTranslate;
