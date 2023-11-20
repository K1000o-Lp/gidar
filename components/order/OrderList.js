import { FlatList, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { OrderItem } from './OrderItem';

import { useGetOcurrencesByStatus } from '../../hooks/useGetOcurrencesByStatus';

export const OrderList = ({ status, dependency = null }) => {

  const { data: orders, loading } = useGetOcurrencesByStatus(status);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: loading ? 'center' : null,
        alignItems: loading ? 'center' : null,
      }}
    >
      {loading
        ? (<ActivityIndicator
          animating={true}
          size='large'
        />)
        : (<FlatList
          data={orders}
          renderItem={({ item }) => <OrderItem {...item} />}
          keyExtractor={item => item.id}
        />)
      }


    </ View>
  )
}
