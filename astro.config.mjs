import { defineConfig } from "astro/config";
import aws from "astro-sst";
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: "https://docs.liteseed.xyz",
  integrations: [
    starlight({
      customCss: ["./src/styles.css"],
      description: "Liteseed Network is a decentralized network of bundlers",
      editLink: { baseUrl: "https://github.com/liteseed/documentation" },
      logo: {
        light: "./src/assets/icon_light.webp",
        dark: "./src/assets/icon_dark.webp",
        replacesTitle: true,
      },
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'Overview', link: '/' },
            { label: 'What is Liteseed Network?', link: '/start-here/what-is-liteseed-network' }
          ]
        },
        {
          label: 'Core Concepts',
          items: [
            { label: 'Network of Bundlers', link: '/core-concepts/network-of-bundlers' },
          ]
        },
        {
          label: 'SDK Reference',
          items: [
            { label: 'Installation', link: '/sdk-reference/installation' },
          ]
        },
        {
          label: 'API Reference',
          items: [
            { label: 'Connecting to the API', link: '/api-reference/connecting-to-the-api' },
            { label: 'Bundlers', link: '/api-reference/bundlers' },
            { label: 'Data', link: '/api-reference/data' }
          ]
        }
      ],
      social: {
        discord: 'https://discord.gg/yh4xsTUWUn',
        github: 'https://github.com/liteseed',
        twitter: 'https://x.com/liteseed_xyz',
      },
      title: "Liteseed"
    }),
    tailwind({
      applyBaseStyles: false
    }),
  ],
  output: "static",
  adapter: aws()
});
