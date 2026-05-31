import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { setCategory, setType } from '../../store/actions';
import { getActiveCategory, getCategories } from '../../store/site-process/selectors';
import { CategoryName } from '../../types/types';
import Category from '../category/category';
import ToppingsList from '../toppings-list/toppings-list';

const CategoriesList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(getCategories);
  const activeCategory = useAppSelector(getActiveCategory);

  const handleClick = (category: CategoryName | null) => {
    dispatch(setCategory(category));
    dispatch(setType([]));
  };

  return (
    <>
      <div className="catalog-filter__first-level">
        <h3 className="catalog-filter__title catalog-filter__title--first-level">основы</h3>
        <ul className="catalog-filter__list catalog-filter__list--first-level">
          {categories.map((item) => {
            const safeName = item.category;

            return (<Category key={item.category} category={item.category} active={safeName === activeCategory} onClick={handleClick} />
            );})}
        </ul>
      </div>
      {activeCategory && <ToppingsList category={activeCategory}/>}
    </>
  );
};

export default CategoriesList;
