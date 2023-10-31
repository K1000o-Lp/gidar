import { orders } from '../data/orders';

export const getOrderByStatus = ( status ) => {
  
  const validStatus = ['pendiente', 'en proceso', 'finalizado'];

  if( !validStatus.includes(status) ) {
    throw new Error(`${status} is not a valid status`);
  }

  return orders.filter( order => order.estado === status );
}