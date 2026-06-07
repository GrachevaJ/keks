import {siteProcess, setType, setActiveCategory, setActiveAddressId} from './site-process';
import {fetchCategories} from '../actions';
import {SiteProcess} from '../../types/state';
import { ToppingName } from '../../types/types';
import { categories } from '../../const';

describe('Reducer: siteProcess', () => {
  const initialState: SiteProcess = {
    type: [],
    categories: [],
    activeCategory: null,
    activeAddressId: 1
  };

  it('without additional parameters should return initial state', () => {
    expect(siteProcess.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual(initialState);
  });

  it('should update type with setType', () => {
    const mockToppings = ['lemon', 'tart'] as ToppingName[];

    expect(siteProcess.reducer(initialState, setType(mockToppings)).type).toEqual(mockToppings);
  });

  it('should update activeCategory via setActiveCategory', () => {
    const mockCategory = 'dessert' as const;

    expect(siteProcess.reducer(initialState, setActiveCategory(mockCategory)).activeCategory).toBe(mockCategory);
  });

  it('should reset activeCategory to null', () => {
    const stateWithCategory = { ...initialState, activeCategory: 'dessert' as const };

    expect(siteProcess.reducer(stateWithCategory, setActiveCategory(null)).activeCategory).toBeNull();
  });

  it('should result in a number and update the activeAddressId via setActiveAddressId', () => {
    expect(siteProcess.reducer(initialState, setActiveAddressId('42')).activeAddressId).toBe(42);
  });

  it('should save categories on successful fetchCategories.fulfilled', () => {
    const mockCategories = categories;
    const action = {
      type: fetchCategories.fulfilled.type,
      payload: mockCategories
    };

    expect(siteProcess.reducer(initialState, action).categories).toEqual(mockCategories);
  });
});
