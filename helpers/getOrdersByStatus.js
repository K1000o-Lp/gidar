import { httpService } from '../config';

export const getOrdersBystatus = async (ocurrenceStatus) => {

  try {
    const endpoint = `casos/estado/${ocurrenceStatus}`;

    const resp = await httpService.get(endpoint);
    const { data } = resp;

    return data;
  } catch (err) {
    console.log(err);
  }
};