import type { Offer } from '../types/types';

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Title 1',
    category: 'bisque',
    type:  'honey-cake',
    price: 300,
    previewImage: 'img/content/chocolate-cake.jpg',
    previewImageWebp: 'img/content/chocolate-cake.webp',
    isFavorite: true,
    isNew: false,
  },
  {
    id: '2',
    title: 'Title 2',
    category: 'cheesecake',
    type:  'new-york',
    price: 500,
    previewImage: 'img/content/blueberry-cake.jpg',
    previewImageWebp: 'img/content/blueberry-cake.webp',
    isFavorite: false,
    isNew: true,
  },
  {
    id: '3',
    title: 'Title 3',
    category: 'shortbread',
    type:  'lemon',
    price: 450,
    previewImage: 'img/content/cheesecake-vegetarian.jpg',
    previewImageWebp: 'img/content/cheesecake-vegetarian.webp',
    isFavorite: false,
    isNew: false,
  },
  {
    id: '4',
    title: 'Title 4',
    category: 'shortbread',
    type:  'lemon',
    price: 450,
    previewImage: 'img/content/cheesecake-vegetarian.jpg',
    previewImageWebp: 'img/content/cheesecake-vegetarian.webp',
    isFavorite: false,
    isNew: false,
  }
];
