import {Navigate} from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

const PrivateRoute = ({children}: PrivateRouteProps): JSX.Element => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to='/login' />
  );
};

export default PrivateRoute;
