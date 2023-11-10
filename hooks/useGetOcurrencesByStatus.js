import { useEffect } from 'react';
import { useState } from 'react';
import { getOcurrencesByStatus } from '../helpers/getOcurrencesByStatus';


export const useGetOcurrencesByStatus = (status) => {


  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getOcurrencesByStatus(status)
      .then( ocurrencesByStatus => {

        setState({
          data: ocurrencesByStatus,
          loading: false,
        });
      });
  }, [status]);

  return state;
}