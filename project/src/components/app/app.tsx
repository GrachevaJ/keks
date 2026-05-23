import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favourites from '../../pages/favourites/favourites';
import Catalog from '../../pages/catalog/catalog';
import ProductPage from '../../pages/product-page/product-page';
import ErrorPage from '../../pages/error-page/error-page';
import SignUp from '../../pages/sign-up/sign-up';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Offer, Comment } from '../../types/types';


type AppProps = {
  offers: Offer[];
  reviews: Comment[];
}

const App = ({offers, reviews}: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Main offers={offers} />} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path={AppRoute.SignUp} element={<SignUp />} />
      <Route path={AppRoute.Favourites}
        element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.Auth}
          >
            <Favourites offers={offers}/>
          </PrivateRoute>
        }
      />
      <Route path={`${AppRoute.ProductPage}/:id`} element={<ProductPage reviews={reviews}/>} />
      <Route path={AppRoute.Catalog} element={<Catalog offers={offers}/>} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
