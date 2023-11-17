import { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { CreateOrderScreen } from '../order/CreateOrderScreen';
import { PendingScreen } from '../pending/PendingScreen';

export const DefaultBottomBar = () => {

  const Orders = () => <PendingScreen />;

  const NewOrder = () => <CreateOrderScreen setIndex={setIndex} />;

  const Account = () => <Text>Mi Cuenta</Text>;

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'orders', title: 'Mis Ordenes', focusedIcon: 'sticker-text', unfocusedIcon: 'sticker-text-outline' },
    { key: 'newOrder', title: 'Nueva Orden', focusedIcon: 'plus-box', unfocusedIcon: 'plus-box-outline' },
    { key: 'account', title: 'Mi Cuenta', focusedIcon: 'account-circle', unfocusedIcon: 'account-circle-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    orders: Orders,
    newOrder: NewOrder,
    account: Account,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
