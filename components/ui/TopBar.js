import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Children } from 'react';

export const TopBar = ({ children }) => {

  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      {
        Children.map(children, child => child)
      }
    </Tab.Navigator>
  )
}