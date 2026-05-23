import type { CategoryName } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { setCategory } from '../../store/actions';
import Category from '../category/category';
import { categories } from '../../const';

const CategoriesList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const activeCategory = useAppSelector((state) => state.category);

  const handleClick = (category: CategoryName) => {
    dispatch(setCategory(category));
  };

  return (
    <ul className="catalog-filter__list catalog-filter__list--first-level">
      {categories.map((category) => (
        <Category key={category} category={category} active={category === activeCategory} onClick={handleClick} />
      ))}
    </ul>
  );
};

export default CategoriesList;
