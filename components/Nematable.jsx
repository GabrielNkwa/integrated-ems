import React from 'react'
import { Table } from '@nextui-org/react';

const NemaTable = () => {
  const [data, setData] = useState([
    {
      location: 'Abaji',
      coordinates: '40.7128° , 74.0060° ',
      emergency: 'Flood',
      reporter: 'Adekunle Joseph',
      contact: '09038484956'
    },
    {
      location: 'Kubwa',
      coordinates: '40.7128° , 74.0060° ',
      emergency: 'Building Collapse',
      reporter: 'Victor Egeonu',
      contact: '07025984956'
    },
    {
      location: 'Gwagwalada',
      coordinates: '40.7128° , 74.0060° ',
      emergency: 'Security Incident',
      reporter: 'Princewill Eke',
      contact: '08064849556'
    },
  
  
  ]);

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Emergencies');
    XLSX.writeFile(workbook, 'nema.xlsx');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4">Emergency Table</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Coordinates</th>
            <th className="px-4 py-2">Nature of Emergency</th>
            <th className="px-4 py-2">Reporter</th>
            <th className="px-4 py-2">Contact</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border px-4 py-2">{row.location}</td>
              <td className="border px-4 py-2">{row.coordinates}</td>
              <td className="border px-4 py-2">{row.emergency}</td>
              <td className="border px-4 py-2">{row.reporter}</td>
              <td className="border px-4 py-2">{row.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={exportToExcel}
        >
          Export to Excel
        </button>
      </div>
      
    </div>
  );
}

export default NemaTable