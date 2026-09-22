"use client";

import { useState, type CSSProperties, type MouseEvent } from "react";

const whatsappUrl = "https://wa.me/5493815051806";

const guidesWhatsappUrl =
  "https://wa.me/5493815051806?text=Hola%20Leandro%2C%20quiero%20consultar%20por%20las%20gu%C3%ADas%20de%20Nutrite%20al%20Max.";

const inPersonConsultationUrl =
  "https://wa.me/5493815051806?text=Hola%20Leandro%2C%20quisiera%20consultar%20por%20un%20turno%20presencial%20en%20Yerba%20Buena.";

const onlineConsultationUrl =
  "https://wa.me/5493815051806?text=Hola%20Leandro%2C%20quisiera%20consultar%20por%20una%20consulta%20nutricional%20online.";

type CustomCSS = CSSProperties & Record<`--${string}`, string | number>;

type SpotState = { x: number; y: number; active: boolean };

const idleSpot: SpotState = { x: 50, y: 50, active: false };

function ArrowIcon() {
  return (
    <svg
      className="nam-arrow"
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2zm5.8 14.14c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.6-.13.24.09 1.55.73 1.81.87.27.13.44.2.51.31.07.12.07.68-.17 1.36z" />
    </svg>
  );
}

const marqueeContent = (
  <span className="nam-marquee-item">
    <span className="nam-tagline">Superá tu límite.</span>
    <span className="nam-dot" />
    Licenciado en Nutrición
    <span className="nam-dot" />
    Antropometrista ISAK II
    <span className="nam-dot" />
    Diplomado en Nutrición Deportiva
    <span className="nam-dot" />
    Yerba Buena, Tucumán
    <span className="nam-dot" />
    Atención online
    <span className="nam-dot" />
  </span>
);

export default function Home() {
  const [hero, setHero] = useState({ mx: 0, my: 0 });
  const [card1, setCard1] = useState<SpotState>(idleSpot);
  const [card2, setCard2] = useState<SpotState>(idleSpot);

  function handleHeroMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setHero({
      mx: (e.clientX - rect.left) / rect.width - 0.5,
      my: (e.clientY - rect.top) / rect.height - 0.5,
    });
  }

  function handleHeroLeave() {
    setHero({ mx: 0, my: 0 });
  }

  function makeCardHandlers(
    setter: (s: SpotState) => void,
    current: SpotState
  ) {
    return {
      onMouseMove(e: MouseEvent<HTMLElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        setter({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
          active: true,
        });
      },
      onMouseLeave() {
        setter({ ...current, active: false });
      },
    };
  }

  const heroPhotoStyle: CSSProperties = {
    transform: `translate3d(${(hero.mx * -22).toFixed(1)}px, ${(
      hero.my * -14
    ).toFixed(1)}px, 0) scale(1.08)`,
  };

  const cardStyle = (c: SpotState): CustomCSS => ({
    "--spot-x": `${c.x.toFixed(1)}%`,
    "--spot-y": `${c.y.toFixed(1)}%`,
    "--spot-o": c.active ? 1 : 0,
  });

  const card1Handlers = makeCardHandlers(setCard1, card1);
  const card2Handlers = makeCardHandlers(setCard2, card2);

  return (
    <>
      <a className="nam-skip-link" href="#contenido-principal">
        Ir al contenido principal
      </a>

      <header className="nam-header">
        <div className="nam-container nam-header-inner">
          <a className="nam-brand" href="#inicio" aria-label="NUTRITE AL MAX, inicio">
            <img src="/nutrite-al-max-logo.png" alt="" aria-hidden="true" />
            <span className="nam-brand-name">NUTRITE AL MAX</span>
          </a>

          <div className="nam-header-actions">
            <nav className="nam-nav" aria-label="Navegación principal">
              <a href="#inicio">Inicio</a>
              <a href="#guias">Guías</a>
              <a href="#consultas">Consultas</a>
            </nav>
            <a
              className="nam-header-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsappIcon />
              <span>Reservar</span>
            </a>
          </div>
        </div>
      </header>

      <main id="contenido-principal">
        <section
          className="nam-hero"
          id="inicio"
          aria-labelledby="hero-title"
          onMouseMove={handleHeroMove}
          onMouseLeave={handleHeroLeave}
        >
          <div className="nam-hero-photo-wrap" aria-hidden="true">
            <img
              src="/nutrite-al-max-runners.webp"
              alt=""
              style={heroPhotoStyle}
            />
          </div>

          <div className="nam-container nam-hero-grid">
            <div>
              <p className="nam-eyebrow">Nutrición · Ciencia · Rendimiento</p>
              <h1 className="nam-h1" id="hero-title">
                Información profesional para llevar tu nutrición <em>al máximo</em>.
              </h1>
              <p className="nam-hero-text">
                Guías digitales desarrolladas por Leandro Horaiki para ayudarte a
                tomar decisiones más claras sobre alimentación y rendimiento.
              </p>
              <div className="nam-hero-actions">
                <a className="nam-btn nam-btn-primary" href="#guias">
                  Ver guías
                  <ArrowIcon />
                </a>
                <a className="nam-btn nam-btn-secondary" href="#consultas">
                  Reservar una consulta
                  <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="nam-hero-card" aria-label="Identidad de NUTRITE AL MAX">
              <div className="nam-hero-logolock">
                <img
                  src="/nutrite-al-max-logotipo.png"
                  alt="NUTRITE AL MAX — Superá tu límite."
                />
              </div>
              <div className="nam-hero-card-meta" aria-hidden="true">
                <span>Nutrición profesional</span>
                <span>Yerba Buena · Online</span>
              </div>
            </div>
          </div>
        </section>

        <div className="nam-marquee" aria-hidden="true">
          <div className="nam-marquee-inner">
            <div className="nam-marquee-track">
              {marqueeContent}
              {marqueeContent}
            </div>
          </div>
        </div>

        <section className="nam-section" id="guias" aria-labelledby="guides-title">
          <div className="nam-container">
            <div className="nam-section-tag">
              <span className="nam-num">01</span>
              <span className="nam-section-tag-rule" />
            </div>
            <div className="nam-section-heading">
              <p className="nam-eyebrow">Catálogo</p>
              <h2 id="guides-title">Guías digitales</h2>
            </div>

            <div className="nam-catalog">
              <div className="nam-catalog-flag">
                <span className="nam-catalog-status">
                  <span className="nam-status-mark" aria-hidden="true" />
                  Próximamente
                </span>
                <p>El catálogo todavía no está habilitado.</p>
              </div>
              <div className="nam-catalog-copy">
                <h3>El catálogo está en preparación.</h3>
                <p>
                  Muy pronto vas a encontrar aquí las primeras guías de Nutrite al
                  Max. Si querés recibir información, podés comunicarte
                  directamente.
                </p>
                <a
                  className="nam-text-link"
                  href={guidesWhatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Contactar ahora
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="nam-section"
          id="consultas"
          aria-labelledby="consultations-title"
          style={{
            background: "#fff",
            borderTop: "1px solid rgba(13,13,13,0.08)",
            borderBottom: "1px solid rgba(13,13,13,0.08)",
          }}
        >
          <div className="nam-container nam-consult-grid">
            <img
              className="nam-consult-photo"
              src="/nutrite-al-max-retrato.webp"
              alt=""
              aria-hidden="true"
            />
            <div className="nam-consult-intro">
              <div className="nam-section-tag">
                <span className="nam-num">02</span>
                <span className="nam-section-tag-rule" />
              </div>
              <p className="nam-eyebrow">Contacto profesional</p>
              <h2 id="consultations-title">Elegí cómo querés atenderte.</h2>
              <p className="nam-consult-desc">
                Solicitá una consulta presencial en Yerba Buena o coordiná una
                atención online desde donde estés.
              </p>
            </div>

            <div>
              <div className="nam-consult-cards" aria-label="Modalidades de consulta">
                <a
                  className="nam-consult-card"
                  href={inPersonConsultationUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={cardStyle(card1)}
                  {...card1Handlers}
                >
                  <span className="nam-consult-num" aria-hidden="true">01</span>
                  <span className="nam-consult-label">Yerba Buena, Tucumán</span>
                  <h3>Consulta presencial</h3>
                  <p>Coordiná día y horario directamente por WhatsApp.</p>
                  <span className="nam-consult-action">
                    Solicitar turno
                    <ArrowIcon />
                  </span>
                </a>

                <a
                  className="nam-consult-card"
                  href={onlineConsultationUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={cardStyle(card2)}
                  {...card2Handlers}
                >
                  <span className="nam-consult-num" aria-hidden="true">02</span>
                  <span className="nam-consult-label">Desde cualquier ubicación</span>
                  <h3>Consulta online</h3>
                  <p>Recibí atención profesional sin importar dónde estés.</p>
                  <span className="nam-consult-action">
                    Solicitar turno
                    <ArrowIcon />
                  </span>
                </a>
              </div>

              <address className="nam-contact-details" aria-label="Datos de contacto">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <span>WhatsApp</span>
                  <strong>+54 9 381 505-1806</strong>
                </a>
                <a href="mailto:nutritealmax@gmail.com">
                  <span>Correo electrónico</span>
                  <strong>nutritealmax@gmail.com</strong>
                </a>
                <div>
                  <span>Ubicación</span>
                  <strong>Yerba Buena, Tucumán</strong>
                </div>
                <a
                  href="https://www.instagram.com/nutritealmax/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Instagram</span>
                  <strong>@nutritealmax</strong>
                </a>
              </address>
            </div>
          </div>
        </section>
      </main>

      <footer className="nam-footer">
        <div className="nam-container nam-footer-main">
          <a className="nam-footer-brand" href="#inicio" aria-label="NUTRITE AL MAX, inicio">
            <img src="/nutrite-al-max-logo.png" alt="" aria-hidden="true" />
            <span className="nam-brand-name">NUTRITE AL MAX</span>
          </a>

          <div className="nam-footer-credentials">
            <p>Lic. Leandro Horaiki</p>
            <ul>
              <li>Licenciado en Nutrición</li>
              <li>Antropometrista ISAK II</li>
              <li>Diplomado en Nutrición Deportiva</li>
            </ul>
          </div>
        </div>

        <div className="nam-container nam-footer-meta">
          <span>nutritealmax.com.ar</span>
          <a
            href="https://www.instagram.com/nutritealmax/"
            target="_blank"
            rel="noreferrer"
          >
            @nutritealmax
          </a>
        </div>
      </footer>
    </>
  );
}

