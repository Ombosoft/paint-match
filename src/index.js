import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import { gaInit } from "./GA";
import sentryInit from "./Sentry";
import "./index.css";

sentryInit();
gaInit();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
