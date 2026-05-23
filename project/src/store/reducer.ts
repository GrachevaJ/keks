import {createReducer} from '@reduxjs/toolkit';
import type { CategoryName, Offer } from '../types/types';
import { setCategory, setOffers } from './actions';

type State = {
  category: CategoryName | null;
  offers: Offer[];
}

const initialState: State = {
  category: null,
  offers: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCategory, (state, action) => {
      state.category = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
