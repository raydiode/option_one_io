import { brand } from '../brand.config';

export const origin = (import.meta.env.SITE ?? brand.url).replace(/\/$/, '');

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const absolute = (path: string): string => `${origin}${base}${path === '/' ? '/' : path}`;

export const ORG_ID = `${absolute('/')}#organization`;
