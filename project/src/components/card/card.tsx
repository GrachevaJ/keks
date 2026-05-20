const Card = (): JSX.Element => (
  <li className="random-main__item">
    <div className="card-item">
      <a className="card-item__img-link" href="#">
        <div className="card-item__img-wrapper">
          <picture>
            <source type="image/webp" srcSet="img/content/chocolate-pie.webp, img/content/chocolate-pie@2x.webp 2x" /><img src="img/content/chocolate-pie.jpg" srcSet="img/content/chocolate-pie@2x.jpg 2x" width="241" height="245" alt="Шоколадный кекс." />
          </picture>
        </div>
      </a>
      <button className="card-item__favorites"><span className="visually-hidden">Добавить в избранное</span>
        <svg width="51" height="41" aria-hidden="true">
          <use xlinkHref="#icon-like"></use>
        </svg>
      </button>
      <a className="card-item__link" href="#">
        <h3 className="card-item__title"><span>Шоколадный Кекс</span></h3>
      </a>
    </div>
  </li>
);

export default Card;
