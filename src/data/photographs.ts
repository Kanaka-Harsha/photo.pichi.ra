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
  {
    id: "photo-landscapes-1",
    title: "Scenic Vista 1",
    category: "landscapes",
    src: img_landscapes_1,
    alt: "Scenic Vista 1 - photography by photo.pichi.ra",
    description: "Observing natural light, landscape lines, and changing outdoor conditions.",
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
    title: "Scenic Vista 2",
    category: "landscapes",
    src: img_landscapes_2,
    alt: "Scenic Vista 2 - photography by photo.pichi.ra",
    description: "Observing natural light, landscape lines, and changing outdoor conditions.",
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
    title: "Scenic Vista 3",
    category: "landscapes",
    src: img_landscapes_3,
    alt: "Scenic Vista 3 - photography by photo.pichi.ra",
    description: "Observing natural light, landscape lines, and changing outdoor conditions.",
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
    title: "Scenic Vista 4",
    category: "landscapes",
    src: img_landscapes_4,
    alt: "Scenic Vista 4 - photography by photo.pichi.ra",
    description: "Observing natural light, landscape lines, and changing outdoor conditions.",
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
    title: "Scenic Vista 5",
    category: "landscapes",
    src: img_landscapes_5,
    alt: "Scenic Vista 5 - photography by photo.pichi.ra",
    description: "Observing natural light, landscape lines, and changing outdoor conditions.",
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
    title: "Scenic Vista 6",
    category: "landscapes",
    src: img_landscapes_6,
    alt: "Scenic Vista 6 - photography by photo.pichi.ra",
    description: "Observing natural light, landscape lines, and changing outdoor conditions.",
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
    alt: "Every Splash Leaves Something - photography by photo.pichi.ra",
    description: "Every splash leaves something behind 🌊🪨. Coastal tides meeting the shoreline during evening golden hour.",
    location: "Coastal Shore",
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
    title: "Scenic Vista 8",
    category: "landscapes",
    src: img_landscapes_8,
    alt: "Scenic Vista 8 - photography by photo.pichi.ra",
    description: "Observing natural light, landscape lines, and changing outdoor conditions.",
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
    title: "Scenic Vista 9",
    category: "landscapes",
    src: img_landscapes_9,
    alt: "Scenic Vista 9 - photography by photo.pichi.ra",
    description: "Observing natural light, landscape lines, and changing outdoor conditions.",
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
    title: "Scenic Vista 10",
    category: "landscapes",
    src: img_landscapes_10,
    alt: "Scenic Vista 10 - photography by photo.pichi.ra",
    description: "Observing natural light, landscape lines, and changing outdoor conditions.",
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
    title: "Scenic Vista 11",
    category: "landscapes",
    src: img_landscapes_11,
    alt: "Scenic Vista 11 - photography by photo.pichi.ra",
    description: "Observing natural light, landscape lines, and changing outdoor conditions.",
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
    title: "Scenic Vista 12",
    category: "landscapes",
    src: img_landscapes_12,
    alt: "Scenic Vista 12 - photography by photo.pichi.ra",
    description: "Observing natural light, landscape lines, and changing outdoor conditions.",
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
    title: "Scenic Vista 13",
    category: "landscapes",
    src: img_landscapes_13,
    alt: "Scenic Vista 13 - photography by photo.pichi.ra",
    description: "Observing natural light, landscape lines, and changing outdoor conditions.",
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
    title: "Scenic Vista 14",
    category: "landscapes",
    src: img_landscapes_14,
    alt: "Scenic Vista 14 - photography by photo.pichi.ra",
    description: "Observing natural light, landscape lines, and changing outdoor conditions.",
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
    title: "Scenic Vista 15",
    category: "landscapes",
    src: img_landscapes_15,
    alt: "Scenic Vista 15 - photography by photo.pichi.ra",
    description: "Observing natural light, landscape lines, and changing outdoor conditions.",
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
    title: "Closer To Peace — Munnar",
    category: "landscapes",
    src: img_landscapes_16,
    alt: "Closer To Peace — Munnar - photography by photo.pichi.ra",
    description: "Away from chaos, closer to peace 🕊️ 🏔️ 🌫️. Misty green hills stretching across rolling tea plantations.",
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
    title: "Highland Vista Edit 2",
    category: "landscapes",
    src: img_landscapes_17,
    alt: "Highland Vista Edit 2 - photography by photo.pichi.ra",
    description: "Atmospheric grading, dynamic range handling, and tone curve practice.",
    location: "Practice RAW File",
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
    title: "Highland Vista Edit 3",
    category: "landscapes",
    src: img_landscapes_18,
    alt: "Highland Vista Edit 3 - photography by photo.pichi.ra",
    description: "Atmospheric grading, dynamic range handling, and tone curve practice.",
    location: "Practice RAW File",
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
    title: "Highland Vista Edit 91",
    category: "landscapes",
    src: img_landscapes_19,
    alt: "Highland Vista Edit 91 - photography by photo.pichi.ra",
    description: "Atmospheric grading, dynamic range handling, and tone curve practice.",
    location: "Practice RAW File",
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
    title: "Highland Vista Edit 11",
    category: "landscapes",
    src: img_landscapes_20,
    alt: "Highland Vista Edit 11 - photography by photo.pichi.ra",
    description: "Atmospheric grading, dynamic range handling, and tone curve practice.",
    location: "Practice RAW File",
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
    title: "Golden Sunrise over Alleppey",
    category: "landscapes",
    src: img_landscapes_21,
    alt: "Golden Sunrise over Alleppey - photography by photo.pichi.ra",
    description: "Yet another period of the golden hours. Morning light reflecting across the peaceful waters.",
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
    title: "Happiness In Small Things",
    category: "landscapes",
    src: img_landscapes_22,
    alt: "Happiness In Small Things - photography by photo.pichi.ra",
    description: "The biggest happiness lies in the smallest things 🌊🪨🏔️. Rushing mountain waters cascading through natural rock.",
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
    title: "Scenic Vista 23",
    category: "wildlife",
    src: img_wildlife_23,
    alt: "Scenic Vista 23 - photography by photo.pichi.ra",
    description: "Observing natural light, landscape lines, and changing outdoor conditions.",
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
    alt: "Feel The Elegance - photography by photo.pichi.ra",
    description: "Feel The Elegance... 🕊️ 🍃. Subtle grace caught in an intimate wildlife moment.",
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
    title: "White • The Colour Of Peace",
    category: "birds",
    src: img_wildlife_25,
    alt: "White • The Colour Of Peace - photography by photo.pichi.ra",
    description: "White • The Colour Of Peace🤍🌿. A solitary crane poised in quiet wetlands.",
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
    title: "Ready For A Swim",
    category: "wildlife",
    src: img_wildlife_26,
    alt: "Ready For A Swim - photography by photo.pichi.ra",
    description: "Ready For A Swim 🦆 🌊... Calm ripples forming as water glides by.",
    location: "Lake Shore",
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
    title: "The Humans Of Mountains",
    category: "wildlife",
    src: img_wildlife_27,
    alt: "The Humans Of Mountains - photography by photo.pichi.ra",
    description: "The Humans Of Mountains 🦌 🏔️. Resilient wildlife navigating steep rocky terrain.",
    location: "High Altitude Slopes",
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
    title: "Verdant Canopy",
    category: "nature",
    src: img_nature_28,
    alt: "Verdant Canopy - photography by photo.pichi.ra",
    description: "Quiet organic textures and details that often go unnoticed on the forest floor.",
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
    title: "Nature Texture 29",
    category: "nature",
    src: img_nature_29,
    alt: "Nature Texture 29 - photography by photo.pichi.ra",
    description: "Quiet organic textures and details that often go unnoticed on the forest floor.",
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
    title: "Nature Texture 30",
    category: "nature",
    src: img_nature_30,
    alt: "Nature Texture 30 - photography by photo.pichi.ra",
    description: "Quiet organic textures and details that often go unnoticed on the forest floor.",
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
    title: "Verdant Canopy",
    category: "nature",
    src: img_nature_31,
    alt: "Verdant Canopy - photography by photo.pichi.ra",
    description: "Quiet organic textures and details that often go unnoticed on the forest floor.",
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
    title: "Editorial Portrait Study II",
    category: "portrait",
    src: img_portrait_32,
    alt: "Editorial Portrait Study II - photography by photo.pichi.ra",
    description: "Color grading and skin tone refinement practiced on professional RAW files.",
    location: "Practice RAW File",
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
    title: "Editorial Portrait Study I",
    category: "portrait",
    src: img_portrait_33,
    alt: "Editorial Portrait Study I - photography by photo.pichi.ra",
    description: "Color grading and skin tone refinement practiced on professional RAW files.",
    location: "Practice RAW File",
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
    title: "Behind the Lens — Self Portrait",
    category: "portrait",
    src: img_portrait_34,
    alt: "Behind the Lens — Self Portrait - photography by photo.pichi.ra",
    description: "The person behind photo.pichi.ra. Exploring the outdoors, renting camera bodies, and finding quiet moments in nature.",
    location: "Field Studio",
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
    alt: "Portrait of Somu - photography by photo.pichi.ra",
    description: "An authentic, character-rich portrait study illuminated by natural ambient light.",
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
    title: "Fading Dusk",
    category: "creative",
    src: img_creative_36,
    alt: "Fading Dusk - photography by photo.pichi.ra",
    description: "Exploring color mood, contrast shapes, and digital darkroom techniques in Lightroom.",
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
    title: "Chasing Amber",
    category: "creative",
    src: img_creative_37,
    alt: "Chasing Amber - photography by photo.pichi.ra",
    description: "Exploring color mood, contrast shapes, and digital darkroom techniques in Lightroom.",
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
    title: "Quiet Glow",
    category: "creative",
    src: img_creative_38,
    alt: "Quiet Glow - photography by photo.pichi.ra",
    description: "Exploring color mood, contrast shapes, and digital darkroom techniques in Lightroom.",
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
    title: "Botanical Silhouette",
    category: "creative",
    src: img_creative_39,
    alt: "Botanical Silhouette - photography by photo.pichi.ra",
    description: "Exploring color mood, contrast shapes, and digital darkroom techniques in Lightroom.",
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
    title: "Warmth of Ember",
    category: "creative",
    src: img_creative_40,
    alt: "Warmth of Ember - photography by photo.pichi.ra",
    description: "Exploring color mood, contrast shapes, and digital darkroom techniques in Lightroom.",
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
    title: "Shadow & Form",
    category: "creative",
    src: img_creative_41,
    alt: "Shadow & Form - photography by photo.pichi.ra",
    description: "Exploring color mood, contrast shapes, and digital darkroom techniques in Lightroom.",
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
    title: "Golden Radiance",
    category: "creative",
    src: img_creative_42,
    alt: "Golden Radiance - photography by photo.pichi.ra",
    description: "Exploring color mood, contrast shapes, and digital darkroom techniques in Lightroom.",
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
    title: "Nocturne Study",
    category: "creative",
    src: img_creative_43,
    alt: "Nocturne Study - photography by photo.pichi.ra",
    description: "Exploring color mood, contrast shapes, and digital darkroom techniques in Lightroom.",
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
    title: "Intimate Focus",
    category: "creative",
    src: img_creative_44,
    alt: "Intimate Focus - photography by photo.pichi.ra",
    description: "Exploring color mood, contrast shapes, and digital darkroom techniques in Lightroom.",
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
    title: "Texture & Tone",
    category: "creative",
    src: img_creative_45,
    alt: "Texture & Tone - photography by photo.pichi.ra",
    description: "Exploring color mood, contrast shapes, and digital darkroom techniques in Lightroom.",
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
    title: "Abstract Foliage",
    category: "creative",
    src: img_creative_46,
    alt: "Abstract Foliage - photography by photo.pichi.ra",
    description: "Exploring color mood, contrast shapes, and digital darkroom techniques in Lightroom.",
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
    title: "Sunlight Diffusion",
    category: "creative",
    src: img_creative_47,
    alt: "Sunlight Diffusion - photography by photo.pichi.ra",
    description: "Exploring color mood, contrast shapes, and digital darkroom techniques in Lightroom.",
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
    title: "Soft Contours",
    category: "creative",
    src: img_creative_48,
    alt: "Soft Contours - photography by photo.pichi.ra",
    description: "Exploring color mood, contrast shapes, and digital darkroom techniques in Lightroom.",
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
