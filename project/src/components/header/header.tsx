import { memo } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app';
import { getAuthorizationStatus, getUser } from '../../store/user-process/selectors';

const Header = (): JSX.Element => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const {email, avatarUrl} = useAppSelector(getUser);


  return (
    <header className="header header--authorized">
      <div className="container">
        <div className="header__inner"><span className="header__logo"><Link to={AppRoute.Root}><img src="img/svg/logo.svg" width="170" height="69" alt="Кондитерская кекс" /></Link></span>
          {(authorizationStatus === AuthorizationStatus.Auth) ? (
            <>
              <div className="header__user-info-wrap">
                <div className="header__user-info">
                  <div className="header__user-avatar">
                    <picture>
                      <source type="image/webp" srcSet={avatarUrl} /><img src={avatarUrl} srcSet={avatarUrl} width="62" height="62" alt="Аватар пользователя." />
                    </picture>
                  </div>
                  <p className="header__user-mail">{email}</p>
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
            </>) : (
            <div className="header__buttons">
              <div className="header__btn">
                <Link className="btn btn--third header__link header__link--reg" to={AppRoute.SignUp}>Регистрация</Link>
              </div>
              <div className="header__btn">
                <Link className="btn" to={AppRoute.Login}>Войти</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
