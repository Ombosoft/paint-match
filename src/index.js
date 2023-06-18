import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import App from "./Components/App";
import { gaInit } from "./GA";
import "./index.css";

gaInit();
const root = ReactDOM.createRoot(document.getElementById("root"));
const logError = (error, info) => {
    console.error({ error }, { info });
};
root.render(
    <React.StrictMode>
        <ErrorBoundary
            fallback={<div>Something went wrong</div>}
            onError={logError}
        >
            <App />
        </ErrorBoundary>
    </React.StrictMode>
);
