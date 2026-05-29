import { STARS_COUNT } from '../../const';

type RatingStarProps = {
  rating: number;
}

const RatingStar = ({rating}: RatingStarProps): JSX.Element => (
  <>
    {Array.from({length: STARS_COUNT}).map((_, index) => {
      const isActive: boolean = index < rating;

      return (
        <svg
          key={`star-${index + 1}`}
          className={`star-rating__star ${isActive ? 'star-rating__star--active' : ''}`}
          width="30"
          height="30"
          aria-hidden="true"
        >
          <use xlinkHref="#icon-star"></use>
        </svg>
      );
    })}
  </>
);

export default RatingStar;
