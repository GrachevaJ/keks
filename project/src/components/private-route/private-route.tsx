import {Navigate} from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app';

type PrivateRouteProps = {
  children: JSX.Element;
}

const PrivateRoute = ({children}: PrivateRouteProps): JSX.Element => {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to='/login' />
  );
};

export default PrivateRoute;
