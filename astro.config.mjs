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
        light: "./src/assets/icon_light.png",
        dark: "./src/assets/icon_dark.png"
      },
      title: 'Liteseed',
      social: {
        github: 'https://github.com/liteseed'
      },
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'Installation', link: '/' }
          ]
        },
        {
          label: 'Core Concepts',
          items: [
            { label: 'What is Liteseed Network?', link: '/core-concepts/what-is-liteseed-network' }
          ]
        },
        {
          label: 'API Reference',
          items: [
            { label: '/bundlers', link: '/references/bundlers' },
            { label: '/data', link: '/references/data' }
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