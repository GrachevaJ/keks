import { useState } from 'react';
import type { Comment } from '../../types/types';
import Review from '../review/review';

type ReviewListProps = {
  reviews: Comment[];
  initialLimit?: number;
  step?: number;
}

const ReviewList = ({reviews, initialLimit = 2, step = 2}: ReviewListProps) => {
  const [limit, setLimit] = useState<number>(initialLimit);
  const visibleReviews = [...reviews].sort((a, b) => b.isoDate.localeCompare(a.isoDate)).slice(0, limit);
  const hasMore = limit < reviews.length;

  const handleShowMore = () => {
    setLimit((prevLimit) => prevLimit + step);
  };

  return (
    <div className="comments__wrapper">
      {reviews.length > 0 && (
        <>
          {visibleReviews.map((review) => (<Review key={review.id} {...review} />))}
          {hasMore && (
            <div className="comments__show-more">
              <button className="btn btn--second comments__button" type="button" onClick={handleShowMore}>Показать еще</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ReviewList;
