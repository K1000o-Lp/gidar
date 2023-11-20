import React from 'react'
import { TopBar } from '../../../components/ui/TopBar'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { PendingScreen } from '../../../components/pending/PendingScreen';
import { FinishedScreen } from '../../../components/finished/FinishedScreen';

export const Orders = () => {

  const Tab = createMaterialTopTabNavigator();
  return (
    <TopBar>
      <Tab.Screen name='Pending' component={PendingScreen} />
      <Tab.Screen name='Complete' component={FinishedScreen} />
    </TopBar>
  )
}
