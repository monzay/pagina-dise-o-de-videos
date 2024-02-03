import { useEffect, useRef, useState } from "react";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import camara from "./img/camaraPortada.png";
import "./App.css";

import {Link, useNavigate} from "react-router-dom"

const state = [
  {
    nombre: "sofiacoach23",
    reseña:
      "¡Increíble experiencia trabajando con Sofiacoach23! Su atención meticulosa a los detalles transformó por completo mi proyecto. ¡Altamente recomendado!",
    img: img1,
  },
  {
    nombre: "joel1423",
    reseña:
      "joel superó todas mis expectativas. Su habilidad para capturar la esencia de mi trabajo y realzar su calidad es incomparable. ¡Definitivamente volveré por más!",
    img: img2,
  },
  {
    nombre: "ariel2342",
    reseña:
      "joel es un verdadero profesional en el arte de la edición. Su creatividad y dedicación se reflejan en cada página de mi proyecto. ¡Gracias por hacerlo brillar!",
    img: img3,
  },
  {
    nombre: "sofiacoach23",
    reseña:
      "¡Sofiacoach23 es simplemente asombroso! Su pasión por perfeccionar cada detalle es evidente en el resultado final. ¡No podría estar más satisfecho con su trabajo!",
    img: img1,
  },
  {
    nombre: "sofiacoach23",
    reseña:
      "Sofiacoach23 ha demostrado una vez más su talento excepcional en la edición. Su enfoque experto y su entrega oportuna hacen que trabajar con él sea un placer absoluto. ¡Altamente recomendable!",
    img: img1,
  },
];

export const App = () => {
  const [reseñas, setReseñas] = useState(state);
  const [posicionScrollY, setPosicionScrollY] = useState();
  const [moInf1, setMoInf1] = useState(false);
  const [moInf2, setMoInf2] = useState(false);
  const [moInf3, setMoInf3] = useState(false);
  const [mostrarCarusel, setMostrarCarusel] = useState(false);
  const [animacionHeader, setAnimacionHeader] = useState(false);
  const [mostrarElmentosHeader, setMostrarElementosHeader] = useState(false);
  const [mostrartitle, setMostrarTitle] = useState(false);
  const EInformacion1 = useRef(null);
  const EInformacion2 = useRef(null);
  const EInformacion3 = useRef(null);

  const refContenedorReseñas = useRef(null);

  useEffect(() => {
    const sacardistanciaElmento = (refElemento) => {
      const refE = refElemento.current;
      const { top } = refE.getBoundingClientRect();
      return top;
    };

    const informacion1 = sacardistanciaElmento(EInformacion1);
    const informacion2 = sacardistanciaElmento(EInformacion2);
    const informacion3 = sacardistanciaElmento(EInformacion3);
    const carusel = sacardistanciaElmento(refContenedorReseñas);
    const scroll = () => {
      const distanciaScroll = window.scrollY;
      setPosicionScrollY(distanciaScroll);
    };

    if (posicionScrollY > informacion1 - 340) {
      setMoInf1(true);
    } else setMoInf1(false);
    if (posicionScrollY > informacion2 - 340) {
      setMoInf2(true);
    } else setMoInf2(false);
    if (posicionScrollY > informacion3 - 340) {
      setMoInf3(true);
    } else setMoInf3(false);

    if (posicionScrollY > carusel - 20) setMostrarCarusel(true);
    else setMostrarCarusel(false);

    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, [posicionScrollY]);

  useEffect(() => {
    const RCR = refContenedorReseñas.current;
    let step = +1;
    const maxScrollLeft = RCR.scrollWidth - RCR.clientWidth;
    let interval = null;
    const start = () => {
      interval = setInterval(() => {
        RCR.scrollLeft = RCR.scrollLeft + step;
        if (RCR.scrollLeft === maxScrollLeft) {
          step = -1;
        } else if (RCR.scrollLeft === 0) {
          step = +1;
        }
      }, 20);
    };
    start();

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setAnimacionHeader(true);
    }, 3000);

    setTimeout(() => {
      setMostrarElementosHeader(true);
    }, 4000);

    setTimeout(() => {
      setMostrarTitle(true);
    }, 4000);
  }, []);

  const irInstagram = ()=>{
    window.location.href =  "https://www.instagram.com/yoel.gds/";
  }

  return (
    <div className="app">
      <header
        style={animacionHeader ? { padding: "20px", transition: "1s" } : null}
      >
        <span
          style={
            animacionHeader ? { fontSize: "20px", transition: "1s" } : null
          }
          className={`header-logo ${animacionHeader ? "moverlogo" : ""} `}
        >
          cody
        </span>
        {mostrarElmentosHeader ? (
          <ul>
            <li className="mostrar-item-header-1 item">
              <a  className="header-enlace" href="#redes">contactarme</a>
            </li>
            <li className="mostrar-item-header-2 item">
              <a  className="header-enlace"  href="#info">informacion</a>
            </li>
          </ul>
        ) : null}
      </header>
      <main>
        <section className="portada">
          <div>
            <h1
              className={`portada-title ${
                mostrartitle ? "mostrar-title" : null
              }`}
            >
              EDITOR DE
            </h1>
            <h1
              className={`portada-title-2 ${
                mostrartitle ? "mostrar-title-2" : ""
              }`}
            >
              VIDEOS
            </h1>
            <button>
              <div onClick={irInstagram} className="text">
                <span >contra</span>
                <span>ta</span>
                <span>me</span>
              </div>
              <div onClick={irInstagram} className="clone">
                <span>contra</span>
                <span>ta</span>
                <span>me</span>
              </div>
              <svg
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
          </div>
          <img className="seccion-portada-img2" src={camara} alt="" />
        </section>
        <section className="seccion-informacion">
          <div className="contenedor-informacion">
            <div
              id="info"
              ref={EInformacion1}
              className={` informacion ${moInf1 ? "mostrar-informacion" : ""}`}
            >
              <h2 className="informacion-title">Sobre mí</h2>
              <span className="informacion-informacion">
                Hola me llamo <b>Joel Martinez</b> soy un experimentado editor
                de videos con un enfoque centrado en atraer audiencias y
                potenciar marcas personales.
              </span>
            </div>
            <div
              ref={EInformacion2}
              className={` informacion ${moInf2 ? "mostrar-informacion" : ""}`}
            >
              <h2 className="informacion-title">Mi metodología</h2>
              <span className="informacion-informacion">
                Mi recomendación es tener material de video pregrabado para que
                pueda realizar ediciones que te permitan publicar contenido de
                manera constante.
              </span>
            </div>
            <div
              ref={EInformacion3}
              className={` informacion ${moInf3 ? "mostrar-informacion" : ""}`}
            >
              <h2 className="informacion-title">Cómo contactarme</h2>
              <span className="informacion-informacion">
                Si estás interesado en trabajar juntos, envíame un mensaje
                directo a través de <b>Instagram</b> para coordinar los
                detalles.
              </span>
            </div>
          </div>
          <div
            id="reseñas"
            ref={refContenedorReseñas}
            className={`contenedor-reseñas ${
              mostrarCarusel ? "mostrar-informacion" : ""
            }`}
          >
            {reseñas.map((reseña, index) => (
              <div key={index} className="reseña">
                <div className="contenedor-img-nombre">
                  <img className="reseña-foto" src={reseña.img} alt="" />
                  <h6 className="reseña-nombre">{reseña.nombre}</h6>
                </div>
                <span className="reseña-reseña">{reseña.reseña}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer id="redes">
        <div className="footer-informacion">
          <div className="footer-informacion-contenedor">
            <h6 className="contenedor-h1">Marca</h6>
            <span className="contenedor-span">Cody</span>
          </div>
          <div className="footer-informacion-contenedor">
            <h6 className="contenedor-h1">Dueño</h6>
            <span className="contenedor-span">Joel Martinez</span>
          </div>
        </div>
        <div class="social-links">
          <div onClick={irInstagram} id="twitter" class="social-btn flex-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="150"
              height="150"
              viewBox="0 0 48 48"
            >
              <radialGradient
                id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                cx="19.38"
                cy="42.035"
                r="44.899"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#fd5"></stop>
                <stop offset=".328" stopColor="#ff543f"></stop>
                <stop offset=".348" stopColor="#fc5245"></stop>
                <stop offset=".504" stopColor="#e64771"></stop>
                <stop offset=".643" stopColor="#d53e91"></stop>
                <stop offset=".761" stopColor="#cc39a4"></stop>
                <stop offset=".841" stopColor="#c837ab"></stop>
              </radialGradient>
              <path
                fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
              ></path>
              <radialGradient
                id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                cx="11.786"
                cy="5.54"
                r="29.813"
                gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#4168c9"></stop>
                <stop
                  offset=".999"
                  stopColor="#4168c9"
                  stop-opacity="0"
                ></stop>
              </radialGradient>
              <path
                fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
              ></path>
              <path
                fill="#fff"
                d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
              ></path>
              <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
              <path
                fill="#fff"
                d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
              ></path>
            </svg>
            <span>@yoel.gds</span>
          </div>
          <div id="linkedin" class="social-btn flex-center">
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
            </svg>
            <span>Joel Martinez</span>
          </div>
          <div id="github" class="social-btn flex-center">
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
            <span>Cody</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
