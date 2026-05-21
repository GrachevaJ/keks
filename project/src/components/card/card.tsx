import type { Offer } from '../../types/types';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

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
            <source type="image/webp" srcSet={`${previewImageWebp}, ${previewImageWebp.split('.')[0]}@2x.webp 2x`} /><img src={previewImage} srcSet={`${previewImage.split('.')[0]}@2x.jpg 2x`} width="241" height="245" alt={title} />
          </picture>
        </div>
        {isNew && <span className="card-item__label">Новинка</span>}
      </Link>
      <button className={`card-item__favorites ${isFavorite ? 'card-item__favorites--active' : ''}`}><span className="visually-hidden">Добавить в избранное</span>
        <svg width="51" height="41" aria-hidden="true">
          <use xlinkHref="#icon-like"></use>
        </svg>
      </button>
      {place === 'catalog' ? <span className="card-item__price">{price} p</span> : ''}
      <Link className="card-item__link" to={`${AppRoute.ProductPage}/${id}`}>
        <h3 className="card-item__title"><span>{title}</span></h3>
      </Link>
    </div>
  </li>
);

export default Card;
