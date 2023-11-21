import { httpService } from '../config';


export const getOrdersByDependencyAndStatus = async (dependency, status) => {

  try {
    const endpoint = `casos/dependencia/${dependency}/${status}`;

    const { data } = await httpService.get(endpoint);

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

}