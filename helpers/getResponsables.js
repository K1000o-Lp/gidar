import { httpService } from '../config';

export const getResponsables = async () => {

  try {
    const endpoint = 'responsables/all';

    const resp = await httpService.get(endpoint);
    const { data } = resp;

    const responsables = data.map((responsable) => {

      const { usuario } = responsable;

      return {
        label: `${usuario.primer_nombre} ${usuario.primer_apellido}`,
        value: responsable.id_responsable,
      }
    });

    return responsables;

  } catch (err) {
    console.log(err);
  }
}