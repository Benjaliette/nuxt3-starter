export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    apiSecret: "",
    public: {
      apiBase: "",
    },
  },
  alias: {
    "@": "/<rootDir>",
  },
  modules: ["@pinia/nuxt"],
  css: ["~/assets/stylesheet/main.scss"],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/stylesheet/config/index.scss";',
        },
      },
    },
    server: {
      hmr: {
        protocol: "ws",
      },
    },
  },
});
