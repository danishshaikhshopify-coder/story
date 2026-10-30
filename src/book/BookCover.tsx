import { cover } from "../content";

export default function BookCover({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="cover-stage">
      <div className="cover" onClick={onOpen} role="button" tabIndex={0} aria-label={cover.openLabel}>
        <div className="cover-spine" />
        <div className="cover-pages-edge" />
        <div className="cover-face">
          <div className="cover-border">
            <span className="cover-flourish">❧</span>
            <h1 className="cover-title">{cover.title}</h1>
            <p className="cover-subtitle">{cover.subtitle}</p>
            <p className="cover-tagline">{cover.tagline}</p>
            <span className="cover-flourish cover-flourish-bottom">❧</span>
          </div>
        </div>
      </div>
      <p className="cover-hint">{cover.hint}</p>
      <button className="cover-open-btn" onClick={onOpen}>
        {cover.openLabel}
      </button>
    </div>
  );
}
