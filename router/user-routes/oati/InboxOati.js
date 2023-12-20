import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Dialog, Portal, Text } from 'react-native-paper';

import { OrdersOati } from './OrdersOati';
import { OrderScreen } from '../../../components/order/OrderScreen';
import { socket } from '../../../config';

export const InboxOati = () => {

  const Stack = createNativeStackNavigator();
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  const showDialog = () => {
    setVisible(true);
  }

  const hideDialog = () => {
    setVisible(false);
  }

  socket.on('notification', (data) => {
    setMessage(data)
    showDialog();
  });

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName='Orders'
      >
        <Stack.Screen name='Orders' component={OrdersOati} />
        <Stack.Screen
          name='Detail'
          component={OrderScreen}
          options={{
            title: 'Detalle de la Orden',
            headerShown: true,
          }}
        />
      </Stack.Navigator>

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Icon icon="checkbox-marked-circle" />
          <Dialog.Title style={{ textAlign: 'center' }}>Success</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">
              {message}
            </Text>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </>
  )
}
