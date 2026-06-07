import { Offer, Comment, CategoryName, ToppingName } from '../../types/types';
import { fetchFavoritesOffers, fetchLastReview, fetchOffer, fetchOffers, fetchReviews, postReview, toggleFavorite } from '../actions';
import { siteData } from './site-data';
const state = {
  offers: [],
  isOffersLoading: false,
  offer: null,
  isOfferLoading: false,
  favoriteOffers: [],
  isFavoriteOffersLoading: false,
  lastReview: null,
  reviews: [],
  reviewsError: false
};

const offers: Offer[] = [{
  id: 'klk-lsknljlk-lklk',
  title: 'Чизкейк лимонный',
  category: 'cheesecake',
  type: 'lemon',
  price: 9383,
  previewImage: 'img/content/cheesecake-vegetarian.jpg',
  previewImageWebp: 'img/content/cheesecake-vegetarian.webp',
  isFavorite: true,
  isNew: true,
  description: 'Цитрусовый десерт с тонким сливочным вкусом, лёгкой свежестью и низким содержанием калорий сделает ваш день незабываемым',
  images: ['https://link-to-image'],
  weight: 1300,
  rating: 4,
  reviewCount: 3
}];

const reviews: Comment[] = [{
  id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
  isoDate: '2023-05-30T12:00:00.000Z',
  user: {
    name: 'Oliver',
    avatarUrl: 'https://link-to-image',
  },
  positive: 'Отличный сервис! Очень вкусный, сочный и яркий торт. Удобная коробка для транспортировки. Свежие фрукты и съедобный дизайн.',
  negative: 'Недостатков нет, обязательно будем заказывать и приходить в Кексик',
  rating: 5
}];

const mockImages: [string] = ['link-to-image'];
const mockOffer1 = {
  id: '1',
  title: 'Offer 1',
  category: 'cheesecake' as CategoryName,
  type: 'lemon' as ToppingName,
  price: 6556,
  previewImage: 'link-to-image',
  previewImageWebp: 'link-to-image',
  isFavorite: false,
  isNew: false,
  description: 'description',
  images: mockImages,
  weight: 2300,
  rating: 3,
  reviewCount: 4
};
const mockOffer2 = {
  id: '2',
  title: 'Offer 2',
  category: 'dessert' as CategoryName,
  type: 'lemon' as ToppingName,
  price: 6556,
  previewImage: 'link-to-image',
  previewImageWebp: 'link-to-image',
  isFavorite: false,
  isNew: false,
  description: 'description',
  images: mockImages,
  weight: 2300,
  rating: 3,
  reviewCount: 4
};

const favoriteOffer = {
  id: '2',
  title: 'Offer 2',
  category: 'dessert' as CategoryName,
  type: 'lemon' as ToppingName,
  price: 6556,
  previewImage: 'link-to-image',
  previewImageWebp: 'link-to-image',
  isFavorite: true,
  isNew: false,
  description: 'description',
  images: mockImages,
  weight: 2300,
  rating: 3,
  reviewCount: 4
};

describe('Reducer: siteData', () => {
  it('without additional parameters should return initial state', () => {
    expect(siteData.reducer(void 0, {type: 'UNKNOWN_ACTION'})).toEqual(state);
  });

  it('should fetch offers', () => {
    expect(siteData.reducer(state, {type: fetchOffers.pending.type}).isOffersLoading).toEqual(true);

    expect(siteData.reducer(state, {type: fetchOffers.fulfilled.type, payload: offers}).offers).toEqual(offers);

    expect(siteData.reducer(state, {type: fetchOffers.rejected.type})).toEqual(state);
  });

  it('should fetch offer', () => {
    expect(siteData.reducer(state, {type: fetchOffer.pending.type}).isOfferLoading).toEqual(true);

    expect(siteData.reducer(state, {type: fetchOffer.fulfilled.type, payload: offers[0]}).offer).toEqual(offers[0]);

    expect(siteData.reducer(state, {type: fetchOffer.rejected.type}).offer).toEqual(null);
  });

  it('should fetch last review', () => {
    expect(siteData.reducer(state, {type: fetchLastReview.fulfilled.type, payload: reviews[0]}).lastReview).toEqual(reviews[0]);
  });

  it('should fetch reviews', () => {
    expect(siteData.reducer(state, {type: fetchReviews.fulfilled.type, payload: reviews}).reviews).toEqual(reviews);

    expect(siteData.reducer(state, {type: fetchReviews.rejected.type}).reviewsError).toEqual(true);
  });

  it('should fetch favorite offers', () => {
    expect(siteData.reducer(state, {type: fetchFavoritesOffers.pending.type}).isFavoriteOffersLoading).toEqual(true);

    expect(siteData.reducer(state, {type: fetchFavoritesOffers.fulfilled.type, payload: offers}).favoriteOffers).toEqual(offers);

    expect(siteData.reducer(state, {type: fetchFavoritesOffers.rejected.type})).toEqual(state);
  });

  it('should update offer in offers list and add it to favoriteOffers if isFavorite is true', () => {
    const initialState = {
      offers: [mockOffer1, mockOffer2],
      offer: null,
      favoriteOffers: [],
      isOffersLoading: false,
      isOfferLoading: false,
      isFavoriteOffersLoading: false,
      lastReview: null,
      reviews: [],
      reviewsError: false
    };

    const updatedOffer = { ...mockOffer1, isFavorite: true };

    const result = siteData.reducer(initialState, {
      type: toggleFavorite.fulfilled.type,
      payload: updatedOffer,
    });

    expect(result.offers).toEqual([updatedOffer, mockOffer2]);
    expect(result.favoriteOffers).toEqual([updatedOffer]);
  });

  it('should remove offer from favoriteOffers and update it if isFavorite becomes false', () => {
    const initialState = {
      offers: [favoriteOffer, mockOffer2],
      offer: null,
      favoriteOffers: [favoriteOffer],
      isOffersLoading: false,
      isOfferLoading: false,
      isFavoriteOffersLoading: false,
      lastReview: null,
      reviews: [],
      reviewsError: false
    };

    const updatedOffer = { ...favoriteOffer, isFavorite: false };

    const result = siteData.reducer(initialState, {
      type: toggleFavorite.fulfilled.type,
      payload: updatedOffer,
    });

    expect(result.offers).toEqual([updatedOffer, mockOffer2]);
    expect(result.favoriteOffers).toEqual([]);
  });

  it('should update current single offer if its ID matches the updated offer', () => {
    const initialState = {
      offers: [mockOffer1],
      offer: mockOffer1,
      favoriteOffers: [],
      isOffersLoading: false,
      isOfferLoading: false,
      isFavoriteOffersLoading: false,
      lastReview: null,
      reviews: [],
      reviewsError: false
    };

    const updatedOffer = { ...mockOffer1, isFavorite: true };

    expect(siteData.reducer(initialState, {
      type: toggleFavorite.fulfilled.type,
      payload: updatedOffer,
    }).offer).toEqual(updatedOffer);
  });

  it('should add posted review to the reviews list', () => {
    const oldReview = {
      id: 'review 1',
      isoDate: 'date',
      user: {
        name: 'Alex',
        avatarUrl: 'link-to-image',
      },
      positive: 'Good',
      negative: '',
      rating: 5
    };
    const newReview = {
      id: 'review 2',
      isoDate: 'date',
      user: {
        name: 'Alexandra',
        avatarUrl: 'link-to-image',
      },
      positive: '',
      negative: 'Bad',
      rating: 3
    };

    const initialState = {
      offers: [],
      offer: null,
      favoriteOffers: [],
      isOffersLoading: false,
      isOfferLoading: false,
      isFavoriteOffersLoading: false,
      lastReview: null,
      reviews: [oldReview],
      reviewsError: false
    };

    expect(siteData.reducer(initialState, {type: postReview.fulfilled.type, payload: newReview}))
      .toEqual({
        offers: [],
        offer: null,
        favoriteOffers: [],
        isOffersLoading: false,
        isOfferLoading: false,
        isFavoriteOffersLoading: false,
        lastReview: null,
        reviews: [oldReview, newReview],
        reviewsError: false
      });
  });
});
