import React from 'react'
import { useSelector } from 'react-redux'
import { OrderList } from '../order/OrderList';

export const InProcessUserScreen = () => {

  const authState = useSelector(state => state.auth);

  const { idDependency } = authState.user;

  return (
    <>
      <OrderList status={2} dependency={idDependency} />
    </>
  )
}
