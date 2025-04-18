"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./styles/mapa.css";

export default function Mapa() {
  const [paquetes] = useState([
    {
      id: "nyc",
      nombre: "Nueva York",
      top: "30%",
      left: "42%",
      enlace: "/paquetes/nyc" // ← Enlace a página del itinerario
    },
    {
      id: "tokyo",
      nombre: "Tokio",
      top: "35%",
      left: "80%",
      enlace: "/paquetes/tokyo"
    },
    {
      id: "paris",
      nombre: "París",
      top: "32%",
      left: "52%",
      enlace: "/paquetes/paris"
    }
  ]);

  return (
    <div className="mapa-container">
      <h1 className="mapa-titulo">Explora nuestros paquetes internacionales</h1>

      <div className="mapa-imagen">
        <Image
          src="/image/mapa.png"
          alt="Mapa del mundo"
          fill
          style={{ objectFit: "contain" }} // Se muestra entero
        />

        {paquetes.map((paquete) => (
          <Link
            key={paquete.id}
            href={paquete.enlace}
            className="mapa-boton"
            style={{ top: paquete.top, left: paquete.left }}
          >
            {paquete.nombre}
          </Link>
        ))}
      </div>
    </div>
  );
}

