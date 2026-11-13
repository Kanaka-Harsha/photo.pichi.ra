export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const siteConfig = {
  title: 'photo.pichi.ra | Nature & Wildlife Photography',
  description: 'An ongoing journey exploring nature, wildlife, birds, and landscapes through the lens of photo.pichi.ra. Finding beauty in the wild, one frame at a time.',
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
      slug: 'wildlife',
      name: 'Wildlife',
      tagline: 'Quiet encounters in the wild',
      description: 'Documenting creatures in their natural habitats, capturing expressions, movement, and unseen moments of animal life.'
    },
    {
      slug: 'birds',
      name: 'Birds',
      tagline: 'Feathered wonders & flight',
      description: 'Patience rewarded: perched silhouettes, vibrant plumage, and fleeting moments in the canopy and shorelines.'
    },
    {
      slug: 'nature',
      name: 'Nature',
      tagline: 'Textures, foliage & flora',
      description: 'The organic patterns, intricate forest floors, droplets, and quiet natural details that surround us.'
    },
    {
      slug: 'landscapes',
      name: 'Landscapes',
      tagline: 'Atmosphere, light & vistas',
      description: 'Open skies, rolling hills, calm horizons, and the changing temperaments of natural light across seasons.'
    }
  ]
} as const;
