import { Address, CategoryName, ToppingName } from './types/types';

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}
export enum AppRoute {
  Root = '/',
  Login = '/login',
  SignUp = '/sign-up',
  Favourites = '/favourites',
  Catalog = '/catalog',
  ProductPage = '/product-page'
}

export const STARS_COUNT = 5;

export const addresses: Address[] = [
  {
    id: 1,
    title: 'Кондитерская 1',
    address: 'Морской пр. 2А',
    position: {
      lat: 59.970969,
      lng: 30.316252,
      zoom: 1,
    },
    isSpec: false,
  },
  {
    id: 2,
    title: 'Кондитерская 2',
    address: 'Морской пр. 2А',
    position: {
      lat: 59.967947,
      lng: 30.274708,
      zoom: 1,
    },
    isSpec: false,
  },
  {
    id: 3,
    title: 'Производство',
    address: 'Морской пр. 2А',
    position: {
      lat: 59.960380,
      lng: 30.308725,
      zoom: 1,
    },
    isSpec: true,
  }
];

export const categories = ['bisque', 'cheesecake', 'shortbread', 'dessert'] as const;
export const categoryLabels: Record<CategoryName, string> = {
  bisque: 'Бисквит',
  cheesecake: 'Чизкейк',
  shortbread: 'Песочное',
  dessert: 'Десерт'
};

export const toppings = ['chocolate', 'vanilla', 'vegetarian', 'honey-cake', 'lemon', 'new-york', 'tart', 'funnel-cake', 'basket-cake', 'chocolate-muffin', 'brand-muffin'] as const;

export const toppingLabels: Record<ToppingName, string> = {
  'chocolate': 'Шоколадный',
  'vanilla': 'Ваниль',
  'vegetarian': 'Вегетарианский',
  'honey-cake': 'Медовый',
  'lemon': 'Лимонный',
  'new-york': 'Нью-Йорк',
  'tart': 'Тарт',
  'funnel-cake': 'Фанел-кейк',
  'basket-cake': 'Корзина',
  'chocolate-muffin': 'Шоколадный маффин',
  'brand-muffin': 'Капкейк'
};

