import { Dialog, Portal, Text } from 'react-native-paper';
import { OrderList } from '../order/OrderList';
import { useSelector } from 'react-redux';
import { socket } from '../../config';
import { useState } from 'react';


export const PendingUserScreen = () => {

  const authState = useSelector(state => state.auth);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  console.log(authState);

  const { idDependency } = authState.user;

  socket.on('message', (messageRecieve) => {
    setMessage(messageRecieve);
    showDialog();
  })

  return (
    <>
      <OrderList status={1} dependency={idDependency} />

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Icon icon="checkbox-marked-circle" />
          <Dialog.Title style={{ textAlign: 'center' }}>Mensaje</Dialog.Title>
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
