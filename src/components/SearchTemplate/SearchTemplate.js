import React from 'react';
import './SearchTemplate.css';

const SearchTemplate = ({ tempID, tempName, setTempID, setTempName, setTempType, setStatus, resetData, addData, error}) => {

    

    return (
        <div className="search-template" >
            <h2 id="heading">Search Templates</h2>
            <div id="error">{error}</div>
            <div className="flex-container">
                <div className="flex-item">
                    <p className="text">Template ID</p>
                    <input type="number" placeholder="Template ID" className="user-input" value={tempID} onChange={(e) => setTempID(e.target.value)} />
                </div>
                <div className="flex-item">
                    <p className="text">Template Type</p>
                    <select className="user-input" onChange={(e) => setTempType(e.target.value)} defaultValue="default">
                        <option value="default"  disabled hidden>Template Type</option>
                        <option value="email">Email</option>
                        <option value="sms">SMS</option>
                    </select>
                </div>
                <div className="flex-item">
                    <p className="text">Template Name</p>
                    <input type="text" placeholder="Template Name" className="user-input" value={tempName} onChange={(e) => setTempName(e.target.value)} />
                </div>
                <div className="flex-item">
                    <p className="text">Template Status</p>
                    <select className="user-input" onChange={(e) => setStatus(e.target.value)} defaultValue="default">
                        <option value="default" disabled hidden>Template Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
            </div>

            <div id="button-section">
                <button id="add" onClick={addData}>ADD</button>
                <button id="reset" onClick={resetData}>RESET</button>
            </div>
        </div>
    );
};

export default SearchTemplate;