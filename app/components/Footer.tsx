// src/components/Footer.tsx
import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Multiverso Turístico | Todos los derechos reservados</p>
    </footer>
  );
}

  