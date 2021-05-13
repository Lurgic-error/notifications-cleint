module.exports = {
  // PWA Config
  pwa: {
    name: "notifications",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js",
    },
  },

  // CSS Config
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       additionalData: `
  //           @import "@/styles/abstracts/_variables.scss";
  //           @import "@/styles/abstracts/_functions.scss";
  //           @import "@/styles/abstracts/_mixins.scss";
  //         `,
  //     },
  //     // sass: {
  //     //   prependData: `
  //     //     @import "@/static/styles/abstracts/_variables.scss";
  //     //     @import "@/static/styles/abstracts/_functions.scss";
  //     //     @import "@/static/styles/abstracts/_mixins.scss";
  //     //   `
  //     // }
  //   },
  // },
};
