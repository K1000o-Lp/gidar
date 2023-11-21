import { httpService } from '../config';

export const getOrdersBystatus = async (ocurrenceStatus) => {

  try {
    const endpoint = `casos/estado/${ocurrenceStatus}`;

    const resp = await httpService.get(endpoint);
    const { data } = resp;

    const orders = data.map((order) => {
      return {
        id: order.id_caso,
        person: `${order.usuario.primer_nombre} ${order.usuario.primer_apellido}`,
        issue: order.asunto,
        dependency: order.dependencia.descripcion,
        ocurrenceType: order.tipo_caso.descripcion,
        responsable: order.id_responsable,
        status: order.estado.descripcion,
        priority: order.tipo_caso.id_prioridad,
        description: order.descripcion_breve,
      };
    });

    return orders;
  } catch (err) {
    console.log(err);
  }
};