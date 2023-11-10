import { Appbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-native';
import { logout } from '../../actions/authActions';

export const TopBar = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate('/');
  }

  return (
      <Appbar.Header 
        dark={ true }
        style={{
          justifyContent: 'flex-end'
        }}
      >
        <Appbar.Action 
          icon="logout"
          onPress={ onLogout } 
        />
      </Appbar.Header>
  )
}