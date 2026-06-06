import type { Offer } from '../../types/types';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import LikeButton from '../like-button/like-button';

type CardProps = Offer & {
  place?: 'index' | 'catalog';
};

const Card = ({
  id,
  title,
  price,
  previewImage,
  previewImageWebp,
  isFavorite,
  isNew,
  place = 'catalog',
}: CardProps): JSX.Element => (
  <li className={place === 'index' ? 'random-main__item' : 'catalog__item'}>
    <div className={`card-item ${place === 'catalog' ? 'card-item--big' : ''}`}>
      <Link className="card-item__img-link" to={`${AppRoute.ProductPage}/${id}`}>
        <div className="card-item__img-wrapper">
          <picture>
            <source type="image/webp" srcSet={previewImageWebp}/><img src={previewImage} srcSet={previewImage} width="241" height="245" alt={title} />
          </picture>
        </div>
        {isNew && <span className="card-item__label">Новинка</span>}
      </Link>
      <LikeButton id={id} isFavorite={isFavorite} />
      {place === 'catalog' ? <span className="card-item__price">{price} p</span> : ''}
      <Link className="card-item__link" to={`${AppRoute.ProductPage}/${id}`}>
        <h3 className="card-item__title"><span>{title}</span></h3>
      </Link>
    </div>
  </li>
);

export default Card;
