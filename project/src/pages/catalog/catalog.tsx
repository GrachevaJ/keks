import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

const Catalog = (): JSX.Element => (
  <>
    <Header />
    <main>
      <h1 className="visually-hidden">Каталог товаров</h1>
      <div className="back-link">
        <div className="container">
          <a className="back-link__link" href="#">Назад
            <svg className="back-link__icon" width="30" height="16" aria-hidden="true">
              <use xlinkHref="#icon-arrow-left"></use>
            </svg>
          </a>
        </div>
      </div>
      <div className="catalog-filter">
        <div className="container">
          <div className="catalog-filter__first-level">
            <h3 className="catalog-filter__title catalog-filter__title--first-level">основы</h3>
            <ul className="catalog-filter__list catalog-filter__list--first-level">
              <li className="catalog-filter__item catalog-filter__item--first-level">
                <button className="btn btn--filter-first-level" type="button">Бисквит</button>
              </li>
              <li className="catalog-filter__item catalog-filter__item--first-level">
                <button className="btn btn--filter-first-level" type="button">Десерт</button>
              </li>
              <li className="catalog-filter__item catalog-filter__item--first-level">
                <button className="btn btn--filter-first-level" type="button">Чизкейк</button>
              </li>
              <li className="catalog-filter__item catalog-filter__item--first-level">
                <button className="btn btn--filter-first-level" type="button">Песочное</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="catalog">
        <div className="container">
          <h2 className="visually-hidden">Каталог</h2>
          <div className="catalog__wrapper">
            <ul className="catalog__list">
              <li className="catalog__item">
                <div className="card-item card-item--big">
                  <a className="card-item__img-link" href="#">
                    <div className="card-item__img-wrapper">
                      <picture>
                        <source type="image/webp" srcSet="img/content/blueberry-cake.webp, img/content/blueberry-cake@2x.webp 2x" /><img src="img/content/blueberry-cake.jpg" srcSet="img/content/blueberry-cake@2x.jpg 2x" width="326" height="332" alt="Торт голубика." />
                      </picture>
                    </div><span className="card-item__label">Новинка</span>
                  </a>
                  <button className="card-item__favorites card-item__favorites--active"><span className="visually-hidden">Добавить в избранное</span>
                    <svg width="51" height="41" aria-hidden="true">
                      <use xlinkHref="#icon-like"></use>
                    </svg>
                  </button><span className="card-item__price">9 300 p</span>
                  <a className="card-item__link" href="#">
                    <h3 className="card-item__title"><span>Торт Голубика</span></h3>
                  </a>
                </div>
              </li>
              <li className="catalog__item">
                <div className="card-item card-item--big">
                  <a className="card-item__img-link" href="#">
                    <div className="card-item__img-wrapper">
                      <picture>
                        <source type="image/webp" srcSet="img/content/blueberry-muffin.webp, img/content/blueberry-muffin@2x.webp 2x" /><img src="img/content/blueberry-muffin.jpg" srcSet="img/content/blueberry-muffin@2x.jpg 2x" width="326" height="332" alt="Тарт голубика." />
                      </picture>
                    </div>
                  </a>
                  <button className="card-item__favorites"><span className="visually-hidden">Добавить в избранное</span>
                    <svg width="51" height="41" aria-hidden="true">
                      <use xlinkHref="#icon-like"></use>
                    </svg>
                  </button><span className="card-item__price">1 100 p</span>
                  <a className="card-item__link" href="#">
                    <h3 className="card-item__title"><span>Тарт Голубика</span></h3>
                  </a>
                </div>
              </li>
              <li className="catalog__item">
                <div className="card-item card-item--big">
                  <a className="card-item__img-link" href="#">
                    <div className="card-item__img-wrapper">
                      <picture>
                        <source type="image/webp" srcSet="img/content/lemon-cheesecake.webp, img/content/lemon-cheesecake@2x.webp 2x" /><img src="img/content/lemon-cheesecake.jpg" srcSet="img/content/lemon-cheesecake@2x.jpg 2x" width="326" height="332" alt="Чизкейк лимонный." />
                      </picture>
                    </div><span className="card-item__label">Новинка</span>
                  </a>
                  <button className="card-item__favorites card-item__favorites--active"><span className="visually-hidden">Добавить в избранное</span>
                    <svg width="51" height="41" aria-hidden="true">
                      <use xlinkHref="#icon-like"></use>
                    </svg>
                  </button><span className="card-item__price">4 100 p</span>
                  <a className="card-item__link" href="#">
                    <h3 className="card-item__title"><span>Чизкейк Лимонный</span></h3>
                  </a>
                </div>
              </li>
              <li className="catalog__item">
                <div className="card-item card-item--big">
                  <a className="card-item__img-link" href="#">
                    <div className="card-item__img-wrapper">
                      <picture>
                        <source type="image/webp" srcSet="img/content/cupcake-chocolate.webp, img/content/cupcake-chocolate@2x.webp 2x" /><img src="img/content/cupcake-chocolate.jpg" srcSet="img/content/cupcake-chocolate@2x.jpg 2x" width="326" height="332" alt="Кекс шоколад." />
                      </picture>
                    </div>
                  </a>
                  <button className="card-item__favorites"><span className="visually-hidden">Добавить в избранное</span>
                    <svg width="51" height="41" aria-hidden="true">
                      <use xlinkHref="#icon-like"></use>
                    </svg>
                  </button><span className="card-item__price">700 p</span>
                  <a className="card-item__link" href="#">
                    <h3 className="card-item__title"><span>Кекс Шоколад</span></h3>
                  </a>
                </div>
              </li>
              <li className="catalog__item">
                <div className="card-item card-item--big">
                  <a className="card-item__img-link" href="#">
                    <div className="card-item__img-wrapper">
                      <picture>
                        <source type="image/webp" srcSet="img/content/cheesecake-vegetarian.webp, img/content/cheesecake-vegetarian@2x.webp 2x" /><img src="img/content/cheesecake-vegetarian.jpg" srcSet="img/content/cheesecake-vegetarian@2x.jpg 2x" width="326" height="332" alt="Чизкейк вегетарианский." />
                      </picture>
                    </div>
                  </a>
                  <button className="card-item__favorites"><span className="visually-hidden">Добавить в избранное</span>
                    <svg width="51" height="41" aria-hidden="true">
                      <use xlinkHref="#icon-like"></use>
                    </svg>
                  </button><span className="card-item__price">4 700 p</span>
                  <a className="card-item__link" href="#">
                    <h3 className="card-item__title"><span>Чизкейк Вегетарианский</span></h3>
                  </a>
                </div>
              </li>
              <li className="catalog__item">
                <div className="card-item card-item--big">
                  <a className="card-item__img-link" href="#">
                    <div className="card-item__img-wrapper">
                      <picture>
                        <source type="image/webp" srcSet="img/content/chocolate-cake.webp, img/content/chocolate-cake@2x.webp 2x" /><img src="img/content/chocolate-cake.jpg" srcSet="img/content/chocolate-cake@2x.jpg 2x" width="326" height="332" alt="Торт шоколадный." />
                      </picture>
                    </div>
                  </a>
                  <button className="card-item__favorites"><span className="visually-hidden">Добавить в избранное</span>
                    <svg width="51" height="41" aria-hidden="true">
                      <use xlinkHref="#icon-like"></use>
                    </svg>
                  </button><span className="card-item__price">3 700 p</span>
                  <a className="card-item__link" href="#">
                    <h3 className="card-item__title"><span>Торт Шоколадный</span></h3>
                  </a>
                </div>
              </li>
            </ul>
            <div className="catalog__button-wrapper">
              <button className="btn btn--second" type="button">Показать еще</button>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Catalog;
