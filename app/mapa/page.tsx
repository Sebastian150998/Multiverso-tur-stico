"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./styles/mapa.css";

export default function Mapa() {
  const [paquetes] = useState([
    {
      id: "Vengadores",
      nombre: "Paquete Vengadores ",
      top: "35%",
      left: "35%",
      enlace: "/paquetes/nyc"
    },
    {
      id: "Aracnido",
      nombre: "Paquete Aracnido",
      top: "31%",
      left: "53%",
      enlace: "/itinerario/aracnido"
    },
    {
      id: "Galactico",
      nombre: "Paquete Galactico",
      top: "29%",
      left: "49%",
      enlace: "/paquetes/paris"
    },
    {
      id: "Wakanda",
      nombre: "Paquete Wakanda",
      top: "75%",
      left: "53%",
      enlace: "/paquetes/paris"
    },
    {
      id: "Fatastico",
      nombre: "Paquete Fantásico",
      top: "65%",
      left: "53%",
      enlace: "/paquetes/paris"
    },
    {
      id: "Mutante",
      nombre: "Paquete Mutante",
      top: "31%",
      left: "75%",
      enlace: "/paquetes/paris"
    },
    {
      id: "Villanos",
      nombre: "Paquete Villanos",
      top: "65%",
      left: "65%",
      enlace: "/paquetes/paris"
    },
    {
      id: "Mistco",
      nombre: "Paquete Místico",
      top: "45%",
      left: "83.8%",
      enlace: "/paquetes/tokyo"
    }
  ]);

  return (
    <div className="mapa-container">
      <h1 className="mapa-titulo">Explora nuestros paquetes internacionales</h1>

      <div className="mapa-imagen">
        <Image
          src="/image/mapa1.png"
          alt="Mapa del mundo"
          fill
          style={{ objectFit: "contain" }}
          priority
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



