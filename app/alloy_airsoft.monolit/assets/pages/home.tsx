import React from 'react';
import logo from '../img/logo.svg';
import account from '../img/account.svg';

function Home() {
    return (
        <header>
            <a href="" className="logo-container">
                <img src={logo} alt="logo" className="logo" />
            </a>
            <nav className="nav-container">
                <a href="/">
                    Home
                </a>
                <a href="">
                    Events
                </a>
                <a href="">
                    Account
                </a>
            </nav>
            <a href="" className="user-container">
                <img src={account} alt="account" className="user" />
            </a>
        </header>
    )
}

export default Home;