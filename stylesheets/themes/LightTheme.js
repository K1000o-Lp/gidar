import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#003785',
    secondary: '#2196f3',
    surface: '#003785',
    elevation: {
      level2: '#e9f9ff',
      level3: '#cad7db',
    }
  },
}