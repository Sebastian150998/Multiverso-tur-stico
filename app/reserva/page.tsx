'use client';

import { useState } from "react";
import { crearReserva } from "../services/reservaService";

export default function ReservaPage() {
  const [formData, setFormData] = useState({
    usuarioId: "",
    paqueteId: "",
    fecha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await crearReserva(formData);
    alert("Reserva realizada");
    setFormData({ usuarioId: "", paqueteId: "", fecha: "" });
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Hacer una reserva</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="usuarioId" value={formData.usuarioId} onChange={handleChange} placeholder="ID Usuario" className="w-full border p-2 rounded" />
        <input name="paqueteId" value={formData.paqueteId} onChange={handleChange} placeholder="ID Paquete" className="w-full border p-2 rounded" />
        <input name="fecha" value={formData.fecha} onChange={handleChange} placeholder="Fecha" type="date" className="w-full border p-2 rounded" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Reservar</button>
      </form>
    </div>
  );
}

