import { View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import { useNavigate } from 'react-router-native';


export const OrderItem = ({
  id, 
  asunto, 
  tipo_caso, 
  prioridad, 
  dependencia
}) => {
  
  const navigate = useNavigate();

  const goDetails = () => {
    navigate(`../detailOrder/${id}`);
  }

  return (
    <TouchableRipple
      rippleColor='rgba(0, 0, 0, .32)'
      onPress={ goDetails }
    >
      <View 
        style={{
          margin: 10,
        }}
      >
        
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text
            variant='titleLarge'
            style={{
              fontWeight: 'bold'
            }}
          >
            {asunto}
          </Text>

          <Text variant='bodyLarge'>
            {prioridad}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Text variant='bodyLarge'>
            {dependencia}
          </Text>

          <Text variant='bodyLarge'>
            {tipo_caso}
          </Text>
        </View>
      </View>
    </TouchableRipple>
  )
}
