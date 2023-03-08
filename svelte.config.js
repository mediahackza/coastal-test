import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$lib: './src/lib',
			$sections: './src/sections',
			$components: './src/components',
			$data: './src/data',
			$charts: './src/charts',
			$images: './src/images',
			$maps: './src/maps'
		}
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.md']
		})
	]
};

export default config;
