import {categories, toppings} from '../const';


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
export type FavoriteAuth = Pick<Offer, 'id' | 'isFavorite'>;
export type ReviewAuth = Pick<Comment, 'negative' | 'positive' | 'rating'> & {id: string};

export type UserData = Omit<User, 'name' | 'token'>;

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
  description: string;
  images: [string];
  weight: number;
  rating: number;
  reviewCount: number;
}

export type AddressType = {
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

export type Category = {
  category: CategoryName;
  types: ToppingName[];
}


export type SortType = 'any' | 'high' | 'low';
