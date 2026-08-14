export const brand = {
  name: 'Option One',
  tagline: 'Retained to design, build, integrate and communicate your critical operations.',
  domain: 'optionone.io',
  url: 'https://optionone.io',
  email: 'enquiries@optionone.io',
  applications: 'applications@optionone.io',
  newsletterAction: '',
  disciplines: 'Design · Build · Integrate · Communicate',
  analytics: 'c91c9c5f6c8244f5bf0af12910b2c778',
} as const;

export const cta = { label: 'Message Us', href: '/contact' } as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
] as const;

// Footer only. Kept out of the primary nav so the buyer's path stays at five items.
export const footNav = [
  { label: 'Careers', href: '/careers' },
] as const;

export const clients: {
  name: string;
  url: string;
  src?: string;
  ratio?: number;
  scale?: number;
}[] = [
  { name: 'British Mountaineering Council', url: 'https://www.thebmc.co.uk/en',
    src: '/assets/clients/british-mountaineering-council.svg', ratio: 4.21, scale: 0.92 },
  { name: 'Royal Air Force', url: 'https://www.raf.mod.uk/',
    src: '/assets/clients/royal-air-force.svg', ratio: 2.98, scale: 1.15 },
  { name: 'British Army', url: 'https://www.army.mod.uk/',
    src: '/assets/clients/british-army.svg', ratio: 3.27, scale: 0.88 },
  { name: 'Royal Navy', url: 'https://www.royalnavy.mod.uk/',
    src: '/assets/clients/royal-navy.svg', ratio: 0.84, scale: 1.7 },
  { name: 'Hurtigruten', url: 'https://www.hurtigruten.com/en',
    src: '/assets/clients/hurtigruten.svg', ratio: 6.44 },
  { name: 'INACH', url: 'https://www.inach.cl/',
    src: '/assets/clients/inach.svg', ratio: 3.78, scale: 1 },
  { name: 'Triumph Motorcycles', url: 'https://www.triumphmotorcycles.com/',
    src: '/assets/clients/triumph.svg', ratio: 4.78 },
  { name: 'ITV', url: 'https://www.itv.com/',
    src: '/assets/clients/itv.svg', ratio: 2.00, scale: 1.05 },
  { name: 'British Antarctic Survey', url: 'https://www.bas.ac.uk/',
    src: '/assets/clients/british-antarctic-survey.svg', ratio: 4.47, scale: 1.15 },
  { name: 'TUI Group', url: 'https://www.tuigroup.com/en',
    src: '/assets/clients/tui.svg', ratio: 4.05 },
  { name: 'Kailas', url: 'https://kailasgear.com/',
    src: '/assets/clients/kailas.svg', ratio: 1.12, scale: 1.55 },
];

export const legalNav = [
  { label: 'Privacy', href: '/legal/privacy' },
  { label: 'Terms', href: '/legal/terms' },
  { label: 'Cookies', href: '/legal/cookies' },
] as const;
