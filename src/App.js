import { Stack } from "@mui/material";
import './App.css';
import Game from "./Game";
import useMusic from "./Music";


// Main app component.
function App() {
    const [MuteButton, autoPlay] = useMusic();

    return (
        <div className="App">
            <header className="App-header">
                <Game autoPlayMusic={autoPlay} />
                <Stack direction="row" justifyContent="end" sx={{
                    position: 'fixed',
                    bottom: "0em",
                    right: "0em",
                }}>
                    <MuteButton />
                </Stack>
            </header>
        </div>
    );
}

export default App;
