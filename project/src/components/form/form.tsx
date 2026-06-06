import type {ChangeEvent, FormEvent} from 'react';
import {useState, Fragment} from 'react';
import { STARS_COUNT } from '../../const';
import { ReviewAuth } from '../../types/types';

type FormProps = {
  onSubmit: (FormData: Omit<ReviewAuth, 'id'>) => void;
}
const Form = ({onSubmit}: FormProps): JSX.Element => {
  const [advantages, setAdvantages] = useState<string>('');
  const [disadvantages, setDisadvantages] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  const handleAdvantagesChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAdvantages(e.target.value);
  };

  const handleDisadvantagesChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDisadvantages(e.target.value);
  };

  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({
      positive: advantages,
      negative: disadvantages,
      rating
    });
  };

  return (
    <form action="#" method="post" autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="review-form__inputs-wrapper">
        <div className="custom-input">
          <label><span className="custom-input__label">Достоинства</span>
            <input type="text" name="advantages" placeholder="Достоинства" minLength={5} maxLength={500} value={advantages} onChange={handleAdvantagesChange} required={rating >= 4} />
            {rating >= 4 && <span style={{color: '#FFA181', fontSize: '12px', borderBottom: '2px solid #DD7870', padding: '25px 0 10px 0'}}>Осталось {500 - advantages.length} символов</span>}
          </label>
        </div>
        <div className="custom-input">
          <label><span className="custom-input__label">Недостатки</span>
            <input type="text" name="disadvantages" placeholder="Недостатки" minLength={5} maxLength={500} value={disadvantages} onChange={handleDisadvantagesChange} required={rating <= 3} />
            {(rating <= 3 && rating !== 0) && <span style={{color: '#FFA181', fontSize: '12px', borderBottom: '2px solid #DD7870', padding: '25px 0 10px 0'}}>Осталось {500 - disadvantages.length} символов</span>}
          </label>
        </div>
      </div>
      <div className="review-form__submit-wrapper">
        <div className="review-form__rating-wrapper">
          <div className="input-star-rating">
            {Array.from({length: STARS_COUNT}, (_, i) => (
              <Fragment key={`input-star-rating-${i}`}>
                <input
                  type="radio"
                  name="input-star-rating"
                  id={`input-star-rating-${STARS_COUNT - i}`}
                  value={STARS_COUNT - i}
                  aria-label={`${STARS_COUNT - i} звезд`}
                  checked={STARS_COUNT - i === rating}
                  onChange={handleRatingChange}
                  required
                />
                <label htmlFor={`input-star-rating-${STARS_COUNT - i}`}>
                  <svg width="40" height="40" aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </Fragment>
            ))}
          </div>
        </div>
        <div className="review-form__button-wrapper">
          <button className="btn review-form__button" type="submit">Отправить отзыв</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
