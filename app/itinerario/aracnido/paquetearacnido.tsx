'use client'; // Marca este archivo como un componente cliente

import React, { useState } from 'react';
import './styles/paquetearacnido.css';

const PaqueteAracnido = () => {
  // Datos de los avatares
  const avatars = [
    {
      src: '/image/avatares/tom.png',
      text: 'Guía especializado en localizaciones cinematográficas.'
    },
    {
      src: '/image/avatares/mj.jfif',
      text: 'Tecnología avanzada y estrategias de combate.'
    },
    {
      src: '/image/avatares/net.jfif',
      text: 'Líder nato con estrategias militares.'
    }
  ];

  // Estado para manejar tanto el texto como el avatar seleccionado
  const [selectedAvatar, setSelectedAvatar] = useState<any>(null); // Almacena el avatar completo
  const [selectedText, setSelectedText] = useState<string>('Elige un personaje para comenzar.');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  // Función para manejar la selección del avatar
  const handleAvatarClick = (avatar: any) => {
    setSelectedAvatar(avatar); // Guardar el avatar seleccionado
    setSelectedText(avatar.text); // Cambiar el texto según el avatar elegido
    setIsModalOpen(false); // Cerrar el modal después de la selección
  };

  return (

    <><div className="pa-hero">
          {/* HERO FUERA DE PA-CONTAINER */}
          <div className="pa-hero-overlay">
              <h1>PAQUETE ARÁCNIDO</h1>
          </div>
          <img src="/image/inicio.png" alt="Venecia hero" />
      </div>
      <div className="pa-container">
              {/* MODAL PARA ELEGIR PERSONAJE */}
              {isModalOpen && (
                  <div className="pa-modal">
                      <div className="pa-modal-content">
                          <h2>¡Elige tu personaje!</h2>
                          <div className="pa-avatars">
                              {avatars.map((avatar, index) => (
                                  <img
                                      key={index}
                                      src={avatar.src}
                                      alt={`Avatar ${index}`}
                                      className="pa-avatar"
                                      onClick={() => handleAvatarClick(avatar)} />
                              ))}
                          </div>
                      </div>
                  </div>
              )}

              {/* COLUMNA IZQUIERDA */}
              <main className="pa-left">
                  {/* INTRO CON AVATAR Y TEXTO FIJO */}
                  <section className="pa-intro">
                      <div className="pa-intro-text">
                          {/* Mostrar el avatar seleccionado junto con el texto */}
                          {selectedAvatar && (
                              <div className="pa-intro-avatar-text">
                                  <img src={selectedAvatar.src} alt="Avatar seleccionado" className="pa-selected-avatar" />
                                  <p>{selectedText}</p>
                              </div>
                          )}
                      </div>
                  </section>

                  {/* TIMELINE - LÍNEA VERTICAL */}
                  <div className="pa-timeline">
                      <div className="pa-day">
                          <h2>DÍA 1: ESPAÑA - VENECIA</h2>
                          <p>
                              Presentación en el aeropuerto con el guía para tomar el vuelo dirección VENECIA.
                              Llegada al Aeropuerto internacional de Marco Polo (lugar cinematográfico). Recogida de nuestro representante para llevarte al hotel en la ciudad. Cena y alojamiento.
                          </p>
                      </div>

                      <div className="pa-day">
                          <h2>DÍA 2: VENECIA</h2>
                          <p>
                              Desayuno. Visita panorámica de la ciudad donde veremos LA PLAZA DE SAN MARCOS (lugar cinematográfico) y su BASÍLICA que es el principal templo católico de la ciudad donde tendremos tiempo libre si quisiéramos visitarla y el PALACIO DUCAL (entrada incluida). Visitaremos también el PUENTE DE LOS SUSPIROS que es uno de los más famosos de la ciudad. Tiempo libre para almorzar. A continuación, por la tarde visitaremos el VENEZIA SCOLETTA DI SAN ROCCO que era una confraternidad formada por los ciudadanos venecianos y es donde encontramos el MUSEO DE LEONARDO DA VINCI (entrada incluida) donde veremos una de sus obras más famosas ¨ El hombre de Vitruvio¨. Alojamiento.
                          </p>
                      </div>

                      <div className="pa-day">
                          <h2>DÍA 3: VENECIA</h2>
                          <p>
                              Desayuno. Nuestro día comienza en PORTA MAGNA construida en 1460, fue la primera escultura renacentista de la ciudad y es la entrada principal al ARSENAL DE VENECIA (lugar cinematográfico), allí haremos una breve parada para fotos. A continuación, podremos disfrutar de un paseo en góndola por los reconocidos canales de Venecia hasta llegar a nuestra siguiente parada; EL PUENTE RIALTO (lugar cinematográfico) que es el más antiguo de los cuatro puentes que cruzan el GRAN CANAL. Tiempo libre para disfrutar del puente y los alrededores. Retomaremos la visita a pie con dirección a la IGLESIA DE SANTA MARÍA FORMOSA (lugar cinematográfico). Tiempo libre. Alojamiento.
                          </p>
                      </div>

                      <div className="pa-day">
                          <h2>DÍA 4: VENECIA - PRAGA</h2>
                          <p>
                              Desayuno. Saldremos con dirección al aeropuerto de Venecia con nuestro traslado para coger el vuelo dirección a la capital checa. Una vez en Praga, nos recogerá nuestro representante para llevarnos al hotel. Almuerzo. Tendremos tiempo libre para conocer la ciudad. Cena. Alojamiento.
                          </p>
                      </div>

                      <div className="pa-day">
                          <h2>DÍA 5: PRAGA</h2>
                          <p>
                              Desayuno. Comenzaremos el día visitando el CASTILLO y la CATEDRAL de Praga situada en lo alto de la ciudad y dedicada a San Vico. Después tendremos una visita panorámica de la ciudad donde pasearemos por el PUENTE DE CARLOS (lugar cinematográfico), veremos el RELOJ ASTRONÓMICO y la TORRE DE LA PÓLVORA. Tendremos tiempo libre para almorzar. Por la tarde, visitaremos el TEATRO VINOHRADY, de época modernista inaugurado en 1907 (lugar cinematográfico). Alojamiento.
                          </p>
                      </div>

                      <div className="pa-day">
                          <h2>DÍA 6: PRAGA - LIBEREC - PRAGA</h2>
                          <p>
                              Desayuno. Saldremos hacia LIBEREC que es una ciudad situada al norte de la República Checa, allí tendremos una visita panorámica de la ciudad donde visitaremos su PLAZA CENTRAL Y SU AYUNTAMIENTO (lugar cinematográfico), y su VALLE DE CRISTAL. Tiempo para almorzar. Vuelta hacia Praga y tiempo libre. Alojamiento.
                          </p>
                      </div>

                      <div className="pa-day">
                          <h2>DÍA 7: PRAGA - ESPAÑA</h2>
                          <p>
                              Desayuno. Tiempo libre en función de la hora de salida del vuelo. Nuestro representante nos recogerá para llevarnos al aeropuerto. Fin del recorrido.
                          </p>
                      </div>
                  </div>

                  {/* BLOQUE FINAL */}
                  <section className="pa-info-final">
                      <h2>EL PRECIO INCLUYE:</h2>
                      <ul>
                          <li>Transporte aéreo</li>
                          <li>Transporte por carretera en República Checa</li>
                          <li>Paseo en Góndola</li>
                          <li>Traslados</li>
                          <li>Régimen de alojamiento y desayuno</li>
                          <li>Entradas incluidas a los siguientes lugares:
                              <ul>
                                  <li>Palacio Ducal</li>
                                  <li>Museo de Leonardo Da Vinci</li>
                              </ul>
                          </li>
                      </ul>

                      <div className="pa-reserva">
                          <img src="/images/foto-paquete.jpg" alt="Paquete viaje" className="pa-foto" />
                          <div className="pa-reserva-info">
                              <h3>Precio: 1.199€</h3>
                              <button>Reservar ahora</button>
                          </div>
                      </div>
                  </section>
              </main>

              {/* COLUMNA DERECHA */}
              <aside className="pa-right">
                  <div className="pa-sticky">
                      <img src="/image/mapaeuropa.jpg" alt="Foto lateral" className="pa-right-photo" />
                      <h3>Resumen del viaje</h3>
                      <p><strong>Duración:</strong> 7 días</p>
                      <p><strong>Destinos:</strong> Venecia, Praga, Liberec</p>
                      <p><strong>Fechas disponibles:</strong> Todo el año</p>
                  </div>
              </aside>
          </div></>
  );
};

export default PaqueteAracnido;






