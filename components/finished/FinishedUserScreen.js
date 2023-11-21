import React from 'react';
import { OrderList } from '../order/OrderList';
import { useSelector } from 'react-redux';

export const FinishedUserScreen = () => {

  const authState = useSelector(state => state.auth);

  const { idDependency } = authState.user;

  return (
    <>
      <OrderList status={3} dependency={idDependency} />
    </>
  )
}
