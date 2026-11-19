import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const jamesReaderCredit = `Testing out my editing workflow on professional RAW practice files! 🎨✨

CREDITS:
Free RAW practice files provided by James Reader:
Instagram: @james.reader - (https://www.instagram.com/james.reader)
Website: (https://www.jamesreader.uk/raw-files)
YouTube: (https://www.youtube.com/jamesreader)

#photoediting #colorgrade #postprocessing #lightroom #creativeediting`;

const folders = [
  { folder: 'landscapes', defaultCat: 'landscapes' },
  { folder: 'wildlife', defaultCat: 'wildlife' },
  { folder: 'nature', defaultCat: 'nature' },
  { folder: 'Portrait', defaultCat: 'portrait' },
  { folder: 'Creative', defaultCat: 'creative' }
];

async function generate() {
  const imports = [];
  const photoEntries = [];

  // Hero image definition
  imports.push(`import heroBg from '../assets/photographs/landscapes/Sunrise-Alleppy.jpg';`);
  imports.push(`import photographerPortrait from '../assets/photographs/Portrait/POR-Mine-1.jpg';`);

  let count = 0;

  for (const { folder, defaultCat } of folders) {
    const dir = path.join('src/assets/photographs', folder);
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));

    for (const file of files) {
      count++;
      const varName = `img_${folder.toLowerCase()}_${count}`;
      const filePath = `../assets/photographs/${folder}/${file}`;
      imports.push(`import ${varName} from '${filePath}';`);

      const fullPath = path.join(dir, file);
      const meta = await sharp(fullPath).metadata();
      const ratio = meta.width / meta.height;
      let orientation = 'square';
      if (ratio > 1.15) orientation = 'landscape';
      else if (ratio < 0.85) orientation = 'portrait';

      const isNM = file.startsWith('NM') || file.startsWith('NM-');
      const isHero = file === 'Sunrise-Alleppy.jpg';

      // Specific known mappings
      let title = '';
      let category = defaultCat;
      let description = '';
      let location = '';
      let featured = false;
      let instagramUrl = '';

      if (file === 'Sunrise-Alleppy.jpg') {
        title = 'Golden Sunrise over Alleppey';
        description = 'Yet another period of the golden hours. Morning light reflecting across the peaceful waters.';
        location = 'Alleppey Backwaters, Kerala';
        featured = true;
      } else if (file === 'waterfall-1.jpg') {
        title = 'Happiness In Small Things';
        description = 'The biggest happiness lies in the smallest things 🌊🪨🏔️. Rushing mountain waters cascading through natural rock.';
        location = 'Mountain Cascades';
        category = 'landscapes';
        featured = true;
        instagramUrl = 'https://www.instagram.com/photo.pichi.ra/p/DaxQAGrpRCS/';
      } else if (file === 'Beach-Landscape-1.jpg') {
        title = 'Every Splash Leaves Something';
        description = 'Every splash leaves something behind 🌊🪨. Coastal tides meeting the shoreline during evening golden hour.';
        location = 'Coastal Shore';
        category = 'landscapes';
        featured = true;
        instagramUrl = 'https://www.instagram.com/photo.pichi.ra/p/DazFXsop6S0/';
      } else if (file === 'munnar-Landscape-1.jpg') {
        title = 'Closer To Peace — Munnar';
        description = 'Away from chaos, closer to peace 🕊️ 🏔️ 🌫️. Misty green hills stretching across rolling tea plantations.';
        location = 'Munnar, Kerala';
        category = 'landscapes';
        featured = true;
        instagramUrl = 'https://www.instagram.com/photo.pichi.ra/p/DfLshZmJYbd/';
      } else if (file === 'CCrane-1.jpg') {
        title = 'White • The Colour Of Peace';
        description = 'White • The Colour Of Peace🤍🌿. A solitary crane poised in quiet wetlands.';
        location = 'Wetland Sanctuary';
        category = 'birds';
        featured = true;
        instagramUrl = 'https://www.instagram.com/photo.pichi.ra/p/DfpjjiozHsg/';
      } else if (file === 'Duck1.jpg') {
        title = 'Ready For A Swim';
        description = 'Ready For A Swim 🦆 🌊... Calm ripples forming as water glides by.';
        location = 'Lake Shore';
        category = 'wildlife';
        featured = true;
        instagramUrl = 'https://www.instagram.com/photo.pichi.ra/p/DfhP3kqOcri/';
      } else if (file === 'Bird1.jpg') {
        title = 'Feel The Elegance';
        description = 'Feel The Elegance... 🕊️ 🍃. Subtle grace caught in an intimate wildlife moment.';
        location = 'Forest Edge';
        category = 'birds';
        featured = true;
        instagramUrl = 'https://www.instagram.com/photo.pichi.ra/p/DffW7gVztWB/';
      } else if (file === 'Goat-1.jpg') {
        title = 'The Humans Of Mountains';
        description = 'The Humans Of Mountains 🦌 🏔️. Resilient wildlife navigating steep rocky terrain.';
        location = 'High Altitude Slopes';
        category = 'wildlife';
        featured = true;
        instagramUrl = 'https://www.instagram.com/photo.pichi.ra/p/DfCgigwuwDf/';
      } else if (file === 'POR-Mine-1.jpg') {
        title = 'Behind the Lens — Self Portrait';
        description = 'The person behind photo.pichi.ra. Exploring the outdoors, renting camera bodies, and finding quiet moments in nature.';
        location = 'Field Studio';
        category = 'portrait';
        featured = true;
      } else if (file === 'Somu-Portrait-1.jpg') {
        title = 'Portrait of Somu';
        description = 'An authentic, character-rich portrait study illuminated by natural ambient light.';
        location = 'Outdoor Session';
        category = 'portrait';
        featured = true;
      } else if (isNM) {
        if (folder === 'Portrait') {
          title = `Editorial Portrait Study ${file.includes('2') ? 'II' : 'I'}`;
          description = 'Color grading and skin tone refinement practiced on professional RAW files.';
          category = 'portrait';
        } else {
          title = `Highland Vista Edit ${file.replace(/[^0-9]/g, '') || count}`;
          description = 'Atmospheric grading, dynamic range handling, and tone curve practice.';
          category = 'landscapes';
        }
        location = 'Practice RAW File';
        featured = false;
      } else if (folder === 'Creative') {
        const titles = [
          'Warmth of Ember', 'Shadow & Form', 'Golden Radiance', 'Nocturne Study',
          'Intimate Focus', 'Texture & Tone', 'Abstract Foliage', 'Sunlight Diffusion',
          'Soft Contours', 'Fading Dusk', 'Chasing Amber', 'Quiet Glow', 'Botanical Silhouette'
        ];
        title = titles[(count - 1) % titles.length] || `Creative Study ${count}`;
        description = 'Exploring color mood, contrast shapes, and digital darkroom techniques in Lightroom.';
        category = 'creative';
        featured = count <= 2;
      } else if (folder === 'nature') {
        title = file.includes('1') ? 'Verdant Canopy' : `Nature Texture ${count}`;
        description = 'Quiet organic textures and details that often go unnoticed on the forest floor.';
        category = 'nature';
        featured = count === 1;
      } else {
        title = `Scenic Vista ${count}`;
        description = 'Observing natural light, landscape lines, and changing outdoor conditions.';
        category = defaultCat;
      }

      photoEntries.push({
        id: `photo-${folder.toLowerCase()}-${count}`,
        title,
        category,
        srcVar: varName,
        alt: `${title} - photography by photo.pichi.ra`,
        description,
        location,
        date: '2026',
        featured,
        order: count,
        orientation,
        isPracticeFile: isNM,
        credits: isNM ? jamesReaderCredit : undefined,
        instagramUrl
      });
    }
  }

  const fileContent = `import type { Photograph } from '../types/photograph';

// Asset Imports
${imports.join('\n')}

export const heroPhotograph: Photograph = {
  id: 'hero-sunrise-alleppey',
  title: 'Golden Sunrise over Alleppey',
  category: 'landscapes',
  src: heroBg,
  alt: 'Atmospheric sunrise with glowing golden light over Alleppey backwaters',
  description: 'Yet another period of the golden hours. Morning light reflecting across the peaceful backwaters of Alleppey.',
  location: 'Alleppey Backwaters, Kerala',
  date: '2026',
  order: 0,
  featured: true,
  orientation: 'landscape'
};

export const photographerBioPhoto: Photograph = {
  id: 'bio-photo-pichi',
  title: 'Behind the Lens — Self Portrait',
  category: 'portrait',
  src: photographerPortrait,
  alt: 'The photographer behind photo.pichi.ra',
  description: 'The person behind photo.pichi.ra. Exploring the outdoors, renting camera bodies, and finding quiet moments in nature.',
  location: 'Field Studio',
  date: '2026',
  order: 0,
  featured: true,
  orientation: 'portrait'
};

export const photographs: Photograph[] = [
${photoEntries.map(p => `  {
    id: ${JSON.stringify(p.id)},
    title: ${JSON.stringify(p.title)},
    category: ${JSON.stringify(p.category)},
    src: ${p.srcVar},
    alt: ${JSON.stringify(p.alt)},
    description: ${JSON.stringify(p.description)},
    location: ${JSON.stringify(p.location)},
    date: ${JSON.stringify(p.date)},
    order: ${p.order},
    featured: ${p.featured},
    orientation: ${JSON.stringify(p.orientation)},
    isPracticeFile: ${p.isPracticeFile},
    credits: ${p.credits ? JSON.stringify(p.credits) : 'undefined'},
    instagramUrl: ${JSON.stringify(p.instagramUrl || '')}
  }`).join(',\n')}
];

export function getFeaturedPhotographs(): Photograph[] {
  // Return a carefully ordered mix for the editorial featured showcase
  const preferredFeaturedIds = [
    'photo-landscapes-16', // munnar-Landscape-1 (Wide Munnar hills)
    'photo-landscapes-22', // waterfall-1 (Tall mountain waterfall)
    'photo-wildlife-25',   // CCrane-1 (White crane in wetlands)
    'photo-wildlife-26',   // Duck1 (Wildlife duck in water)
    'photo-landscapes-7',  // Beach-Landscape-1 (Coastal golden hour)
    'photo-portrait-34',   // Somu-Portrait-1 (Character portrait)
  ];

  const matched = preferredFeaturedIds
    .map(id => photographs.find(p => p.id === id))
    .filter((p): p is Photograph => Boolean(p));

  if (matched.length >= 6) return matched;

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

export function getCategoryCover(category: 'wildlife' | 'birds' | 'nature' | 'landscapes' | 'creative' | 'portrait'): Photograph {
  const matching = photographs.filter(p => p.category === category);
  return matching[0] || heroPhotograph;
}
`;

  fs.writeFileSync('src/data/photographs.ts', fileContent);
  console.log(`Generated src/data/photographs.ts with ${photoEntries.length} photographs!`);
}

generate().catch(console.error);
