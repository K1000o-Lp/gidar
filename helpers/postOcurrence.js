import axios from '../config/axios.config';


export const postOcurrence = async (
  idUser,
  idDependency,
  idOcurrenceType,
  issue,
  description
) => {

  try {
    const endpoint = 'casos/add';
    const body = JSON.stringify({
      id_usuario: idUser,
      id_dependencia: idDependency,
      id_tipo_caso: idOcurrenceType,
      asunto: issue,
      descripcion_breve: description,
    });

    const resp = await axios.post(endpoint, body);

    return resp;
  } catch(err) {
    console.log(err);
  }
}