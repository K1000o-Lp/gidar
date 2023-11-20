import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, Text } from 'react-native-paper';

import { BottomBar } from '../../../components/ui/BottomBar';
import { CreateOrderScreen } from '../../../components/order/CreateOrderScreen';
import { Inbox } from './Inbox';

const MiCuenta = () => {
  return (
    <Text>
      Mi Cuenta
    </Text>
  )
}

export const LayoutDefault = () => {

  const Tab = createBottomTabNavigator();

  return (
    <>
      <BottomBar>
        <Tab.Screen
          name='Inbox'
          component={Inbox}
          options={{
            tabBarLabel: 'Ordenes',
            tabBarIcon: ({ color, size }) => {
              return <Icon source="home" size={size} color={color} />;
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
          component={MiCuenta}
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
