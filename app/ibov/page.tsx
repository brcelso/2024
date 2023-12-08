"use client"

import React, { useEffect, useState } from 'react';

interface GoogleSheetsData {
  range: string;
  majorDimension: string;
  values: string[][];
}

const GoogleSheetsPage: React.FC = () => {
  const [tableData, setTableData] = useState<string[][]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sheetId = '1vkqc4wkgaXAZrZs_kWy8P8tMX8GullMy6hdWoKOt0pU';
        const sheetName = 'ibov_data';
        const apiKey = 'AIzaSyDHtaDiVGnHN-PGkTiz624BZBwYBO1dV0s'; // Replace with your actual API key

        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data: GoogleSheetsData = await response.json();
        setTableData(data.values);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Google Sheets Page</h1>
      <table>
        <thead>
          {tableData.length > 0 && (
            <tr>
              {tableData[0].map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          )}
        </thead>
        <tbody>
          {tableData.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, columnIndex) => (
                <td key={columnIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GoogleSheetsPage;
