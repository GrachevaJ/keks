import type { Offer } from '../../types/types';

import Card from '../card/card';

type CardListProps = {
  offers: Offer[];
};

const CardList = ({offers}: CardListProps): JSX.Element => (
  <>
    {offers.map((offer) => <Card key={offer.id} {...offer} />)}
  </>
);

export default CardList;
