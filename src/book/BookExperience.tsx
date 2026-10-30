import { useState } from "react";
import { useAudio, AUDIO_PATHS } from "../audio/AudioManager";
import BookCover from "./BookCover";
import Book from "./Book";
import AmbientBackground from "./AmbientBackground";
import VolumeControl from "./VolumeControl";
import "./book.css";

export default function BookExperience() {
  const [opened, setOpened] = useState(false);
  const { startAudio, playSfx } = useAudio();

  function handleOpen() {
    startAudio();
    playSfx(AUDIO_PATHS.bookOpen);
    setOpened(true);
  }

  function handleClose() {
    playSfx(AUDIO_PATHS.bookClose);
    setOpened(false);
  }

  return (
    <div className="story-root">
      <AmbientBackground />
      <VolumeControl />
      {!opened ? <BookCover onOpen={handleOpen} /> : <Book onClose={handleClose} />}
    </div>
  );
}
