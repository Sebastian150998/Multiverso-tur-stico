// src/services/usuarioService.ts

const API_URL = "http://localhost:8080/api/usuarios";

// Obtener todos los usuarios
export const obtenerUsuarios = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Error al obtener usuarios");
    return await res.json();
  } catch (error) {
    console.error("Error en obtenerUsuarios:", error);
    return [];
  }
};

// Crear un nuevo usuario
export const crearUsuario = async (usuario: {
  nombre: string;
  email: string;
  contraseña: string;
}) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    });
    if (!res.ok) throw new Error("Error al crear usuario");
    return await res.json();
  } catch (error) {
    console.error("Error en crearUsuario:", error);
    throw error;
  }
};

