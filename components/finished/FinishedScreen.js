import React from 'react'
import { OrderList } from '../order/OrderList'

export const FinishedScreen = () => {
  return (
    <>
      <OrderList status='finalizado' />
    </>
  )
}
