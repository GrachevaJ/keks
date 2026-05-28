import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { setType } from '../../store/actions';
import Card from '../card/card';
import FiltersNotFound from '../filters-not-found/filters-not-found';
import Spinner from '../spinner/spinner';

type CatalogCardListProps = {
  place?: 'index' | 'catalog';
  initialLimit?: number;
  step?: number;
};

const CatalogCardList = ({place = 'catalog', initialLimit = 6, step = 6}: CatalogCardListProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [limit, setLimit] = useState<number>(initialLimit);
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);

  useEffect(() => {
    dispatch(setType([]));
  }, [dispatch]);

  const activeCategory = useAppSelector((state) => state.category);
  const type = useAppSelector((state) => state.type);
  const offers = useAppSelector((state) => state.offers);

  useEffect(() => {
    setLimit(initialLimit);
  }, [activeCategory, type, initialLimit]);

  const filteredOffers = useAppSelector((state) => {
    let result = offers;

    if (activeCategory !== null) {
      result = result.filter((offer) => offer.category === activeCategory);
    }

    if (state.type.length > 0) {
      result = result.filter((offer) => state.type.includes(offer.type));
    }

    return result;
  });

  const visibleOffers = filteredOffers.slice(0, limit);
  const hasMore = limit < filteredOffers.length;

  const handleShowMore = () => {
    setLimit((prevLimit) => prevLimit + step);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    setLimit(initialLimit);
  };

  if (isOffersLoading) {
    return <Spinner />;
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {filteredOffers.length > 0 ? (
        <section className="catalog">
          <div className="container">
            <h2 className="visually-hidden">Каталог</h2>
            <div className="catalog__wrapper">
              <ul className="catalog__list">
                {visibleOffers.map((offer) => (<Card key={offer.id} {...offer} place={place} />))}
              </ul>
              {hasMore ? (
                <div className="catalog__button-wrapper">
                  <button className="btn btn--second" type="button" onClick={handleShowMore}>Показать еще</button>
                </div>
              ) : (
                <div className="catalog__button-wrapper">
                  <button className="btn btn--second" type="button" onClick={handleScrollToTop}>в начало</button>
                </div>
              )}
            </div>
          </div>
        </section>
      ) : <FiltersNotFound />}
    </>
  );
};

export default CatalogCardList;
