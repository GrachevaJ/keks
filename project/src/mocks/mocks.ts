import type { Comment } from '../types/types';


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
