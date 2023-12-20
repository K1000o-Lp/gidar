import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LayoutDefault } from './LayoutDefault';
import { ChatScreen } from '../../../components/chat/ChatScreen';

export const UiDefault = () => {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName='Layout'
      >
        <Stack.Screen name='Layout' component={LayoutDefault} />

        <Stack.Screen
          name='Chat'
          component={ChatScreen}
          options={{
            title: 'Chat de Mensaje',
            headerShown: true,
          }}
        />
      </Stack.Navigator>

    </>
  )
}
