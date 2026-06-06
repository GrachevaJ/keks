import { AuthorizationStatus } from '../const';
import store from '../store/store';
import { Offer, Comment, Category, ToppingName, CategoryName, UserData } from './types';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type SiteData = {
  offers: Offer[];
  isOffersLoading: boolean;
  offer: Offer | null;
  isOfferLoading: boolean;
  favoriteOffers: Offer[];
  isFavoriteOffersLoading: boolean;
  lastReview: Comment;
  reviews: Comment[];
  reviewsError: boolean;
};

export type SiteProcess = {
  type: ToppingName[];
  categories: Category[];
  activeCategory: CategoryName | null;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData;
  isRegistering: boolean;
};

export type SortParams = {
  ratingSort: string;
  dateSort: string;
};

