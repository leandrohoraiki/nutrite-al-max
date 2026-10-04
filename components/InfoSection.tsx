"use client";

import {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { infoItems, type InfoBlock, type InfoItem } from "../lib/informacion";

const FADE_MS = 240;

function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function headingId(item: InfoItem, text: string) {
  return `${item.id}-${slugify(text)}`;
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function Chevron() {
  return (
    <span className="nam-info-chevron" aria-hidden="true">
      <svg viewBox="0 0 16 16" focusable="false">
        <path d="M4 6l4 4 4-4" />
      </svg>
    </span>
  );
}

function Media({ item, compact = false }: { item: InfoItem; compact?: boolean }) {
  if (item.image) {
    return (
      <img
        className="nam-info-photo"
        src={item.image.src}
        alt={compact ? "" : item.image.alt}
        loading="lazy"
        decoding="async"
        style={
          item.image.position
            ? { objectPosition: item.image.position }
            : undefined
        }
      />
    );
  }

  // Cabecera tipográfica provisoria hasta contar con la fotografía real.
  return (
    <div
      className={`nam-info-panel nam-info-panel-${item.panel}`}
      aria-hidden="true"
    >
      <span className="nam-info-panel-num">{item.num}</span>
      {!compact && (
        <span className="nam-info-panel-word">{item.panelWord}</span>
      )}
    </div>
  );
}

function renderBlock(item: InfoItem, block: InfoBlock, key: number): ReactNode {
  switch (block.type) {
    case "p":
      return <p key={key}>{block.text}</p>;
    case "h":
      return (
        <h5 key={key} id={headingId(item, block.text)} className="nam-info-h">
          {block.text}
        </h5>
      );
    case "football":
      return (
        <div key={key} className="nam-info-football">
          <span className="nam-info-football-tag">
            Referencia para fútbol competitivo
          </span>
          <p>{block.text}</p>
        </div>
      );
    case "example":
      return (
        <div key={key} className="nam-info-example">
          {block.text ? (
            <p>
              {block.lead && <strong>{block.lead} </strong>}
              {block.text}
            </p>
          ) : (
            block.lead && <p className="nam-info-example-lead">{block.lead}</p>
          )}
          {block.items && (
            <ul>
              {block.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          )}
          {block.after?.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      );
    case "list":
      return (
        <div key={key} className="nam-info-checklist">
          <p>{block.lead}</p>
          <ul>
            {block.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      );
    case "formula":
      return (
        <div key={key} className="nam-info-formula">
          <p className="nam-info-formula-title">{block.title}</p>
          <ul>
            {block.terms.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      );
    case "cases":
      return (
        <div key={key} className="nam-info-cases">
          {block.items.map((c) => (
            <div key={c.label} className="nam-info-case">
              <p className="nam-info-case-label">{c.label}</p>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      );
    case "remember":
      return (
        <aside
          key={key}
          className="nam-info-remember"
          aria-labelledby={headingId(item, block.title)}
        >
          <h5 id={headingId(item, block.title)}>{block.title}</h5>
          <p>{block.text}</p>
        </aside>
      );
  }
}

type BlockProps = {
  item: InfoItem;
  index: number;
  open: boolean;
  onToggle: (id: string, next: boolean, from?: "end") => void;
  regionRef: (el: HTMLDivElement | null) => void;
  toggleRef: (el: HTMLButtonElement | null) => void;
};

function InfoBlockView({
  item,
  index,
  open,
  onToggle,
  regionRef,
  toggleRef,
}: BlockProps) {
  const titleId = `${item.id}-titulo`;
  const regionId = `${item.id}-contenido`;
  const sections = item.article.blocks.filter(
    (b): b is Extract<InfoBlock, { type: "h" }> => b.type === "h"
  );

  return (
    <article
      className={`nam-info-block${index % 2 === 1 ? " nam-info-block-flip" : ""}${
        open ? " is-open" : ""
      }`}
      id={item.id}
      aria-labelledby={titleId}
    >
      <div className="nam-info-head">
        <div className="nam-info-media">
          <Media item={item} />
        </div>

        <p className="nam-info-meta">
          <span className="nam-info-num">{item.num}</span>
          <span className="nam-info-meta-rule" aria-hidden="true" />
          <span className="nam-info-category">{item.category}</span>
        </p>

        <h3 className="nam-info-title" id={titleId}>
          {item.title}
        </h3>

        <p className="nam-info-intro">{item.intro}</p>

        <ul className="nam-info-facts" aria-label="Datos breves">
          {item.facts.map(([lead, text]) => (
            <li key={lead}>
              <strong>{lead}</strong> {text}
            </li>
          ))}
        </ul>

        <div className="nam-info-actions">
          <button
            type="button"
            className="nam-info-toggle"
            aria-expanded={open}
            aria-controls={regionId}
            ref={toggleRef}
            onClick={() => onToggle(item.id, !open)}
          >
            <span>{open ? "Cerrar información" : "Leer información completa"}</span>
            <Chevron />
          </button>
        </div>
      </div>

      <div
        className="nam-info-region"
        id={regionId}
        role="region"
        aria-labelledby={titleId}
        hidden={!open}
        ref={regionRef}
      >
        <div className="nam-info-bar">
          <div className="nam-info-bar-thumb">
            <Media item={item} compact />
          </div>
          <p className="nam-info-bar-text">
            <span className="nam-info-bar-cat">
              {item.num} · {item.category}
            </span>
            <span className="nam-info-bar-title">{item.title}</span>
          </p>
          <button
            type="button"
            className="nam-info-bar-close"
            aria-expanded={open}
            aria-controls={regionId}
            onClick={() => onToggle(item.id, false, "end")}
          >
            Cerrar
            <span className="nam-info-sr"> información: {item.title}</span>
          </button>
        </div>

        <div className="nam-info-article">
          <nav className="nam-info-index" aria-label={`Índice: ${item.title}`}>
            <p>En este tema</p>
            <ol>
              {sections.map((s) => (
                <li key={s.text}>
                  <a href={`#${headingId(item, s.text)}`}>{s.text}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="nam-info-prose">
            <h4 className="nam-info-article-title">{item.article.title}</h4>

            {item.article.blocks.map((b, i) => renderBlock(item, b, i))}

            <section
              className="nam-info-sources"
              aria-labelledby={`${item.id}-fuentes`}
            >
              <h5 id={`${item.id}-fuentes`}>Fuentes consultadas</h5>
              <ol>
                {item.article.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                      {s.label}
                      <span className="nam-info-sr">
                        {" "}
                        (se abre en una pestaña nueva)
                      </span>
                    </a>
                    <span className="nam-info-cite">{s.citation}</span>
                  </li>
                ))}
              </ol>
            </section>

            <button
              type="button"
              className="nam-info-close-end"
              aria-expanded={open}
              aria-controls={regionId}
              onClick={() => onToggle(item.id, false, "end")}
            >
              Cerrar información
              <Chevron />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function InfoSection() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});
  const regions = useRef<Record<string, HTMLDivElement | null>>({});
  const toggles = useRef<Record<string, HTMLButtonElement | null>>({});
  const pendingFade = useRef<string | null>(null);

  // Al cerrar desde el final del artículo, el texto desaparece: se vuelve
  // de inmediato a la cabecera del tema para que el visitante no se pierda.
  const scrollToBlock = useCallback((id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "instant", block: "start" });
  }, []);

  const onToggle = useCallback(
    (id: string, next: boolean, from?: "end") => {
      if (next) {
        pendingFade.current = id;
        setOpenIds((s) => ({ ...s, [id]: true }));
        return;
      }

      const finish = () => {
        setOpenIds((s) => ({ ...s, [id]: false }));
        if (from === "end") {
          // Al cerrar desde abajo, el visitante vuelve a la cabecera del tema.
          requestAnimationFrame(() => {
            scrollToBlock(id);
            toggles.current[id]?.focus({ preventScroll: true });
          });
        }
      };

      const region = regions.current[id];
      if (region && !prefersReducedMotion() && region.animate) {
        region
          .animate([{ opacity: 1 }, { opacity: 0 }], {
            duration: 160,
            easing: "ease-out",
          })
          .finished.then(finish, finish);
      } else {
        finish();
      }
    },
    [scrollToBlock]
  );

  // Animación breve de apertura (sin animar la altura del texto completo).
  useEffect(() => {
    const id = pendingFade.current;
    if (!id) return;
    pendingFade.current = null;
    const region = regions.current[id];
    if (region && !prefersReducedMotion() && region.animate) {
      region.animate(
        [
          { opacity: 0, transform: "translateY(-6px)" },
          { opacity: 1, transform: "none" },
        ],
        { duration: FADE_MS, easing: "cubic-bezier(.2,.7,.2,1)" }
      );
    }
  }, [openIds]);

  // Enlaces directos: #alimentacion, #hidratacion, #antropometria
  // (o un subtítulo interno) abren el tema y llevan hasta su título.
  useEffect(() => {
    function openFromHash() {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      if (!hash) return;
      const item = infoItems.find(
        (it) => hash === it.id || hash.startsWith(`${it.id}-`)
      );
      if (!item) return;
      setOpenIds((s) => ({ ...s, [item.id]: true }));
      requestAnimationFrame(() => {
        const target =
          hash === item.id
            ? document.getElementById(`${item.id}-titulo`)
            : document.getElementById(hash);
        target?.scrollIntoView({ behavior: "instant", block: "start" });
      });
    }
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <section
      className="nam-section nam-info"
      id="informacion"
      aria-labelledby="info-title"
    >
      {/* Sin JavaScript, los artículos se muestran completos. */}
      <noscript
        dangerouslySetInnerHTML={{
          __html:
            "<style>.nam-info-region[hidden]{display:block!important}.nam-info-actions,.nam-info-bar,.nam-info-close-end{display:none!important}</style>",
        }}
      />
      <div className="nam-container">
        <div className="nam-section-heading nam-info-heading">
          <p className="nam-eyebrow">Alimentación · Hidratación · Antropometría</p>
          <h2 id="info-title">Información</h2>
          <p className="nam-info-lead">
            Alimentación, hidratación y antropometría explicadas con evidencia y
            ejemplos concretos.
          </p>
        </div>

        <div className="nam-info-list">
          {infoItems.map((item, i) => (
            <InfoBlockView
              key={item.id}
              item={item}
              index={i}
              open={!!openIds[item.id]}
              onToggle={onToggle}
              regionRef={(el) => {
                regions.current[item.id] = el;
              }}
              toggleRef={(el) => {
                toggles.current[item.id] = el;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(InfoSection);
