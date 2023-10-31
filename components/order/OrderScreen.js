import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-native';
import { getOrderById } from '../../selectors/getOrderById';
import { Appbar, Text } from 'react-native-paper';
import { ScrollView, View } from 'react-native';
import { ToggleForm } from './ToggleForm';

export const OrderScreen = ({admin = false}) => {

  const navigate = useNavigate();
  const { OrderId } = useParams();

  const order = useMemo( () => getOrderById(OrderId), [ OrderId ]);

  const goBack = () => {
    navigate( -1 );
  }

  const {
    id,
    asunto,
    persona,
    descripcion,
    tipo_caso,
    estado,
    prioridad,
    responsable,
    dependencia,
  } = order;

  return (
    <>
      <Appbar.Header
        style={{
          height: 10,
          backgroundColor: 'white',
        }}
      >
        <Appbar.Action 
          icon='arrow-left'
          onPress={ goBack }
        />
      </Appbar.Header>

      <ScrollView
        style={{
          marginBottom: 155,
        }}
      >
        <View
          style={{
            marginTop: 30,
            marginHorizontal: 20,
          }}
        >
          <Text 
            variant='headlineLarge'
            style={{
              fontWeight: 'bold',
            }}
          >
            { asunto }
          </Text>

          <Text
            variant='titleLarge'
            style={{
              marginTop: 10,
            }}
          >
            { persona } - { dependencia }
          </Text>

          <Text
            variant='labelLarge'
            style={{
              marginTop: 35,
            }}
          >
            { descripcion }
          </Text>
          
          {
            admin 
            && (
              <ToggleForm statusOrder={estado} responsable={responsable} />
            )
          }
        </View>
      </ScrollView>
    </>
  )
}
