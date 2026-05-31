import { Link } from 'react-router-dom';
import CatalogCardList from '../../components/catalog-card-list/catalog-card-list';
import CategoriesList from '../../components/categories-list/categories-list';
import { AppRoute } from '../../const';


const Catalog = (): JSX.Element => (
  <>
    <h1 className="visually-hidden">Каталог товаров</h1>
    <div className="back-link">
      <div className="container">
        <Link className="back-link__link" to={AppRoute.Root}>Назад
          <svg className="back-link__icon" width="30" height="16" aria-hidden="true">
            <use xlinkHref="#icon-arrow-left"></use>
          </svg>
        </Link>
      </div>
    </div>
    <div className="catalog-filter">
      <div className="container">
        <CategoriesList />
      </div>
    </div>
    <CatalogCardList />
  </>
);

export default Catalog;
