import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-native';

export const PublicRoute = ({ children }) => {

  const authState = useSelector((state) => state.auth);

  return !authState.logged
        ?  children
        : <Navigate to='/'/>
}
