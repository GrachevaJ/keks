import { Link } from 'react-router-dom';
import Card from '../../components/card/card';
import NoFavorites from '../../components/no-favorites/no-favorites';
import Spinner from '../../components/spinner/spinner';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { getFavoriteOffers, getIsFavoriteOffersLoading } from '../../store/site-data/selectors';
import { clearFavorites } from '../../store/site-data/site-data';


const Favourites = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(getFavoriteOffers);
  const isFavoriteOffersLoading = useAppSelector(getIsFavoriteOffersLoading);

  if (isFavoriteOffersLoading) {
    return <Spinner />;
  }
  if (favorites.length === 0) {
    return <NoFavorites />;
  }

  const handleClearButton = () => {
    dispatch(clearFavorites());
  };

  const message = () => {
    if (favorites.length === 1) {
      return `${favorites.length} кекс`;
    }

    if (favorites.length > 1 && favorites.length < 5) {
      return `${favorites.length} кекса`;
    }

    if (favorites.length > 4) {
      return `${favorites.length} кексов`;
    }
  };

  const amount = () => {
    const res: number[] = [];
    favorites.forEach((offer) => res.push(offer.price));

    return res.reduce((acc, curr) => acc + curr);
  };

  return (
    <div className="favorites-page">
      <h1 className="visually-hidden">Избранное</h1>
      <div className="back-link">
        <div className="container">
          <Link className="back-link__link" to={AppRoute.Catalog}>Назад
            <svg className="back-link__icon" width="30" height="16" aria-hidden="true">
              <use xlinkHref="#icon-arrow-left"></use>
            </svg>
          </Link>
        </div>
      </div>
      <section className="number-of-favourites favorites-page__qty">
        <div className="container">
          <h2 className="visually-hidden">Количество товаров в избранном.</h2>
          <p className="number-of-favourites__cakes">{message()}</p>
          <div className="number-of-favourites__wrapper">
            <div className="number-of-favourites__wrap-price">
              <p className="number-of-favourites__text">Всего</p>
              <p className="number-of-favourites__price">{amount()}&nbsp;р</p>
            </div>
          </div>
          <div className="number-of-favourites__button">
            <Link className="btn" to={AppRoute.Catalog}>В каталог</Link>
          </div>
        </div>
      </section>
      <section className="favourites">
        <div className="container">
          <h2 className="visually-hidden">Избранные товары</h2>
          <div className="favourites__button">
            <button className="btn btn--second" type="button" onClick={handleClearButton}>Очистить</button>
          </div>
        </div>
        <section className="catalog">
          <div className="container">
            <h2 className="visually-hidden">Каталог</h2>
            <div className="catalog__wrapper">
              <ul className="catalog__list">
                {favorites.map((offer) => <Card key={offer.id} {...offer} />)}
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Favourites;
