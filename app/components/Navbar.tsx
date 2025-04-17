// src/components/Navbar.tsx
"use client";
import Link from "next/link";
import "./styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link href="/">
          <i className="fas fa-home navbar-icon"></i>
        </Link>
      </div>

      <nav className="navbar-right">
        <Link href="/paquetes">Paquetes</Link>
        <Link href="/mapa">Mapa</Link>
        <Link href="/quienes-somos">¿Quiénes somos?</Link>
        <Link href="/contacto">Contacto</Link>
        <Link href="/registro">
          <i className="fas fa-user-circle navbar-icon"></i>
        </Link>
      </nav>
    </header>
  );
}



