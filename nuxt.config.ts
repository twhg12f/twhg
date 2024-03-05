// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  "runtimeConfig": {
    "public":{
      "mapKey": '',
    }
  }, 
  app: {
    head: {
      script: [
        {
          src: `https://api.map8.zone/maps/js/gomp.js?key=${process.env.MAP_KEY}`,
          type: "text/javascript",
        },
        {
          src: `https://api.map8.zone/maps/js/gomp-draw.js?key=${process.env.MAP_KEY}`,
          type: "text/javascript",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: `https://api.map8.zone/css/gomp.css?key=${process.env.MAP_KEY}`,
        },
        {
          rel: "stylesheet",
          href: `https://api.map8.zone/css/gomp-draw.css?key=${process.env.MAP_KEY}`,
        },
      ],
    },
  },
})
