import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import { App } from '../pages';
import { BrowserRouter } from 'react-router-dom';

const rootElement: HTMLElement | null = document.getElementById('root');

if (!rootElement) {
    throw new Error('Не найдет root элемент, для построения приложения.')
}
ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);