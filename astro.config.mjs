import { defineConfig } from "astro/config";
import aws from "astro-sst";
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Liteseed Network',
			social: {
				github: 'https://github.com/liteseed/documentation',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What is Liteseed Network?', link: '/getting-started/what-is-liteseed-network' },
					],
				},
			],
		}),
		tailwind()
	],
	output: "static",
	adapter: aws(),
});
