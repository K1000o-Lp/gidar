import { useEffect, useState } from 'react';
import { getResponsables } from '../helpers/getResponsables';

export const useGetResponsables = () => {

  const [responsablesList, setResponsablesList] = useState([{ label: 'Cargando...', value: 0 }]);

  useEffect(() => {
    getResponsables()
      .then(responsables => {
        setResponsablesList(responsables)
      });
  }, [])

  return responsablesList;
}