import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {App} from "app/App";
import "app/main.scss";

const rootElement: HTMLElement | null = document.getElementById("root");

if (!rootElement) {
    throw new Error("Не найдет root элемент, для построения приложения.");
}

ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    rootElement
)
