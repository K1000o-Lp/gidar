import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';

import { UiDefault } from './user-routes/default/UiDefault';
import { UiOati } from './user-routes/oati/UiOati';
import { socket } from '../config';
import { useEffect } from 'react';

export const RolesNavigation = () => {

  const authState = useSelector(state => state.auth);
  console.log(authState);
  const { user } = authState;
  const theme = useTheme();
  const Stack = createNativeStackNavigator();

  const RenderByRole = () => {
    switch (user?.rol) {
      case 'oati':
        return (
          <Stack.Screen name='Oati' component={UiOati} />
        );

      case 'director':
        return (
          <Stack.Screen name='Director' component={LayoutDirector} />
        );

      default:
        return (
          <Stack.Screen name='Default' component={UiDefault} />
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
