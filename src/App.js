import './App.css';
import Game from "./Game";
import useMusic from "./Music";
import { MuteButtons } from "./MuteButtons";


// Main app component.
function App() {
    const [musicMuted, toggleMuteMusic, autoPlay] = useMusic();

    return (
        <div className="App">
            <header className="App-header">
                <Game autoPlayMusic={autoPlay} />
                <MuteButtons
                    musicMuted={musicMuted}
                    toggleMuteMusic={toggleMuteMusic}
                />
            </header>
        </div>
    );
}

export default App;
