import { useMemo } from 'react';
import { useAppSelector } from '../../hooks/use-app';
import Card from '../card/card';

type CardListProps = {
  place?: 'index' | 'catalog';
};

const CardList = ({place}: CardListProps): JSX.Element => {
  const filteredOffers = useAppSelector((state) => {
    if (state.category === null) {
      return state.offers;
    }

    return state.offers.filter((offer) => offer.category === state.category);
  });

  const finalOffers = useMemo(() => {
    if (place === 'index') {
      return [...filteredOffers].sort(() => Math.random() - 0.5).slice(0,3);
    }

    return filteredOffers;
  }, [filteredOffers, place]);

  return (
    <>
      {finalOffers.map((offer) => <Card key={offer.id} {...offer} place={place}/>)}
    </>
  );
};

export default CardList;
