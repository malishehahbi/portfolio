import { sveltekit } from '@sveltejs/kit/vite';
import { wuchale } from 'wuchale/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [wuchale(), sveltekit()]
});
