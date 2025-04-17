// src/app/registro/page.tsx
"use client";
import { useState } from "react";
import { crearUsuario } from "@/services/usuarioService";

export default function RegistroPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    contraseña: "",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await crearUsuario(form);
      setMensaje("¡Usuario registrado correctamente!");
      setForm({ nombre: "", email: "", contraseña: "" });
    } catch {
      setMensaje("Error al registrar usuario");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Registro</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="email"
          placeholder="Correo electrónico"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="contraseña"
          placeholder="Contraseña"
          type="password"
          value={form.contraseña}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded">
          Registrarse
        </button>
      </form>
      {mensaje && <p className="mt-4 text-center">{mensaje}</p>}
    </div>
  );
}


