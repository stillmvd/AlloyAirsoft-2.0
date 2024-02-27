import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    Link,
    Route,
    BrowserRouter as Router, Routes,
} from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const Second = () => <h1>Second page</h1>

function App() {
    return (
        <>
            <nav>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="second">Second</Link>
                </li>
            </nav>

            <Routes>
                <Route path="/" Component={Home} />
                <Route path="second" Component={Second} />
            </Routes>
        </>
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