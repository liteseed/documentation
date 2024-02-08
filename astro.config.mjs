import { defineConfig } from "astro/config";
import aws from "astro-sst";
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: "https://liteseed.xyz",
  integrations: [
    starlight({
      logo: {
        light: "./src/assets/icon_light.webp",
        dark: "./src/assets/icon_dark.webp"
      },
      title: "",
      social: {
        github: 'https://github.com/liteseed'
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
            { label: 'Installation', link: '/sdk-reference/installation'},
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
      customCss: ["./src/styles.css"]
    }),
    tailwind({
      applyBaseStyles: false
    }),
  ],
  output: "static",
  adapter: aws()
});
