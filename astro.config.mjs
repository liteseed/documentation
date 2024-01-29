import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Liteseed',
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [
    {
      label: 'Getting Started',
      items: [
      {
        label: 'What is Liteseed Network?',
        link: '/getting-started/what-is-liteseed-network'
      }
      ]
    } 
    ],
	  customCss: [
        // Path to your Tailwind base styles:
        './src/tailwind.css',
      ],
  }), tailwind({  applyBaseStyles: false })]
});
