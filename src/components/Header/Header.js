import React from 'react';
import Logo from '../../images/Club-Apparel.jpg';
import user from '../../images/benjamin-jurke.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="Logo not available" className="logo"/>
            <img src={user} alt="Logo not available" className="user" />
            <p className="username">John Doe</p>
            <div className="logout">Logout</div>
        </div>
    );
};

export default Header;