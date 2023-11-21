import { useEffect } from 'react';
import { useState } from 'react';
import { getOrdersBystatus } from '../helpers/getOrdersByStatus';
import { getOrdersByDependencyAndStatus } from '../helpers/getOrdersByDependencyAndStatus';


export const useGetOrders = (status, dependency) => {


  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {

    if (dependency) {
      getOrdersByDependencyAndStatus(dependency, status)
        .then(orders => {

          setState({
            data: orders,
            loading: false,
          });
        });
    } else {
      getOrdersBystatus(status)
        .then(ocurrencesByStatus => {

          setState({
            data: ocurrencesByStatus,
            loading: false,
          });
        });
    }
  }, [status, dependency]);

  return state;
}