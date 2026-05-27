import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/use-app';
import { signupUser } from '../../store/actions';
import { SignupData } from '../../types/types';

const SignUp = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData) as unknown as SignupData;

    dispatch(signupUser(data));
  };

  return (
    <main>
      <section className="register-page">
        <div className="register-page__header">
          <div className="register-page__img-wrap"><img className="register-page__img" src="img/svg/hero-keks.svg" width="727" height="569" alt="Картика кота." /></div>
        </div>
        <div className="register-page__content">
          <div className="register-page__inner">
            <h1 className="register-page__title">Регистрация</h1>
            <div className="register-page__form">
              <form action="#" method="post" autoComplete="off" onSubmit={handleFormSubmit}>
                <div className="register-page__fields">
                  <div className="custom-input register-page__field">
                    <label><span className="custom-input__label">Введите ваше имя</span>
                      <input type="text" name="name" placeholder="Имя" required />
                    </label>
                  </div>
                  <div className="custom-input register-page__field">
                    <label><span className="custom-input__label">Введите вашу почту</span>
                      <input type="email" name="email" placeholder="Почта" required />
                    </label>
                  </div>
                  <div className="custom-input register-page__field">
                    <label><span className="custom-input__label">Введите ваш пароль</span>
                      <input type="password" name="password" placeholder="Пароль" required />
                    </label>
                  </div>
                  <div className="custom-input register-page__field">
                    <label><span className="custom-input__label">Введите ваше имя</span>
                      <input type="file" name="avatarUrl" data-text="Аватар" accept="image/jpeg" />
                    </label>
                  </div>
                </div>
                <button className="btn register-page__btn btn--large" type="submit">Зарегистрироваться</button>
              </form>
            </div>
            <p className="register-page__text-wrap">Уже зарегистрированы? <Link className="register-page__link" to={AppRoute.Login}>Войдите</Link> в свой аккаунт.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
