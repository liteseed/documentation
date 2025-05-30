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
          label: "References",
          items: [
            { label: "Glossary", link: "/references/glossary" },
            { label: "API", link: "/references/api" },
          ]
        },
        {
          label: "Guides",
          items: [
            { label: "Post a File Using TypeScript", link: "/guides/post-a-file-using-typescript" },
            { label: "Post a File Using Python", link: "/guides/post-a-file-using-python" },
            { label: "Post a File Using Go", link: "/guides/post-a-file-using-go" },
            { label: "Post signed data to Arweave", link: "/guides/post-signed-data-to-arweave" },
            { label: "CI Upload with GitHub Actions", link: "/guides/ci-upload-with-github-actions" },
            { label: "Bulk Import S3 Bucket", link: "/guides/bulk-import-s3-bucket" },
            { label: "Archive PostgreSQL Backups to Liteseed", link: "/guides/archive-postgresql-backup" },
          ]
        },
        {
          label: "Concepts",
          items: [
            { label: "What is Arweave?", link: "/concepts/what-is-arweave" },
            { label: "What is ao?", link: "/concepts/what-is-ao" },
            { label: "What is a Bundle?", link: "/concepts/what-is-a-bundle" },
            { label: "What is Liteseed Network?", link: "/concepts/what-is-liteseed" },
            { label: "Payment Flow", link: "/concepts/payment-flow" },
            { label: "Pricing Model", link: "/concepts/pricing-model" },
          ]
        },
        {
          label: "Operators",
          items: [
            { label: "Deploy a Node", link: "/operators/deploy-a-node" },
          ]
        },
        {
          label: "Comparisons", 
          items: [
            { label: "Liteseed vs. S3 Glacier", link: "/comparisons/liteseed-vs-s3-glacier" },
            { label: "Liteseed vs. Backblaze B2", link: "/comparisons/liteseed-vs-backblaze-b2" },
            { label: "Liteseed vs Other Storage Services", link: "/comparisons/liteseed-vs-other-storage-services" },
          ]
        }
      ],
      title: "Liteseed"
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  output: "static",
  adapter: aws()
});
