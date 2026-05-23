import {categories, types} from '../const';
import store from '../store/store';

export type CategoryName = typeof categories[number];
export type TypesName = typeof types[number];

export type Offer = {
  id: string;
  title: string;
  category: CategoryName;
  type: TypesName;
  price: number;
  previewImage: string;
  previewImageWebp: string;
  isFavorite: boolean;
  isNew: boolean;
}

// export type Category = {
//   category: CategoryName;
//   types: TypesName;
// }

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
