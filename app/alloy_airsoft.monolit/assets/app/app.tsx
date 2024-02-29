import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/main.scss';
import {
    Route,
    BrowserRouter as Router, Routes,
} from 'react-router-dom';
import Home from '../pages/home';

function App() {
    return (
        <Routes>
            <Route path="/" Component={Home} />
        </Routes>
    );
}

const rootElement: HTMLElement | null = document.getElementById('root');

if (!rootElement) {
    throw new Error('Не найдет root элемент, для построения приложения.')
}

ReactDOM.createRoot(rootElement).render(
    <Router>
        <App />
    </Router>
);