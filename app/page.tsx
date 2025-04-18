import Link from "next/link";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      {/* Video de bienvenida */}
      <section className="video-section">
        <div className="video-container">
          <video
            className="video"
            autoPlay
            loop
            muted
            poster="/image/marvel-poster.jpg"
          >
            <source src="/image/marvel-intro.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </div>
      </section>

      {/* Mensaje introductorio */}
      <section className="content-section">
        <h1>Bienvenidos al Multiverso Turistico</h1>
        <p>Explora héroes, historias y aventuras épicas.</p>
      </section>

      {/* Bocadillo de Nick Fury */}
      <section className="speech-section">
        <div className="character-image">
          <img src="/image/furia.png" alt="Nick Fury" />
        </div>
        <div className="speech-content">
          <div className="speech-bubble">
            <p>
              Hola Novato, soy Nick Fury, <br />
              S.H.I.E.L.D te necesita para proteger al mundo de una nueva amenaza que se cierne sobre la Tierra. <br /><br />
              Nuestros superhéroes te necesitan, el mundo te necesita. <br /><br />
              Es posible que ataquen varios objetivos, así que algunos miembros del equipo te estarán esperando en las bases que tenemos repartidas por todo el mundo. Elige a cuál de ellas irás primero. <br /><br />
              Son muchos los enemigos a los que nos enfrentamos. <br />
              Ten cuidado, algunos de ellos pueden venir de otros universos, así que no sabemos qué nos espera al otro lado. <br /><br />
              Buena suerte, novato. <br /><br />
              No dejes que la maldad se apodere de tu mente como le pasó a Burton y el teseracto y tener que matarte. Recuerda que el mundo necesita un nuevo Iron Man y no una nueva amenaza. <br /><br />
              Quién sabe… lo mismo en los Vengadores hay un hueco para ti.
            </p>
          </div>

          {/* Botón para ir al mapa */}
          <div className="start-button-container">
            <Link href="/mapa">
              <button className="start-button">Comienza mi aventura</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




