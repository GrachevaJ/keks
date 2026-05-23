import { categoryLabels } from '../../const';
import type { CategoryName } from '../../types/types';

type CategoryProps = {
  category: CategoryName;
  active: boolean;
  onClick: (category: CategoryName) => void;
}

const Category = ({category, active, onClick}: CategoryProps): JSX.Element => {
  const handleClick = () => {
    onClick(category);
  };

  return (
    <li className="catalog-filter__item catalog-filter__item--first-level" onClick={handleClick}>
      <button className={`btn btn--filter-first-level ${active ? 'is-active' : ''}`} type="button">{categoryLabels[category]}</button>
    </li>
  );
};

export default Category;
