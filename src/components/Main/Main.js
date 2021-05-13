import React, { useState } from 'react';
import SearchTemplate from '../SearchTemplate/SearchTemplate';
import SelectEntries from '../SelectEntries/SelectEntries';
import Table from '../Table/Table';
import './Main.css';
import initialData from '../../InitialData';
import Switch from '../Switch/Switch';
import Pagination from '../Pagination/Pagination';

const Main = () => {
    const [data, setData] = useState(initialData);
    const [tempID, setTempID] = useState("");
    const [tempName, setTempName] = useState("");
    const [tempType, setTempType] = useState("default");
    const [status, setStatus] = useState("default");
    const [entries, setEntries] = useState("4");
    const [pageNumber, setPageNumber] = useState(1);
    const [error, setError] = useState("");

    const handleStatusChange = index => {

        const updatedData = data.map((item, i) => {
            if(i === index) {
                item.isToggled = item.isToggled ? false : true;
                item.status = item.status === "Active" ? "Inactive" : "Active";
            }
            return item;
        });
        
        setData(updatedData);
    }
    

    const renderRows = () => {
        return data.map((entry, index) => 
        <tr key={index} className="table-row">
            <td className="text-data">{entry.id}</td>
            <td className="text-data">{entry.name}</td>
            <td className="text-data">{entry.type}</td>
            <td className="text-data">{entry.date}</td>
            <td className="text-data">{entry.status}</td>
            <td className="text-data">
                <Switch isToggled={entry.isToggled} onToggle={() => handleStatusChange(index)}/>
            </td>
        </tr>)
            
    }

    const resetData = () => {
        setData(initialData);
        setTempID("");
        setTempName("");
        setError("");
    }

    const addData = () => {

        if(tempID === "" || tempName === "" || tempType === "default" || status === "default") {
            setError("All fields are manadatory");
            return;
        }

        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;

        if(month <= 9) {
            month = "0" + month;
        }
        let day = date.getDate();

        let currentDate = `${day}-${month}-${year}`;

        const newObj = {
            id: tempID,
            name: tempName,
            type: tempType,
            date: currentDate,
            status: status,
            isToggled: false
        }

        const updatedData = [...data, newObj];

        setTempID("");
        setTempName("");

        setData(updatedData);
        
    }

    return (
        <div className="main">
            <SearchTemplate setTempType={setTempType} setStatus={setStatus} tempID={tempID} tempName={tempName} setTempID={setTempID} setTempName={setTempName} resetData={resetData} addData={addData} error={error}/>
            <SelectEntries setEntries={setEntries}/>
            <Table renderRows={renderRows}/>
            <Pagination dataArray={data} entries={entries} pageNumber={pageNumber} setData={setData} setPageNumber={setPageNumber}/>
        </div>
    );
};

export default Main;