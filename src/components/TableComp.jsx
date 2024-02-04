// TableComponent.js
import React from 'react';
import '../components/css/TableComp.css';

const TableComp = () => {
  const data = [
    ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3', 'Row 1, Cell 4'],
    ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3', 'Row 2, Cell 4'],
    ['Row 3, Cell 1', 'Row 3, Cell 2', 'Row 3, Cell 3', 'Row 3, Cell 4'],
  ];

  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th></th>
            <th>NO. OF ROOMS</th>
            <th>OFF-SEASON</th>
            <th>PEAK SEASON</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComp;
