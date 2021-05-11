import React, { useState } from 'react';
import './SelectEntries.css';

const SelectEntries = ({ setEntries }) => {
    
    return (
        <div className="select-entries">
            <span className="text">Show</span>
            <select onChange={(e) => setEntries(e.target.value)} id="select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <span className="text">Entries Per Page</span>
        </div>
    );
};

export default SelectEntries;