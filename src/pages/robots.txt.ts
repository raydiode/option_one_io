import type { APIRoute } from 'astro';
import { absolute } from '../lib/seo';

export const GET: APIRoute = () =>
  new Response(
    ['User-agent: *', 'Allow: /', '', `Sitemap: ${absolute('/sitemap-index.xml')}`, ''].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
