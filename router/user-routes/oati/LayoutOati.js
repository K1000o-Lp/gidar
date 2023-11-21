import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-paper';

import { BottomBar } from '../../../components/ui/BottomBar';
import { InboxOati } from './InboxOati';
import { Profile } from '../../../components/user/Profile';

export const LayoutOati = () => {

  const Tab = createBottomTabNavigator();

  return (
    <>
      <BottomBar>
        <Tab.Screen
          name='Inbox'
          component={InboxOati}
          options={{
            tabBarLabel: 'Mis Ordenes',
            tabBarIcon: ({ size, color }) => {
              return <Icon source='sticker-text' size={size} color={color} />
            },
          }}
        />

        <Tab.Screen
          name='Account'
          component={Profile}
          options={{
            tabBarLabel: 'Mi Cuenta',
            tabBarIcon: ({ size, color }) => {
              return <Icon source='account-circle' size={size} color={color} />
            }
          }}
        />

      </BottomBar>
    </>
  )
}
