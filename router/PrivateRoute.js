import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-native';

export const PrivateRoute = ({ children }) => {

  const authState = useSelector((state) => state.auth);

  return authState.logged
        ? children
        : <Navigate to='/login' />
}
