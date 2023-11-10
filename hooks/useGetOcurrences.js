import { useEffect, useState } from 'react';
import { getOcurrences } from '../helpers/getOcurrences';


export const useGetOcurrences = () => {


  const [ocurrencesList, setOcurrencesList] = useState([{label: 'cargando...', value: 0}]);

  useEffect(() => {
    getOcurrences()
      .then((ocurrences) => {
        setOcurrencesList(ocurrences);
      });
  }, []);

  return ocurrencesList;
}