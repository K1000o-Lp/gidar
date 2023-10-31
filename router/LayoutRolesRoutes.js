import { Routes, Route } from 'react-router-native'

import { TopBar } from '../components/ui/TopBar';
import { UserDefaultScreen } from '../components/user-default/UserDefaultScreen';
import { LayoutOatiRoutes } from './user-routes/LayoutOatiRoutes';

export const LayoutRolesRoutes = () => {
  return (
    <>
      <TopBar />
      
      <Routes>
        <Route path='default/' element={<UserDefaultScreen />} />

        <Route path='oati/*' element={<LayoutOatiRoutes />} />

        <Route path='responsable' />

        <Route path='director' />
      </Routes>
    </>

  )
}
