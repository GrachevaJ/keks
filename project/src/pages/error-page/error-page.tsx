
const ErrorPage = (): JSX.Element => (
  <>
    <h1 className="visually-hidden">404</h1>
    <section className="error-page">
      <div className="container">
        <h2 className="error-page__title">404</h2>
        <p className="error-page__message">Страница не найдена</p>
        <p className="error-page__text">Она была удалена<br/>или<br/>вы&nbsp;указали неправильный адрес.</p>
        <div className="error-page__button">
          <a className="btn btn--large" href="index.html">Вернуться&nbsp;на&nbsp;главную</a>
        </div>
      </div>
    </section>
  </>
);

export default ErrorPage;
