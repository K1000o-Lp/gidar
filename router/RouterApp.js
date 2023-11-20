import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import { RolesNavigation } from './RolesNavigation';
import { LoginScreen } from '../components/login/LoginScreen';

export const RouterApp = () => {

  const authState = useSelector((state) => state.auth);
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {
          authState.logged ? (
            <>
              <Stack.Screen name='Roles' component={RolesNavigation} />
            </>
          ) : (
            <>
              <Stack.Screen name='Login' component={LoginScreen} />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}