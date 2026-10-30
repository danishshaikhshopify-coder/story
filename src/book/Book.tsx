import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { chapters, finale, type Paragraph } from "../content";
import { useAudio, AUDIO_PATHS } from "../audio/AudioManager";

const TOTAL = chapters.length;

export default function Book({ onClose }: { onClose: () => void }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [animating, setAnimating] = useState<{ index: number; dir: "next" | "prev" } | null>(null);
  const { playSfx } = useAudio();
  const touchStartX = useRef<number | null>(null);
  const committedRef = useRef(true);
  const fallbackTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const isLast = currentPage === TOTAL - 1;
  const isFirst = currentPage === 0;

  // Commits the page-turn once, whichever fires first: the real animationend
  // event or this fallback timer (a tab losing focus or a slow device can
  // drop/delay the event, which would otherwise permanently stall navigation).
  function commitFlip(dir: "next" | "prev") {
    if (committedRef.current) return;
    committedRef.current = true;
    clearTimeout(fallbackTimer.current);
    setCurrentPage((p) => (dir === "next" ? p + 1 : p - 1));
    setAnimating(null);
  }

  function startFlip(index: number, dir: "next" | "prev") {
    playSfx(AUDIO_PATHS.pageTurn);
    committedRef.current = false;
    setAnimating({ index, dir });
    fallbackTimer.current = setTimeout(() => commitFlip(dir), 1400);
  }

  function next() {
    if (animating || currentPage >= TOTAL - 1) return;
    startFlip(currentPage, "next");
  }

  function prev() {
    if (animating || currentPage <= 0) return;
    startFlip(currentPage - 1, "prev");
  }

  function onLeafAnimationEnd(i: number) {
    if (!animating || animating.index !== i) return;
    commitFlip(animating.dir);
  }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) next();
    else prev();
  }

  return (
    <div className="book-stage">
      <button className="book-close-btn" onClick={onClose} aria-label="Close book">
        <X size={18} />
      </button>

      <div className="book-wrap" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="book-shell" />
        <div className="book-spine-open" />
        <div className="book-page-stack" />
        <div className="book-pages">
          {chapters.map((chapter, i) => {
            const isAnimating = animating?.index === i;
            const settledFlipped = i < currentPage;
            const slotOffset = Math.max(0, i - currentPage);
            const zIndex = isAnimating ? TOTAL + 1 : settledFlipped ? i : TOTAL - i;

            let leafClass = "leaf";
            if (isAnimating) leafClass += animating!.dir === "next" ? " anim-flip-next" : " anim-flip-prev";
            else if (settledFlipped) leafClass += " leaf-flipped";

            return (
              <div
                key={chapter.id}
                className="leaf-slot"
                style={{
                  zIndex,
                  transform: `translate(${slotOffset * 1.1}px, ${slotOffset * 0.8}px)`,
                }}
              >
                <div className={leafClass} onAnimationEnd={() => onLeafAnimationEnd(i)}>
                  <div className="leaf-fold-shadow" />
                  <div className="leaf-corner" />
                  <span className="page-number">{chapter.number}</span>
                  <span className="page-flourish">❧</span>
                  <h2 className="chapter-title">{chapter.title}</h2>
                  <p className="chapter-tagline">{chapter.tagline}</p>
                  <div className="chapter-body">
                    {chapter.paragraphs.map((p: Paragraph, pi) =>
                      typeof p === "string" ? (
                        <p key={pi}>{p}</p>
                      ) : (
                        <p key={pi} className="italic-aside">
                          {p.text}
                        </p>
                      )
                    )}
                    {chapter.emphasisLine && <p className="chapter-emphasis">{chapter.emphasisLine}</p>}
                  </div>

                  {chapter.number === TOTAL && (
                    <div className="finale-block">
                      <p className="finale-mini-heading">{finale.miniHeading}</p>
                      <p className="finale-urdu" dir="rtl">
                        {finale.urduCoupletLines.map((line, li) => (
                          <span key={li}>{line}</span>
                        ))}
                      </p>
                      <p className="finale-couplet">
                        {finale.coupletLines.map((line, li) => (
                          <span key={li}>{line}</span>
                        ))}
                      </p>
                      <p className="finale-signature">
                        {finale.signatureLines.map((line, li) => (
                          <span key={li}>{line}</span>
                        ))}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <button className="book-nav book-nav-prev" onClick={prev} disabled={isFirst} aria-label="Previous page">
          <ChevronLeft size={20} />
        </button>
        <button className="book-nav book-nav-next" onClick={next} disabled={isLast} aria-label="Next page">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="page-indicator">
        Page {currentPage + 1} / {TOTAL}
      </div>
    </div>
  );
}
