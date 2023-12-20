import { FlatList, View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { OrderItem } from './OrderItem';

import { useGetOrders } from '../../hooks/useGetOrders';

export const OrderList = ({ status, dependency = null }) => {

  const orders = useGetOrders(status, dependency);

  if (orders.length == 0) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text variant='bodySmall'>
          No hay ordenes.
        </Text>
      </View>
    )
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderItem {...item} />}
        keyExtractor={item => item.id_caso}
      />
    </ View>
  )
}
