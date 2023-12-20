import { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { socket } from '../../config';

export const ToggleFinish = ({ orderId }) => {
  const [loading, setLoading] = useState(false);

  const handleFinishOrder = () => {
    setLoading(true);
    socket.emit('setOrderFinished', orderId);
    setLoading(false);
  }

  return (
    <>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Button
          mode='contained'
          style={{
            justifyContent: 'center',
            borderRadius: 6
          }}
          disabled={loading}
          loading={loading}
          onPress={handleFinishOrder}
        >
          Finalizar Orden
        </Button>
      </View>
    </>
  )
}
