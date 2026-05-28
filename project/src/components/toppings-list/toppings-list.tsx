import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { setType } from '../../store/actions';
import type { CategoryName, ToppingName } from '../../types/types';
import Topping from '../topping/topping';

type ToppingsListProps = {
  category: CategoryName;
}

const ToppingsList = ({category}: ToppingsListProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const currentCategory = useAppSelector((state) => state.categories.find((item) => item.category === category));
  const activeToppings = useAppSelector((state)=> state.type);

  const toppings: ToppingName[] = currentCategory?.types || [];

  const handleChange = (type: ToppingName) => {
    const isActive = activeToppings.includes(type);
    let nextToppings: ToppingName[];

    if (isActive) {
      nextToppings = activeToppings.filter((t) => t !== type);
    } else {
      nextToppings = [...activeToppings, type];
    }

    dispatch(setType(nextToppings));
  };

  return (
    <>
      <h3 className="catalog-filter__title catalog-filter__title--second-level">начинки</h3>
      <ul className="catalog-filter__list catalog-filter__list--second-level">
        {toppings.map((topping) => (
          <Topping key={topping} type={topping} active={activeToppings.includes(topping)} onChange={handleChange} />
        ))}
      </ul>
    </>
  );
};

export default ToppingsList;
