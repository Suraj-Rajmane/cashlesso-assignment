import React from 'react';
import './Table.css';

const Table = ({ renderRows }) => {
    return (
        <table className="table-data">
            <thead >
                <tr id="first-row">
                    <th>Template ID</th>
                    <th>Template Name</th>
                    <th>Template Type</th>
                    <th>Created On</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );
};

export default Table;