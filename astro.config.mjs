import { defineConfig } from "astro/config";
import aws from "astro-sst";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import starlightOpenAPI, { openAPISidebarGroups } from "starlight-openapi"

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
        starlightOpenAPI([
          {
            base: "api",
            label: "API Reference",
            schema: "./schema/swagger.yaml",
          },
        ]),
      ],
      sidebar: [
        {
          label: "Start Here",
          items: [
            { label: "Overview", link: "/" },
          ]
        },

        {
          label: "Core Concepts",
          items: [
            { label: "What is Arweave?", link: "/core-concepts/what-is-arweave" },
            { label: "What is AO?", link: "/core-concepts/what-is-ao" },
            { label: "What is a bundler?", link: "/core-concepts/what-is-a-bundler" },
            { label: "What is a data-item?", link: "/core-concepts/what-is-a-data-item" },
            { label: "Liteseed in-depth", link: "/core-concepts/network-of-bundlers" },
          ]
        },
        ...openAPISidebarGroups,
        {
          label: "Examples",
          items: [
            { label: "Save and fetch a file from Arweave", link: "/examples/save-and-fetch-a-file-from-arweave" },
            { label: "Save and fetch a data-item", link: "/examples/save-and-fetch-a-data-item" },
          ]
        },
      ],
      social: {
        discord: "https://discord.gg/yh4xsTUWUn",
        github: "https://github.com/liteseed",
        "x.com": "https://x.com/liteseed_xyz",
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
