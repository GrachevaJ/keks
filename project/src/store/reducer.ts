import {createReducer} from '@reduxjs/toolkit';
import type { CategoryName, Offer, ToppingName } from '../types/types';
import { setCategory, setOffers, setType } from './actions';

type State = {
  category: CategoryName | null;
  type: ToppingName[];
  offers: Offer[];
}

const initialState: State = {
  category: null,
  type: [],
  offers: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCategory, (state, action) => {
      state.category = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setType, (state, action) => {
      state.type = action.payload;
    });
});
