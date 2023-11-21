import { OrderList } from '../order/OrderList';
import { useSelector } from 'react-redux';


export const PendingUserScreen = () => {

  const authState = useSelector(state => state.auth);

  console.log(authState);

  const { idDependency } = authState.user;

  return (
    <>
      <OrderList status={1} dependency={idDependency} />
    </>
  )
}
