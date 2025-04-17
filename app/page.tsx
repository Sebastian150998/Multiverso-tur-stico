// src/app/page.tsx
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <section className="video-section">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          poster="/img/marvel-poster.jpg"
        >
          <source src="/videos/marvel-intro.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
        <div className="video-overlay">
          <h1 className="marvel-logo">MARVEL</h1>
        </div>
      </section>

      <div className="white-divider"></div>
    </div>
  );
}



