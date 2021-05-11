import React from 'react';
import './MenuBar.css';


const MenuBar = () => {
    return (
        <div className="menu-bar">
            <p>CONFIGURATIONS</p>
            <p>LOYALTY MANAGEMENT</p>
            <p>MANAGE USERS</p>
            <p>MANAGE MEMBERS</p>
            <p>COUPON MANAGEMENT</p>
            <p className="campaign">CAMPAIGN MANAGEMENT</p>
            <p>OTHERS</p>
            <p>ADVISORY</p>
            <p>REPORTS</p>
        </div>
    );
};

export default MenuBar;