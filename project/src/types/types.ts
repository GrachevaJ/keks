export type Offer = {
  id: string;
  title: string;
  category: 'bisque' | 'cheesecake' | 'shortbread' | 'dessert';
  type: 'chocolate' | 'vanilla' | 'vegetarian' | 'honey-cake' | 'lemon' | 'new-york' | 'tart' | 'funnel-cake' | 'basket-cake' | 'chocolate-muffin' | 'brand-muffin';
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
