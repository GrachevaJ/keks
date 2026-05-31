import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreSlice } from '../../const';
import { SiteProcess } from '../../types/state';
import { CategoryName, ToppingName } from '../../types/types';
import { fetchCategories } from '../actions';

const initialState: SiteProcess = {
  type: [],
  categories: [],
  activeCategory: null
};

export const siteProcess = createSlice({
  name: StoreSlice.SiteProcess,
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<ToppingName[]>) => {
      state.type = action.payload;
    },
    setActiveCategory: (state, action: PayloadAction<CategoryName | null>) => {
      state.activeCategory = action.payload;
    },
    resetFilters: (state) => {
      state.type = [];
      state.activeCategory = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export const {setType, setActiveCategory, resetFilters} = siteProcess.actions;
