import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), NetlifyCMS({
    config: {
      // Use Netlify’s “Git Gateway” authentication and target our default branch
      backend: {
        name: 'git-gateway',
        branch: 'latest'
      },
      // Configure where our media assets are stored & served from
      media_folder: 'public/assets/media',
      public_folder: '/assets/media',
      // Configure the content collections
      collections: [{
        name: 'posts',
        label: 'Pagrindinis puslapis',
        folder: 'src/pages/posts',
        fields: [{
          name: 'title',
          widget: 'string',
          label: 'Hero sekcijos titulas'
        }, {
          name: 'subtitle',
          widget: 'string',
          label: 'Hero sekcijos subtitulas',
        },

        {
          name: 'paslauga1Title',
          widget: 'string',
          label: 'Paslauga 1 titulas',
        },
        {
          name: 'paslauga2Title',
          widget: 'string',
          label: 'Paslauga 2 titulas',
        },
        {
          name: 'paslauga3Title',
          widget: 'string',
          label: 'Paslauga 3 titulas',
        },
        {
          name: 'paslauga1Info',
          widget: 'string',
          label: 'Paslauga 1 info',
        },
        {
          name: 'paslauga2Info',
          widget: 'string',
          label: 'Paslauga 2 info',
        },
        {
          name: 'paslauga3Info',
          widget: 'string',
          label: 'Paslauga 3 info',
        },
        
        {
          name: 'atsiliepimai',
          widget: 'list',
          label: 'Atsiliepimu foto',
          media_folder: 'public/assets/media',
          fields: [{
            name: 'atsiliepimaiFoto',
            widget: 'image',
            label: 'Atsiliepimu foto',
            allow_multiple: true,
            required: true,
          }]
        }, {
          name: 'layout',
          widget: 'select',
          default: '../../layouts/BlogPost.astro',
          options: [{
            label: 'Blog Post',
            value: '../../layouts/BlogPost.astro'
          }]
        }]
      }]
    },
    previewStyles: ['/src/styles/global.css']
  })]
});