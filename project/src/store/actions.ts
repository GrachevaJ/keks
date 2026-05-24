import { createAction } from '@reduxjs/toolkit';
import { CategoryName, Offer, ToppingName } from '../types/types';

export const Action = {
  SET_CATEGORY: 'category/set',
  SET_OFFERS: 'offers/set',
  SET_TYPE: 'type/set'
};

export const setCategory = createAction<CategoryName | null>(Action.SET_CATEGORY);
export const setOffers = createAction<Offer[]>(Action.SET_OFFERS);
export const setType = createAction<ToppingName[]>(Action.SET_TYPE);
