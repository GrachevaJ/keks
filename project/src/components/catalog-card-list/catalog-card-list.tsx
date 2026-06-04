import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { getIsOffersLoading, getOffers } from '../../store/site-data/selectors';
import { getActiveCategory, getType } from '../../store/site-process/selectors';
import { setActiveCategory, setType } from '../../store/site-process/site-process';
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
  const isOffersLoading = useAppSelector(getIsOffersLoading);

  useEffect(() => {
    dispatch(setActiveCategory(null));
    dispatch(setType([]));
  }, [dispatch]);

  const activeCategory = useAppSelector(getActiveCategory);
  const type = useAppSelector(getType);
  const offers = useAppSelector(getOffers);

  useEffect(() => {
    setLimit(initialLimit);
  }, [activeCategory, type, initialLimit]);

  const filteredOffers = useMemo(() => {
    let result = offers;

    if (activeCategory !== null) {
      result = result.filter((offer) => offer.category === activeCategory);
    }

    if (type.length > 0) {
      result = result.filter((offer) => type.includes(offer.type));
    }

    return result;
  }, [offers, activeCategory, type]);

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
