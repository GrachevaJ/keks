import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { setType } from '../../store/actions';
import { CategoryName } from '../../types/types';
import Category from '../category/category';
import ToppingsList from '../toppings-list/toppings-list';

const CategoriesList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories);
  const [activeCategory, setActiveCategory] = useState<CategoryName | null>(null);

  const handleClick = (category: CategoryName) => {
    setActiveCategory(category);
    dispatch(setType([]));
  };

  return (
    <>
      <div className="catalog-filter__first-level">
        <h3 className="catalog-filter__title catalog-filter__title--first-level">основы</h3>
        <ul className="catalog-filter__list catalog-filter__list--first-level">
          {categories.map((item) => (
            <Category key={item.category} category={item.category} active={item.category === activeCategory} onClick={() => handleClick(item.category)} />
          ))}
        </ul>
      </div>
      {activeCategory && <ToppingsList category={activeCategory}/>}
    </>
  );
};

export default CategoriesList;
