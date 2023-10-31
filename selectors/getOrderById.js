import { orders } from '../data/orders';

export const getOrderById = ( id ) => {
  return orders.find(order => order.id == id);
}