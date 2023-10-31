import { NativeRouter, Route, Routes } from 'react-router-native';

import { LoginScreen } from '../components/login/LoginScreen';
import { LayoutRolesRoutes } from './LayoutRolesRoutes';

export const RouterApp = () => {
  return (
    <NativeRouter>
      <Routes>

        <Route path='/' element={<LoginScreen />} />

        <Route path='/*' element={<LayoutRolesRoutes />} />

      </Routes>
    </NativeRouter>
  )
}