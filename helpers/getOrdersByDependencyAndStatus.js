import { httpService } from '../config';


export const getOrdersByDependencyAndStatus = async (dependency, status) => {

  try {
    const endpoint = `casos/dependencia/${dependency}/${status}`;

    const resp = await httpService.get(endpoint);
    const { data } = resp;

    return data;
  } catch (err) {
    console.log(err);
  }

}