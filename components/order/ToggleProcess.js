import { useState } from 'react';
import { Button, useTheme } from 'react-native-paper';
import { View } from 'react-native';
import DropDown from 'react-native-paper-dropdown';

import { useGetResponsables } from '../../hooks/useGetResponsables';
import { socket } from '../../config';

export const ToggleProcess = ({ orderId }) => {

  const [showDropDown, setShowDropDown] = useState(false)
  const [responsable, setResponsable] = useState('');
  const [loading, setLoading] = useState(false);
  const responsablesList = useGetResponsables();
  const theme = useTheme();

  const handleProcessOrder = () => {
    setLoading(true);
    socket.emit('setOrderInProgress', { orderId, responsable });
    setLoading(false);
  }

  return (
    <>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <DropDown
          mode='outlined'
          label='Responsable'
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          value={responsable}
          setValue={setResponsable}
          list={responsablesList}
          dropDownContainerHeight={125}
        />

        <Button
          mode='contained'
          style={{
            marginTop: 25,
            borderRadius: 6,
          }}
          disabled={loading}
          loading={loading}
          onPress={handleProcessOrder}
        >
          Procesar Orden
        </Button>
      </View>
    </>
  )
}
