import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';

export const OrderItem = memo(({
  id_caso,
  asunto,
  dependencia,
}) => {

  const navigation = useNavigation();

  const goDetails = () => {
    navigation.navigate('Detail', {
      orderId: id_caso,
    });
  }

  return (
    <TouchableRipple
      rippleColor='rgba(0, 0, 0, .32)'
      onPress={goDetails}
    >
      <View
        style={{
          margin: 10,
          flex: 1,
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
          {dependencia.descripcion}
        </Text>
      </View>
    </TouchableRipple >
  )
})
