import React, { FC, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import User from '../shared/auth';


const Header: FC = (): ReactElement => {
    const location = useLocation();
    return (
        <header>
                <a href='/' className='logoContainer'>
                    <img src='/img/logo.svg' alt='Logo' className='logo' />
                </a>
                <nav className='navContainer'>
                    <a href='/' className={location.pathname == "/" ? 'active' : ''}>
                        Home
                    </a>
                    <a href='/events' className={location.pathname == "/events" ? 'active' : ''}>
                        Events
                    </a>
                    <a href='/gallery' className={location.pathname == "/gallery" ? 'active' : ''}>
                        Gallery
                    </a>
                </nav>
                <div className='userContainer'>
                    <User />
                </div>
        </header>
    )
}

export default Header;