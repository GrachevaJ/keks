/* eslint-disable react/jsx-no-useless-fragment */

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { setCategory, setType } from '../../store/actions';
import Card from '../card/card';
import FiltersNotFound from '../filters-not-found/filters-not-found';

type CatalogCardListProps = {
  place?: 'index' | 'catalog';
  initialLimit?: number;
  step?: number;
};

const CatalogCardList = ({place = 'catalog', initialLimit = 6, step = 6}: CatalogCardListProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [limit, setLimit] = useState<number>(initialLimit);

  useEffect(() => {
    dispatch(setCategory(null));
    dispatch(setType([]));
  }, [dispatch]);

  const filteredOffers = useAppSelector((state) => {
    let result = state.offers;

    if (state.category !== null) {
      result = result.filter((offer) => offer.category === state.category);
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

  return (
    <>
      {filteredOffers.length > 0 ? (
        <section className="catalog">
          <div className="container">
            <h2 className="visually-hidden">Каталог</h2>
            <div className="catalog__wrapper">
              <ul className="catalog__list">
                {visibleOffers.map((offer) => (<Card key={offer.id} {...offer} place={place} />))}
              </ul>
              {hasMore && (
                <div className="catalog__button-wrapper">
                  <button className="btn btn--second" type="button" onClick={handleShowMore}>Показать еще</button>
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
