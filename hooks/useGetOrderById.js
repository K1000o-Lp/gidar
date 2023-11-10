import { useEffect, useState } from 'react';
import { getOrderById } from '../helpers/getOrderById';


export const useGetOrderById = (orderId) => {

  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {

    getOrderById(orderId)
      .then(([order]) => {
        
        setState({
          data: order,
          loading: false,
        });
      });
  }, [orderId])

  return state;
}