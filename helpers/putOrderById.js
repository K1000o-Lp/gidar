import axios from '../config/axios.config';

export const putOrderById = async (orderId, statusId) => {

  try {
    const endpoint = `casos/update/${orderId}`;
    const body = JSON.stringify({
      id_estado: statusId,
    });

    const resp = await axios.put(endpoint, body);

    return resp;
  } catch(err) {
    console.log(err);
  }
}