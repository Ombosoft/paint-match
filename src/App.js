import { Stack } from "@mui/material";
import './App.css';
import Game from "./Game";
import useMusic from "./Music";
import { MuteButton } from "./MuteButtons";


// Main app component.
function App() {
    const [muted, toggleMute, autoPlay] = useMusic();

    return (
        <div className="App">
            <header className="App-header">
                <Game autoPlayMusic={autoPlay} />
                <Stack direction="row" justifyContent="end" sx={{
                    position: 'fixed',
                    bottom: "0em",
                    left: "0em",
                }}>
                    <MuteButton muted={muted} toggleMute={toggleMute}/>
                </Stack>
            </header>
        </div>
    );
}

export default App;
