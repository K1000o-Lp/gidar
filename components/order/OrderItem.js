import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';


export const OrderItem = ({
  id,
  issue,
  dependency,
  ocurrenceType,
  priority,
}) => {

  const navigation = useNavigation();

  const goDetails = () => {
    navigation.navigate('Detail', {
      orderId: id,
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
          flexDirection: 'row',
          flex: 1,
        }}
      >

        <View
          style={{
            flex: .7,
          }}
        >
          <Text
            variant='titleLarge'
            style={{
              fontWeight: 'bold'
            }}
          >
            {issue}
          </Text>

          <Text variant='bodyLarge'>
            {dependency}
          </Text>
        </View>

        <View
          style={{
            flex: .3,
            alignItems: 'flex-end',
            justifyContent: 'space-around',
          }}
        >
          <Text variant='bodyLarge'>
            {priority}
          </Text>

          <Text variant='bodyLarge'>
            {ocurrenceType}
          </Text>
        </View>
      </View>
    </TouchableRipple>
  )
}
