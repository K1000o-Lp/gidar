import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { TopBar } from '../../../components/ui/TopBar';
import { PendingScreen } from '../../../components/pending/PendingScreen';
import { InProcessScreen } from '../../../components/in-process/InProcessScreen';
import { FinishedScreen } from '../../../components/finished/FinishedScreen';

export const OrdersOati = () => {

  const Tab = createMaterialTopTabNavigator();

  return (
    <TopBar>
      <Tab.Screen
        options={{
          title: 'Pendientes',
        }}
        name='Pending'
        component={PendingScreen}
      />

      <Tab.Screen
        options={{
          title: 'En Proceso',
        }}
        name='InProcess'
        component={InProcessScreen}
      />

      <Tab.Screen
        options={{
          title: 'Finalizadas',
        }}
        name='Finished'
        component={FinishedScreen}
      />
    </TopBar>
  )
}
