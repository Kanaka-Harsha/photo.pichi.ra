import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const baseDir = path.resolve('src/assets/photographs');

const categories = ['wildlife', 'birds', 'nature', 'landscapes'];

categories.forEach(cat => {
  const dir = path.join(baseDir, cat);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Also create public/
const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const photoConfigs = [
  // Hero
  {
    folder: 'landscapes',
    filename: 'hero-bg.jpg',
    width: 2400,
    height: 1400,
    title: 'Dawn Over the Valley',
    category: 'LANDSCAPES',
    c1: '#1E251B',
    c2: '#3D4935',
    c3: '#7A845C',
    c4: '#C2B89D',
    accent: '#D4C9AA'
  },
  // Wildlife
  {
    folder: 'wildlife',
    filename: 'wildlife-01.jpg',
    width: 1600,
    height: 2000, // portrait
    title: 'Quiet Sentinel',
    category: 'WILDLIFE',
    c1: '#1A1C16',
    c2: '#2C3426',
    c3: '#4F583D',
    c4: '#857F6A',
    accent: '#B8AF94'
  },
  {
    folder: 'wildlife',
    filename: 'wildlife-02.jpg',
    width: 2000,
    height: 1333, // landscape
    title: 'Gilded Fox in Autumn Brush',
    category: 'WILDLIFE',
    c1: '#261B14',
    c2: '#4A3323',
    c3: '#875C36',
    c4: '#C08D58',
    accent: '#E0B589'
  },
  {
    folder: 'wildlife',
    filename: 'wildlife-03.jpg',
    width: 1600,
    height: 1600, // square
    title: 'Otter by the River Stones',
    category: 'WILDLIFE',
    c1: '#172224',
    c2: '#283B3D',
    c3: '#455A58',
    c4: '#7C8F8A',
    accent: '#B5C4BE'
  },
  // Birds
  {
    folder: 'birds',
    filename: 'birds-01.jpg',
    width: 1600,
    height: 2200, // portrait
    title: 'Kingfisher on Morning Reed',
    category: 'BIRDS',
    c1: '#132128',
    c2: '#1D3B47',
    c3: '#366978',
    c4: '#8AA59E',
    accent: '#D48C46'
  },
  {
    folder: 'birds',
    filename: 'birds-02.jpg',
    width: 2000,
    height: 1333, // landscape
    title: 'Drifting Heron in Shallow Mist',
    category: 'BIRDS',
    c1: '#1C2224',
    c2: '#2F3C3F',
    c3: '#526466',
    c4: '#879796',
    accent: '#C5D1CE'
  },
  {
    folder: 'birds',
    filename: 'birds-03.jpg',
    width: 1800,
    height: 1350,
    title: 'Canopy Songbird',
    category: 'BIRDS',
    c1: '#1B2418',
    c2: '#304128',
    c3: '#5C7449',
    c4: '#93A87D',
    accent: '#D8DEB6'
  },
  // Nature
  {
    folder: 'nature',
    filename: 'nature-01.jpg',
    width: 1600,
    height: 2000, // portrait
    title: 'Dew on Forest Ferns',
    category: 'NATURE',
    c1: '#121F17',
    c2: '#1E3827',
    c3: '#396345',
    c4: '#6B9475',
    accent: '#A6C9AF'
  },
  {
    folder: 'nature',
    filename: 'nature-02.jpg',
    width: 2000,
    height: 1333,
    title: 'Lichen & Weathered Granite',
    category: 'NATURE',
    c1: '#1D211C',
    c2: '#353A32',
    c3: '#5C6156',
    c4: '#8D9183',
    accent: '#BFC2B5'
  },
  {
    folder: 'nature',
    filename: 'nature-03.jpg',
    width: 1600,
    height: 1600, // square
    title: 'Autumn Needles & Earth',
    category: 'NATURE',
    c1: '#261C14',
    c2: '#402E20',
    c3: '#6B4F35',
    c4: '#9E7650',
    accent: '#D1A67B'
  },
  // Landscapes
  {
    folder: 'landscapes',
    filename: 'landscapes-01.jpg',
    width: 2200,
    height: 1400,
    title: 'Misty Ridges at Dawn',
    category: 'LANDSCAPES',
    c1: '#192026',
    c2: '#2D3945',
    c3: '#526270',
    c4: '#8797A3',
    accent: '#D9C5A8'
  },
  {
    folder: 'landscapes',
    filename: 'landscapes-02.jpg',
    width: 1600,
    height: 2200, // portrait
    title: 'Whispering Pines in Golden Light',
    category: 'LANDSCAPES',
    c1: '#1F2417',
    c2: '#363D25',
    c3: '#61693E',
    c4: '#96965E',
    accent: '#D9C88B'
  },
  {
    folder: 'landscapes',
    filename: 'landscapes-03.jpg',
    width: 2000,
    height: 1250,
    title: 'Still Alpine Waters',
    category: 'LANDSCAPES',
    c1: '#131B22',
    c2: '#1F2F3B',
    c3: '#3D5463',
    c4: '#6C8796',
    accent: '#B0C8D6'
  }
];

async function generateImages() {
  console.log('Generating earthy natural photography assets...');

  for (const item of photoConfigs) {
    const destPath = path.join(baseDir, item.folder, item.filename);

    const svg = `
    <svg width="${item.width}" height="${item.height}" viewBox="0 0 ${item.width} ${item.height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#000000" stop-opacity="0" />
          <stop offset="80%" stop-color="#000000" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.75" />
        </radialGradient>
        <linearGradient id="bgGrad" x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stop-color="${item.c1}" />
          <stop offset="35%" stop-color="${item.c2}" />
          <stop offset="70%" stop-color="${item.c3}" />
          <stop offset="100%" stop-color="${item.c4}" />
        </linearGradient>
        <filter id="grain" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise" />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.12 0" />
          <feComposite in2="SourceGraphic" in="gl" operator="in" />
        </filter>
      </defs>

      <!-- Atmospheric background -->
      <rect width="100%" height="100%" fill="url(#bgGrad)" />

      <!-- Organic contour horizon lines for depth -->
      <path d="M 0,${item.height * 0.65} Q ${item.width * 0.25},${item.height * 0.58} ${item.width * 0.5},${item.height * 0.66} T ${item.width},${item.height * 0.62} L ${item.width},${item.height} L 0,${item.height} Z" fill="${item.c2}" opacity="0.45" />
      <path d="M 0,${item.height * 0.76} Q ${item.width * 0.35},${item.height * 0.72} ${item.width * 0.7},${item.height * 0.78} T ${item.width},${item.height * 0.74} L ${item.width},${item.height} L 0,${item.height} Z" fill="${item.c1}" opacity="0.65" />

      <!-- Sun/Moon or light bloom -->
      <circle cx="${item.width * 0.75}" cy="${item.height * 0.35}" r="${Math.min(item.width, item.height) * 0.22}" fill="${item.accent}" opacity="0.18" />

      <!-- Dark Vignette Overlay -->
      <rect width="100%" height="100%" fill="url(#vignette)" />

      <!-- Minimal Editorial Watermark/Identification -->
      <g transform="translate(${item.width * 0.08}, ${item.height * 0.88})">
        <text x="0" y="0" font-family="serif" font-size="${Math.round(item.width * 0.024)}" fill="${item.accent}" letter-spacing="2" opacity="0.92">photo.pichi.ra</text>
        <text x="0" y="${Math.round(item.width * 0.026)}" font-family="sans-serif" font-size="${Math.round(item.width * 0.012)}" fill="#FFFFFF" letter-spacing="4" opacity="0.75">${item.category} • ${item.title.toUpperCase().replace(/&/g, '&amp;')}</text>
      </g>
    </svg>
    `;

    await sharp(Buffer.from(svg))
      .jpeg({ quality: 92, chromaSubsampling: '4:4:4' })
      .toFile(destPath);

    console.log(`✓ Created: ${item.folder}/${item.filename}`);
  }

  // Also create a social preview in public/
  const ogSvg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#252921" />
    <circle cx="950" cy="200" r="280" fill="#727B57" opacity="0.2" />
    <text x="90" y="240" font-family="serif" font-size="56" fill="#F5F3EC" letter-spacing="-1">photo.pichi.ra</text>
    <text x="90" y="300" font-family="sans-serif" font-size="24" fill="#A08C6E" letter-spacing="4">NATURE &amp; WILDLIFE PHOTOGRAPHY</text>
    <text x="90" y="380" font-family="sans-serif" font-size="20" fill="#DAD8CD" opacity="0.85">Finding beauty in the wild, one frame at a time.</text>
    <text x="90" y="420" font-family="sans-serif" font-size="18" fill="#77796E">Wildlife • Birds • Nature • Landscapes</text>
    <rect x="90" y="470" width="180" height="2" fill="#727B57" />
    <text x="90" y="520" font-family="sans-serif" font-size="16" fill="#A3A69A">Instagram: @photo.pichi.ra</text>
  </svg>
  `;

  await sharp(Buffer.from(ogSvg))
    .jpeg({ quality: 90 })
    .toFile(path.join(publicDir, 'og-image.jpg'));

  // Also create favicon.svg in public/
  const faviconSvg = `
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="14" fill="#252921" />
    <circle cx="32" cy="32" r="16" stroke="#727B57" stroke-width="3" />
    <circle cx="32" cy="32" r="8" fill="#F5F3EC" />
    <circle cx="44" cy="20" r="3" fill="#A08C6E" />
  </svg>
  `;
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvg);

  // robots.txt
  const robots = `User-agent: *\nAllow: /\nSitemap: https://photo-pichi-ra.vercel.app/sitemap.xml\n`;
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);

  console.log('✓ Public assets created.');
}

generateImages().catch(console.error);
