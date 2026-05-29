import type { Comment } from '../../types/types';
import { formatDate } from '../../utils';
import RatingStar from '../rating-star/rating-star';

const Review = ({isoDate, user, positive, negative, rating}: Comment) => {
  const {name, avatarUrl} = user;

  return (
    <div className="review">
      <div className="review__inner-wrapper">
        <time className="review__date" dateTime={isoDate}>{formatDate(isoDate)}</time><span className="review__author">Уважаемый(-ая) {name}</span>
        <div className="star-rating">
          <RatingStar rating={rating}/>
        </div>
        <div className="review__text-wrapper">
          <p className="review__text">{positive}</p>
          <p className="review__text">{negative}</p>
        </div>
        <div className="review__image-wrapper">
          <picture>
            <source type="image/webp" srcSet={avatarUrl} /><img src={avatarUrl} srcSet={avatarUrl} width="162" height="162" alt={`avatar ${name}`} />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Review;

