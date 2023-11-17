import { Navigate, Route, Routes } from 'react-router-native';
import { OatiBottomBar } from '../../components/ui/OatiBottomBar';
import { PendingScreen } from '../../components/pending/PendingScreen';
import { InProcessScreen } from '../../components/in-process/InProcessScreen';
import { FinishedScreen } from '../../components/finished/FinishedScreen';
import { OrderScreen } from '../../components/order/OrderScreen';

export const LayoutOatiRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='pending' element={<PendingScreen />} />

        <Route path='in-process' element={<InProcessScreen />} />

        <Route path='finished' element={<FinishedScreen />} />

        <Route path='detailOrder/:OrderId' element={<OrderScreen admin={true} />} />

        <Route path='/' element={<Navigate to='pending' />} />
      </Routes>

      <OatiBottomBar />
    </>
  )
}
