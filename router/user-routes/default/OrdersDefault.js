import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { TopBar } from '../../../components/ui/TopBar';
import { PendingUserScreen } from '../../../components/pending/PendingUserScreen';
import { FinishedUserScreen } from '../../../components/finished/FinishedUserScreen';
import { InProcessUserScreen } from '../../../components/in-process/InProcessUserScreen';

export const OrdersDefault = () => {

  const Tab = createMaterialTopTabNavigator();
  return (
    <TopBar>
      <Tab.Screen
        options={{
          title: 'Pendientes',
        }}
        name='Pending'
        component={PendingUserScreen}
      />

      <Tab.Screen
        options={{
          title: 'En Progreso',
        }}
        name='Progress'
        component={InProcessUserScreen}
      />

      <Tab.Screen
        options={{
          title: 'Completadas',
        }}
        name='Complete'
        component={FinishedUserScreen}
      />
    </TopBar>
  )
}
