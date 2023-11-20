import { useState } from 'react';
import { Button } from 'react-native-paper';
import { View } from 'react-native';

import { putOrderById } from '../../helpers/putOrderById';

export const ToggleProcess = ({ orderId }) => {

  const PROCESS = 2;

  const [loading, setLoading] = useState(false);

  const handleProcessOrder = () => {
    setLoading(true);

    putOrderById(orderId, PROCESS)
      .then(response => {
        setLoading(false);
      });
  }

  return (
    <>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
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
          onPress={handleProcessOrder}
        >
          Procesar
        </Button>
      </View>
    </>
  )
}
