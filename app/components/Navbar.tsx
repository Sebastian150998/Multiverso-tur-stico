"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import "./styles/Navbar.css";

export default function Navbar() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showPaquetesMenu, setShowPaquetesMenu] = useState(false);

  const userTimeout = useRef<NodeJS.Timeout | null>(null);
  const paquetesTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: "user" | "paquetes") => {
    if (menu === "user") {
      if (userTimeout.current) clearTimeout(userTimeout.current);
      setShowUserMenu(true);
    } else {
      if (paquetesTimeout.current) clearTimeout(paquetesTimeout.current);
      setShowPaquetesMenu(true);
    }
  };

  const handleMouseLeave = (menu: "user" | "paquetes") => {
    const timeout = setTimeout(() => {
      if (menu === "user") setShowUserMenu(false);
      else setShowPaquetesMenu(false);
    }, 500);

    if (menu === "user") userTimeout.current = timeout;
    else paquetesTimeout.current = timeout;
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link href="/">
          <i className="fas fa-home navbar-icon"></i>
        </Link>
      </div>

      <nav className="navbar-right">
        {/* Paquetes */}
        <div
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("paquetes")}
          onMouseLeave={() => handleMouseLeave("paquetes")}
        >
          <span className="dropdown-label">Paquetes</span>
          {showPaquetesMenu && (
            <div className="dropdown-menu wide">
              <div className="dropdown-column">
                <strong>Héroes - Vengadores</strong>
                <Link href="#">Iron Man</Link>
                <Link href="#">Capitán América</Link>
                <Link href="#">Thor</Link>
                <Link href="#">Hulk</Link>
                <Link href="#">Viuda Negra</Link>
                <Link href="#">Hawkeye</Link>
                <Link href="#">Spider-Man</Link>
                <Link href="#">Doctor Strange</Link>
                <Link href="#">Black Panther</Link>
                <Link href="#">Star-Lord</Link>
                <Link href="#">Rocket</Link>
                <Link href="#">Groot</Link>
                <Link href="#">Drax</Link>
                <Link href="#">Gamora</Link>
                <Link href="#">Nebula</Link>
                <Link href="#">Mantis</Link>
              </div>

              <div className="dropdown-column">
                <strong>Héroes - X-Men</strong>
                <Link href="#">Wolverine</Link>
                <Link href="#">Profesor X</Link>
                <Link href="#">Cíclope</Link>
                <Link href="#">Tormenta</Link>

                <hr />

                <strong>4 Fantásticos</strong>
                <Link href="#">Mr. Fantástico</Link>
                <Link href="#">La Mujer Invisible</Link>
                <Link href="#">La Antorcha Humana</Link>
                <Link href="#">La Cosa</Link>
              </div>

              <div className="dropdown-column">
                <strong>Villanos</strong>
                <Link href="#">Thanos</Link>
                <Link href="#">Loki</Link>
                <Link href="#">Ultron</Link>
                <Link href="#">Alto Evolucionador</Link>
              </div>
            </div>
          )}
        </div>

        {/* Enlaces normales */}
        <Link href="/contacto">Contacto</Link>
        <Link href="/mapa">Mapa</Link>
        <Link href="/quienes-somos">¿Quiénes somos?</Link>

        {/* Usuario */}
        <div
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("user")}
          onMouseLeave={() => handleMouseLeave("user")}
        >
          <i className="fas fa-user-circle navbar-icon"></i>
          {showUserMenu && (
            <div className="dropdown-menu">
              <Link href="/login">Iniciar sesión</Link>
              <Link href="/registro">Registrarse</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}









