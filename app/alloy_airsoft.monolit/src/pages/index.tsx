import React, { FC, ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Events from './events';
import Gallery from './gallery';

export const App: FC = (): ReactElement => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/events' element={<Events/>} />
            <Route path='/gallery' element={<Gallery/>} />
        </Routes>
    )
}

export default App;