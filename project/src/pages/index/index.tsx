import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

const Main = ():JSX.Element => (
  <>
    <Header />
    <main>
      <div className="hero">
        <div className="container">
          <div className="hero__img-wrapper"><img className="hero__img" src="img/svg/hero-keks.svg" width="727" height="569" alt="Картика кота." /></div>
          <div className="hero__wrapper">
            <p className="hero__subtitle">Твоя пушистая кондитерская</p>
            <p className="hero__title">КЕКС</p>
            <div className="hero__button-wrapper">
              <a className="btn" href="catalog-page.html">Скорее смотреть</a>
            </div>
          </div>
        </div>
      </div>
      <section className="random-main">
        <div className="container">
          <h2 className="random-main__title">кексы</h2>
          <ul className="random-main__list">
            <li className="random-main__item">
              <div className="card-item">
                <a className="card-item__img-link" href="#">
                  <div className="card-item__img-wrapper">
                    <picture>
                      <source type="image/webp" srcSet="img/content/blueberry-cake.webp, img/content/blueberry-cake@2x.webp 2x" /><img src="img/content/blueberry-cake.jpg" srcSet="img/content/blueberry-cake@2x.jpg 2x" width="241" height="245" alt="Торт голубика." />
                    </picture>
                  </div><span className="card-item__label">Новинка</span>
                </a>
                <button className="card-item__favorites card-item__favorites--active"><span className="visually-hidden">Добавить в избранное</span>
                  <svg width="51" height="41" aria-hidden="true">
                    <use xlinkHref="#icon-like"></use>
                  </svg>
                </button>
                <a className="card-item__link" href="#">
                  <h3 className="card-item__title"><span>Торт Голубика</span></h3>
                </a>
              </div>
            </li>
            <li className="random-main__item">
              <div className="card-item">
                <a className="card-item__img-link" href="#">
                  <div className="card-item__img-wrapper">
                    <picture>
                      <source type="image/webp" srcSet="img/content/chocolate-pie.webp, img/content/chocolate-pie@2x.webp 2x" /><img src="img/content/chocolate-pie.jpg" srcSet="img/content/chocolate-pie@2x.jpg 2x" width="241" height="245" alt="Шоколадный кекс." />
                    </picture>
                  </div>
                </a>
                <button className="card-item__favorites"><span className="visually-hidden">Добавить в избранное</span>
                  <svg width="51" height="41" aria-hidden="true">
                    <use xlinkHref="#icon-like"></use>
                  </svg>
                </button>
                <a className="card-item__link" href="#">
                  <h3 className="card-item__title"><span>Шоколадный Кекс</span></h3>
                </a>
              </div>
            </li>
            <li className="random-main__item">
              <div className="card-item">
                <a className="card-item__img-link" href="#">
                  <div className="card-item__img-wrapper">
                    <picture>
                      <source type="image/webp" srcSet="img/content/lemon-pie.webp, img/content/lemon-pie@2x.webp 2x" /><img src="img/content/lemon-pie.jpg" srcSet="img/content/lemon-pie@2x.jpg 2x" width="241" height="245" alt="Лимонный чизкейк." />
                    </picture>
                  </div><span className="card-item__label">Новинка</span>
                </a>
                <button className="card-item__favorites"><span className="visually-hidden">Добавить в избранное</span>
                  <svg width="51" height="41" aria-hidden="true">
                    <use xlinkHref="#icon-like"></use>
                  </svg>
                </button>
                <a className="card-item__link" href="#">
                  <h3 className="card-item__title"><span>Лимонный Чизкейк</span></h3>
                </a>
              </div>
            </li>
            <li className="random-main__item">
              <a className="random-main__link" href="#">
                <div className="random-main__icon-wrapper">
                  <div className="random-main__icon">
                    <svg width="120" height="130" aria-hidden="true">
                      <use xlinkHref="#icon-keks"></use>
                    </svg>
                  </div>
                </div>
                <h3 className="random-main__subtitle">Все кексы</h3>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="last-review">
        <div className="container">
          <h2 className="last-review__title">последний отзыв</h2>
          <div className="review">
            <div className="review__inner-wrapper review__inner-wrapper--border">
              <time className="review__date" dateTime="2023-05-15">15.05</time><span className="review__author">Уважаемый(-ая) Кот</span>
              <div className="star-rating">
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
                </svg>
              </div>
              <div className="review__text-wrapper">
                <p className="review__text">&quot;Отличный сервис! Очень вкусный, сочный и&nbsp;яркий торт. Удобная коробка для транспортировки. Свежие фрукты и&nbsp;съедобный дизайн.</p>
                <p className="review__text">Недостатков нет, обязательно будем заказывать и&nbsp;приходить в&nbsp;Кексик</p>
              </div>
              <div className="review__image-wrapper">
                <picture>
                  <source type="image/webp" srcSet="img/content/review-1.webp, img/content/review-1@2x.webp 2x" /><img src="img/content/review-1.jpg" srcSet="img/content/review-1@2x.jpg 2x" width="162" height="162" alt="Кот" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="map">
        <div className="container">
          <h2 className="map__title">адреса</h2>
          <div className="map__wrapper"></div>
          <ul className="map__addresses">
            <li className="map__address">
              <div className="custom-toggle custom-toggle--radio custom-toggle--address">
                <input type="radio" value="user-agreement-10" id="user-agreement-id-10" name="user-agreement" />
                <label className="custom-toggle__label" htmlFor="user-agreement-id-10">Кондитерская 1</label>
                <address className="custom-toggle__address">Морской пр. 2А
                  <svg className="custom-toggle__icon" width="26" height="24" aria-hidden="true">
                    <use xlinkHref="#icon-keks-footprint"></use>
                  </svg>
                </address>
              </div>
            </li>
            <li className="map__address">
              <div className="custom-toggle custom-toggle--radio custom-toggle--address">
                <input type="radio" value="user-agreement-12" id="user-agreement-id-12" name="user-agreement" checked />
                <label className="custom-toggle__label" htmlFor="user-agreement-id-12">Кондитерская 2</label>
                <address className="custom-toggle__address">Морской пр. 2А
                  <svg className="custom-toggle__icon" width="26" height="24" aria-hidden="true">
                    <use xlinkHref="#icon-keks-footprint"></use>
                  </svg>
                </address>
              </div>
            </li>
            <li className="map__address">
              <div className="custom-toggle custom-toggle--radio custom-toggle--address">
                <input type="radio" value="user-agreement-13" id="user-agreement-id-13" name="user-agreement" />
                <label className="custom-toggle__label" htmlFor="user-agreement-id-13">Производство</label>
                <address className="custom-toggle__address">Морской пр. 2А
                  <svg className="custom-toggle__icon" width="26" height="24" aria-hidden="true">
                    <use xlinkHref="#icon-keks-footprint"></use>
                  </svg>
                </address>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Main;
