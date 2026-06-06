import {AddressType} from '../../types/types';

type AddressProps = {
  addressType: AddressType;
  active: boolean;
    onClick: () => void;
}
const Address = ({addressType, active, onClick}: AddressProps): JSX.Element => {
  const {id, title, address} = addressType;
  return (
    <li className="map__address" onClick={onClick}>
      <div className="custom-toggle custom-toggle--radio custom-toggle--address">
        <input type="radio" value={`user-agreement-${id}`} id={`user-agreement-${id}`} name="user-agreement" checked={active}/>
        <label className="custom-toggle__label" htmlFor={`user-agreement-${id}`}>{title}</label>
        <address className="custom-toggle__address">{address}
          <svg className="custom-toggle__icon" width="26" height="24" aria-hidden="true">
            <use xlinkHref="#icon-keks-footprint"></use>
          </svg>
        </address>
      </div>
    </li>
  );
};

export default Address;
