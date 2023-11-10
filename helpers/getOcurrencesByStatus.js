import axios from '../config/axios.config';

export const getOcurrencesByStatus = async (ocurrenceStatus) => {

  try {
    const endpoint = `casos/estado/${ocurrenceStatus}`;

    const resp = await axios.get(endpoint);
    const { data } = resp;

    const ocurrencesByStatus = data.map((ocurrenceByStatus) => {
      return {
        id: ocurrenceByStatus.id_caso,
        person: `${ocurrenceByStatus.usuario.primer_nombre} ${ocurrenceByStatus.usuario.primer_apellido}`,
        issue: ocurrenceByStatus.asunto,
        dependency: ocurrenceByStatus.dependencia.descripcion,
        ocurrenceType: ocurrenceByStatus.tipo_caso.descripcion,
        responsable: ocurrenceByStatus.id_responsable,
        status: ocurrenceByStatus.estado.descripcion,
        priority: ocurrenceByStatus.tipo_caso.id_prioridad,
        description: ocurrenceByStatus.descripcion_breve,
      };
    });

    return ocurrencesByStatus;
  } catch(err) {
    console.log(err);
  }
};