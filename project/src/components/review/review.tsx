import type { Comment } from '../../types/types';
import { STARS_COUNT } from '../../const';

const Review = ({isoDate, user, positive, negative, rating}: Comment) => {
  const {name, avatarUrl} = user;

  return (
    <div className="review">
      <div className="review__inner-wrapper">
        <time className="review__date" dateTime={isoDate}>{`${isoDate.slice(8, 10)}.${isoDate.slice(5, 7)}`}</time><span className="review__author">Уважаемый(-ая) {name}</span>
        <div className="star-rating">
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
        </div>
        <div className="review__text-wrapper">
          <p className="review__text">{positive}</p>
          <p className="review__text">{negative}</p>
        </div>
        <div className="review__image-wrapper">
          <picture>
            <source type="image/webp" srcSet={`${avatarUrl.split('.')[0]}.webp, ${avatarUrl.split('.')[0]}@2x.webp 2x`} /><img src={avatarUrl} srcSet={`${avatarUrl.split('.')[0]}@2x.jpg 2x`} width="162" height="162" alt={`avatar ${name}`} />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Review;

