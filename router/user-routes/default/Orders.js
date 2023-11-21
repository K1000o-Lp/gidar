import React from 'react'
import { TopBar } from '../../../components/ui/TopBar'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { PendingUserScreen } from '../../../components/pending/PendingUserScreen';
import { FinishedUserScreen } from '../../../components/finished/FinishedUserScreen';

export const Orders = () => {

  const Tab = createMaterialTopTabNavigator();
  return (
    <TopBar>
      <Tab.Screen
        options={{
          title: 'Pendientes'
        }}
        name='Pending'
        component={PendingUserScreen}
      />
      <Tab.Screen
        options={{
          title: 'Completadas'
        }}
        name='Complete'
        component={FinishedUserScreen}
      />
    </TopBar>
  )
}
