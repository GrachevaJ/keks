import { createAction } from '@reduxjs/toolkit';
import type { CategoryName, Offer } from '../types/types';

export const Action = {
  SET_CATEGORY: 'category/set',
  SET_OFFERS: 'offers/set'
};

export const setCategory = createAction<CategoryName | null>(Action.SET_CATEGORY);
export const setOffers = createAction<Offer[]>(Action.SET_OFFERS);
