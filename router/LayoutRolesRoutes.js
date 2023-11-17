import { Routes, Route } from 'react-router-native'
import { StatusBar } from 'react-native';

import { TopBar } from '../components/ui/TopBar';
import { LayoutOatiRoutes } from './user-routes/LayoutOatiRoutes';
import { LayoutDirectorRoutes } from './user-routes/LayoutDirectorRoutes';
import { useTheme } from 'react-native-paper';
import { LayoutDefaultRoutes } from './user-routes/LayoutDefaultRoutes';

export const LayoutRolesRoutes = () => {

  const theme = useTheme();

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.primary}
        barStyle='light-content'
        showHideTransition='fade'
      />

      <Routes>
        <Route path='default/*' element={<LayoutDefaultRoutes />} />

        <Route path='oati/*' element={<LayoutOatiRoutes />} />

        <Route path='responsable' />

        <Route path='director/*' element={<LayoutDirectorRoutes />} />
      </Routes>
    </>

  )
}
