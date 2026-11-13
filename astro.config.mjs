import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://photo-pichi-ra.vercel.app',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});

