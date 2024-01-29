// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head:{
      title: "Kawaiirori",
      script: [
        {
          src: "https://res.hypermoe.com/data/js/jquery/jquery-3.5.1.min.js",
          type: "text/javascript"
        },
        {
          src: "https://res.hypermoe.com/data/bootstrap/5.0.2/js/bootstrap.min.js",
          type: "text/javascript"
        },
        {
          src: "https://cdnjs.loli.net/ajax/libs/smoothscroll/1.4.9/SmoothScroll.min.js",
          type: "text/javascript"
        }
      ]
    }
  },

  css:[
    "./assets/base.css",
    "./assets/bootstrap-5.0.2-dist/css/bootstrap.min.css",
    "./assets/font-awesome-4.7.0/css/font-awesome.min.css"
  ]
  
})
