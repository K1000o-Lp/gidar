import { useState, useEffect } from 'react';
import { getOrdersBystatus } from '../helpers/getOrdersByStatus';
import { getOrdersByDependencyAndStatus } from '../helpers/getOrdersByDependencyAndStatus';
import { socket } from '../config';


export const useGetOrders = (status, dependency) => {

  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {

    if (dependency) {
      getOrdersByDependencyAndStatus(dependency, status)
        .then((orders) => {

          setState({
            data: orders,
            loading: false,
          });
        });
    } else {
      getOrdersBystatus(status)
        .then((orders) => {

          setState({
            data: orders,
            loading: false,
          });
        });
    }

  }, []);

  useEffect(() => {
    socket.on('settedOrderFinished', ([orderFinished]) => {

      setState(state => (
        {
          data: [orderFinished, ...state.data.filter(order => order.id_caso != orderFinished.id_caso)],
          loading: state.loading,
        }
      ))
    })
  }, [])

  useEffect(() => {
    socket.on('settedOrderInProgress', ([orderProgress]) => {

      setState(state => (
        {
          data: [orderProgress, ...state.data.filter(order => order.id_caso != orderProgress.id_caso)],
          loading: state.loading,
        }
      ));
    });
  }, []);

  useEffect(() => {
    socket.on('generatedCase', ([order]) => {
      setState(state => (
        {
          data: [order, ...state.data],
          loading: state.loading,
        }
      ));
    });
  }, []);


  return state.data.filter((order) => order.estado.id_estado === status);
}