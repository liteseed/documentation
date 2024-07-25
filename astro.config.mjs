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
            collapsed: false,
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
        ...openAPISidebarGroups,
        {
          label: "Examples",
          items: [
            { label: "Post signed data to Arweave", link: "/examples/post-signed-data-to-arweave" },
            { label: "Post a file to Arweave", link: "/examples/post-a-file" },
          ]
        },
        {
          label: "Core Concepts",
          items: [
            { label: "What is Arweave?", link: "/core-concepts/what-is-arweave" },
            { label: "What is AO?", link: "/core-concepts/what-is-ao" },
            { label: "What is Liteseed Network?", link: "/core-concepts/what-is-liteseed" },
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
