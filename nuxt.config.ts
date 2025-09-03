// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: '2025-07-15',

   devtools: { enabled: true },

   ssr: false,
   nitro: {
      preset: 'github-pages'
   },
   app: {
      baseURL: "/viraq-website",
      head: {
         title: "ViraQ",
         link: [
            { rel: "preconnect", href: "https://fonts.googleapis.com" },
            { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" }
         ],
         meta: [
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { name: "description", content: "ViraQ - Your app description here" },
            { name: "theme-color", content: "#021516" },
         ],
      }
   },

   css: [
      "~/assets/scss/main.scss"
   ],

   vite: {
      css: {
         preprocessorOptions: {
            scss: {
               additionalData: `
               @use "sass:math";
               @use "sass:map";
               @use "sass:meta";

               @use "@/assets/scss/tokens" as *;
               @use "@/assets/scss/abstracts" as *;
               `,
            }
         }
      }
   }
})
