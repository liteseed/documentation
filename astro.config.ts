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
        { label: "Quickstart", link: "/quickstart" },
        // { label: "Devnet", items:[{ label: "Overview", link: "/devnet/using-the-devnet"}]},
        {
          label: "Examples",
          items: [
            { label: "Post a File", link: "/examples/post-a-file" },
            { label: "Post signed data to Arweave", link: "/examples/post-signed-data-to-arweave" },
          ]
        },
        {
          label: "Concepts",
          items: [
            { label: "What is Arweave?", link: "/concepts/what-is-arweave" },
            { label: "What is ao?", link: "/concepts/what-is-ao" },
            { label: "What is Liteseed Network?", link: "/concepts/what-is-liteseed" },
          ]
        },
        {
          label: "Comparisons", 
          items: [
            { label: "Liteseed vs. S3 Glacier", link: "/comparisons/liteseed-vs-s3-glacier" },
            { label: "Liteseed vs. Backblaze B2", link: "/comparisons/liteseed-vs-backblaze-b2" },
          ]
        },
        {
          label: "References",
          items: [
            { label: "Glossary", link: "/references/glossary" },
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
