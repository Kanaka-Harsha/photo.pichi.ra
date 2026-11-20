import type { Photograph } from '../types/photograph';

// Asset Imports
import heroBg from '../assets/photographs/landscapes/Sunrise-Alleppy.jpg';
import photographerPortrait from '../assets/photographs/Portrait/POR-Mine-1.jpg';
import img_landscapes_1 from '../assets/photographs/landscapes/1000260705_1_.jpeg';
import img_landscapes_2 from '../assets/photographs/landscapes/552d7b52-7458-4b3a-81c1-3e9f80d95d90-copied-media_2.jpg';
import img_landscapes_3 from '../assets/photographs/landscapes/6b4cc5c9-990a-442a-a269-820d298f02b4-copied-media_2.jpg';
import img_landscapes_4 from '../assets/photographs/landscapes/backwaters-1.jpg';
import img_landscapes_5 from '../assets/photographs/landscapes/bb187f49-5454-468b-8813-6e566b2c4ea6-copied-media_2.jpg';
import img_landscapes_6 from '../assets/photographs/landscapes/Beach-Landscape-1.jpg';
import img_landscapes_7 from '../assets/photographs/landscapes/dad45165-4c57-4457-b21b-e15378cbba63-copied-media_2.jpg';
import img_landscapes_8 from '../assets/photographs/landscapes/dda6afbc-5822-485c-87ee-f9d3b7eb0f57-copied-media_2.jpg';
import img_landscapes_9 from '../assets/photographs/landscapes/House-1.jpg';
import img_landscapes_10 from '../assets/photographs/landscapes/image_23_.jpeg';
import img_landscapes_11 from '../assets/photographs/landscapes/Landscape-1.jpg';
import img_landscapes_12 from '../assets/photographs/landscapes/LS-5-1.jpg';
import img_landscapes_13 from '../assets/photographs/landscapes/LS-6-1.jpg';
import img_landscapes_14 from '../assets/photographs/landscapes/munnar-Landscape-1.jpg';
import img_landscapes_15 from '../assets/photographs/landscapes/NM-Landscape-2.jpg';
import img_landscapes_16 from '../assets/photographs/landscapes/NM-Landscape-3.jpg';
import img_landscapes_17 from '../assets/photographs/landscapes/NM-landscape-9-1.jpg';
import img_landscapes_18 from '../assets/photographs/landscapes/NM-Landscape_-_1-1.jpg';
import img_landscapes_19 from '../assets/photographs/landscapes/Sunrise-Alleppy.jpg';
import img_landscapes_20 from '../assets/photographs/landscapes/sunrise-ktdc-1.jpg';
import img_landscapes_21 from '../assets/photographs/landscapes/waterfall-1.jpg';
import img_wildlife_22 from '../assets/photographs/wildlife/1000259737_1_.jpeg';
import img_wildlife_23 from '../assets/photographs/wildlife/Bird1.jpg';
import img_wildlife_24 from '../assets/photographs/wildlife/CCrane-1.jpg';
import img_wildlife_25 from '../assets/photographs/wildlife/crane-2-1.jpg';
import img_wildlife_26 from '../assets/photographs/wildlife/Duck1.jpg';
import img_wildlife_27 from '../assets/photographs/wildlife/Goat-1.jpg';
import img_nature_28 from '../assets/photographs/nature/flower-1-1.jpg';
import img_nature_29 from '../assets/photographs/nature/Flower-10-1.jpg';
import img_nature_30 from '../assets/photographs/nature/flower-2-1.jpg';
import img_nature_31 from '../assets/photographs/nature/flower-3-1.jpg';
import img_nature_32 from '../assets/photographs/nature/flower-4-1.jpg';
import img_nature_33 from '../assets/photographs/nature/flower-5-1.jpg';
import img_nature_34 from '../assets/photographs/nature/flower-6-1.jpg';
import img_nature_35 from '../assets/photographs/nature/flower-7-1.jpg';
import img_nature_36 from '../assets/photographs/nature/flower-8-1.jpg';
import img_nature_37 from '../assets/photographs/nature/Group-1.jpg';
import img_nature_38 from '../assets/photographs/nature/Img20JPG.jpg';
import img_nature_39 from '../assets/photographs/nature/Img21JPG.jpg';
import img_nature_40 from '../assets/photographs/nature/Nat-1-1.jpg';
import img_portrait_41 from '../assets/photographs/Portrait/kerela-beach-1.jpg';
import img_portrait_42 from '../assets/photographs/Portrait/NM-POR-2-1.jpg';
import img_portrait_43 from '../assets/photographs/Portrait/NM-Portrait-1.jpg';
import img_portrait_44 from '../assets/photographs/Portrait/POR-Mine-1.jpg';
import img_portrait_45 from '../assets/photographs/Portrait/somu-araku-1.jpg';
import img_portrait_46 from '../assets/photographs/Portrait/Somu-Portrait-1.jpg';
import img_creative_47 from '../assets/photographs/Creative/1000254838.jpeg';
import img_creative_48 from '../assets/photographs/Creative/205f6bed-2fc6-49a9-adce-ffff13cdcdfc-copied-media_2.jpg';
import img_creative_49 from '../assets/photographs/Creative/290a61a9-b508-4fed-aef4-b2ac862a2cfb-copied-media_2.jpg';
import img_creative_50 from '../assets/photographs/Creative/5c7ce3d5-5659-48e1-af2c-c562c91a1b02-copied-media_2.jpg';
import img_creative_51 from '../assets/photographs/Creative/682da52e-46ad-4a52-bc12-1a8f4ccaf33b-copied-media_2.jpg';
import img_creative_52 from '../assets/photographs/Creative/68fc7f6c-1c0f-49b4-b1f3-800f70f828e1-copied-media_2.jpg';
import img_creative_53 from '../assets/photographs/Creative/8cac098e-2f10-4bc2-a12c-96498ee3a050-copied-media_2.jpg';
import img_creative_54 from '../assets/photographs/Creative/94be63e0-33bb-4303-83a1-548f44c7660f-copied-media_2.jpg';
import img_creative_55 from '../assets/photographs/Creative/a8b63406-769d-4499-86ba-d0bcd5962dd4-copied-media_2.jpg';
import img_creative_56 from '../assets/photographs/Creative/allepy-boat-1-1.jpg';
import img_creative_57 from '../assets/photographs/Creative/bec64767-dd28-4070-8cf3-08b8c2921d87-copied-media_2.jpg';
import img_creative_58 from '../assets/photographs/Creative/bfc57b90-a225-4748-bb25-d1220aa392cc-copied-media_2.jpg';
import img_creative_59 from '../assets/photographs/Creative/c0dc0cdc-7612-4a95-a7c8-c3b6e2422941-copied-media_2.jpg';
import img_creative_60 from '../assets/photographs/Creative/d03b273e-1129-4af7-a833-4d80910b7715-copied-media_2.jpg';
import img_creative_61 from '../assets/photographs/Creative/mirror-1.jpg';
import img_creative_62 from '../assets/photographs/Creative/restaurant-1.jpg';

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
    title: "Open Skies",
    category: "landscapes",
    src: img_landscapes_1,
    alt: "Open Skies - photo by photo.pichi.ra",
    description: "A wide open frame from a morning drive. The sky was doing something nice and I just stopped to click.",
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
    title: "Quiet Roads",
    category: "landscapes",
    src: img_landscapes_2,
    alt: "Quiet Roads - photo by photo.pichi.ra",
    description: "Empty road, cool breeze. Some of my best clicks happen when I am just wandering without a plan.",
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
    title: "Evening by the Water",
    category: "landscapes",
    src: img_landscapes_3,
    alt: "Evening by the Water - photo by photo.pichi.ra",
    description: "Sat by the water as the light faded. These slow evening moments are my favorite time to shoot.",
    location: "",
    date: "2026",
    order: 3,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-4",
    title: "Echoes of the Backwaters",
    category: "landscapes",
    src: img_landscapes_4,
    alt: "Echoes of the Backwaters - photo by photo.pichi.ra",
    description: "Gliding through the peaceful backwater canals under deep blue skies and towering summer clouds.",
    location: "Alleppey Backwaters, Kerala",
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
    title: "Wide Open",
    category: "landscapes",
    src: img_landscapes_5,
    alt: "Wide Open - photo by photo.pichi.ra",
    description: "Big sky, big mood. I love how landscape shots make everything feel peaceful.",
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
    title: "Every Splash Leaves Something",
    category: "landscapes",
    src: img_landscapes_6,
    alt: "Every Splash Leaves Something - photo by photo.pichi.ra",
    description: "Watching evening tides roll into the shore right as the sun started setting.",
    location: "Coastal Beach",
    date: "2026",
    order: 6,
    featured: true,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: "https://www.instagram.com/photo.pichi.ra/p/DazFXsop6S0/"
  },
  {
    id: "photo-landscapes-7",
    title: "Horizon Line",
    category: "landscapes",
    src: img_landscapes_7,
    alt: "Horizon Line - photo by photo.pichi.ra",
    description: "Standing at the edge and looking out. One of those shots that just felt right in the moment.",
    location: "",
    date: "2026",
    order: 7,
    featured: false,
    orientation: "landscape",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-8",
    title: "Last Light",
    category: "landscapes",
    src: img_landscapes_8,
    alt: "Last Light - photo by photo.pichi.ra",
    description: "Right before the sun fully set. That last bit of warm light is something I always chase.",
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
    title: "Life by the Water",
    category: "landscapes",
    src: img_landscapes_9,
    alt: "Life by the Water - photo by photo.pichi.ra",
    description: "A traditional home nestled right on the edge of the backwaters, surrounded by coconut palms and quiet morning ripples.",
    location: "Alleppey, Kerala",
    date: "2026",
    order: 9,
    featured: false,
    orientation: "landscape",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-10",
    title: "Morning Stretch",
    category: "landscapes",
    src: img_landscapes_10,
    alt: "Morning Stretch - photo by photo.pichi.ra",
    description: "Caught this on the way to somewhere else. Sometimes you have to stop the car and just click.",
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
    title: "Simple Landscape",
    category: "landscapes",
    src: img_landscapes_11,
    alt: "Simple Landscape - photo by photo.pichi.ra",
    description: "Nothing fancy — just a quiet landscape that I liked the feel of when I was out that day.",
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
    title: "Open Skies over Alleppey",
    category: "landscapes",
    src: img_landscapes_12,
    alt: "Open Skies over Alleppey - photo by photo.pichi.ra",
    description: "Vast open waterways lined with water hyacinths, watching thunderclouds slowly build over the afternoon horizon.",
    location: "Alleppey Backwaters, Kerala",
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
    title: "Monsoon Horizon",
    category: "landscapes",
    src: img_landscapes_13,
    alt: "Monsoon Horizon - photo by photo.pichi.ra",
    description: "A panoramic view across the water hyacinths and palm trees as monsoon clouds roll across the Kerala sky.",
    location: "Alleppey Backwaters, Kerala",
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
    title: "Misty Morning in Munnar",
    category: "landscapes",
    src: img_landscapes_14,
    alt: "Misty Morning in Munnar - photo by photo.pichi.ra",
    description: "Away from all the city noise. Just cold morning breeze, mist, and green tea hills as far as you can see.",
    location: "Munnar, Kerala",
    date: "2026",
    order: 14,
    featured: true,
    orientation: "landscape",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: "https://www.instagram.com/photo.pichi.ra/p/DfLshZmJYbd/"
  },
  {
    id: "photo-landscapes-15",
    title: "Landscape Edit 2",
    category: "landscapes",
    src: img_landscapes_15,
    alt: "Landscape Edit 2 - photo by photo.pichi.ra",
    description: "Testing out dynamic range and color grading on high-grade practice RAW files.",
    location: "RAW Practice File",
    date: "2026",
    order: 15,
    featured: false,
    orientation: "landscape",
    isPracticeFile: true,
    credits: "Testing out my editing workflow on professional RAW practice files! 🎨✨\n\nCREDITS:\nFree RAW practice files provided by James Reader:\nInstagram: @james.reader - (https://www.instagram.com/james.reader)\nWebsite: (https://www.jamesreader.uk/raw-files)\nYouTube: (https://www.youtube.com/jamesreader)\n\n#photoediting #colorgrade #postprocessing #lightroom #creativeediting",
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-16",
    title: "Landscape Edit 3",
    category: "landscapes",
    src: img_landscapes_16,
    alt: "Landscape Edit 3 - photo by photo.pichi.ra",
    description: "Testing out dynamic range and color grading on high-grade practice RAW files.",
    location: "RAW Practice File",
    date: "2026",
    order: 16,
    featured: false,
    orientation: "landscape",
    isPracticeFile: true,
    credits: "Testing out my editing workflow on professional RAW practice files! 🎨✨\n\nCREDITS:\nFree RAW practice files provided by James Reader:\nInstagram: @james.reader - (https://www.instagram.com/james.reader)\nWebsite: (https://www.jamesreader.uk/raw-files)\nYouTube: (https://www.youtube.com/jamesreader)\n\n#photoediting #colorgrade #postprocessing #lightroom #creativeediting",
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-17",
    title: "Landscape Edit 91",
    category: "landscapes",
    src: img_landscapes_17,
    alt: "Landscape Edit 91 - photo by photo.pichi.ra",
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
    title: "Landscape Edit 11",
    category: "landscapes",
    src: img_landscapes_18,
    alt: "Landscape Edit 11 - photo by photo.pichi.ra",
    description: "Testing out dynamic range and color grading on high-grade practice RAW files.",
    location: "RAW Practice File",
    date: "2026",
    order: 18,
    featured: false,
    orientation: "portrait",
    isPracticeFile: true,
    credits: "Testing out my editing workflow on professional RAW practice files! 🎨✨\n\nCREDITS:\nFree RAW practice files provided by James Reader:\nInstagram: @james.reader - (https://www.instagram.com/james.reader)\nWebsite: (https://www.jamesreader.uk/raw-files)\nYouTube: (https://www.youtube.com/jamesreader)\n\n#photoediting #colorgrade #postprocessing #lightroom #creativeediting",
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-19",
    title: "Sunrise in Alleppey",
    category: "landscapes",
    src: img_landscapes_19,
    alt: "Sunrise in Alleppey - photo by photo.pichi.ra",
    description: "Woke up early to catch the morning sun coming over the backwaters. One of my favorite memories from Alleppey.",
    location: "Alleppey Backwaters, Kerala",
    date: "2026",
    order: 19,
    featured: true,
    orientation: "landscape",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-20",
    title: "Morning Calm at KTDC",
    category: "landscapes",
    src: img_landscapes_20,
    alt: "Morning Calm at KTDC - photo by photo.pichi.ra",
    description: "A wooden swing hanging beneath the morning canopy, looking out at the peaceful water as the sun begins to break.",
    location: "KTDC Water Resort, Kerala",
    date: "2026",
    order: 20,
    featured: false,
    orientation: "landscape",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-landscapes-21",
    title: "Happiness in Small Things",
    category: "landscapes",
    src: img_landscapes_21,
    alt: "Happiness in Small Things - photo by photo.pichi.ra",
    description: "Fresh mountain water rushing over rocks on a cool morning hike. Simple things bring the biggest smiles.",
    location: "Mountain Cascades",
    date: "2026",
    order: 21,
    featured: true,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: "https://www.instagram.com/photo.pichi.ra/p/DaxQAGrpRCS/"
  },
  {
    id: "photo-wildlife-22",
    title: "Eyes Wide Open",
    category: "wildlife",
    src: img_wildlife_22,
    alt: "Eyes Wide Open - photo by photo.pichi.ra",
    description: "Spotted this one while out on a walk. It just sat there looking at me for a good few seconds before it moved. Those eyes though!",
    location: "Outdoor Walk",
    date: "2026",
    order: 22,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-wildlife-23",
    title: "Feel The Elegance",
    category: "birds",
    src: img_wildlife_23,
    alt: "Feel The Elegance - photo by photo.pichi.ra",
    description: "Caught a quiet moment of this bird resting on a branch before flying away.",
    location: "Forest Edge",
    date: "2026",
    order: 23,
    featured: true,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: "https://www.instagram.com/photo.pichi.ra/p/DffW7gVztWB/"
  },
  {
    id: "photo-wildlife-24",
    title: "White • The Colour of Peace",
    category: "wildlife",
    src: img_wildlife_24,
    alt: "White • The Colour of Peace - photo by photo.pichi.ra",
    description: "Found this crane standing completely still in shallow wetland water, watching for fish.",
    location: "Wetland Sanctuary",
    date: "2026",
    order: 24,
    featured: true,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: "https://www.instagram.com/photo.pichi.ra/p/DfpjjiozHsg/"
  },
  {
    id: "photo-wildlife-25",
    title: "Stillness Among the Lilies",
    category: "wildlife",
    src: img_wildlife_25,
    alt: "Stillness Among the Lilies - photo by photo.pichi.ra",
    description: "A white crane standing completely motionless among blooming water hyacinths, mirrored perfectly on the water's surface.",
    location: "Alleppey Wetland, Kerala",
    date: "2026",
    order: 25,
    featured: true,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
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
    title: "First Bloom",
    category: "nature",
    src: img_nature_28,
    alt: "First Bloom - photo by photo.pichi.ra",
    description: "Found this flower while walking through a garden early morning. Something about the light hitting it made me stop.",
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
    title: "Torch Ginger in Bloom",
    category: "nature",
    src: img_nature_29,
    alt: "Torch Ginger in Bloom - photo by photo.pichi.ra",
    description: "Vibrant red and pink Torch Ginger flowers spotted in the morning mist, glistening with fresh raindrops.",
    location: "Spice Garden, Kerala",
    date: "2026",
    order: 29,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-nature-30",
    title: "Quiet Petals",
    category: "nature",
    src: img_nature_30,
    alt: "Quiet Petals - photo by photo.pichi.ra",
    description: "I keep coming back to flowers because they just stand still for you. No patience required.",
    location: "",
    date: "2026",
    order: 30,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-nature-31",
    title: "Soft and Still",
    category: "nature",
    src: img_nature_31,
    alt: "Soft and Still - photo by photo.pichi.ra",
    description: "Took this during a slow walk. I love how flowers look with a slightly soft background.",
    location: "",
    date: "2026",
    order: 31,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-nature-32",
    title: "Full Bloom",
    category: "nature",
    src: img_nature_32,
    alt: "Full Bloom - photo by photo.pichi.ra",
    description: "Fully opened flower in bright light. Shot from a close angle and I think it really shows the detail.",
    location: "",
    date: "2026",
    order: 32,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-nature-33",
    title: "Morning Color",
    category: "nature",
    src: img_nature_33,
    alt: "Morning Color - photo by photo.pichi.ra",
    description: "Early morning light on a flower — this is the kind of shot that makes waking up early worth it.",
    location: "",
    date: "2026",
    order: 33,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-nature-34",
    title: "Petal Close-Up",
    category: "nature",
    src: img_nature_34,
    alt: "Petal Close-Up - photo by photo.pichi.ra",
    description: "Got really close on this one. Macro-style without a macro lens — just patience and a steady hand.",
    location: "",
    date: "2026",
    order: 34,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-nature-35",
    title: "Garden Find",
    category: "nature",
    src: img_nature_35,
    alt: "Garden Find - photo by photo.pichi.ra",
    description: "Just spotted this in someone's garden while passing by. Asked if I could click and they said yes!",
    location: "",
    date: "2026",
    order: 35,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-nature-36",
    title: "Last Light Bloom",
    category: "nature",
    src: img_nature_36,
    alt: "Last Light Bloom - photo by photo.pichi.ra",
    description: "Caught this one in the last bit of afternoon sun before it faded. Colors came out really rich.",
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
    id: "photo-nature-37",
    title: "Walk Through the Morning Mist",
    category: "nature",
    src: img_nature_37,
    alt: "Walk Through the Morning Mist - photo by photo.pichi.ra",
    description: "Walking down a cool forest trail wrapped in morning mountain mist, listening to birds and the quiet of the hills.",
    location: "Munnar Hills, Kerala",
    date: "2026",
    order: 37,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-nature-38",
    title: "Green and Quiet",
    category: "nature",
    src: img_nature_38,
    alt: "Green and Quiet - photo by photo.pichi.ra",
    description: "Green textures and soft light from a walk I took on a lazy Sunday afternoon.",
    location: "",
    date: "2026",
    order: 38,
    featured: false,
    orientation: "landscape",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-nature-39",
    title: "Forest Layers",
    category: "nature",
    src: img_nature_39,
    alt: "Forest Layers - photo by photo.pichi.ra",
    description: "Looking up through the trees. The layers of green and light is something I never get tired of.",
    location: "",
    date: "2026",
    order: 39,
    featured: false,
    orientation: "landscape",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-nature-40",
    title: "Nature Close",
    category: "nature",
    src: img_nature_40,
    alt: "Nature Close - photo by photo.pichi.ra",
    description: "A close-up shot from a nature trail. When you slow down and look properly, there is so much detail around you.",
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
    id: "photo-portrait-41",
    title: "A Walk by the Waves",
    category: "portrait",
    src: img_portrait_41,
    alt: "A Walk by the Waves - photo by photo.pichi.ra",
    description: "Two people sharing a quiet morning walk along the wide sandy shore with waves rolling in from the Arabian Sea.",
    location: "Coastal Beach, Kerala",
    date: "2026",
    order: 41,
    featured: true,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-portrait-42",
    title: "Portrait Color Grade II",
    category: "portrait",
    src: img_portrait_42,
    alt: "Portrait Color Grade II - photo by photo.pichi.ra",
    description: "Practicing skin tones and natural contrast curves on free RAW practice files.",
    location: "RAW Practice File",
    date: "2026",
    order: 42,
    featured: false,
    orientation: "portrait",
    isPracticeFile: true,
    credits: "Testing out my editing workflow on professional RAW practice files! 🎨✨\n\nCREDITS:\nFree RAW practice files provided by James Reader:\nInstagram: @james.reader - (https://www.instagram.com/james.reader)\nWebsite: (https://www.jamesreader.uk/raw-files)\nYouTube: (https://www.youtube.com/jamesreader)\n\n#photoediting #colorgrade #postprocessing #lightroom #creativeediting",
    instagramUrl: ""
  },
  {
    id: "photo-portrait-43",
    title: "Portrait Color Grade I",
    category: "portrait",
    src: img_portrait_43,
    alt: "Portrait Color Grade I - photo by photo.pichi.ra",
    description: "Practicing skin tones and natural contrast curves on free RAW practice files.",
    location: "RAW Practice File",
    date: "2026",
    order: 43,
    featured: false,
    orientation: "landscape",
    isPracticeFile: true,
    credits: "Testing out my editing workflow on professional RAW practice files! 🎨✨\n\nCREDITS:\nFree RAW practice files provided by James Reader:\nInstagram: @james.reader - (https://www.instagram.com/james.reader)\nWebsite: (https://www.jamesreader.uk/raw-files)\nYouTube: (https://www.youtube.com/jamesreader)\n\n#photoediting #colorgrade #postprocessing #lightroom #creativeediting",
    instagramUrl: ""
  },
  {
    id: "photo-portrait-44",
    title: "Behind the Lens",
    category: "portrait",
    src: img_portrait_44,
    alt: "Behind the Lens - photo by photo.pichi.ra",
    description: "That is me out on a shoot with a rented camera body! Still learning and having fun with every trip.",
    location: "Field Shoot",
    date: "2026",
    order: 44,
    featured: true,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-portrait-45",
    title: "Somu at Araku",
    category: "portrait",
    src: img_portrait_45,
    alt: "Somu at Araku - photo by photo.pichi.ra",
    description: "Clicked this one on our Araku Valley trip. Somu was just chilling and I sneaked a candid. Came out really well!",
    location: "Araku Valley",
    date: "2026",
    order: 45,
    featured: true,
    orientation: "square",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-portrait-46",
    title: "Portrait of Somu",
    category: "portrait",
    src: img_portrait_46,
    alt: "Portrait of Somu - photo by photo.pichi.ra",
    description: "A fun, natural portrait of Somu taken in soft afternoon light.",
    location: "Outdoor Session",
    date: "2026",
    order: 46,
    featured: true,
    orientation: "landscape",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-47",
    title: "Candle Glow",
    category: "creative",
    src: img_creative_47,
    alt: "Candle Glow - photo by photo.pichi.ra",
    description: "Was just messing around with a candle and my camera one evening. Loved how the warm light turned out in Lightroom.",
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
    title: "Amber Light",
    category: "creative",
    src: img_creative_48,
    alt: "Amber Light - photo by photo.pichi.ra",
    description: "Playing with shadows and warm amber tones — one of those late-evening experiments that actually worked out.",
    location: "",
    date: "2026",
    order: 48,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-49",
    title: "Warmth of Fire",
    category: "creative",
    src: img_creative_49,
    alt: "Warmth of Fire - photo by photo.pichi.ra",
    description: "Tried capturing fire tones in Lightroom. I think this one has a really cozy mood to it.",
    location: "",
    date: "2026",
    order: 49,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-50",
    title: "Soft Focus",
    category: "creative",
    src: img_creative_50,
    alt: "Soft Focus - photo by photo.pichi.ra",
    description: "Went a bit abstract with this one. Soft tones and dreamy focus was the vibe I was going for.",
    location: "",
    date: "2026",
    order: 50,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-51",
    title: "Foliage Shadows",
    category: "creative",
    src: img_creative_51,
    alt: "Foliage Shadows - photo by photo.pichi.ra",
    description: "The shadow patterns that fall on walls during afternoon light are seriously underrated.",
    location: "",
    date: "2026",
    order: 51,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-52",
    title: "Golden Hour Glow",
    category: "creative",
    src: img_creative_52,
    alt: "Golden Hour Glow - photo by photo.pichi.ra",
    description: "That brief golden window right before sunset. Tried to hold on to it in this edit.",
    location: "",
    date: "2026",
    order: 52,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-53",
    title: "Night Mood",
    category: "creative",
    src: img_creative_53,
    alt: "Night Mood - photo by photo.pichi.ra",
    description: "Low light, moody tones. I love seeing how much you can recover in a dark frame with the right edit.",
    location: "",
    date: "2026",
    order: 53,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-54",
    title: "Evening Warmth",
    category: "creative",
    src: img_creative_54,
    alt: "Evening Warmth - photo by photo.pichi.ra",
    description: "An evening shot with warm orange tones pushed up. It just feels like a weekend to me.",
    location: "",
    date: "2026",
    order: 54,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-55",
    title: "Light & Shadow",
    category: "creative",
    src: img_creative_55,
    alt: "Light & Shadow - photo by photo.pichi.ra",
    description: "Experimenting with contrast and shadows. Sometimes simple compositions end up being my favorites.",
    location: "",
    date: "2026",
    order: 55,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-56",
    title: "Still Water, Moving Boat",
    category: "creative",
    src: img_creative_56,
    alt: "Still Water, Moving Boat - photo by photo.pichi.ra",
    description: "One of those calm Alleppey backwater mornings. A wooden boat just sitting there in the stillness. I could have stayed all day.",
    location: "Alleppey Backwaters, Kerala",
    date: "2026",
    order: 56,
    featured: true,
    orientation: "landscape",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-57",
    title: "Gentle Hues",
    category: "creative",
    src: img_creative_57,
    alt: "Gentle Hues - photo by photo.pichi.ra",
    description: "Pastel-ish tones for a change. Tried something different and kind of liked how calm it looked.",
    location: "",
    date: "2026",
    order: 57,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-58",
    title: "Filtered Sunlight",
    category: "creative",
    src: img_creative_58,
    alt: "Filtered Sunlight - photo by photo.pichi.ra",
    description: "Light coming through leaves or a window — always looks so good with a soft edit on it.",
    location: "",
    date: "2026",
    order: 58,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-59",
    title: "Quiet Room Glow",
    category: "creative",
    src: img_creative_59,
    alt: "Quiet Room Glow - photo by photo.pichi.ra",
    description: "A still indoor frame with a warm glow. Sometimes the best shots happen right at home.",
    location: "",
    date: "2026",
    order: 59,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-60",
    title: "Silhouette",
    category: "creative",
    src: img_creative_60,
    alt: "Silhouette - photo by photo.pichi.ra",
    description: "Bold shape against a bright background. I always find silhouette edits satisfying to work on.",
    location: "",
    date: "2026",
    order: 60,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-61",
    title: "Reflections in the Rain",
    category: "creative",
    src: img_creative_61,
    alt: "Reflections in the Rain - photo by photo.pichi.ra",
    description: "Raindrops sliding down the window and mirror during a quiet night drive. I love how city lights catch the wet glass.",
    location: "Night Drive",
    date: "2026",
    order: 61,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  },
  {
    id: "photo-creative-62",
    title: "Neon Glow in the Rain",
    category: "creative",
    src: img_creative_62,
    alt: "Neon Glow in the Rain - photo by photo.pichi.ra",
    description: "Misty night in the hills. The vibrant restaurant signs glowing through a raindrop-streaked car windshield.",
    location: "Misty Highway",
    date: "2026",
    order: 62,
    featured: false,
    orientation: "portrait",
    isPracticeFile: false,
    credits: undefined,
    instagramUrl: ""
  }
];

export function getFeaturedPhotographs(): Photograph[] {
  // Pick the best featured photos by title — never show NM/practice files on the home page
  const preferredTitles = [
    'Misty Morning in Munnar',
    'Happiness in Small Things',
    'White • The Colour of Peace',
    'Ready for a Swim',
    'Every Splash Leaves Something',
    'Still Water, Moving Boat',
  ];

  const matched = preferredTitles
    .map(t => photographs.find(p => p.title === t))
    .filter((p): p is Photograph => Boolean(p));

  if (matched.length >= 4) return matched;

  // Fallback: featured, non-practice photos only
  return photographs
    .filter(p => p.featured && !p.isPracticeFile)
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
  // Preferred cover titles per category
  const preferredCovers: Record<string, string> = {
    portrait: 'Portrait of Somu',
    landscapes: 'Misty Morning in Munnar',
    wildlife: 'White • The Colour of Peace',
    nature: 'First Bloom',
    creative: 'Still Water, Moving Boat',
  };

  const preferred = preferredCovers[category];
  if (preferred) {
    const found = photographs.find(p => p.category === category && p.title === preferred);
    if (found) return found;
  }

  const matching = photographs.filter(p => p.category === category);
  return matching[0] || heroPhotograph;
}
