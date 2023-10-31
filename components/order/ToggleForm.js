import { useState } from 'react';
import { Button } from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import { View } from 'react-native';

import { responsables } from '../../data/responsables';

export const ToggleForm = ({responsable, statusOrder}) => {

  const [showDropDown, setShowDropDown] = useState(false);
  const [encargado, setEncargado] = useState("");

  const dimension = statusOrder === 'pendiente' ? 'space-between' : 'center';

  return (
    <>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          justifyContent: dimension,
          alignItems: 'center'
        }}
      >
        {
          !responsable && (
            <DropDown
              mode='outlined'
              label='Responsable'
              visible={showDropDown}
              showDropDown={ () => setShowDropDown(true) }
              onDismiss={ () => setShowDropDown(false) }
              value={ encargado }
              setValue={ setEncargado }
              list={ responsables }
            />
          )
        }

        {
          statusOrder != 'finalizado'
          && (
            <Button
              mode='contained'
              style={{
                justifyContent: 'center',
                borderRadius: 6
              }}
            >
              {
                statusOrder === 'pendiente'
                ? 'Procesar' 
                : statusOrder === 'en proceso'
                && 'Finalizar'
              }
            </Button>
          )
        }
      </View>

    </>
  )
}
