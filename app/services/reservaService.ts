const API_URL = "http://localhost:8080/api/paquetes";

export const obtenerPaquetes = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const crearPaquete = async (paquete: any) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(paquete),
  });
  return res.json();
};
export const crearReserva = async (reserva: any) => {
  const res = await fetch('http://localhost:8080/api/reservas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reserva),
  });
  return res.json();
};
