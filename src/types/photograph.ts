import type { ImageMetadata } from 'astro';

export type Category = 'all' | 'wildlife' | 'birds' | 'nature' | 'landscapes';

export interface Photograph {
  id: string;
  title: string;
  category: 'wildlife' | 'birds' | 'nature' | 'landscapes';
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
}

export interface CategoryInfo {
  slug: 'wildlife' | 'birds' | 'nature' | 'landscapes';
  name: string;
  tagline: string;
  description: string;
  coverImageId: string;
}

