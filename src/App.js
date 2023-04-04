import './App.css';
import React, {useCallback, useState} from "react";
import AppTitle from "./AppTitle";
import Game from "./Game";


// Main app component.
function App() {
    // State for debug mode
    const [debug, setDebug] = useState(false);

    // Callback for handling debug mode changes
    const handleDebug = useCallback((newDebug) => {
        setDebug(newDebug);
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <AppTitle onDebug={handleDebug}/>
                <Game debug={debug}/>
            </header>
        </div>
    );
}

export default App;
