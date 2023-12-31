import { useSelector } from 'react-redux';

import { OrderList } from '../order/OrderList';

export const FinishedUserScreen = () => {

  const authState = useSelector(state => state.auth);

  const { idDependency } = authState.user;

  return (
    <>
      <OrderList status={3} dependency={idDependency} />
    </>
  )
}
