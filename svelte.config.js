import adapter from "@sveltejs/adapter-node";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: "",
      assets: "",
    },
  },

  vitePlugin: {
    experimental: {
      images: true,
    },
  },
};

export default config;
