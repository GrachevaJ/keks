import type { Offer } from '../../types/types';

import Card from '../card/card';

type CardListProps = {
  offers: Offer[];
  place?: 'index' | 'catalog';
};

const CardList = ({offers, place}: CardListProps): JSX.Element => (
  <>
    {offers.map((offer) => <Card key={offer.id} {...offer} place={place}/>)}
  </>
);

export default CardList;
