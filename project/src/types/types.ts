import {categories, toppings} from '../const';
import store from '../store/store';

export type CategoryName = typeof categories[number];
export type ToppingName = typeof toppings[number];

export type User = {
  name: string;
  email: string;
  avatarUrl: string;
  token: string;
};

export type SignupData = {
  name: string;
  email: string;
  password: string;
}

export type UserAuth = Pick<User, 'email'> & {password: string};

export type Offer = {
  id: string;
  title: string;
  category: CategoryName;
  type: ToppingName;
  price: number;
  previewImage: string;
  previewImageWebp: string;
  isFavorite: boolean;
  isNew: boolean;
}

export type Address = {
  id: number;
  title: string;
  address: string;
  position: {
    lat: number;
    lng: number;
    zoom: number;
  };
  isSpec: boolean;
}

export type Comment = {
  id: string;
  isoDate: string;
  user: {
    name: string;
    avatarUrl: string;
  };
  positive: string;
  negative: string;
  rating: number;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
