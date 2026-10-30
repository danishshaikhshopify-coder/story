import { Volume2, VolumeX } from "lucide-react";
import { useAudio } from "../audio/AudioManager";

export default function VolumeControl() {
  const { musicOn, toggleMusic, volume, setVolume } = useAudio();

  return (
    <div className="volume-control">
      <button onClick={toggleMusic} aria-label={musicOn ? "Mute music" : "Unmute music"}>
        {musicOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
      </button>
      <input
        type="range"
        min={0}
        max={1}
        step={0.05}
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        aria-label="Music volume"
      />
    </div>
  );
}
