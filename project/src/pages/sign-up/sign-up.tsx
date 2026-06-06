import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/use-app';
import { signupUser, uploadAvatar } from '../../store/actions';


const SignUp = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [validationError, setValidationError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const avatar = formData.get('avatar') as File;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setValidationError('Введите корректный адрес электронной почты.');
      return;
    }

    const passwordRegex = /^(?=.*[A-Za-zА-Яа-я])(?=.*\d)[^\s]+$/;
    if (!passwordRegex.test(password)) {
      setValidationError('Пароль должен содержать минимум одну букву, одну цифру и быть без пробелов.');
      return;
    }
    setValidationError(null);

    const submitData = async () => {
      try {
        await dispatch(signupUser({name, email, password})).unwrap();

        if (avatar && avatar.size > 0) {
          const avatarFormData = new FormData();
          avatarFormData.append('avatar', avatar);

          await dispatch(uploadAvatar(avatarFormData)).unwrap();
        }

        navigate(AppRoute.Root);
      } catch (error) {
        setValidationError('Ошибка регистрации. Возможно, такой email уже занят.');
      }
    };

    submitData();
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
                      <input type="file" name="avatar" data-text="Аватар" accept="image/jpeg, image/png" />
                    </label>
                  </div>
                </div>
                {validationError && <p style={{color: 'red'}}>{validationError}</p>}
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
