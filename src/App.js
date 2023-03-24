import './App.css';
import React, {useState} from "react";
import {AppTitle} from "./AppTitle";
import {Game} from "./Game";


function App() {
    const [debug, setDebug] = useState(false);
    return (
        <div className="App">
            <header className="App-header">
                <AppTitle onDebug={(debug) => setDebug(debug)}/>
                <Game debug={debug}/>
            </header>
        </div>
    );
}

export default App;
