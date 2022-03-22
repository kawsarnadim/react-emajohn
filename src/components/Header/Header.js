import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='anchor'>
                <a href="/home">homee</a>
                <a href="/rome">tomaaa</a>
                <a href="/tom">romaaaa</a>
                <a href="/janina">ghumaaaa</a>
            </div>
        </nav>
    );
};

export default Header;