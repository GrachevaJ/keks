import { addresses } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { getActiveAddressId } from '../../store/site-process/selectors';
import { setActiveAddressId } from '../../store/site-process/site-process';
import Address from '../address/address';

const AddressesList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const activeAddressId = useAppSelector(getActiveAddressId);

  const handleClick = (id: number) => {
    dispatch(setActiveAddressId(id));
  };
  return (
    <ul className="map__addresses">
      {addresses.map((item) => <Address key={item.id} addressType={item} active={item.id === activeAddressId} onClick={() => handleClick(item.id)}/>)}
    </ul>
  );
};

export default AddressesList;
