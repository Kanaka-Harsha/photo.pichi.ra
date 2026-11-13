import type { Photograph } from '../types/photograph';

// Static image imports for Astro's image optimization pipeline
import heroBg from '../assets/photographs/landscapes/hero-bg.jpg';
import wildlife01 from '../assets/photographs/wildlife/wildlife-01.jpg';
import wildlife02 from '../assets/photographs/wildlife/wildlife-02.jpg';
import wildlife03 from '../assets/photographs/wildlife/wildlife-03.jpg';

import birds01 from '../assets/photographs/birds/birds-01.jpg';
import birds02 from '../assets/photographs/birds/birds-02.jpg';
import birds03 from '../assets/photographs/birds/birds-03.jpg';

import nature01 from '../assets/photographs/nature/nature-01.jpg';
import nature02 from '../assets/photographs/nature/nature-02.jpg';
import nature03 from '../assets/photographs/nature/nature-03.jpg';

import landscapes01 from '../assets/photographs/landscapes/landscapes-01.jpg';
import landscapes02 from '../assets/photographs/landscapes/landscapes-02.jpg';
import landscapes03 from '../assets/photographs/landscapes/landscapes-03.jpg';

/**
 * photo.pichi.ra - Central Photography Catalogue
 *
 * HOW TO ADD OR UPDATE PHOTOS:
 * 1. Place your new photo inside `src/assets/photographs/<category>/`
 * 2. Import it at the top of this file (e.g. `import myPhoto from '...'`)
 * 3. Add an entry to the `photographs` array below.
 */
export const heroPhotograph: Photograph = {
  id: 'hero-dawn-valley',
  title: 'Dawn Over the Valley',
  category: 'landscapes',
  src: heroBg,
  alt: 'Atmospheric mist and soft morning light over rolling natural ridges',
  description: 'First light breaking over quiet valley ridges. A silent moment of peaceful observation.',
  location: 'Valley Ridges',
  date: '2026',
  order: 0,
  featured: true,
  orientation: 'landscape'
};

export const photographs: Photograph[] = [
  // Wildlife
  {
    id: 'wildlife-01',
    title: 'Quiet Sentinel',
    category: 'wildlife',
    src: wildlife01,
    alt: 'A lone stag paused quietly among morning forest mist',
    description: 'Patience in the early hours rewarded by a quiet, fleeting encounter.',
    location: 'Deep Woods',
    date: '2026',
    order: 1,
    featured: true,
    orientation: 'portrait'
  },
  {
    id: 'wildlife-02',
    title: 'Gilded Fox in Autumn Brush',
    category: 'wildlife',
    src: wildlife02,
    alt: 'Red fox moving gracefully through golden autumn foliage',
    description: 'Caught in a beam of afternoon sun among golden ferns and fallen leaves.',
    location: 'Autumn Trail',
    date: '2026',
    order: 2,
    featured: true,
    orientation: 'landscape'
  },
  {
    id: 'wildlife-03',
    title: 'Otter by River Stones',
    category: 'wildlife',
    src: wildlife03,
    alt: 'River otter paused on mossy riverbed stones',
    description: 'Alert and curious, pausing for just a split second before vanishing into the clear water.',
    location: 'Riverbank',
    date: '2026',
    order: 3,
    featured: false,
    orientation: 'square'
  },

  // Birds
  {
    id: 'birds-01',
    title: 'Kingfisher on Morning Reed',
    category: 'birds',
    src: birds01,
    alt: 'Kingfisher perched upright on a dried reed beside the water',
    description: 'Brilliant turquoise against muted reeds, waiting motionless for the water below to ripple.',
    location: 'Wetlands Sanctuary',
    date: '2026',
    order: 4,
    featured: true,
    orientation: 'portrait'
  },
  {
    id: 'birds-02',
    title: 'Drifting Heron in Shallow Mist',
    category: 'birds',
    src: birds02,
    alt: 'Great blue heron standing in misty marshland water',
    description: 'A study in patience. Still as stone in the cool mist of the morning marsh.',
    location: 'Estuary Marsh',
    date: '2026',
    order: 5,
    featured: true,
    orientation: 'landscape'
  },
  {
    id: 'birds-03',
    title: 'Canopy Songbird',
    category: 'birds',
    src: birds03,
    alt: 'Small songbird perched among vibrant green summer foliage',
    description: 'High in the canopy, framed by filtered morning light.',
    location: 'Forest Canopy',
    date: '2026',
    order: 6,
    featured: false,
    orientation: 'landscape'
  },

  // Nature
  {
    id: 'nature-01',
    title: 'Dew on Forest Ferns',
    category: 'nature',
    src: nature01,
    alt: 'Macro detail of unfurling fern frond with crystalline morning dew drops',
    description: 'Intricate geometry and micro-worlds found by slowing down and looking closely at the ground.',
    location: 'Mossy Gully',
    date: '2026',
    order: 7,
    featured: true,
    orientation: 'portrait'
  },
  {
    id: 'nature-02',
    title: 'Lichen & Weathered Granite',
    category: 'nature',
    src: nature02,
    alt: 'Textured ancient lichen patterns growing across damp granite boulders',
    description: 'Subtle earthy tones and textures accumulated over centuries on weathered stone.',
    location: 'High Outcrop',
    date: '2026',
    order: 8,
    featured: false,
    orientation: 'landscape'
  },
  {
    id: 'nature-03',
    title: 'Autumn Needles & Earth',
    category: 'nature',
    src: nature03,
    alt: 'Forest floor carpet of pine needles, acorn caps, and rich damp soil',
    description: 'The scent and texture of the autumn floor right after a gentle rainfall.',
    location: 'Pine Grove',
    date: '2026',
    order: 9,
    featured: true,
    orientation: 'square'
  },

  // Landscapes
  {
    id: 'landscapes-01',
    title: 'Misty Ridges at Dawn',
    category: 'landscapes',
    src: landscapes01,
    alt: 'Silhouetted mountain layers fading into distant blue morning haze',
    description: 'Layer upon layer of ridges receding into atmospheric distance.',
    location: 'High Vista Point',
    date: '2026',
    order: 10,
    featured: true,
    orientation: 'landscape'
  },
  {
    id: 'landscapes-02',
    title: 'Whispering Pines in Golden Light',
    category: 'landscapes',
    src: landscapes02,
    alt: 'Tall coniferous trees backlit by low golden evening sunlight',
    description: 'Golden hour shafts of warmth illuminating the quiet forest floor.',
    location: 'Western Pines',
    date: '2026',
    order: 11,
    featured: true,
    orientation: 'portrait'
  },
  {
    id: 'landscapes-03',
    title: 'Still Alpine Waters',
    category: 'landscapes',
    src: landscapes03,
    alt: 'Tranquil glacial lake mirroring sky and mountain silhouettes',
    description: 'Zero wind. Total stillness. The lake becoming an undisturbed mirror.',
    location: 'Glacial Basin',
    date: '2026',
    order: 12,
    featured: false,
    orientation: 'landscape'
  }
];

export function getFeaturedPhotographs(): Photograph[] {
  return photographs
    .filter(p => p.featured)
    .sort((a, b) => a.order - b.order);
}

export function getPhotographsByCategory(category: string): Photograph[] {
  if (category === 'all') {
    return [...photographs].sort((a, b) => a.order - b.order);
  }
  return photographs
    .filter(p => p.category === category)
    .sort((a, b) => a.order - b.order);
}

export function getCategoryCover(category: 'wildlife' | 'birds' | 'nature' | 'landscapes'): Photograph {
  const matching = photographs.filter(p => p.category === category);
  return matching[0] || heroPhotograph;
}

