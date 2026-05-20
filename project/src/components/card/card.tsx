import type { Offer } from '../../types/types';
import { AppRoute } from '../../const';

const Card = ({
  id,
  title,
  previewImage,
  previewImageWebp,
  isFavorite,
  isNew,
}: Offer): JSX.Element => (
  <li className="random-main__item">
    <div className="card-item">
      <a className="card-item__img-link" href="#">
        <div className="card-item__img-wrapper">
          <picture>
            <source type="image/webp" srcSet={`${previewImageWebp}, ${previewImageWebp.split('.')[0]}@2x.webp 2x`} /><img src={previewImage} srcSet={`${previewImage.split('.')[0]}@2x.jpg 2x`} width="241" height="245" alt={title} />
          </picture>
        </div>
        {isNew && <span className="card-item__label">Новинка</span>}
      </a>
      <button className={`card-item__favorites ${isFavorite ? 'card-item__favorites--active' : ''}`}><span className="visually-hidden">Добавить в избранное</span>
        <svg width="51" height="41" aria-hidden="true">
          <use xlinkHref="#icon-like"></use>
        </svg>
      </button>
      <a className="card-item__link" href={`${AppRoute.ProductPage}/${id}`}>
        <h3 className="card-item__title"><span>{title}</span></h3>
      </a>
    </div>
  </li>
);

export default Card;
