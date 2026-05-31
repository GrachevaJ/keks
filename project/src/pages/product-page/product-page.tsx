import { ChangeEvent, useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import CroppedDescription from '../../components/cropped-description/cropped-description/cropped-description';
import Form from '../../components/form/form';
import NoReviews from '../../components/no-reviews/no-reviews';
import RatingStar from '../../components/rating-star/rating-star';
import ReviewList from '../../components/review-list/review-list';
import ReviewsError from '../../components/reviews-error/reviews-error';
import Spinner from '../../components/spinner/spinner';
import { AppRoute, sortLabels } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { fetchOffer, fetchReviews } from '../../store/actions';
import { getIsOfferLoading, getOffer, getReviews, getReviewsError } from '../../store/site-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { SortType } from '../../types/types';


const ProductPage = (): JSX.Element | null => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const isOfferLoading = useAppSelector(getIsOfferLoading);
  const offer = useAppSelector(getOffer);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const reviews = useAppSelector(getReviews);
  const isReviewsError = useAppSelector(getReviewsError);
  const [currentSort, setCurrentSort] = useState<SortType>('any');

  useEffect(() => {
    const {id} = params;
    if (id) {
      dispatch(fetchOffer(id));
      dispatch(fetchReviews(id));
    }
    setCurrentSort('any');
  }, [params, dispatch]);

  if (!offer) {
    return null;
  }

  const handleFormClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleChangeSort = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentSort(e.target.value as SortType);
  };

  const getSortedReviews = () => {
    const reviewsCopy = [...reviews];

    if (currentSort === 'high') {
      return reviewsCopy.sort((a, b) => b.rating - a.rating);
    }

    if (currentSort === 'low') {
      return reviewsCopy.sort((a, b) => a.rating - b.rating);
    }

    return reviewsCopy;
  };

  const sortedReviews = getSortedReviews();

  const renderReviews = () => {
    const handleReviewsTryAgain = () => {
      const {id} = params;
      if (id) {
        dispatch(fetchReviews(id));
      }
    };

    if (isReviewsError) {
      return <ReviewsError onClick={handleReviewsTryAgain}/>;
    }

    if (reviews.length === 0) {
      return <NoReviews />;
    }

    return <ReviewList reviews={sortedReviews} />;
  };

  if (isOfferLoading) {
    return <Spinner />;
  }

  const {title, price, previewImage,previewImageWebp, isNew, description, weight, rating, reviewCount} = offer;

  return (
    <>
      <h1 className="visually-hidden">Карточка: пользователь авторизован</h1>
      <div className="back-link">
        <div className="container">
          <Link className="back-link__link" to={AppRoute.Catalog}>Назад
            <svg className="back-link__icon" width="30" height="16" aria-hidden="true">
              <use xlinkHref="#icon-arrow-left"></use>
            </svg>
          </Link>
        </div>
      </div>
      <section className="item-details item-details--form-open">
        <div className="container">
          <div className="item-details__wrapper">
            <div className="item-details__top-wrapper">
              <h2 className="item-details__name">{title}</h2><span className="item-details__price">{`${price} р`}</span>
            </div>
            <div className="item-details__weight-wrapper"><span className="item-details__weight">{`${weight} грамм`}</span></div>
            <div className="item-details__bottom-wrapper">
              <div className="item-details__image-wrapper">
                <picture>
                  <source type="image/webp" srcSet={previewImageWebp} /><img src={previewImage} srcSet={previewImage} width="241" height="245" alt={title} />
                </picture>
                {isNew && (<span className="item-details__label">Новинка</span>)}
              </div>
              <div className="item-details__review-wrapper">
                <div className="star-rating star-rating--big">
                  <RatingStar rating={rating} />
                  <span className="star-rating__count">{reviewCount}</span>
                </div>
                <CroppedDescription description={description} />
                <div className="item-details__button-wrapper">
                  <button className="item-details__like-button">
                    <svg width="45" height="37" aria-hidden="true">
                      <use xlinkHref="#icon-like"></use>
                    </svg><span className="visually-hidden">Понравилось</span>
                  </button>
                  <button className="btn btn--second" type="button" onClick={handleFormClick}>{isFormVisible ? 'Отменить отзыв' : 'Оставить отзыв'}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {authorizationStatus ?
        (isFormVisible && (
          <section className="review-form">
            <div className="container">
              <div className="review-form__wrapper">
                <h2 className="review-form__title">оставить отзыв</h2>
                <div className="review-form__form">
                  <Form />
                </div>
              </div>
            </div>
          </section>
        )) : <Navigate to={AppRoute.Login} />}
      <div className="filter-sort">
        <div className="container">
          <div className="filter-sort__inner">
            <div className="filter-sort__filter-wrap">
              <h3 className="filter-sort__filter-title">Показать с рейтингом</h3>
              <div className="filter-sort__filter">
                <button className="filter-sort__filter-btn" type="button">{sortLabels[currentSort]}
                  <svg className="filter-sort__filter-icon" width="14" height="15" aria-hidden="true">
                    <use xlinkHref="#icon-polygon"></use>
                  </svg>
                </button>
                <ul className="filter-sort__filter-list">
                  <li className="filter-sort__filter-item">
                    <div className="custom-toggle custom-toggle--sorting">
                      <input
                        type="radio"
                        id="review-sort-1"
                        name="review-sort"
                        value="any"
                        checked={currentSort === 'any'}
                        onChange={handleChangeSort}
                      />
                      <label className="custom-toggle__label" htmlFor="review-sort-1">Любой</label>
                    </div>
                  </li>
                  <li className="filter-sort__filter-item">
                    <div className="custom-toggle custom-toggle--sorting">
                      <input
                        type="radio"
                        id="review-sort-2"
                        name="review-sort"
                        value="high"
                        checked={currentSort === 'high'}
                        onChange={handleChangeSort}
                      />
                      <label className="custom-toggle__label" htmlFor="review-sort-2">Высокий</label>
                    </div>
                  </li>
                  <li className="filter-sort__filter-item">
                    <div className="custom-toggle custom-toggle--sorting">
                      <input
                        type="radio"
                        id="review-sort-3"
                        name="review-sort"
                        value="low"
                        checked={currentSort === 'low'}
                        onChange={handleChangeSort}
                      />
                      <label className="custom-toggle__label" htmlFor="review-sort-3">Низкий</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="filter-sort__sort-wrap">
              <h3 className="filter-sort__sort-title">Сортировать по дате</h3>
              <div className="filter-sort__sort-btns-wrap">
                <button className="filter-sort__sort-btn filter-sort__sort-btn--inc filter-sort__sort-btn--active" type="button" aria-label="сортировка по возрастанию">
                  <svg className="filter-sort__sort-icon" width="19" height="13" aria-hidden="true">
                    <use xlinkHref="#icon-chevron-top"></use>
                  </svg>
                </button>
                <button className="filter-sort__sort-btn filter-sort__sort-btn--desc" type="button" aria-label="сортировка по убыванию">
                  <svg className="filter-sort__sort-icon" width="19" height="13" aria-hidden="true">
                    <use xlinkHref="#icon-chevron-top"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="comments">
        <h2 className="visually-hidden">Список комментариев</h2>
        <div className="container">
          {renderReviews()}
        </div>
      </section>
    </>
  );
};

export default ProductPage;

