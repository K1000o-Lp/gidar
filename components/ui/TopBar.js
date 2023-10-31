import { Appbar } from 'react-native-paper';
import { useNavigate } from 'react-router-native';

export const TopBar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
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