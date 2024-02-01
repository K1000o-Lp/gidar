import { httpService } from '../config';

export const getOrderById = async (orderId) => {

  try {
    const endpoint = `casos/${orderId}`;

    const resp = await httpService.get(endpoint);
    const { data } = resp;

    const orderById = data.map((order) => {
      return {
        id: order.id,
        person: `${order.usuario.primer_nombre} ${order.usuario.primer_apellido}`,
        issue: order.asunto,
        dependency: order.dependencia.descripcion,
        ocurrenceType: order.tipo_caso.descripcion,
        responsable: order?.responsable.usuario,
        status: order.estado.descripcion,
        priority: order.tipo_caso.id_prioridad,
        description: order.descripcion_breve,
      }
    });

    return orderById;
  } catch (err) {
    console.log(err);
  }
}