import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import { gaInit } from "./GA";
import { nativeInit } from "./Native";
import { sentryInit } from "./Sentry";
import "./index.css";

if (process.env.NODE_ENV === "production") {
    sentryInit();
    gaInit();
}

nativeInit();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
