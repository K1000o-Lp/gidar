import { httpService } from '../config';

export const postLogin = async (username, password) => {

  try {
    const endpoint = 'validar_inicio_sesion';
    const body = JSON.stringify({
      nombre_usuario: username,
      contrasena: password,
    });

    const resp = await httpService.post(endpoint, body)
    const { data } = resp;

    const user = data.map((user) => {

      return {
        id: user.id_usuario,
        username: user.nombre_usuario,
        firstName: user.primer_nombre,
        lastName: user.primer_apellido,
        rol: user.role.descripcion,
        idDependency: user.dependencia.id_dependencia,
        dependency: user.dependencia.descripcion,
      }
    });

    return user;
  } catch (err) {
    console.log(err);
  }
};