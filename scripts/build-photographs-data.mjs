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
        category = 'wildlife';
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
      } else if (file === '1000259737_1_.jpeg') {
        title = 'Eyes Wide Open';
        description = 'Spotted this one while out on a walk. It just sat there looking at me for a good few seconds before it moved. Those eyes though!';
        location = 'Outdoor Walk';
        category = 'wildlife';
        featured = false;
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
      } else if (file === 'somu-araku-1.jpg') {
        title = 'Somu at Araku';
        description = 'Clicked this one on our Araku Valley trip. Somu was just chilling and I sneaked a candid. Came out really well!';
        location = 'Araku Valley';
        category = 'portrait';
        featured = true;
        instagramUrl = '';
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
      } else if (file === 'allepy-boat-1-1.jpg') {
        title = 'Still Water, Moving Boat';
        description = 'One of those calm Alleppey backwater mornings. A wooden boat just sitting there in the stillness. I could have stayed all day.';
        location = 'Alleppey Backwaters, Kerala';
        category = 'creative';
        featured = true;
        instagramUrl = '';
      } else if (folder === 'Creative') {
        const creativeMap = {
          '1000254838.jpeg':          { t: 'Candle Glow',         d: 'Was just messing around with a candle and my camera one evening. Loved how the warm light turned out in Lightroom.' },
          '205f6bed-2fc6-49a9-adce-ffff13cdcdfc-copied-media_2.jpg': { t: 'Amber Light',         d: 'Playing with shadows and warm amber tones — one of those late-evening experiments that actually worked out.' },
          '290a61a9-b508-4fed-aef4-b2ac862a2cfb-copied-media_2.jpg': { t: 'Warmth of Fire',      d: 'Tried capturing fire tones in Lightroom. I think this one has a really cozy mood to it.' },
          '5c7ce3d5-5659-48e1-af2c-c562c91a1b02-copied-media_2.jpg': { t: 'Soft Focus',           d: 'Went a bit abstract with this one. Soft tones and dreamy focus was the vibe I was going for.' },
          '682da52e-46ad-4a52-bc12-1a8f4ccaf33b-copied-media_2.jpg': { t: 'Foliage Shadows',      d: 'The shadow patterns that fall on walls during afternoon light are seriously underrated.' },
          '68fc7f6c-1c0f-49b4-b1f3-800f70f828e1-copied-media_2.jpg': { t: 'Golden Hour Glow',    d: 'That brief golden window right before sunset. Tried to hold on to it in this edit.' },
          '8cac098e-2f10-4bc2-a12c-96498ee3a050-copied-media_2.jpg': { t: 'Night Mood',           d: 'Low light, moody tones. I love seeing how much you can recover in a dark frame with the right edit.' },
          '94be63e0-33bb-4303-83a1-548f44c7660f-copied-media_2.jpg': { t: 'Evening Warmth',       d: 'An evening shot with warm orange tones pushed up. It just feels like a weekend to me.' },
          'a8b63406-769d-4499-86ba-d0bcd5962dd4-copied-media_2.jpg': { t: 'Light & Shadow',       d: 'Experimenting with contrast and shadows. Sometimes simple compositions end up being my favorites.' },
          'bec64767-dd28-4070-8cf3-08b8c2921d87-copied-media_2.jpg': { t: 'Gentle Hues',          d: 'Pastel-ish tones for a change. Tried something different and kind of liked how calm it looked.' },
          'bfc57b90-a225-4748-bb25-d1220aa392cc-copied-media_2.jpg': { t: 'Filtered Sunlight',    d: 'Light coming through leaves or a window — always looks so good with a soft edit on it.' },
          'c0dc0cdc-7612-4a95-a7c8-c3b6e2422941-copied-media_2.jpg': { t: 'Quiet Room Glow',      d: 'A still indoor frame with a warm glow. Sometimes the best shots happen right at home.' },
          'd03b273e-1129-4af7-a833-4d80910b7715-copied-media_2.jpg': { t: 'Silhouette',           d: 'Bold shape against a bright background. I always find silhouette edits satisfying to work on.' },
        };
        const cm = creativeMap[file];
        title = cm ? cm.t : `Creative Shot ${count}`;
        description = cm ? cm.d : 'Having fun experimenting with shadows, candles, and warm tones in Lightroom.';
        category = 'creative';
        featured = count <= 2;
      } else if (folder === 'nature') {
        const natureMap = {
          'flower-1-1.jpg': { t: 'First Bloom',        d: 'Found this flower while walking through a garden early morning. Something about the light hitting it made me stop.' },
          'flower-2-1.jpg': { t: 'Quiet Petals',       d: 'I keep coming back to flowers because they just stand still for you. No patience required.' },
          'flower-3-1.jpg': { t: 'Soft and Still',     d: 'Took this during a slow walk. I love how flowers look with a slightly soft background.' },
          'flower-4-1.jpg': { t: 'Full Bloom',         d: 'Fully opened flower in bright light. Shot from a close angle and I think it really shows the detail.' },
          'flower-5-1.jpg': { t: 'Morning Color',      d: 'Early morning light on a flower — this is the kind of shot that makes waking up early worth it.' },
          'flower-6-1.jpg': { t: 'Petal Close-Up',     d: 'Got really close on this one. Macro-style without a macro lens — just patience and a steady hand.' },
          'flower-7-1.jpg': { t: 'Garden Find',        d: 'Just spotted this in someone\'s garden while passing by. Asked if I could click and they said yes!' },
          'flower-8-1.jpg': { t: 'Last Light Bloom',   d: 'Caught this one in the last bit of afternoon sun before it faded. Colors came out really rich.' },
          'Img20JPG.jpg':   { t: 'Green and Quiet',    d: 'Green textures and soft light from a walk I took on a lazy Sunday afternoon.' },
          'Img21JPG.jpg':   { t: 'Forest Layers',      d: 'Looking up through the trees. The layers of green and light is something I never get tired of.' },
          'Nat-1-1.jpg':    { t: 'Nature Close',       d: 'A close-up shot from a nature trail. When you slow down and look properly, there is so much detail around you.' },
        };
        const nm = natureMap[file];
        title = nm ? nm.t : `Nature Frame ${count}`;
        description = nm ? nm.d : 'Little details and green leaves you notice when you take your time walking outside.';
        category = 'nature';
        featured = count <= 3;
      } else if (folder === 'landscapes') {
        const landscapeMap = {
          '1000260705_1_.jpeg':          { t: 'Open Skies',          d: 'A wide open frame from a morning drive. The sky was doing something nice and I just stopped to click.' },
          '552d7b52-7458-4b3a-81c1-3e9f80d95d90-copied-media_2.jpg': { t: 'Quiet Roads',          d: 'Empty road, cool breeze. Some of my best clicks happen when I am just wandering without a plan.' },
          '6b4cc5c9-990a-442a-a269-820d298f02b4-copied-media_2.jpg': { t: 'Evening by the Water', d: 'Sat by the water as the light faded. These slow evening moments are my favorite time to shoot.' },
          'bb187f49-5454-468b-8813-6e566b2c4ea6-copied-media_2.jpg': { t: 'Wide Open',             d: 'Big sky, big mood. I love how landscape shots make everything feel peaceful.' },
          'dad45165-4c57-4457-b21b-e15378cbba63-copied-media_2.jpg': { t: 'Horizon Line',          d: 'Standing at the edge and looking out. One of those shots that just felt right in the moment.' },
          'dda6afbc-5822-485c-87ee-f9d3b7eb0f57-copied-media_2.jpg': { t: 'Last Light',            d: 'Right before the sun fully set. That last bit of warm light is something I always chase.' },
          'image_23_.jpeg':              { t: 'Morning Stretch',     d: 'Caught this on the way to somewhere else. Sometimes you have to stop the car and just click.' },
          'Landscape-1.jpg':             { t: 'Simple Landscape',    d: 'Nothing fancy — just a quiet landscape that I liked the feel of when I was out that day.' },
        };
        const lm = landscapeMap[file];
        title = lm ? lm.t : `Landscape View ${count}`;
        description = lm ? lm.d : 'A quiet outdoor view from one of my weekend photo walks.';
        category = 'landscapes';
        featured = false;
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
  // Pick the best featured photos by title for a stable cross-build selection
  const preferredTitles = [
    'Misty Morning in Munnar',
    'Happiness in Small Things',
    'White \u2022 The Colour of Peace',
    'Ready for a Swim',
    'Every Splash Leaves Something',
    'Still Water, Moving Boat',
  ];

  const matched = preferredTitles
    .map(t => photographs.find(p => p.title === t))
    .filter((p): p is Photograph => Boolean(p));

  if (matched.length >= 4) return matched;

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

export function getCategoryCover(category: 'wildlife' | 'nature' | 'landscapes' | 'creative' | 'portrait'): Photograph {
  const matching = photographs.filter(p => p.category === category);
  return matching[0] || heroPhotograph;
}
`;

  fs.writeFileSync('src/data/photographs.ts', fileContent);
  console.log(`Generated src/data/photographs.ts with ${photoEntries.length} photographs!`);
}

generate().catch(console.error);
