import type { Offer, Comment } from '../types/types';

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

export const reviews: Comment[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    isoDate: '2023-05-30T12:00:00.000Z',
    user: {
      name: 'Oliver',
      avatarUrl: 'img/content/review-1.jpg'
    },
    positive: 'Отличный сервис! Очень вкусный, сочный и яркий торт. Удобная коробка для транспортировки. Свежие фрукты и съедобный дизайн.',
    negative: 'Недостатков нет, обязательно будем заказывать и приходить в Кексик',
    rating: 5
  },
  {
    id: '6adod011-c28d-4121-82cd-e0b462kj5f00',
    isoDate: '2023-06-30T12:00:00.000Z',
    user: {
      name: 'Max',
      avatarUrl: 'img/content/review-2.jpg'
    },
    positive: '',
    negative: 'Не будем заказывать и приходить в Кексик',
    rating: 2
  },
  {
    id: '6af6f711-c23g-4121-8a7d-e0b462afgf00',
    isoDate: '2023-05-30T12:00:00.000Z',
    user: {
      name: 'Jack',
      avatarUrl: 'img/content/review-3.jpg'
    },
    positive: 'Отличный сервис! Очень сочный и яркий торт. Свежие фрукты и съедобный дизайн.',
    negative: 'Недостатков нет, обязательно будем заказывать и приходить в Кексик',
    rating: 4
  }
];
