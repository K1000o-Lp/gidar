import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';

import { LayoutDefault } from './user-routes/default/LayoutDefault';

export const RolesNavigation = () => {

  const authState = useSelector(state => state.auth);
  const { rol } = authState.user;
  const theme = useTheme();
  const Stack = createNativeStackNavigator();

  const RenderByRole = () => {

    switch (rol) {
      case 'oati':
        return (
          <Stack.Screen name='Oati' component={LayoutOati} />
        );

      case 'director':
        return (
          <Stack.Screen name='Director' component={LayoutDirector} />
        );

      default:
        return (
          <Stack.Screen name='Default' component={LayoutDefault} />
        );
    }
  }

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.primary}
        barStyle='light-content'
        showHideTransition='fade'
      />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {
          RenderByRole()
        }
      </Stack.Navigator>
    </>

  )
}
