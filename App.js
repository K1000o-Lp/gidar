import { PaperProvider } from 'react-native-paper';
import { RouterApp } from './router/RouterApp';

import { theme } from './stylesheets/themes/LightTheme';
import { Provider } from 'react-redux';
import { store } from './store';

export default App = () => {

  return (
    <>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <RouterApp />
        </PaperProvider>
      </Provider>
    </>
  );
}
