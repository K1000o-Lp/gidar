import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Orders } from './Orders';
import { OrderScreen } from '../../../components/order/OrderScreen';

export const Inbox = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='Orders'
    >
      <Stack.Screen name='Orders' component={Orders} />
      <Stack.Screen name='Detail' component={OrderScreen} />
    </Stack.Navigator>
  )
}
