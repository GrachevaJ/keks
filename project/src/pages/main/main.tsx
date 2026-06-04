import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LastReview from '../../components/last-review/last-review';
import MainCardList from '../../components/main-card-list/main-card-list';
import Map from '../../components/map/map';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/use-app';
import { fetchLastReview, fetchOffers } from '../../store/actions';
import { setActiveCategory } from '../../store/site-process/site-process';

const Main = ():JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
    dispatch(setActiveCategory(null));
    dispatch(fetchLastReview());
  }, [dispatch]);

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero__img-wrapper"><img className="hero__img" src="img/svg/hero-keks.svg" width="727" height="569" alt="Картика кота." /></div>
          <div className="hero__wrapper">
            <p className="hero__subtitle">Твоя пушистая кондитерская</p>
            <p className="hero__title">КЕКС</p>
            <div className="hero__button-wrapper">
              <Link className="btn" to={AppRoute.Catalog}>Скорее смотреть</Link>
            </div>
          </div>
        </div>
      </div>
      <MainCardList />
      <LastReview />
      <section className="map">
        <div className="container">
          <h2 className="map__title">адреса</h2>
          <Map />
          <ul className="map__addresses">
            <li className="map__address">
              <div className="custom-toggle custom-toggle--radio custom-toggle--address">
                <input type="radio" value="user-agreement-10" id="user-agreement-id-10" name="user-agreement" checked/>
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
                <input type="radio" value="user-agreement-12" id="user-agreement-id-12" name="user-agreement" />
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
    </>
  );
};

export default Main;
