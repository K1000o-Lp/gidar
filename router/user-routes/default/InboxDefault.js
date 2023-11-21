import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { OrdersDefault } from './OrdersDefault';
import { OrderScreen } from '../../../components/order/OrderScreen';

export const InboxDefault = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='Orders'
    >
      <Stack.Screen name='Orders' component={OrdersDefault} />
      <Stack.Screen name='Detail' component={OrderScreen} />
    </Stack.Navigator>
  )
}
