import { Stack } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import useMusic from "../Music";
import { getStatusBarHeight } from "../Native";
import { SoundsMutedContext, useSoundControl } from "../Sfx";
import "./App.css";
import ConsentDialog from "./ConsentDialog";
import Game from "./Game";
import { LsOffDetector } from "./LsOffDetector";
import { MuteButtons } from "./MuteButtons";

// Main app component.
function App() {
    const [musicMuted, toggleMuteMusic, autoPlay, onChangeLevel] = useMusic();
    const [soundsMuted, toggleMuteSounds] = useSoundControl();
    const theme = createTheme({
        typography: {
            allVariants: {
                fontFamily: "Nunito",
            },
        },
    });
    const [statusBarHeight, setStatusBarHeight] = useState('0px');
    useEffect(() => {
        getStatusBarHeight().then((height) => {
            setStatusBarHeight(`${height}px`);
        });
    }, [setStatusBarHeight]);
    return (
        <ThemeProvider theme={theme}>
            <LsOffDetector />
            <div className="App">
                <div className="background" />
                <header className="App-header">
                    <SoundsMutedContext.Provider value={soundsMuted}>
                        <Stack
                            direction="column"
                            sx={{
                                height: `calc(100vh - ${statusBarHeight})`,
                                width: "100%",
                                paddingTop: `${statusBarHeight}px`,
                            }}
                        >
                            <Game
                                autoPlayMusic={autoPlay}
                                onChangeLevel={onChangeLevel}
                            />
                            <MuteButtons
                                musicMuted={musicMuted}
                                toggleMuteMusic={toggleMuteMusic}
                                toggleMuteSounds={toggleMuteSounds}
                            />
                        </Stack>
                    </SoundsMutedContext.Provider>
                </header>
                <ConsentDialog />
            </div>
        </ThemeProvider>
    );
}

export default App;
