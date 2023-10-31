import React from 'react';
import { OrderList } from '../order/OrderList';

export const InProcessScreen = () => {
  return (
    <>
      <OrderList status='en proceso' />
    </>
  )
}
