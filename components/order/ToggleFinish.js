import { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import { putOrderById } from '../../helpers/putOrderById';

export const ToggleFinish = ({ orderId }) => {

  const FINISH = 3;

  const [loading, setLoading] = useState(false);

  const handleFinishOrder = () => {
    setLoading(true);

    putOrderById(orderId, FINISH)
      .then(response => {
        setLoading(false);
      })
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
          onPress={handleFinishOrder}
        >
          Finalizar
        </Button>
      </View>
    </>
  )
}
