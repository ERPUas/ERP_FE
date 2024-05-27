import React, { useState, useEffect } from 'react';

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

const TABLE_HEAD = ["Merek", "Model", "Tahun", "Warna", "Biaya", "Status", "Stok"];

export function MembersTable() {
  const [barang, setBarang] = useState([]);
  const [newItem, setNewItem] = useState({
    Merek: '',
    Model: '',
    Tahun: '',
    Warna: '',
    Biaya: '',
    Status: '',
    Stok: ''
  });
  const [isAdding, setIsAdding] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/barang')
      .then(response => response.json())
      .then(data => setBarang(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleAddNew = () => {
    setBarang([...barang, newItem]);
    setNewItem({
      Merek: '',
      Model: '',
      Tahun: '',
      Warna: '',
      Biaya: '',
      Status: '',
      Stok: ''
    });
    setIsAdding(false);
    setIsModalOpen(false); // Close the modal after adding new item
  };

  return (
    <div className="relative overflow-x-auto">
      <button
        onClick={() => setIsModalOpen(true)} // Open the modal on button click
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add New
      </button>
      
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-4">Add New Item</h2>
            <input
              type="text"
              name="Merek"
              placeholder="Merek"
              value={newItem.Merek}
              onChange={handleChange}
              className="border p-2 mb-2 w-full"
            />
            {/* Add inputs for other fields similarly */}
            <button onClick={handleAddNew} className="bg-green-500 text-white px-4 py-2 rounded">
              Save
            </button>
            <button onClick={() => setIsModalOpen(false)} className="bg-red-500 text-white px-4 py-2 rounded ml-2">
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th scope="col" className="px-6 py-3" key={head}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {barang.map((item, index) => (
            <tr
              key={index}
              className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 ${index % 2 === 0 ? '' : 'dark:bg-gray-700'}`}
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.Merek}
              </td>
              {/* Render other fields similarly */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
