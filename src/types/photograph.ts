import type { ImageMetadata } from 'astro';

export type Category = 'all' | 'wildlife' | 'birds' | 'nature' | 'landscapes' | 'creative' | 'portrait';

export interface Photograph {
  id: string;
  title: string;
  category: 'wildlife' | 'birds' | 'nature' | 'landscapes' | 'creative' | 'portrait';
  src: ImageMetadata;
  alt: string;
  description?: string;
  location?: string;
  date?: string;
  camera?: string;
  lens?: string;
  settings?: string;
  featured?: boolean;
  order: number;
  orientation?: 'landscape' | 'portrait' | 'square';
  isPracticeFile?: boolean;
  credits?: string;
  instagramUrl?: string;
}

export interface CategoryInfo {
  slug: 'wildlife' | 'birds' | 'nature' | 'landscapes' | 'creative' | 'portrait';
  name: string;
  tagline: string;
  description: string;
  coverImageId?: string;
}
