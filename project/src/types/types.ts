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
};
