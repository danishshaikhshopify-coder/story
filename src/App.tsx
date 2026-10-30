import { AudioProvider } from "./audio/AudioManager";
import BookExperience from "./book/BookExperience";

export default function App() {
  return (
    <AudioProvider>
      <BookExperience />
    </AudioProvider>
  );
}
