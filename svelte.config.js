import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '',
			precompress: false,
			strict: true
		}),
		paths: {
			// Change this to your GitHub repo name if not using custom domain
			// e.g., base: '/repo-name'
			base: '/portfolio'
		}
	}
};

export default config;
