import axios from '../config/axios.config';

export const postLogin = async (username, password) => {

  try {
    const endpoint = 'validar_inicio_sesion';
    const body = JSON.stringify({
      nombre_usuario: username,
      contrasena: password,
    });
  
    const resp = await axios.post(endpoint, body)
    const { data } = resp;
  
    const user = data.map((user) => {
  
      return {
        id: user.id_usuario,
        username: user.nombre_usuario,
        firstName: user.primer_nombre,
        lastName: user.primer_apellido,
        idDependency: user.id_dependencia,
        rol: user.role.descripcion,
      }
    });
  
    return user;
  } catch(err) {
    console.log(err);
  }
};