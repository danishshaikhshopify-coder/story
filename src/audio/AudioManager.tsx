import { createContext, useContext, useRef, useState, useCallback, type ReactNode } from "react";

// Drop your own files at these paths (silently no-ops if missing — see the
// README note at the bottom of this file for exactly what's needed).
export const AUDIO_PATHS = {
  music: "/audio/piano-theme.mp3",
  bookOpen: "/audio/book-open.mp3",
  bookClose: "/audio/book-close.mp3",
  pageTurn: "/audio/page-turn.mp3",
};

interface AudioContextValue {
  musicOn: boolean;
  sfxOn: boolean;
  volume: number;
  started: boolean;
  startAudio: () => void;
  toggleMusic: () => void;
  toggleSfx: () => void;
  setVolume: (v: number) => void;
  playSfx: (src: string) => void;
}

const Ctx = createContext<AudioContextValue | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [musicOn, setMusicOn] = useState(true);
  const [sfxOn, setSfxOn] = useState(true);
  const [volume, setVolumeState] = useState(0.6);
  const [started, setStarted] = useState(false);
  const musicRef = useRef<HTMLAudioElement | null>(null);
  const sfxRef = useRef<Map<string, HTMLAudioElement>>(new Map());

  const startAudio = useCallback(() => {
    if (started) return;
    setStarted(true);
    const el = new Audio(AUDIO_PATHS.music);
    el.loop = true;
    el.volume = volume;
    musicRef.current = el;
    if (musicOn) el.play().catch(() => {});
  }, [started, musicOn, volume]);

  const toggleMusic = useCallback(() => {
    setMusicOn((on) => {
      const next = !on;
      const el = musicRef.current;
      if (el) {
        if (next) el.play().catch(() => {});
        else el.pause();
      }
      return next;
    });
  }, []);

  const toggleSfx = useCallback(() => setSfxOn((on) => !on), []);

  const setVolume = useCallback((v: number) => {
    setVolumeState(v);
    if (musicRef.current) musicRef.current.volume = v;
  }, []);

  const playSfx = useCallback(
    (src: string) => {
      if (!sfxOn) return;
      // Reuse one element per sound so a rapid re-trigger (e.g. fast page flips)
      // restarts it instead of overlapping a second copy on top.
      let el = sfxRef.current.get(src);
      if (!el) {
        el = new Audio(src);
        sfxRef.current.set(src, el);
      }
      el.volume = volume;
      el.currentTime = 0;
      el.play().catch(() => {});
    },
    [sfxOn, volume]
  );

  return (
    <Ctx.Provider value={{ musicOn, sfxOn, volume, started, startAudio, toggleMusic, toggleSfx, setVolume, playSfx }}>
      {children}
    </Ctx.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
}

// ---------------------------------------------------------------------------
// No audio files exist in this project yet. Every path in AUDIO_PATHS 404s
// silently (play() rejections are caught), so the book works with no sound
// until these are added. Drop files at these exact paths to enable audio:
//   public/audio/piano-theme.mp3  — soft romantic piano loop, background music
//   public/audio/book-open.mp3    — hardcover opening sound
//   public/audio/book-close.mp3   — hardcover closing sound
//   public/audio/page-turn.mp3    — single paper-flip sound, played the instant a page starts folding
// ---------------------------------------------------------------------------
