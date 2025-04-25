import { defineConfig } from "astro/config";
import aws from "astro-sst";
import starlight from "@astrojs/starlight";
import tailwindcss from '@tailwindcss/vite';

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
      plugins: [
      ],
      sidebar: [
        { label: "Intro", link: "/" },
        { label: "Devnet", items:[{ label: "Overview", link: "/devnet/using-the-devnet"}]},
        {
          label: "Examples",
          items: [
            { label: "Post data using @liteseed/sdk", link: "/examples/post-using-sdk" },
            { label: "Post signed data to Arweave", link: "/examples/post-signed-data-to-arweave" },
            { label: "Post a file to Arweave", link: "/examples/post-a-file" },
          ]
        },
        {
          label: "Concepts",
          items: [
            { label: "What is Arweave?", link: "/core-concepts/what-is-arweave" },
            { label: "What is AO?", link: "/core-concepts/what-is-ao" },
            { label: "What is Liteseed Network?", link: "/core-concepts/what-is-liteseed" },
          ]
        },
      ],
      title: "Liteseed"
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  output: "static",
  adapter: aws()
});
