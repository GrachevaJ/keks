import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/use-app';
import Card from '../card/card';

type MainCardListProps = {
  place?: 'index' | 'catalog';
};

const MainCardList = ({place = 'index'}: MainCardListProps): JSX.Element => {
  const offers = useAppSelector((state) => state.offers);
  const randomOffers = [...offers].sort(() => Math.random() - 0.5).slice(0, 3);

  return (
    <section className="random-main">
      <div className="container">
        <h2 className="random-main__title">кексы</h2>
        <ul className="random-main__list">
          {randomOffers.map((offer) => (<Card key={offer.id} {...offer} place={place} />))}
          <li className="random-main__item">
            <Link className="random-main__link" to={AppRoute.Catalog}>
              <div className="random-main__icon-wrapper">
                <div className="random-main__icon">
                  <svg width="120" height="130" aria-hidden="true">
                    <use xlinkHref="#icon-keks"></use>
                  </svg>
                </div>
              </div>
              <h3 className="random-main__subtitle">Все кексы</h3>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MainCardList;

