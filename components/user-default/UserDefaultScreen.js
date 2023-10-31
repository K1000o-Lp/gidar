import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Text, TextInput, useTheme } from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';

const ocurrencesList = [
  {
    label: 'Equipo',
    value: 1,
  },
  {
    label: 'Impresora',
    value: 2,
  },
  {
    label: 'Redes',
    value: 3,
  },
]

export const UserDefaultScreen = () => {

  const theme = useTheme();
  const [showDropDown, setShowDropDown] = useState(false);
  const [ocurrences, setOcurrences] = useState("");

  const onPressToReport = () => {
    
  }

  return (
    <>
      <View style={{
        margin: 20,
        alignItems: 'center'
        }}
      >
        <Text
          variant='headlineSmall'
        >
          Bienvenido
        </Text>

        <Text
          variant='titleMedium'
          style={{
            color: theme.colors.secondary
          }}
        >
          López Camilo
        </Text>

        <Text
          variant='labelLarge'
        >
          Por favor, indique su caso
        </Text>
      </View>

      <ScrollView>
        <View
          style={{
            marginHorizontal: 35,
            marginTop: 35
          }}
        >
          <TextInput
            mode='outlined'
            label='Asunto'
            style={{
              marginBottom: 20,
            }}
          />

          <DropDown
            mode='outlined'
            label='Tipo de Caso'
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={ocurrences}
            setValue={setOcurrences}
            list={ocurrencesList}
          />

          <TextInput
            mode='outlined'
            label='Breve Descripción'
            multiline
            style={{
              marginTop: 20,
            }}
          />

          <Button
            style={{
              marginTop: 35,
              borderRadius: 6,
            }}
            mode='contained'
            onPress={() => onPressToReport()}
          >
            Reportar
          </Button>
        </View>
      </ScrollView>
      


    </>
  )
}