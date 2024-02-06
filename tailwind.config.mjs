import starlightPlugin from '@astrojs/starlight-tailwind';


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "amazon-green": "#388054",
        "malibu": "#88CBF8",
        "lavender": "#BA8BF8",
        "maize": "#F6C15C",
        "ghost-white": "#F6F6F6",
        "dark-cod-grey": "#2c2c2c"
      },
    },
  },
  plugins: [starlightPlugin()],
};
