import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const Header = (): JSX.Element => (
  <header className="header header--authorized">
    <div className="container">
      <div className="header__inner"><span className="header__logo"><Link to={AppRoute.Root}><img src="img/svg/logo.svg" width="170" height="69" alt="Кондитерская кекс" /></Link></span>
        <div className="header__user-info-wrap">
          <div className="header__user-info">
            <div className="header__user-avatar">
              <picture>
                <source type="image/webp" srcSet="img/content/user-avatar.webp, img/content/user-avatar@2x.webp 2x" /><img src="img/content/user-avatar.jpg" srcSet="img/content/user-avatar@2x.jpg 2x" width="62" height="62" alt="Аватар пользователя." />
              </picture>
            </div>
            <p className="header__user-mail">keks@academy.ru</p>
          </div>
        </div>
        <div className="header__buttons">
          <Link className="header__favourite" to={AppRoute.Favourites}>
            <span className="header__favourite-icon">
              <svg width="33" height="29" aria-hidden="true">
                <use xlinkHref="#icon-favourite"></use>
              </svg>
            </span>
            <span className="header__favourite-number">2</span><span className="visually-hidden">Избранное</span>
          </Link>
          <div className="header__buttons-authorized">
            <div className="header__btn">
              <a className="btn btn--second" href="#">Выйти</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
