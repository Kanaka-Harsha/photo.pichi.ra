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

      const isNM = file.startsWith('NM') || file.startsWith('NM_') || file.startsWith('NM-');

      let title = '';
      let category = defaultCat;
      let description = '';
      let location = '';
      let featured = false;
      let instagramUrl = '';

      if (file === 'Sunrise-Alleppy.jpg') {
        title = 'Sunrise in Alleppey';
        description = 'Woke up early to catch the morning sun coming over the backwaters. One of my favorite memories from Alleppey.';
        location = 'Alleppey Backwaters, Kerala';
        featured = true;
      } else if (file === 'waterfall-1.jpg') {
        title = 'Happiness in Small Things';
        description = 'Fresh mountain water rushing over rocks on a cool morning hike. Simple things bring the biggest smiles.';
        location = 'Mountain Cascades';
        category = 'landscapes';
        featured = true;
        instagramUrl = 'https://www.instagram.com/photo.pichi.ra/p/DaxQAGrpRCS/';
      } else if (file === 'Beach-Landscape-1.jpg') {
        title = 'Every Splash Leaves Something';
        description = 'Watching evening tides roll into the shore right as the sun started setting.';
        location = 'Coastal Beach';
        category = 'landscapes';
        featured = true;
        instagramUrl = 'https://www.instagram.com/photo.pichi.ra/p/DazFXsop6S0/';
      } else if (file === 'munnar-Landscape-1.jpg') {
        title = 'Misty Morning in Munnar';
        description = 'Away from all the city noise. Just cold morning breeze, mist, and green tea hills as far as you can see.';
        location = 'Munnar, Kerala';
        category = 'landscapes';
        featured = true;
        instagramUrl = 'https://www.instagram.com/photo.pichi.ra/p/DfLshZmJYbd/';
      } else if (file === 'CCrane-1.jpg') {
        title = 'White • The Colour of Peace';
        description = 'Found this crane standing completely still in shallow wetland water, watching for fish.';
        location = 'Wetland Sanctuary';
        category = 'birds';
        featured = true;
        instagramUrl = 'https://www.instagram.com/photo.pichi.ra/p/DfpjjiozHsg/';
      } else if (file === 'Duck1.jpg') {
        title = 'Ready for a Swim';
        description = 'A duck gliding peacefully across the water early in the morning.';
        location = 'Lakeside';
        category = 'wildlife';
        featured = true;
        instagramUrl = 'https://www.instagram.com/photo.pichi.ra/p/DfhP3kqOcri/';
      } else if (file === 'Bird1.jpg') {
        title = 'Feel The Elegance';
        description = 'Caught a quiet moment of this bird resting on a branch before flying away.';
        location = 'Forest Edge';
        category = 'birds';
        featured = true;
        instagramUrl = 'https://www.instagram.com/photo.pichi.ra/p/DffW7gVztWB/';
      } else if (file === 'Goat-1.jpg') {
        title = 'The Humans of Mountains';
        description = 'Saw this mountain goat walking along rocky steep slopes like it was everyday ground.';
        location = 'High Slopes';
        category = 'wildlife';
        featured = true;
        instagramUrl = 'https://www.instagram.com/photo.pichi.ra/p/DfCgigwuwDf/';
      } else if (file === 'POR-Mine-1.jpg') {
        title = 'Behind the Lens';
        description = 'That is me out on a shoot with a rented camera body! Still learning and having fun with every trip.';
        location = 'Field Shoot';
        category = 'portrait';
        featured = true;
      } else if (file === 'Somu-Portrait-1.jpg') {
        title = 'Portrait of Somu';
        description = 'A fun, natural portrait of Somu taken in soft afternoon light.';
        location = 'Outdoor Session';
        category = 'portrait';
        featured = true;
      } else if (isNM) {
        if (folder === 'Portrait') {
          title = `Portrait Color Grade ${file.includes('2') ? 'II' : 'I'}`;
          description = 'Practicing skin tones and natural contrast curves on free RAW practice files.';
          category = 'portrait';
        } else {
          title = `Landscape Edit ${file.replace(/[^0-9]/g, '') || count}`;
          description = 'Testing out dynamic range and color grading on high-grade practice RAW files.';
          category = 'landscapes';
        }
        location = 'RAW Practice File';
        featured = false;
      } else if (folder === 'Creative') {
        const titles = [
          'Warmth of Fire', 'Light & Shadow', 'Golden Hour Glow', 'Night Mood',
          'Soft Focus', 'Candle Flame', 'Foliage Shadows', 'Filtered Sunlight',
          'Evening Warmth', 'Gentle Hues', 'Amber Light', 'Quiet Room Glow', 'Silhouette'
        ];
        title = titles[(count - 1) % titles.length] || `Creative Shot ${count}`;
        description = 'Having fun experimenting with shadows, candles, and warm tones in Lightroom.';
        category = 'creative';
        featured = count <= 2;
      } else if (folder === 'nature') {
        title = file.includes('1') ? 'Sunlit Leaves' : `Green Texture ${count}`;
        description = 'Little details and green leaves you notice when you take your time walking outside.';
        category = 'nature';
        featured = count === 1;
      } else {
        title = `Outdoor View ${count}`;
        description = 'A quiet outdoor view from one of my weekend photo walks.';
        category = defaultCat;
      }

      photoEntries.push({
        id: `photo-${folder.toLowerCase()}-${count}`,
        title,
        category,
        srcVar: varName,
        alt: `${title} - photo by photo.pichi.ra`,
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
  title: 'Sunrise in Alleppey',
  category: 'landscapes',
  src: heroBg,
  alt: 'Golden sunrise over peaceful Alleppey backwaters',
  description: 'Woke up early to catch the morning sun coming over the backwaters. One of my favorite memories from Alleppey.',
  location: 'Alleppey Backwaters, Kerala',
  date: '2026',
  order: 0,
  featured: true,
  orientation: 'landscape'
};

export const photographerBioPhoto: Photograph = {
  id: 'bio-photo-pichi',
  title: 'Behind the Lens',
  category: 'portrait',
  src: photographerPortrait,
  alt: 'The photographer behind photo.pichi.ra',
  description: 'That is me out on a shoot with a rented camera body! Still learning and having fun with every trip.',
  location: 'Field Shoot',
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
    'photo-landscapes-16', // munnar-Landscape-1 (Misty morning in Munnar)
    'photo-landscapes-22', // waterfall-1 (Mountain waterfall)
    'photo-wildlife-25',   // CCrane-1 (White crane in wetlands)
    'photo-wildlife-26',   // Duck1 (Duck gliding)
    'photo-landscapes-7',  // Beach-Landscape-1 (Beach waves at sunset)
    'photo-portrait-34',   // Somu-Portrait-1 (Portrait of Somu)
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
