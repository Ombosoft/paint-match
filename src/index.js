import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import { gaInit } from "./GA";
import { nativeInit } from "./Native";
import "./index.css";

if (process.env.NODE_ENV === "production") {
    gaInit();
}

nativeInit();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
