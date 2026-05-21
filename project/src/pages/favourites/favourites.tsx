import CardList from '../../components/card-list/card-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Offer } from '../../types/types';

type FavouritesProps = {
  offers: Offer[];
};

const Favourites = ({offers}: FavouritesProps): JSX.Element => (
  <>
    <Header />
    <main>
      <div className="favorites-page">
        <h1 className="visually-hidden">Избранное</h1>
        <div className="back-link">
          <div className="container">
            <a className="back-link__link" href="#">Назад
              <svg className="back-link__icon" width="30" height="16" aria-hidden="true">
                <use xlinkHref="#icon-arrow-left"></use>
              </svg>
            </a>
          </div>
        </div>
        <section className="number-of-favourites favorites-page__qty">
          <div className="container">
            <h2 className="visually-hidden">Количество товаров в избранном.</h2>
            <p className="number-of-favourites__cakes">2 кекса</p>
            <div className="number-of-favourites__wrapper">
              <div className="number-of-favourites__wrap-price">
                <p className="number-of-favourites__text">Всего</p>
                <p className="number-of-favourites__price">13&nbsp;400&nbsp;р</p>
              </div>
            </div>
            <div className="number-of-favourites__button">
              <a className="btn" href="catalog.html">В каталог</a>
            </div>
          </div>
        </section>
        <section className="favourites">
          <div className="container">
            <h2 className="visually-hidden">Избранные товары</h2>
            <div className="favourites__button">
              <button className="btn btn--second" type="button">Очистить</button>
            </div>
          </div>
          <section className="catalog">
            <div className="container">
              <h2 className="visually-hidden">Каталог</h2>
              <div className="catalog__wrapper">
                <ul className="catalog__list">
                  <CardList offers={offers} />
                </ul>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
    <Footer />
  </>
);

export default Favourites;
