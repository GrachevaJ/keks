import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddressesList from '../../components/addresses-list/addresses-list';
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
          <AddressesList />
        </div>
      </section>
    </>
  );
};

export default Main;
