import { useAppSelector } from '../../hooks/use-app';
import { formatDate } from '../../utils';
import RatingStar from '../rating-star/rating-star';

const LastReview = (): JSX.Element => {
  const {isoDate, user, positive, negative, rating} = useAppSelector((state) => state.lastReview);
  const {name, avatarUrl} = user;

  return (
    <section className="last-review">
      <div className="container">
        <h2 className="last-review__title">последний отзыв</h2>
        <div className="review">
          <div className="review__inner-wrapper review__inner-wrapper--border">
            <time className="review__date" dateTime={isoDate}>{formatDate(isoDate)}</time><span className="review__author">Уважаемый(-ая) {name}</span>
            <div className="star-rating">
              <RatingStar rating={rating} />
            </div>
            <div className="review__text-wrapper">
              <p className="review__text">{positive}</p>
              <p className="review__text">{negative}</p>
            </div>
            <div className="review__image-wrapper">
              <picture>
                <source type="image/webp" srcSet={`${avatarUrl.substring(0, avatarUrl.lastIndexOf('.'))}.webp, ${avatarUrl.substring(0, avatarUrl.lastIndexOf('.'))}@2x.webp 2x`} />
                <img src={avatarUrl} srcSet={avatarUrl} width="162" height="162" alt={`avatar ${name}`} />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastReview;
