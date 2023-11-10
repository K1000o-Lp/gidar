import { PaperProvider } from 'react-native-paper';
import { RouterApp } from './router/RouterApp';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { theme } from './stylesheets/themes/LightTheme';
import { authReducer } from './reducers/authReducer';
import { Provider } from 'react-redux';

export default App = () => {

  const rootReducer = combineReducers({
    auth: authReducer,
  });

  const store = configureStore({
    reducer: rootReducer,
  });

  return (
    <>
      <Provider store={store}>
        <PaperProvider theme={ theme }>
          <RouterApp />
        </PaperProvider>
      </Provider>
    </>
  );
}
