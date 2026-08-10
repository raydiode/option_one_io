import type { APIRoute } from 'astro';
import { withBase } from '../lib/base';

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify(
      {
        name: 'Option One',
        short_name: 'Option One',
        icons: [
          { src: withBase('/assets/icons/icon-192.png'), sizes: '192x192', type: 'image/png' },
          { src: withBase('/assets/icons/icon-512.png'), sizes: '512x512', type: 'image/png' },
          { src: withBase('/assets/icons/icon-maskable-512.png'), sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
        theme_color: '#0C141E',
        background_color: '#0C141E',
        display: 'standalone',
      },
      null,
      2,
    ),
    { headers: { 'Content-Type': 'application/manifest+json' } },
  );
