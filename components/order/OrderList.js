import { useMemo } from 'react';
import { FlatList, View } from 'react-native';
import { getOrderByStatus } from '../../selectors/getOrderByStatus';
import { OrderItem } from './OrderItem';

export const OrderList = ({status}) => {
  
  const orders = useMemo(() => getOrderByStatus(status), [status]);

  return (
    <View
      style={{
        marginBottom: 155,
      }}
    >
      <FlatList
        data={orders}
        renderItem={({item}) => <OrderItem {...item} />}
        keyExtractor={ item => item.id }
      />
    </ View>
  )
}
