import { useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PaperProvider } from 'react-native-paper';

import { authReducer } from './auth/authReducer';
import { AuthContext } from './auth/authContext';
import { RouterApp } from './router/RouterApp';

import { theme } from './stylesheets/themes/LightTheme';

const init = async () => {
  return JSON.parse( await AsyncStorage.getItem('user') ) || { logged: false };
}

export default App = () => {

  const [ user, dispatch ] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if( !user ) return;

    (async () => {
      await AsyncStorage.setItem('user', JSON.stringify(user));
    })()
  }, [ user ])

  return (
    <>
      <AuthContext.Provider value={{
        user,
        dispatch
      }}>
        <PaperProvider theme={ theme }>
          <RouterApp />
        </PaperProvider>
      </AuthContext.Provider>

    </>
  );
}
