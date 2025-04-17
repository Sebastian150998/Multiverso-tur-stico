'use client';
import { useState } from 'react';
import { iniciarSesion } from '../services/authService';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [credenciales, setCredenciales] = useState({
    email: '',
    contraseña: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredenciales({ ...credenciales, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await iniciarSesion(credenciales);
      alert('Inicio de sesión exitoso');
      // Aquí podrías guardar el token en localStorage si tienes JWT
      router.push('/');
    } catch (error) {
      alert('Error al iniciar sesión');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="contraseña" placeholder="Contraseña" onChange={handleChange} required />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}
