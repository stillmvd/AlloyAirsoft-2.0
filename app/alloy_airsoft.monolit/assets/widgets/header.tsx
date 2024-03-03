import React, { FC, ReactElement } from 'react';
import {Link, useLocation} from 'react-router-dom';
import User from '../shared/auth';

const Header: FC = (): ReactElement => {
    const location = useLocation();
    return (
        <header>
                <a href='/' className='logoContainer'>
                    <img src='/img/logo.svg' alt='Logo' className='logo' />
                </a>
                <nav className='navContainer'>
                    <Link to='/' className={location.pathname == "/" ? 'active' : ''}>
                        Home
                    </Link >
                    <Link to='/events' className={location.pathname == "/events" ? 'active' : ''}>
                        Events
                    </Link >
                    <Link to='/gallery' className={location.pathname == "/gallery" ? 'active' : ''}>
                        Gallery
                    </Link >
                </nav>
                <div className='userContainer'>
                    <User />
                </div>
        </header>
    )
}

export default Header;