export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const siteConfig = {
  title: 'photo.pichi.ra | My Photography Journal',
  description: 'Hi, welcome to my photo journal! Photography has been my hobby for the past 1-2 years. Here are my favorite frames of nature, birds, sunrises, and creative experiments.',
  brandName: 'photo.pichi.ra',
  author: 'photo.pichi',
  url: 'https://photo-pichi-ra.vercel.app',
  instagram: {
    handle: '@photo.pichi.ra',
    url: 'https://www.instagram.com/photo.pichi.ra/',
    cta: 'Follow my journey on Instagram'
  },
  taglines: {
    hero: 'Finding peace behind the camera.',
    heroSub: 'A personal collection of sunrises, quiet outdoors, and moments I love capturing.',
    editorialIntro: "I've loved cameras since I was a kid. For the past 1–2 years, photography has been my favorite way to slow down.",
    editorialSub: "I don't own a fancy camera yet — I rent gear when I travel, shoot whatever catches my eye, and spend hours having fun editing in Lightroom."
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
      tagline: 'Sunrises, hills & water',
      description: 'Morning light in Alleppey, misty hills in Munnar, beach waves, and open skies.'
    },
    {
      slug: 'wildlife',
      name: 'Wildlife',
      tagline: 'Animals in the wild',
      description: 'Little moments with animals and nature, waiting patiently for them to feel comfortable.'
    },
    {
      slug: 'birds',
      name: 'Birds',
      tagline: 'Feathers & quiet moments',
      description: 'White cranes standing still in water, ducks swimming by, and birds resting on branches.'
    },
    {
      slug: 'nature',
      name: 'Nature',
      tagline: 'Green leaves & sunlight',
      description: 'Little things you spot when you look closely — sunlight through palm leaves, forest textures, and wildflowers.'
    },
    {
      slug: 'creative',
      name: 'Creative',
      tagline: 'Lights, shadows & mood',
      description: 'Playing around with candlelight, warm fire tones, shadows, and color experiments in Lightroom.'
    },
    {
      slug: 'portrait',
      name: 'Portraits',
      tagline: 'People & practice edits',
      description: 'Portraits of friends, outdoor lighting tests, and edits practiced on free RAW files.'
    }
  ]
} as const;
