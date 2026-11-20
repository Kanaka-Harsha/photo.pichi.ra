import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://photopichira.vercel.app',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});


