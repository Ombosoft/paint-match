import './App.css';
import Game from "./Game";
import useMusic from "./Music";
import { Stack } from "@mui/material";


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
