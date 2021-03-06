import React from 'react';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className="side-bar">
            <div className="element">Template Management</div>
            <div className="element">
                <div className="different">View Templates</div>
            </div>
            <div className="element">
                <div className="different">Create Templates</div>
            </div>
            <div className="element">Customer Segment Management</div>
            <div className="element">Manage Campaigns</div>
        </div>
    );
};

export default SideBar;