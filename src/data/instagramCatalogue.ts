/**
 * photo.pichi.ra - Instagram Archive Catalogue (34 Posts)
 *
 * This catalogue stores all official captions, hashtags, visual descriptions,
 * and categories extracted from @photo.pichi.ra.
 *
 * When images are uploaded into src/assets/photographs/<category>/,
 * we can automatically match them against this registry or apply
 * AI visual analysis for non-Instagram frames.
 */

export interface InstagramPostMeta {
  postNumber: number;
  visualDescription: string;
  category: 'wildlife' | 'birds' | 'nature' | 'landscapes';
  title: string;
  caption: string;
  hashtags: string[];
  orientation: 'square' | 'portrait' | 'landscape';
  postUrl: string;
}

export const instagramPostsCatalogue: InstagramPostMeta[] = [
  {
    postNumber: 1,
    visualDescription: 'A close-up shot of green leaves backlit by bright sunlight with a soft focus.',
    category: 'nature',
    title: 'Ready To Fly',
    caption: 'Ready To Fly 🕊️ 🌿🚀',
    hashtags: ['#Photography', '#NaturePhotography', '#WildlifePhotography', '#LandscapePhotography', '#PhotographyJourney'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/Daw0POIpTLe/'
  },
  {
    postNumber: 2,
    visualDescription: 'A vibrant sunrise/sunset with a dramatic sky and golden hour lighting over the horizon.',
    category: 'landscapes',
    title: 'The Unbroken Promise',
    caption: 'The Unbroken Promise Of The 2',
    hashtags: ['#SunrisePhotography', '#SunsetPhotography', '#SunriseLovers', '#SunsetLovers', '#GoldenHour', '#SkyLovers', '#LandscapePhotography', '#DramaticSky', '#EarthPix', '#SonyAlpha'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/De9H8ypAauK/'
  },
  {
    postNumber: 3,
    visualDescription: 'A coastal golden hour scene reflecting the bright sun on the beach during low tide.',
    category: 'landscapes',
    title: 'Golden Hours Beach View',
    caption: 'Yet Another Period Of The Golden Hours 🌅 ☀️',
    hashtags: ['#sunrise', '#Photography', '#SkyLovers', '#beachvibes'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/DbDTob3pW8l/'
  },
  {
    postNumber: 4,
    visualDescription: 'A white egret standing gracefully in a natural wetland habitat.',
    category: 'birds',
    title: 'White Colour Of Peace',
    caption: 'White • The Colour Of Peace🤍🌿',
    hashtags: ['#WildlifePhotography', '#Egret', '#BirdPhotography', '#IndianWildlife', '#NaturePhotography'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/DfpjjiozHsg/'
  },
  {
    postNumber: 5,
    visualDescription: 'A duck swimming peacefully in a body of water with gentle ripples.',
    category: 'wildlife',
    title: 'Ready For A Swim',
    caption: 'Ready For A Swim 🦆 🌊...',
    hashtags: ['#WildlifePhotography', '#duck', '#photographers_of_india', '#art', '#sonyalpha'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/DfhP3kqOcri/'
  },
  {
    postNumber: 6,
    visualDescription: 'An elegant bird captured mid-flight or perched gracefully against an open background.',
    category: 'birds',
    title: 'Feel The Elegance',
    caption: 'Feel The Elegance... 🕊️ 🍃',
    hashtags: ['#birdphotography', '#readytofly', '#photographers_of_india', '#WildlifePhotography', '#elegance'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/DffW7gVztWB/'
  },
  {
    postNumber: 7,
    visualDescription: 'A macro shot of tiny red and green flowers blossoming in a garden.',
    category: 'nature',
    title: 'Hidden Beauty In Flowers',
    caption: 'Not every beautiful thing asks for attention 🍃✨',
    hashtags: ['#FlowerPhotography', '#GardenPhotography', '#NaturePhotography', '#TinyFlowers', '#HiddenBeauty', '#MacroPhotography', '#SonyAlpha'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/DfeIsKqu9gG/'
  },
  {
    postNumber: 8,
    visualDescription: 'A scenic landscape depicting serene backwaters surrounded by lush greenery.',
    category: 'landscapes',
    title: 'Age Is Just A Number',
    caption: 'Age is just a number 🥰',
    hashtags: ['#backwatersofkerala🌴🌊', '#oldage', '#beauty', '#photographers_of_india'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/Dfcgg-AAAO_/'
  },
  {
    postNumber: 9,
    visualDescription: 'A moody mountain landscape draped in thick fog and atmospheric mist.',
    category: 'landscapes',
    title: 'Journey Through The Mist',
    caption: 'A Journey Through The Must 🌫️🌫️',
    hashtags: ['#MistyMountains', '#MountainFog', '#LandscapePhotography', '#MoodyLandscape', '#TravelPhotography', '#SonyAlpha'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/DfYrrU6gVbC/'
  },
  {
    postNumber: 10,
    visualDescription: 'A close-up framing of a vibrant orange flower blooming outdoors.',
    category: 'nature',
    title: 'Vibrant Orange Blooms',
    caption: 'Vibrant Orange 🧡 🌹',
    hashtags: ['#FlowerPhotography', '#orange', '#flowers🌸', '#framing', '#vibrantcolors'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/DfVNOEoTqwa/'
  },
  {
    postNumber: 11,
    visualDescription: 'A peaceful house nestled in the mountains surrounded by trees and sweeping valley views.',
    category: 'landscapes',
    title: 'Escape To The Mountains',
    caption: 'Away From Chaos, Closer To Peace 🕊️ 🏔️ 🌫️ 🌴🌲',
    hashtags: ['#MountainPhotography', '#MountainViews', '#MountainEscape', '#PeacefulPlaces', '#IncredibleIndia', '#SonyAlpha'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/DfLshZmJYbd/'
  },
  {
    postNumber: 12,
    visualDescription: 'A macro composition highlighting tiny, delicate wildflowers nestled among green leaves.',
    category: 'nature',
    title: 'Small But Beautiful',
    caption: 'Small But Beautiful 🌸🌿🌱🪴',
    hashtags: ['#FlowerPhotography', '#TinyFlowers', '#MacroPhotography', '#NaturePhotography', '#SonyAlpha'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/DfJOHlmpY43/'
  },
  {
    postNumber: 13,
    visualDescription: 'Deer in a mountain habitat surrounded by natural foliage.',
    category: 'wildlife',
    title: 'The Humans Of Mountains',
    caption: 'The Humans Of Mountains 🦌 🏔️',
    hashtags: ['#WildlifePhotography', '#Wildlife', '#IndianWildlife', '#IncredibleIndia', '#WildlifeOfIndia', '#SonyAlpha'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/DfCgigwuwDf/'
  },
  {
    postNumber: 14,
    visualDescription: 'A boat gliding smoothly across the serene waters of a tropical backwater.',
    category: 'landscapes',
    title: 'Through The Backwaters',
    caption: 'Through The Backwaters....... 🚢 ⛵ 📸 🌊',
    hashtags: ['#KeralaBackwaters', '#BoatPhotography', '#KeralaTourism', '#GodsOwnCountry', '#LandscapePhotography', '#SonyAlpha'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/De_fcmVgNJw/'
  },
  {
    postNumber: 15,
    visualDescription: 'Bright tropical palm trees bathed in harsh midday sunlight.',
    category: 'nature',
    title: 'Bright Tropical Day',
    caption: '🌴🌴 🌞 🌴🌴',
    hashtags: ['#naturephotography', '#brightday', '#photoeveryday', '#lightphotography'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/DcJWw4gJRCO/'
  },
  {
    postNumber: 16,
    visualDescription: 'A scenic railway track stretching across an open landscape in India.',
    category: 'landscapes',
    title: 'Tracks Of India',
    caption: 'Tracks Of India',
    hashtags: ['#railwayphotography', '#indiaphotography', '#NatureAesthetic', '#snapseed'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/DbhVeyBor_p/'
  },
  {
    postNumber: 17,
    visualDescription: 'A delicate rose illuminated by a warm candle or indoor light.',
    category: 'nature',
    title: 'Light And Rose',
    caption: '🌹 🕯️',
    hashtags: ['#FlowerPhotography', '#light', '#naturelover', '#NatureAesthetic'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/DbTCZTGMbyy/'
  },
  {
    postNumber: 18,
    visualDescription: 'Festive decorative lighting glowing warmly during an Indian celebration.',
    category: 'nature',
    title: 'Lights Of Indian Festivities',
    caption: 'Lights Of Indian Festivities',
    hashtags: ['#festival', '#Photography', '#light', '#indiafestival'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/DbPmuPPsCaH/'
  },
  {
    postNumber: 19,
    visualDescription: 'Creative play of light and shadow on indoor room decorations.',
    category: 'nature',
    title: 'Feel The Warmth',
    caption: 'Feel The Warmth',
    hashtags: ['#LightAndShadow', '#Photography', '#decoration', '#warmth'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/DbPmhy6MnvM/'
  },
  {
    postNumber: 20,
    visualDescription: 'A vibrant contrast of lush green foliage against a deep blue sky.',
    category: 'nature',
    title: 'Green Plus Blue',
    caption: '💚 + 💙 = 💕',
    hashtags: ['#SkyLovers', '#naturephotography', '#naturelover'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/DbNXvNGJaqc/'
  },
  {
    postNumber: 21,
    visualDescription: 'An expansive, clear blue sky showing a wide and open horizon.',
    category: 'landscapes',
    title: 'The Unmeasured Vastness',
    caption: 'The Unmeasured Vastness',
    hashtags: ['#skyphotography', '#SkyLovers', '#bluesky'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/DbFp0OQJC5M/'
  },
  {
    postNumber: 22,
    visualDescription: 'Bright burning wood and embers radiating cozy fire warmth.',
    category: 'nature',
    title: 'Fire Inside Me',
    caption: 'As High As The Fire Inside Me 🔥🌡️',
    hashtags: ['#fire', '#firewood', '#warmth'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/DbBMok1pXIM/'
  },
  {
    postNumber: 23,
    visualDescription: 'A dramatic lightning bolt cutting across a stormy sky.',
    category: 'landscapes',
    title: 'Light Up The Darkness',
    caption: 'Ability To Light Up The Darkness',
    hashtags: ['#lighting', '#storm', '#beauty', '#light'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/DbI9Vcmsd2q/'
  },
  {
    postNumber: 24,
    visualDescription: 'Colorful blooming flowers showing the rich palette of nature.',
    category: 'nature',
    title: 'Colors Of Nature',
    caption: 'Colors Of Nature 🌿 🌺',
    hashtags: ['#naturephotography', '#flower', '#PhotographyJourney', '#storytellingphotography'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/Da8LP0vprG2/'
  },
  {
    postNumber: 25,
    visualDescription: 'A busy bee hard at work pollinating a blossoming flower.',
    category: 'wildlife',
    title: 'Little Worker Bee',
    caption: 'Work Hard Like This Little Guy 🐝💪.',
    hashtags: ['#MacroNature', '#Bee', '#FlowerPhotography', '#InsectPhotography', '#NatureDetails'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/Da7m4G4pTri/'
  },
  {
    postNumber: 26,
    visualDescription: 'A small, cute squirrel foraging outdoors.',
    category: 'wildlife',
    title: 'Small But Cute Squirrel',
    caption: 'Small But Cute 🐿️ 🥜',
    hashtags: ['#Squirrel', '#WildlifePhotography', '#NaturePhotography', '#Wildlife', '#NatureLovers'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/Da7RLB6p7GJ/'
  },
  {
    postNumber: 27,
    visualDescription: 'A gorgeous sunset sky with a promise of returning beauty tomorrow.',
    category: 'landscapes',
    title: "I'll Come Back Tomorrow",
    caption: 'Promise "I\'ll Come Back Tomorrow" 🌇.',
    hashtags: ['#SunsetPhotography', '#NaturePhotography', '#GoldenHour', '#SkyLovers'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/Da5Rs8ap297/'
  },
  {
    postNumber: 28,
    visualDescription: 'A peaceful morning landscape basking in golden hour sunlight.',
    category: 'landscapes',
    title: 'Early Mornings vs Golden Hours',
    caption: 'Early Mornings ❌ Golden Hours ✅',
    hashtags: ['#photography', '#naturephotography', '#wildlifephotography'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/DawtyR1pIRm/'
  },
  {
    postNumber: 29,
    visualDescription: 'A small snail resting near a coastal sandy beach and tide.',
    category: 'wildlife',
    title: 'A New Beginning',
    caption: 'A New Beginning 🐌 ⛱️ 🌊',
    hashtags: ['#photography', '#naturephotography', '#wildlifephotography', '#earthpix'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/Dawsa2nJw4F/'
  },
  {
    postNumber: 30,
    visualDescription: 'Atmospheric lighting casting a magical glow over natural leaves at night.',
    category: 'nature',
    title: 'Magic Light Of Nature',
    caption: 'The Magic Light Of Nature 🌿 🕯️',
    hashtags: ['#MoodyGrams', '#NightPhotography', '#LightAndShadow', '#NatureAesthetic'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/Da14V-HpREH/'
  },
  {
    postNumber: 31,
    visualDescription: 'Sun rays breaking through fluffy clouds over a wide landscape.',
    category: 'landscapes',
    title: 'Rays Of Love',
    caption: 'Rays That Spread Like Love🌄 ☀️ ☁️',
    hashtags: ['#NaturePhotography', '#cloudlovers', '#LandscapePhotography', '#EarthFocus'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/Da0ORQfp7Gs/'
  },
  {
    postNumber: 32,
    visualDescription: 'Sea waves crashing against coastal rocks with dynamic water splashes.',
    category: 'landscapes',
    title: 'Every Splash Leaves Something',
    caption: 'Every Splash Leaves Something Behind 🌊🪨',
    hashtags: ['#NaturePhotography', '#LandscapePhotography', '#NatureLovers', '#DiscoverEarth'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/DazFXsop6S0/'
  },
  {
    postNumber: 33,
    visualDescription: 'A majestic mountain waterfall cascading down rocky cliffs.',
    category: 'landscapes',
    title: 'Happiness In Small Things',
    caption: 'The Biggest Happiness Lies In The Smallest Things 🌊🪨🏔️',
    hashtags: ['#NaturePhotography', '#LandscapePhotography', '#NatureLovers', '#waterfalls', '#perspective'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/DaxQAGrpRCS/'
  },
  {
    postNumber: 34,
    visualDescription: 'A serene sunset framing silhouette trees and natural wilderness.',
    category: 'landscapes',
    title: "Nature's Sunset Portrait",
    caption: "Nature's Way Of Portraying The Sunset🌄🌿🌲",
    hashtags: ['#photography', '#naturephotography', '#wildlifephotography', '#landscapephotography'],
    orientation: 'square',
    postUrl: 'https://www.instagram.com/photo.pichi.ra/p/Daw6PjYJpq_/'
  }
];

