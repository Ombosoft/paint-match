import "./App.css";
import Game from "./Game";
import useMusic from "./Music";
import { MuteButtons } from "./MuteButtons";
import { SoundsMutedContext, useSoundControl } from "./Sfx";

// Main app component.
function App() {
  const [musicMuted, toggleMuteMusic, autoPlay] = useMusic();
  const [soundsMuted, toggleMuteSounds] = useSoundControl();

  return (
    <div className="App">
      <header className="App-header">
        <SoundsMutedContext.Provider value={soundsMuted}>
          <Game autoPlayMusic={autoPlay} />
          <MuteButtons
            musicMuted={musicMuted}
            toggleMuteMusic={toggleMuteMusic}
            toggleMuteSounds={toggleMuteSounds}
          />
        </SoundsMutedContext.Provider>
      </header>
    </div>
  );
}

export default App;
