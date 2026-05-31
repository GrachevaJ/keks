import { StoreSlice } from '../../const';
import { State } from '../../types/state';
import { Category, CategoryName, ToppingName } from '../../types/types';

export const getType = ({ [StoreSlice.SiteProcess]: SITE_PROCESS}: State): ToppingName[] => SITE_PROCESS.type;

export const getCategories = ({ [StoreSlice.SiteProcess]: SITE_PROCESS}: State): Category[] => SITE_PROCESS.categories;

export const getActiveCategory = ({ [StoreSlice.SiteProcess]: SITE_PROCESS}: State): CategoryName | null => SITE_PROCESS.activeCategory;
