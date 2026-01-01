import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		// GitHub Pages serves from /<repo-name>/ path
		// Update 'persona-ui' to match your actual repo name
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/persona-ui' : ''
		}
	}
};

export default config;
