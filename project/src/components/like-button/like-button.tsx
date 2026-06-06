import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { toggleFavorite } from '../../store/actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { Offer } from '../../types/types';

type LikeButtonProps = {
  id: Offer['id'];
  isFavorite: boolean;
  place?: 'catalog' | 'property';
}
const LikeButton = ({id, isFavorite, place = 'catalog'}: LikeButtonProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const handleButtonClick = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.Login);
      return;
    }

    dispatch(toggleFavorite({id, isFavorite}));
  };

  return (
    <button className={`${place === 'catalog' ? (
      `card-item__favorites ${isFavorite ? 'card-item__favorites--active' : ''}`) : (
      `item-details__like-button ${isFavorite ? 'item-details__like-button--active' : ''}`
    )}`} onClick={handleButtonClick}
    ><span className="visually-hidden">Добавить в избранное</span>
      <svg width={place === 'catalog' ? 51 : 45} height={place === 'catalog' ? 41 : 37}aria-hidden="true">
        <use xlinkHref="#icon-like"></use>
      </svg>
    </button>
  );
};

export default LikeButton;
