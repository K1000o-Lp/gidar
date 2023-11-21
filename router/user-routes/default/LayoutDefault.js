import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-paper';

import { BottomBar } from '../../../components/ui/BottomBar';
import { CreateOrderScreen } from '../../../components/order/CreateOrderScreen';
import { InboxDefault } from './InboxDefault';
import { Profile } from '../../../components/user/Profile';

export const LayoutDefault = () => {

  const Tab = createBottomTabNavigator();

  return (
    <>
      <BottomBar>
        <Tab.Screen
          name='Inbox'
          component={InboxDefault}
          options={{
            tabBarLabel: 'Mis Ordenes',
            tabBarIcon: ({ color, size }) => {
              return <Icon source="sticker-text" size={size} color={color} />;
            },
          }}
        />

        <Tab.Screen
          name='newOrder'
          component={CreateOrderScreen}
          options={{
            tabBarLabel: 'Nueva Orden',
            tabBarIcon: ({ color, size }) => {
              return <Icon source='plus-box' size={size} color={color} />;
            },
          }}
        />

        <Tab.Screen
          name='Account'
          component={Profile}
          options={{
            tabBarLabel: 'Mi Cuenta',
            tabBarIcon: ({ color, size }) => {
              return <Icon source='account-circle' size={size} color={color} />;
            },
          }}
        />
      </BottomBar>
    </>
  )
}
