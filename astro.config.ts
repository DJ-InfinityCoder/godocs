import { defineConfig } from 'astro/config';
import lotus from '@prosefly/astro-theme-lotus';

export default defineConfig({
  integrations: [
    lotus({
      components: {
        SiteBrand: './src/components/SiteBrand.astro',
      },
    }),
  ],
  redirects: {
    '/installation': '/modules/module-01/',
    '/overview': '/modules/module-01/',
    '/customization': '/modules/module-01/',
    '/getting-started/introduction': '/modules/module-01/',
    '/getting-started/installation': '/modules/module-01/',
    '/getting-started/hello-world': '/modules/module-01/',
  },
});
