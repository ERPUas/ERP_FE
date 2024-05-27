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
        <div className=" fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="relative w-full max-w-md max-h-full bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-4">Add New Item</h2>
            <input
              type="text"
              name="Merek"
              placeholder="Merek"
              value={newItem.Merek}
              onChange={handleChange}
              className="border p-2 mb-2 w-full"
            />
          <input
            type="text"
            name="model"
            placeholder="Model"
            value={newItem.Model}
            onChange={handleChange}
            className="border p-2 mb-2 w-ful"
          />
          <input
            type="text"
            name="tahun"
            placeholder="Tahun"
            value={newItem.Tahun}
            onChange={handleChange}
            className="border p-2 mb-2 w-ful"
          />
          <input
            type="text"
            name="warna"
            placeholder="Warna"
            value={newItem.Warna}
            onChange={handleChange}
            className="border p-2 mb-2 w-ful"
          />
          <input
            type="text"
            name="biaya"
            placeholder="Biaya"
            value={newItem.Biaya}
            onChange={handleChange}
            className="border p-2 mb-2 w-ful"
          />
          <input
            type="text"
            name="status"
            placeholder="Status"
            value={newItem.Status}
            onChange={handleChange}
            className="border p-2 mb-2 w-ful"
          />
          <input
            type="text"
            name="stok"
            placeholder="Stok"
            value={newItem.Stok}
            onChange={handleChange}
            className="border p-2 mb-2 w-ful"
          />
            <button onClick={handleAddNew} className="bg-green-500 text-white px-4 py-2 rounded">
              Save
            </button>
            <button onClick={() => setIsModalOpen(false)} className="bg-red-500 text-white px-4 py-2 rounded ml-2">
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className='relative overflow-x-auto rounded-lg'>
  <table className="w-full text-sm text-left rtl:text-right text-white-500 dark:text-gray-400  ">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
      <tr>
        {TABLE_HEAD.map((head) => (
          <th scope="col" className="px-6 py-3" key={head}>
            {head}
          </th>
          
        ))}
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {barang.map((item, index) => (
        <tr
          key={index}
          className={`bg-white border-b dark:border-gray-700`}
        >
          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black ">
            {item.Merek}
          </td>
          <td className="px-6 py-4">{item.Model}</td>
          <td className="px-6 py-4">{item.Tahun}</td>
          <td className="px-6 py-4">{item.Warna}</td>
          <td className="px-6 py-4">{item.Biaya}</td>
          <td className="px-6 py-4">{item.Status}</td>
          <td className="px-6 py-4">{item.Stok}</td>
          <td>Edit</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
}
