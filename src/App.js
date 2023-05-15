import './App.css';
import Game from "./Game";
import useMusic from "./Music";
import { MuteButtons } from "./MuteButtons";


// Main app component.
function App() {
    const [muted, toggleMute, autoPlay] = useMusic();

    return (
        <div className="App">
            <header className="App-header">
                <Game autoPlayMusic={autoPlay} />
                <MuteButtons muted={muted} toggleMute={toggleMute}/>
            </header>
        </div>
    );
}

export default App;
