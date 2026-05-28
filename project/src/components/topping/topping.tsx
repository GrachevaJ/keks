import type { ToppingName } from '../../types/types';
import { toppingLabels } from '../../const';

type ToppingProps = {
  type: ToppingName;
  active: boolean;
  onChange: (type: ToppingName) => void;
}
const Topping = ({type, active, onChange}: ToppingProps): JSX.Element => {
  const handleChange = () => {
    onChange(type);
  };

  return (
    <li className="catalog-filter__item catalog-filter__item--second-level">
      <div className="custom-toggle custom-toggle--checkbox">
        <input type="checkbox" value={type} id={`catalog-second-level-id-${type}`} name="catalog-second-level" checked={active} onChange={handleChange}/>
        <label className="custom-toggle__label" htmlFor={`catalog-second-level-id-${type}`}>{toppingLabels[type]}</label>
      </div>
    </li>
  );
};

export default Topping;
