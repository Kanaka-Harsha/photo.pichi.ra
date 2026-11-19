import type { Photograph } from '../types/photograph';

// Asset Imports
import heroBg from '../assets/photographs/landscapes/Sunrise-Alleppy.jpg';
import photographerPortrait from '../assets/photographs/Portrait/POR-Mine-1.jpg';
import img_landscapes_1 from '../assets/photographs/landscapes/1000260705_1_.jpeg';
import img_landscapes_2 from '../assets/photographs/landscapes/552d7b52-7458-4b3a-81c1-3e9f80d95d90-copied-media_2.jpg';
import img_landscapes_3 from '../assets/photographs/landscapes/58289af3-4040-4e2a-9630-7d04a6926e29-copied-media_2.jpg';
import img_landscapes_4 from '../assets/photographs/landscapes/6b4cc5c9-990a-442a-a269-820d298f02b4-copied-media_2.jpg';
import img_landscapes_5 from '../assets/photographs/landscapes/7b9a865b-4243-48db-b643-e4085125343b-copied-media_2.jpg';
import img_landscapes_6 from '../assets/photographs/landscapes/bb187f49-5454-468b-8813-6e566b2c4ea6-copied-media_2.jpg';
import img_landscapes_7 from '../assets/photographs/landscapes/Beach-Landscape-1.jpg';
import img_landscapes_8 from '../assets/photographs/landscapes/c0387f48-e4ec-44e5-b64a-c950e182721a-copied-media_2.jpg';
import img_landscapes_9 from '../assets/photographs/landscapes/c7549fa0-51a8-4552-a749-3f2f3f35757f-copied-media_2.jpg';
import img_landscapes_10 from '../assets/photographs/landscapes/dad45165-4c57-4457-b21b-e15378cbba63-copied-media_2.jpg';
import img_landscapes_11 from '../assets/photographs/landscapes/dda6afbc-5822-485c-87ee-f9d3b7eb0f57-copied-media_2.jpg';
import img_landscapes_12 from '../assets/photographs/landscapes/DSC00688_2.jpg';
import img_landscapes_13 from '../assets/photographs/landscapes/DSC00689.jpeg';
import img_landscapes_14 from '../assets/photographs/landscapes/image_23_.jpeg';
import img_landscapes_15 from '../assets/photographs/landscapes/Landscape-1.jpg';
import img_landscapes_16 from '../assets/photographs/landscapes/munnar-Landscape-1.jpg';
import img_landscapes_17 from '../assets/photographs/landscapes/NM-Landscape-2.jpg';
import img_landscapes_18 from '../assets/photographs/landscapes/NM-Landscape-3.jpg';
import img_landscapes_19 from '../assets/photographs/landscapes/NM-landscape-9-1.jpg';
import img_landscapes_20 from '../assets/photographs/landscapes/NM-Landscape_-_1-1.jpg';
import img_landscapes_21 from '../assets/photographs/landscapes/Sunrise-Alleppy.jpg';
import img_landscapes_22 from '../assets/photographs/landscapes/waterfall-1.jpg';
import img_wildlife_23 from '../assets/photographs/wildlife/1000259737_1_.jpeg';
import img_wildlife_24 from '../assets/photographs/wildlife/Bird1.jpg';
import img_wildlife_25 from '../assets/photographs/wildlife/CCrane-1.jpg';
import img_wildlife_26 from '../assets/photographs/wildlife/Duck1.jpg';
import img_wildlife_27 from '../assets/photographs/wildlife/Goat-1.jpg';
import img_nature_28 from '../assets/photographs/nature/nature-01.jpg';
import img_nature_29 from '../assets/photographs/nature/nature-02.jpg';
import img_nature_30 from '../assets/photographs/nature/nature-03.jpg';
import img_nature_31 from '../assets/photographs/nature/nature-1.jpg';
import img_portrait_32 from '../assets/photographs/Portrait/NM-POR-2-1.jpg';
import img_portrait_33 from '../assets/photographs/Portrait/NM-Portrait-1.jpg';
import img_portrait_34 from '../assets/photographs/Portrait/POR-Mine-1.jpg';
import img_portrait_35 from '../assets/photographs/Portrait/Somu-Portrait-1.jpg';
import img_creative_36 from '../assets/photographs/Creative/1000254838.jpeg';
import img_creative_37 from '../assets/photographs/Creative/205f6bed-2fc6-49a9-adce-ffff13cdcdfc-copied-media_2.jpg';
import img_creative_38 from '../assets/photographs/Creative/290a61a9-b508-4fed-aef4-b2ac862a2cfb-copied-media_2.jpg';
import img_creative_39 from '../assets/photographs/Creative/5c7ce3d5-5659-48e1-af2c-c562c91a1b02-copied-media_2.jpg';
import img_creative_40 from '../assets/photographs/Creative/682da52e-46ad-4a52-bc12-1a8f4ccaf33b-copied-media_2.jpg';
import img_creative_41 from '../assets/photographs/Creative/68fc7f6c-1c0f-49b4-b1f3-800f70f828e1-copied-media_2.jpg';
import img_creative_42 from '../assets/photographs/Creative/8cac098e-2f10-4bc2-a12c-96498ee3a050-copied-media_2.jpg';
import img_creative_43 from '../assets/photographs/Creative/94be63e0-33bb-4303-83a1-548f44c7660f-copied-media_2.jpg';
import img_creative_44 from '../assets/photographs/Creative/a8b63406-769d-4499-86ba-d0bcd5962dd4-copied-media_2.jpg';
import img_creative_45 from '../assets/photographs/Creative/bec64767-dd28-4070-8cf3-08b8c2921d87-copied-media_2.jpg';
import img_creative_46 from '../assets/photographs/Creative/bfc57b90-a225-4748-bb25-d1220aa392cc-copied-media_2.jpg';
import img_creative_47 from '../assets/photographs/Creative/c0dc0cdc-7612-4a95-a7c8-c3b6e2422941-copied-media_2.jpg';
import img_creative_48 from '../assets/photographs/Creative/d03b273e-1129-4af7-a833-4d80910b7715-copied-media_2.jpg';

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
  {
    id: "photo-landscapes-1",
    title: "Outdoor View 1",
    category: "landscapes",
    src: img_landscapes_1,
    alt: "Outdoor View 1 - photo by photo.pichi.ra",
    description: "A quiet outdoor view from one of my weekend photo walks.",
    location: "",
    date: "2026",
    order: 1,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-2",
    title: "Outdoor View 2",
    category: "landscapes",
    src: img_landscapes_2,
    alt: "Outdoor View 2 - photo by photo.pichi.ra",
    description: "A quiet outdoor view from one of my weekend photo walks.",
    location: "",
    date: "2026",
    order: 2,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-3",
    title: "Outdoor View 3",
    category: "landscapes",
    src: img_landscapes_3,
    alt: "Outdoor View 3 - photo by photo.pichi.ra",
    description: "A quiet outdoor view from one of my weekend photo walks.",
    location: "",
    date: "2026",
    order: 3,
    featured: false,
    orientation: "landscape",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-4",
    title: "Outdoor View 4",
    category: "landscapes",
    src: img_landscapes_4,
    alt: "Outdoor View 4 - photo by photo.pichi.ra",
    description: "A quiet outdoor view from one of my weekend photo walks.",
    location: "",
    date: "2026",
    order: 4,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-5",
    title: "Outdoor View 5",
    category: "landscapes",
    src: img_landscapes_5,
    alt: "Outdoor View 5 - photo by photo.pichi.ra",
    description: "A quiet outdoor view from one of my weekend photo walks.",
    location: "",
    date: "2026",
    order: 5,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-6",
    title: "Outdoor View 6",
    category: "landscapes",
    src: img_landscapes_6,
    alt: "Outdoor View 6 - photo by photo.pichi.ra",
    description: "A quiet outdoor view from one of my weekend photo walks.",
    location: "",
    date: "2026",
    order: 6,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-7",
    title: "Every Splash Leaves Something",
    category: "landscapes",
    src: img_landscapes_7,
    alt: "Every Splash Leaves Something - photo by photo.pichi.ra",
    description: "Watching evening tides roll into the shore right as the sun started setting.",
    location: "Coastal Beach",
    date: "2026",
    order: 7,
    featured: true,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: "https://www.instagram.com/photo.pichi.ra/p/DazFXsop6S0/"
  },
  {
    id: "photo-landscapes-8",
    title: "Outdoor View 8",
    category: "landscapes",
    src: img_landscapes_8,
    alt: "Outdoor View 8 - photo by photo.pichi.ra",
    description: "A quiet outdoor view from one of my weekend photo walks.",
    location: "",
    date: "2026",
    order: 8,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-9",
    title: "Outdoor View 9",
    category: "landscapes",
    src: img_landscapes_9,
    alt: "Outdoor View 9 - photo by photo.pichi.ra",
    description: "A quiet outdoor view from one of my weekend photo walks.",
    location: "",
    date: "2026",
    order: 9,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-10",
    title: "Outdoor View 10",
    category: "landscapes",
    src: img_landscapes_10,
    alt: "Outdoor View 10 - photo by photo.pichi.ra",
    description: "A quiet outdoor view from one of my weekend photo walks.",
    location: "",
    date: "2026",
    order: 10,
    featured: false,
    orientation: "landscape",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-11",
    title: "Outdoor View 11",
    category: "landscapes",
    src: img_landscapes_11,
    alt: "Outdoor View 11 - photo by photo.pichi.ra",
    description: "A quiet outdoor view from one of my weekend photo walks.",
    location: "",
    date: "2026",
    order: 11,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-12",
    title: "Outdoor View 12",
    category: "landscapes",
    src: img_landscapes_12,
    alt: "Outdoor View 12 - photo by photo.pichi.ra",
    description: "A quiet outdoor view from one of my weekend photo walks.",
    location: "",
    date: "2026",
    order: 12,
    featured: false,
    orientation: "landscape",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-13",
    title: "Outdoor View 13",
    category: "landscapes",
    src: img_landscapes_13,
    alt: "Outdoor View 13 - photo by photo.pichi.ra",
    description: "A quiet outdoor view from one of my weekend photo walks.",
    location: "",
    date: "2026",
    order: 13,
    featured: false,
    orientation: "landscape",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-14",
    title: "Outdoor View 14",
    category: "landscapes",
    src: img_landscapes_14,
    alt: "Outdoor View 14 - photo by photo.pichi.ra",
    description: "A quiet outdoor view from one of my weekend photo walks.",
    location: "",
    date: "2026",
    order: 14,
    featured: false,
    orientation: "landscape",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-15",
    title: "Outdoor View 15",
    category: "landscapes",
    src: img_landscapes_15,
    alt: "Outdoor View 15 - photo by photo.pichi.ra",
    description: "A quiet outdoor view from one of my weekend photo walks.",
    location: "",
    date: "2026",
    order: 15,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-16",
    title: "Misty Morning in Munnar",
    category: "landscapes",
    src: img_landscapes_16,
    alt: "Misty Morning in Munnar - photo by photo.pichi.ra",
    description: "Away from all the city noise. Just cold morning breeze, mist, and green tea hills as far as you can see.",
    location: "Munnar, Kerala",
    date: "2026",
    order: 16,
    featured: true,
    orientation: "landscape",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: "https://www.instagram.com/photo.pichi.ra/p/DfLshZmJYbd/"
  },
  {
    id: "photo-landscapes-17",
    title: "Landscape Edit 2",
    category: "landscapes",
    src: img_landscapes_17,
    alt: "Landscape Edit 2 - photo by photo.pichi.ra",
    description: "Testing out dynamic range and color grading on high-grade practice RAW files.",
    location: "RAW Practice File",
    date: "2026",
    order: 17,
    featured: false,
    orientation: "landscape",
    isPracticeFile: true,
    credits: "Testing out my editing workflow on professional RAW practice files! 🎨✨\n\nCREDITS:\nFree RAW practice files provided by James Reader:\nInstagram: @james.reader - (https://www.instagram.com/james.reader)\nWebsite: (https://www.jamesreader.uk/raw-files)\nYouTube: (https://www.youtube.com/jamesreader)\n\n#photoediting #colorgrade #postprocessing #lightroom #creativeediting",
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-18",
    title: "Landscape Edit 3",
    category: "landscapes",
    src: img_landscapes_18,
    alt: "Landscape Edit 3 - photo by photo.pichi.ra",
    description: "Testing out dynamic range and color grading on high-grade practice RAW files.",
    location: "RAW Practice File",
    date: "2026",
    order: 18,
    featured: false,
    orientation: "landscape",
    isPracticeFile: true,
    credits: "Testing out my editing workflow on professional RAW practice files! 🎨✨\n\nCREDITS:\nFree RAW practice files provided by James Reader:\nInstagram: @james.reader - (https://www.instagram.com/james.reader)\nWebsite: (https://www.jamesreader.uk/raw-files)\nYouTube: (https://www.youtube.com/jamesreader)\n\n#photoediting #colorgrade #postprocessing #lightroom #creativeediting",
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-19",
    title: "Landscape Edit 91",
    category: "landscapes",
    src: img_landscapes_19,
    alt: "Landscape Edit 91 - photo by photo.pichi.ra",
    description: "Testing out dynamic range and color grading on high-grade practice RAW files.",
    location: "RAW Practice File",
    date: "2026",
    order: 19,
    featured: false,
    orientation: "landscape",
    isPracticeFile: true,
    credits: "Testing out my editing workflow on professional RAW practice files! 🎨✨\n\nCREDITS:\nFree RAW practice files provided by James Reader:\nInstagram: @james.reader - (https://www.instagram.com/james.reader)\nWebsite: (https://www.jamesreader.uk/raw-files)\nYouTube: (https://www.youtube.com/jamesreader)\n\n#photoediting #colorgrade #postprocessing #lightroom #creativeediting",
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-20",
    title: "Landscape Edit 11",
    category: "landscapes",
    src: img_landscapes_20,
    alt: "Landscape Edit 11 - photo by photo.pichi.ra",
    description: "Testing out dynamic range and color grading on high-grade practice RAW files.",
    location: "RAW Practice File",
    date: "2026",
    order: 20,
    featured: false,
    orientation: "portrait",
    isPracticeFile: true,
    credits: "Testing out my editing workflow on professional RAW practice files! 🎨✨\n\nCREDITS:\nFree RAW practice files provided by James Reader:\nInstagram: @james.reader - (https://www.instagram.com/james.reader)\nWebsite: (https://www.jamesreader.uk/raw-files)\nYouTube: (https://www.youtube.com/jamesreader)\n\n#photoediting #colorgrade #postprocessing #lightroom #creativeediting",
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-21",
    title: "Sunrise in Alleppey",
    category: "landscapes",
    src: img_landscapes_21,
    alt: "Sunrise in Alleppey - photo by photo.pichi.ra",
    description: "Woke up early to catch the morning sun coming over the backwaters. One of my favorite memories from Alleppey.",
    location: "Alleppey Backwaters, Kerala",
    date: "2026",
    order: 21,
    featured: true,
    orientation: "landscape",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-22",
    title: "Happiness in Small Things",
    category: "landscapes",
    src: img_landscapes_22,
    alt: "Happiness in Small Things - photo by photo.pichi.ra",
    description: "Fresh mountain water rushing over rocks on a cool morning hike. Simple things bring the biggest smiles.",
    location: "Mountain Cascades",
    date: "2026",
    order: 22,
    featured: true,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: "https://www.instagram.com/photo.pichi.ra/p/DaxQAGrpRCS/"
  },
  {
    id: "photo-wildlife-23",
    title: "Outdoor View 23",
    category: "wildlife",
    src: img_wildlife_23,
    alt: "Outdoor View 23 - photo by photo.pichi.ra",
    description: "A quiet outdoor view from one of my weekend photo walks.",
    location: "",
    date: "2026",
    order: 23,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-wildlife-24",
    title: "Feel The Elegance",
    category: "birds",
    src: img_wildlife_24,
    alt: "Feel The Elegance - photo by photo.pichi.ra",
    description: "Caught a quiet moment of this bird resting on a branch before flying away.",
    location: "Forest Edge",
    date: "2026",
    order: 24,
    featured: true,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: "https://www.instagram.com/photo.pichi.ra/p/DffW7gVztWB/"
  },
  {
    id: "photo-wildlife-25",
    title: "White • The Colour of Peace",
    category: "birds",
    src: img_wildlife_25,
    alt: "White • The Colour of Peace - photo by photo.pichi.ra",
    description: "Found this crane standing completely still in shallow wetland water, watching for fish.",
    location: "Wetland Sanctuary",
    date: "2026",
    order: 25,
    featured: true,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: "https://www.instagram.com/photo.pichi.ra/p/DfpjjiozHsg/"
  },
  {
    id: "photo-wildlife-26",
    title: "Ready for a Swim",
    category: "wildlife",
    src: img_wildlife_26,
    alt: "Ready for a Swim - photo by photo.pichi.ra",
    description: "A duck gliding peacefully across the water early in the morning.",
    location: "Lakeside",
    date: "2026",
    order: 26,
    featured: true,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: "https://www.instagram.com/photo.pichi.ra/p/DfhP3kqOcri/"
  },
  {
    id: "photo-wildlife-27",
    title: "The Humans of Mountains",
    category: "wildlife",
    src: img_wildlife_27,
    alt: "The Humans of Mountains - photo by photo.pichi.ra",
    description: "Saw this mountain goat walking along rocky steep slopes like it was everyday ground.",
    location: "High Slopes",
    date: "2026",
    order: 27,
    featured: true,
    orientation: "square",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: "https://www.instagram.com/photo.pichi.ra/p/DfCgigwuwDf/"
  },
  {
    id: "photo-nature-28",
    title: "Sunlit Leaves",
    category: "nature",
    src: img_nature_28,
    alt: "Sunlit Leaves - photo by photo.pichi.ra",
    description: "Little details and green leaves you notice when you take your time walking outside.",
    location: "",
    date: "2026",
    order: 28,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-nature-29",
    title: "Green Texture 29",
    category: "nature",
    src: img_nature_29,
    alt: "Green Texture 29 - photo by photo.pichi.ra",
    description: "Little details and green leaves you notice when you take your time walking outside.",
    location: "",
    date: "2026",
    order: 29,
    featured: false,
    orientation: "landscape",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-nature-30",
    title: "Green Texture 30",
    category: "nature",
    src: img_nature_30,
    alt: "Green Texture 30 - photo by photo.pichi.ra",
    description: "Little details and green leaves you notice when you take your time walking outside.",
    location: "",
    date: "2026",
    order: 30,
    featured: false,
    orientation: "square",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-nature-31",
    title: "Sunlit Leaves",
    category: "nature",
    src: img_nature_31,
    alt: "Sunlit Leaves - photo by photo.pichi.ra",
    description: "Little details and green leaves you notice when you take your time walking outside.",
    location: "",
    date: "2026",
    order: 31,
    featured: false,
    orientation: "landscape",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-portrait-32",
    title: "Portrait Color Grade II",
    category: "portrait",
    src: img_portrait_32,
    alt: "Portrait Color Grade II - photo by photo.pichi.ra",
    description: "Practicing skin tones and natural contrast curves on free RAW practice files.",
    location: "RAW Practice File",
    date: "2026",
    order: 32,
    featured: false,
    orientation: "portrait",
    isPracticeFile: true,
    credits: "Testing out my editing workflow on professional RAW practice files! 🎨✨\n\nCREDITS:\nFree RAW practice files provided by James Reader:\nInstagram: @james.reader - (https://www.instagram.com/james.reader)\nWebsite: (https://www.jamesreader.uk/raw-files)\nYouTube: (https://www.youtube.com/jamesreader)\n\n#photoediting #colorgrade #postprocessing #lightroom #creativeediting",
    instagramUrl: ""
  },
  {
    id: "photo-portrait-33",
    title: "Portrait Color Grade I",
    category: "portrait",
    src: img_portrait_33,
    alt: "Portrait Color Grade I - photo by photo.pichi.ra",
    description: "Practicing skin tones and natural contrast curves on free RAW practice files.",
    location: "RAW Practice File",
    date: "2026",
    order: 33,
    featured: false,
    orientation: "landscape",
    isPracticeFile: true,
    credits: "Testing out my editing workflow on professional RAW practice files! 🎨✨\n\nCREDITS:\nFree RAW practice files provided by James Reader:\nInstagram: @james.reader - (https://www.instagram.com/james.reader)\nWebsite: (https://www.jamesreader.uk/raw-files)\nYouTube: (https://www.youtube.com/jamesreader)\n\n#photoediting #colorgrade #postprocessing #lightroom #creativeediting",
    instagramUrl: ""
  },
  {
    id: "photo-portrait-34",
    title: "Behind the Lens",
    category: "portrait",
    src: img_portrait_34,
    alt: "Behind the Lens - photo by photo.pichi.ra",
    description: "That is me out on a shoot with a rented camera body! Still learning and having fun with every trip.",
    location: "Field Shoot",
    date: "2026",
    order: 34,
    featured: true,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-portrait-35",
    title: "Portrait of Somu",
    category: "portrait",
    src: img_portrait_35,
    alt: "Portrait of Somu - photo by photo.pichi.ra",
    description: "A fun, natural portrait of Somu taken in soft afternoon light.",
    location: "Outdoor Session",
    date: "2026",
    order: 35,
    featured: true,
    orientation: "landscape",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-36",
    title: "Gentle Hues",
    category: "creative",
    src: img_creative_36,
    alt: "Gentle Hues - photo by photo.pichi.ra",
    description: "Having fun experimenting with shadows, candles, and warm tones in Lightroom.",
    location: "",
    date: "2026",
    order: 36,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-37",
    title: "Amber Light",
    category: "creative",
    src: img_creative_37,
    alt: "Amber Light - photo by photo.pichi.ra",
    description: "Having fun experimenting with shadows, candles, and warm tones in Lightroom.",
    location: "",
    date: "2026",
    order: 37,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-38",
    title: "Quiet Room Glow",
    category: "creative",
    src: img_creative_38,
    alt: "Quiet Room Glow - photo by photo.pichi.ra",
    description: "Having fun experimenting with shadows, candles, and warm tones in Lightroom.",
    location: "",
    date: "2026",
    order: 38,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-39",
    title: "Silhouette",
    category: "creative",
    src: img_creative_39,
    alt: "Silhouette - photo by photo.pichi.ra",
    description: "Having fun experimenting with shadows, candles, and warm tones in Lightroom.",
    location: "",
    date: "2026",
    order: 39,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-40",
    title: "Warmth of Fire",
    category: "creative",
    src: img_creative_40,
    alt: "Warmth of Fire - photo by photo.pichi.ra",
    description: "Having fun experimenting with shadows, candles, and warm tones in Lightroom.",
    location: "",
    date: "2026",
    order: 40,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-41",
    title: "Light & Shadow",
    category: "creative",
    src: img_creative_41,
    alt: "Light & Shadow - photo by photo.pichi.ra",
    description: "Having fun experimenting with shadows, candles, and warm tones in Lightroom.",
    location: "",
    date: "2026",
    order: 41,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-42",
    title: "Golden Hour Glow",
    category: "creative",
    src: img_creative_42,
    alt: "Golden Hour Glow - photo by photo.pichi.ra",
    description: "Having fun experimenting with shadows, candles, and warm tones in Lightroom.",
    location: "",
    date: "2026",
    order: 42,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-43",
    title: "Night Mood",
    category: "creative",
    src: img_creative_43,
    alt: "Night Mood - photo by photo.pichi.ra",
    description: "Having fun experimenting with shadows, candles, and warm tones in Lightroom.",
    location: "",
    date: "2026",
    order: 43,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-44",
    title: "Soft Focus",
    category: "creative",
    src: img_creative_44,
    alt: "Soft Focus - photo by photo.pichi.ra",
    description: "Having fun experimenting with shadows, candles, and warm tones in Lightroom.",
    location: "",
    date: "2026",
    order: 44,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-45",
    title: "Candle Flame",
    category: "creative",
    src: img_creative_45,
    alt: "Candle Flame - photo by photo.pichi.ra",
    description: "Having fun experimenting with shadows, candles, and warm tones in Lightroom.",
    location: "",
    date: "2026",
    order: 45,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-46",
    title: "Foliage Shadows",
    category: "creative",
    src: img_creative_46,
    alt: "Foliage Shadows - photo by photo.pichi.ra",
    description: "Having fun experimenting with shadows, candles, and warm tones in Lightroom.",
    location: "",
    date: "2026",
    order: 46,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-47",
    title: "Filtered Sunlight",
    category: "creative",
    src: img_creative_47,
    alt: "Filtered Sunlight - photo by photo.pichi.ra",
    description: "Having fun experimenting with shadows, candles, and warm tones in Lightroom.",
    location: "",
    date: "2026",
    order: 47,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-48",
    title: "Evening Warmth",
    category: "creative",
    src: img_creative_48,
    alt: "Evening Warmth - photo by photo.pichi.ra",
    description: "Having fun experimenting with shadows, candles, and warm tones in Lightroom.",
    location: "",
    date: "2026",
    order: 48,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  }
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
