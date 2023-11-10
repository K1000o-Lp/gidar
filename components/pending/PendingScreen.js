import React from 'react';
import { OrderList } from '../order/OrderList';

export const PendingScreen = () => {
  return (
    <>
      <OrderList status={ 1 } />
    </>
  )
}
