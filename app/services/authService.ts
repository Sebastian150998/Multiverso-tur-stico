const API_URL = 'http://localhost:8080/api/auth';

export const registrarUsuario = async (datos: {
  nombre: string;
  email: string;
  contraseña: string;
}) => {
  const res = await fetch(`${API_URL}/registro`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datos),
  });

  if (!res.ok) throw new Error('Error al registrar el usuario');
  return await res.json();
};

export const iniciarSesion = async (credenciales: {
  email: string;
  contraseña: string;
}) => {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credenciales),
  });

  if (!res.ok) throw new Error('Credenciales incorrectas');
  return await res.json(); // puedes guardar el token aquí si usas JWT
};
