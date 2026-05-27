import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favourites from '../../pages/favourites/favourites';
import Catalog from '../../pages/catalog/catalog';
import ProductPage from '../../pages/product-page/product-page';
import ErrorPage from '../../pages/error-page/error-page';
import SignUp from '../../pages/sign-up/sign-up';
import PrivateRoute from '../private-route/private-route';
import { AppRoute } from '../../const';
import { Comment } from '../../types/types';
import {unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';
import history from '../../store/history';


type AppProps = {
  reviews: Comment[];
}

const App = ({reviews}: AppProps): JSX.Element => (
  <HistoryRouter history={history}>
    <Routes>
      <Route index element={<Main />} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path={AppRoute.SignUp} element={<SignUp />} />
      <Route path={AppRoute.Favourites}
        element={
          <PrivateRoute>
            <Favourites />
          </PrivateRoute>
        }
      />
      <Route path={`${AppRoute.ProductPage}/:id`} element={<ProductPage reviews={reviews}/>} />
      <Route path={AppRoute.Catalog} element={<Catalog />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </HistoryRouter>
);


export default App;
