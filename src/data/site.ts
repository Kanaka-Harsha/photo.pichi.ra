export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const siteConfig = {
  title: 'photo.pichi.ra | Nature, Wildlife & Landscape Photography',
  description: 'An ongoing journey exploring nature, wildlife, birds, landscapes, and creative darkroom edits through the lens of photo.pichi.ra. Finding beauty in the wild, one frame at a time.',
  brandName: 'photo.pichi.ra',
  author: 'photo.pichi',
  url: 'https://photo-pichi-ra.vercel.app',
  instagram: {
    handle: '@photo.pichi.ra',
    url: 'https://www.instagram.com/photo.pichi.ra/',
    cta: 'Follow my journey on Instagram'
  },
  taglines: {
    hero: 'Finding beauty in the wild.',
    heroSub: 'Exploring the natural world, one frame at a time.',
    editorialIntro: 'An ongoing journey through nature, wildlife, and the little moments that often go unnoticed.',
    editorialSub: 'Photography has become my way of slowing down, observing, and discovering the outdoors. Every frame is a step in learning, exploring, and seeing the world with fresh eyes.'
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Gallery', href: '/gallery/' },
    { label: 'About', href: '/about/' },
    { label: 'Instagram', href: 'https://www.instagram.com/photo.pichi.ra/', external: true }
  ] as NavItem[],
  categories: [
    {
      slug: 'landscapes',
      name: 'Landscapes',
      tagline: 'Atmosphere, light & vistas',
      description: 'Sunrise horizons, rolling Munnar hills, Kerala backwaters, mist-shrouded valleys, and open skies.'
    },
    {
      slug: 'wildlife',
      name: 'Wildlife',
      tagline: 'Quiet encounters in the wild',
      description: 'Documenting creatures in their natural habitats, capturing expressions, movement, and unseen moments.'
    },
    {
      slug: 'birds',
      name: 'Birds',
      tagline: 'Feathered wonders & flight',
      description: 'Patience rewarded: cranes in wetlands, morning ducks, and quiet perches in the wild.'
    },
    {
      slug: 'nature',
      name: 'Nature',
      tagline: 'Textures, foliage & flora',
      description: 'Organic textures, sunlight filtering through foliage, vibrant blooms, and quiet forest details.'
    },
    {
      slug: 'creative',
      name: 'Creative',
      tagline: 'Atmosphere, light & color grading',
      description: 'Experimental compositions, warm candlelit moments, mood studies, and digital darkroom exploration.'
    },
    {
      slug: 'portrait',
      name: 'Portraits',
      tagline: 'Character, tone & expression',
      description: 'Environmental portraiture, expressive studies, and practice RAW workflows celebrating human presence.'
    }
  ]
} as const;
