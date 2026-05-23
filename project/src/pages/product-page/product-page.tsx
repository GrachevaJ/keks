import Footer from '../../components/footer/footer';
import Form from '../../components/form/form';
import Header from '../../components/header/header';
import ReviewList from '../../components/review-list/review-list';
import { Comment } from '../../types/types';


type ProductPageProps = {
  reviews: Comment[];
}

const ProductPage = ({reviews}: ProductPageProps): JSX.Element => (
  <>
    <Header />
    <main>
      <h1 className="visually-hidden">Карточка: пользователь авторизован</h1>
      <div className="back-link">
        <div className="container">
          <a className="back-link__link" href="#">Назад
            <svg className="back-link__icon" width="30" height="16" aria-hidden="true">
              <use xlinkHref="#icon-arrow-left"></use>
            </svg>
          </a>
        </div>
      </div>
      <section className="item-details item-details--form-open">
        <div className="container">
          <div className="item-details__wrapper">
            <div className="item-details__top-wrapper">
              <h2 className="item-details__name">Чизкейк Лимонный</h2><span className="item-details__price">4 100 р</span>
            </div>
            <div className="item-details__weight-wrapper"><span className="item-details__weight">1 300 грамм</span></div>
            <div className="item-details__bottom-wrapper">
              <div className="item-details__image-wrapper">
                <picture>
                  <source type="image/webp" srcSet="img/content/lemon-pie.webp, img/content/lemon-pie@2x.webp 2x" /><img src="img/content/lemon-pie.jpg" srcSet="img/content/lemon-pie@2x.jpg 2x" width="241" height="245" alt="Чизкейк лимонный" />
                </picture><span className="item-details__label">Новинка</span>
              </div>
              <div className="item-details__review-wrapper">
                <div className="star-rating star-rating--big">
                  <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg><span className="star-rating__count">26</span>
                </div>
                <div className="item-details__text-wrapper"><span className="item-details__text">Цитрусовый десерт с тонким сливочным вкусом, лёгкой свежестью и низким содержанием калорий сд</span>
                  <button className="item-details__more"><span className="visually-hidden">Читать полностью</span>
                    <svg width="27" height="17" aria-hidden="true">
                      <use xlinkHref="#icon-more"></use>
                    </svg>
                  </button>
                </div>
                <div className="item-details__button-wrapper">
                  <button className="item-details__like-button">
                    <svg width="45" height="37" aria-hidden="true">
                      <use xlinkHref="#icon-like"></use>
                    </svg><span className="visually-hidden">Понравилось</span>
                  </button>
                  <button className="btn btn--second" type="button">Отменить отзыв</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <div className="filter-sort">
        <div className="container">
          <div className="filter-sort__inner">
            <div className="filter-sort__filter-wrap">
              <h3 className="filter-sort__filter-title">Показать с рейтингом</h3>
              <div className="filter-sort__filter">
                <button className="filter-sort__filter-btn" type="button">Любой
                  <svg className="filter-sort__filter-icon" width="14" height="15" aria-hidden="true">
                    <use xlinkHref="#icon-polygon"></use>
                  </svg>
                </button>
                <ul className="filter-sort__filter-list">
                  <li className="filter-sort__filter-item">
                    <div className="custom-toggle custom-toggle--sorting">
                      <input type="radio" id="review-sort-1" name="review-sort" checked />
                      <label className="custom-toggle__label" htmlFor="review-sort-1">Любой</label>
                    </div>
                  </li>
                  <li className="filter-sort__filter-item">
                    <div className="custom-toggle custom-toggle--sorting">
                      <input type="radio" id="review-sort-2" name="review-sort" />
                      <label className="custom-toggle__label" htmlFor="review-sort-2">Высокий</label>
                    </div>
                  </li>
                  <li className="filter-sort__filter-item">
                    <div className="custom-toggle custom-toggle--sorting">
                      <input type="radio" id="review-sort-3" name="review-sort" />
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
          <ReviewList reviews={reviews} />
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ProductPage;

