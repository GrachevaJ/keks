import { useAppSelector } from '../../hooks/use-app';
import Review from '../review/review';

const LastReview = (): JSX.Element => {
  const lastReview = useAppSelector((state) => state.lastReview);

  return (
    <section className="last-review">
      <div className="container">
        <h2 className="last-review__title">последний отзыв</h2>
        <Review {...lastReview} />
      </div>
    </section>
  );
};

export default LastReview;
