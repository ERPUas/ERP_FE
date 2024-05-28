import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

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
    axios.post('http://localhost:3000/barang', newItem)
      .then(response => {
        setBarang([...barang, response.data]);
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
        setIsModalOpen(false);
      })
      .catch(error => console.error('Error adding item:', error));
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
    setNewItem(item);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:3000/barang/${currentItem._id}`, newItem)
      .then(response => {
        const updatedBarang = barang.map(item => 
          item._id === currentItem._id ? response.data : item
        );
        setBarang(updatedBarang);
        setNewItem({
          Merek: '',
          Model: '',
          Tahun: '',
          Warna: '',
          Biaya: '',
          Status: '',
          Stok: ''
        });
        setIsEditing(false);
        setIsModalOpen(false);
        setCurrentItem(null);
      })
      .catch(error => console.error('Error updating item:', error));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/barang/${id}`)
      .then(() => {
        setBarang(barang.filter(item => item._id !== id));
      })
      .catch(error => console.error('Error deleting item:', error));
  };

  return (
    <div className="relative overflow-x-auto">
      <section class="bg-white dark:bg-gray-900 rounded-t-lg ">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Storage tool for software companies</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">"Streamline your workflow with our intuitive data logging solution. Capture, organize, and analyze your information with ease."</p>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="src\assets\img\PngItem_6233741-removebg-preview.png" alt="mockup"/>
        </div>
        <button
        onClick={() => setIsModalOpen(true)} 
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add New
      </button>                
    </div>
</section>
      {isModalOpen && (
        <div className=" fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="relative w-full max-w-md max-h-full bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-4">{isEditing ? 'Edit Item' : 'Add New Item'}</h2>
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
              name="Model"
              placeholder="Model"
              value={newItem.Model}
              onChange={handleChange}
              className="border p-2 mb-2 w-full"
            />
            <input
              type="text"
              name="Tahun"
              placeholder="Tahun"
              value={newItem.Tahun}
              onChange={handleChange}
              className="border p-2 mb-2 w-full"
            />
            <input
              type="text"
              name="Warna"
              placeholder="Warna"
              value={newItem.Warna}
              onChange={handleChange}
              className="border p-2 mb-2 w-full"
            />
            <input
              type="text"
              name="Biaya"
              placeholder="Biaya"
              value={newItem.Biaya}
              onChange={handleChange}
              className="border p-2 mb-2 w-full"
            />
            <input
              type="text"
              name="Status"
              placeholder="Status"
              value={newItem.Status}
              onChange={handleChange}
              className="border p-2 mb-2 w-full"
            />
            <input
              type="text"
              name="Stok"
              placeholder="Stok"
              value={newItem.Stok}
              onChange={handleChange}
              className="border p-2 mb-2 w-full"
            />
            <button onClick={isEditing ? handleUpdate : handleAddNew} className="bg-green-500 text-white px-4 py-2 rounded">
              {isEditing ? 'Update' : 'Save'}
            </button>
            <button onClick={() => {
                setIsModalOpen(false);
                setIsEditing(false);
                setNewItem({
                  Merek: '',
                  Model: '',
                  Tahun: '',
                  Warna: '',
                  Biaya: '',
                  Status: '',
                  Stok: ''
                });
              }} 
              className="bg-red-500 text-white px-4 py-2 rounded ml-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className='relative overflow-x-auto rounded-b-lg '>
        <table className="w-full text-sm text-left rtl:text-right text-white-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:bg-gray-900 dark:text-gray-400">
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
                <td>
                  <button onClick={() => handleEdit(item)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                  <button onClick={() => handleDelete(item._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
