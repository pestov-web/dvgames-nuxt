// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // @ts-ignore
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  // uncomment before deploy
  // runtimeConfig: {
  //   strapi: {
  //     // nuxt/strapi options available server-side
  //     url: "http://localhost:1337",
  //   },
  //   public: {
  //     strapi: {
  //       // nuxt/strapi options available client-side
  //       url: "http://apid.pestov-web.ru",
  //     },
  //   },
  // },
  devtools: { enabled: true },
  modules: [
    "nuxt-headlessui",
    "nuxt-swiper",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/strapi",
  ],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  headlessui: {
    prefix: "Headless",
  },
  strapi: {
    // comment before deploy
    url: process.env.API_URL || "http://localhost:1337",
    prefix: "/api",
    version: "v4",
    cookie: {},
    cookieName: "strapi_jwt",
    auth: {
      populate: [
        "avatar",
        "categories",
        "achievements",
        "friends",
        "tel",
        "fullname",
      ],
    },
  },
  image: {
    strapi: {
      baseURL: "http://localhost:1337",
    },
  },
});
