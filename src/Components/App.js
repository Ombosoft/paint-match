import { Stack } from "@mui/material";
import useMusic from "../Music";
import { SoundsMutedContext, useSoundControl } from "../Sfx";
import "./App.css";
import Game from "./Game";
import { MuteButtons } from "./MuteButtons";

// Main app component.
function App() {
    const [musicMuted, toggleMuteMusic, autoPlay] = useMusic();
    const [soundsMuted, toggleMuteSounds] = useSoundControl();

    return (
        <div className="App">
            <header className="App-header">
                <SoundsMutedContext.Provider value={soundsMuted}>
                    <Stack direction="column" sx={{ height: "100vh" }}>
                        <Game autoPlayMusic={autoPlay} />
                        <MuteButtons
                            musicMuted={musicMuted}
                            toggleMuteMusic={toggleMuteMusic}
                            toggleMuteSounds={toggleMuteSounds}
                        />
                    </Stack>
                </SoundsMutedContext.Provider>
            </header>
        </div>
    );
}

export default App;
