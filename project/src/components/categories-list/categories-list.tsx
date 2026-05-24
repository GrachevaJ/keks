import type { CategoryName } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { setCategory } from '../../store/actions';
import Category from '../category/category';
import { categories } from '../../const';
import ToppingsList from '../toppings-list/toppings-list';

const CategoriesList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const activeCategory = useAppSelector((state) => state.category);

  const handleClick = (category: CategoryName | null) => {
    dispatch(setCategory(category));
  };

  return (
    <>
      <div className="catalog-filter__first-level">
        <h3 className="catalog-filter__title catalog-filter__title--first-level">основы</h3>
        <ul className="catalog-filter__list catalog-filter__list--first-level">
          {categories.map((category) => (
            <Category key={category} category={category} active={category === activeCategory} onClick={handleClick} />
          ))}
        </ul>
      </div>
      {activeCategory && <ToppingsList />}
    </>
  );
};

export default CategoriesList;
