const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const withBase = (path: string): string => base + path;

export const routePath = (pathname: string): string => {
  const p = pathname.replace(/\/$/, '');
  const stripped = base && p.startsWith(base) ? p.slice(base.length) : p;
  return stripped || '/';
};
