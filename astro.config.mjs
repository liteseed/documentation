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
          ]
        },
        {
          label: 'Developer Reference',
          items: [ 
            { label: 'Connecting to the API', link: '/developers/connecting-to-the-api' },
            { label: "Using Node.js", link: "/developers/nodejs" },
            { label: 'Interacting with the AO Process', link: '/developers/interacting-with-the-ao-process' },
          ]
        },
        {
          label: 'Examples',
          items: [
            { label: 'Save and fetch a file from Arweave', link: '/examples/save-and-fetch-a-file-from-arweave' },
          ]
        },
        {
          label: 'Core Concepts',
          items: [
            { label: 'What is a Bundler?', link: '/core-concepts/what-is-a-bundler' },
            { label: 'Network of Bundlers', link: '/core-concepts/network-of-bundlers' },
          ]
        },
      ],
      social: {
        discord: 'https://discord.gg/yh4xsTUWUn',
        github: 'https://github.com/liteseed',
        'x.com': 'https://x.com/liteseed_xyz',
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
