import { useState } from "react";
import logo from "./assets/logo.png";
import hero from "./assets/hero.jpg";
import Botox from "./assets/Botox.jpg";
import Limpieza from "./assets/Limpieza.jpg";
import hilos1 from "./assets/hilos1.png";
import logofotter from "./assets/logofotter.png";
function Header({ logo, procedimientos }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />

      <nav className="nav-center">
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#procedimientos" onClick={closeMenu}>Procedimientos</a>
      </nav>

      <div className="menu-icon" onClick={toggleMenu} aria-label="Menú">
        &#9776;
      </div>

      {menuOpen && (
        <div className="menu-dropdown show">
          {procedimientos.map((proc) => {
            const id = proc.titulo.toLowerCase().replace(/\s+/g, "");
            return (
              <a key={id} href={`#${id}`} onClick={closeMenu}>
                {proc.titulo}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}

function Procedimiento({ titulo, descripcion, imagenes }) {
  const [index, setIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  function siguiente() {
    if (index < imagenes.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function anterior() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(imagenes.length - 1);
    }
  }

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  return (
    <>
      <div
        className="procedimiento-card"
        id={titulo.toLowerCase().replace(/\s+/g, "")}
      >
        <div
          className="imagen-slider"
          style={{ position: "relative", cursor: "pointer" }}
        >
          <img
            src={imagenes[index]}
            alt={titulo}
            onClick={toggleModal}
            style={{ objectFit: "contain", height: "280px", width: "100%" }}
          />
          {imagenes.length > 1 && (
            <>
              <button className="flecha izquierda" onClick={anterior}>
                ‹
              </button>
              <button className="flecha derecha" onClick={siguiente}>
                ›
              </button>
            </>
          )}
        </div>

        <h3>{titulo}</h3>
        <p>{descripcion}</p>

        <a
          className="btn-whatsapp"
          href="https://wa.me/59899930206"
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar disponibilidad
        </a>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={imagenes[index]}
              alt={titulo}
              style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain" }}
            />
            <button className="modal-close" onClick={toggleModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  const procedimientos = [
    {
      titulo: "Plasma rico en plaquetas facial y capilar",
      descripcion:
        "Regeneración celular para mejorar textura y salud de la piel y cuero cabelludo.",
      imagenes: [Botox],
    },
    {
      titulo: "Hilos tensores",
      descripcion:
        "Elevación y reafirmación facial mediante hilos reabsorbibles para un efecto lifting natural.",
      imagenes: [Botox],
    },
    {
      titulo: "Botox línea arrugas",
      descripcion:
        "Reducción de arrugas dinámicas para una apariencia más joven y descansada.",
      imagenes: [Botox],
    },
    {
      titulo: "Tratamiento para bruxismo",
      descripcion:
        "Alivio de tensión muscular y reducción de dolor causado por el bruxismo mediante técnicas especializadas.",
      imagenes: [Botox],
    },
    {
      titulo: "Tratamiento para hiperhidrosis",
      descripcion:
        "Control efectivo de la sudoración excesiva en axilas, manos o pies con tratamientos estéticos.",
      imagenes: [Botox],
    },
    {
      titulo: "Perfilado Mandibular",
      descripcion:
        "Definición y contorno de la mandíbula para un rostro más armónico y estilizado.",
      imagenes: [Botox],
    },
    {
      titulo: "Mesoterapia Capilar",
      descripcion:
        "Tratamiento para revitalizar el cuero cabelludo y estimular el crecimiento del cabello.",
      imagenes: [Botox],
    },
    {
      titulo: "Mesoterapia Facial",
      descripcion:
        "Hidratación profunda y revitalización de la piel del rostro con microinyecciones de nutrientes.",
      imagenes: [Botox],
    },
    {
      titulo: "Mesoterapia Corporal Celulitis",
      descripcion:
        "Reducción de celulitis y mejora de la textura de la piel con microinyecciones específicas.",
      imagenes: [Botox],
    },
    {
      titulo: "Escleroterapia",
      descripcion:
        "Tratamiento para eliminar varices y arañitas con inyecciones esclerosantes.",
      imagenes: [Botox],
    },
    {
      titulo: "Bioestimulador Long Lasting",
      descripcion:
        "Reafirmación y volumización facial con resultados duraderos mediante bioestimuladores.",
      imagenes: [Botox],
    },
    {
      titulo: "Bioestimulador Facetime",
      descripcion:
        "Estimulación natural de colágeno para mejorar elasticidad y luminosidad de la piel.",
      imagenes: [Botox],
    },
    {
      titulo: "Fulloria",
      descripcion:
        "Tratamiento avanzado para rejuvenecimiento facial con resultados visibles y naturales.",
      imagenes: [Botox],
    },
    {
      titulo: "Prophilo Skinbooster",
      descripcion:
        "Hidratación intensa y mejora de la calidad de la piel con técnicas innovadoras.",
      imagenes: [Botox],
    },
    {
      titulo: "Botox",
      descripcion: "Tratamiento facial con excelentes resultados.",
      imagenes: [Botox],
    },
    {
      titulo: "Rellenos",
      descripcion: "Volumen y armonización facial.",
      imagenes: [Limpieza],
    },
    {
      titulo: "Limpieza Facial",
      descripcion: "Cuidado profundo de la piel.",
      imagenes: [hilos1],
    },
  ];

  return (
    <div className="home" id="home">
      <Header logo={logo} procedimientos={procedimientos} />

      <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
        <div className="hero-text">
          <h1>Dra. Quilia Spinelli</h1>
          <p>Medicina Estética</p>
        </div>
      </section>

      <section className="procedimientos" id="procedimientos">
        <h2>Procedimientos</h2>

        <div className="procedimientos-grid">
          {procedimientos.map((proc) => (
            <Procedimiento
              key={proc.titulo}
              titulo={proc.titulo}
              descripcion={proc.descripcion}
              imagenes={proc.imagenes}
            />
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-logo-container">
          <img src={logofotter} alt="Logo Consultorio" className="footer-logofotter" />
          <div className="footer-doctor-name">
            <span>Dra. Quilia Spinelli</span>
            <a
              href="https://instagram.com/Dra.QuiliaSpinelli"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-instagram-link"
              aria-label="Instagram Dra.QuiliaSpinelli"
            >
              {/* Ícono Instagram SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width="20px"
                height="20px"
                style={{ marginLeft: "8px" }}
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2.25a1 1 0 110 2 1 1 0 010-2zm-4.25 1.25a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-info">
          <p><strong>Lugares de atención:</strong> Montevideo, Punta del Este</p>
          <p><strong>Teléfono:</strong> <a href="tel:+59899930206">099 930 206</a></p>
          <p><strong>Email:</strong> <a href="mailto:quilia_spinelli_aldabe@Outlook.com">quilia_spinelli_aldabe@Outlook.com</a></p>
          <p><strong>Horarios:</strong> Lunes a Sábado de 9:00 a 19:00hs con agenda previa</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
