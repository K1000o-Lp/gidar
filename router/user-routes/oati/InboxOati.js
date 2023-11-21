import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { OrdersOati } from './OrdersOati';
import { OrderScreen } from '../../../components/order/OrderScreen';

export const InboxOati = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='Orders'
    >
      <Stack.Screen name='Orders' component={OrdersOati} />
      <Stack.Screen name='Detail' component={() => <OrderScreen admin={true} />} />
    </Stack.Navigator>
  )
}
