import { OrderList } from '../order/OrderList';
import { useSelector } from 'react-redux';
import { useState } from 'react';


export const PendingUserScreen = () => {

  const authState = useSelector(state => state.auth);

  const { idDependency } = authState.user;

  return (
    <>
      <OrderList status={1} dependency={idDependency} />
    </>
  )
}
