import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TABLE_HEAD = ["Pelanggan", "Barang", "Mulai", "Akhir", "Status"];

const Pesanan = () => {
  const [pesanan, setPesanan] = useState([]);
  const [editData, setEditData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchPesanan();
  }, []);

  const fetchPesanan = async () => {
    try {
      const response = await axios.get('http://localhost:3000/pelanggan')
      setPelanggan(response.data.data) // Mengakses array data pelanggan dari properti data
  } catch (err) {
      console.error('error fetching pelanggan', err)
  }
  };

  const handleEdit = (data) => {
    setEditData(data);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    try {
      const requestData = {
        pelangganID: editData.pelangganID,
        barangID: editData.barangID,
        tanggalMulaiPemesanan: editData.tanggalMulaiPemesanan,
        tanggalAkhirPemesanan: editData.tanggalAkhirPemesanan,
        status: editData.status
      };
      await axios.put(`http://localhost:3000/pesanan/${editData._id}`, requestData);
      fetchPesanan();
      setEditData({});
      setIsEditing(false);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error saving pesanan:', error);
    }
  };

  const handleAddNew = async () => {
    try {
      const requestData = {
        pelangganID: editData.pelangganID,
        barangID: editData.barangID,
        tanggalMulaiPemesanan: editData.tanggalMulaiPemesanan,
        tanggalAkhirPemesanan: editData.tanggalAkhirPemesanan,
        status: editData.status
      };
      await axios.post('http://localhost:3000/pesanan', requestData);
      fetchPesanan();
      setEditData({});
      setIsEditing(false);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error adding new pesanan:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/pesanan/${id}`);
      fetchPesanan();
    } catch (error) {
      console.error('Error deleting pesanan:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  return (
    <div className="container relative overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">Daftar Pesanan</h1>
      <button
        onClick={() => {
          setIsModalOpen(true);
          setIsEditing(false);
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add New
      </button>
      {isModalOpen && (
        <div className=" fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="relative w-full max-w-md max-h-full bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-4">{isEditing ? 'Edit Pesanan' : 'Add New Pesanan'}</h2>
            {/* Form */}
            <form>
              {/* Pelanggan */}
              <div className="mb-4">
                <label htmlFor="pelanggan" className="block text-sm font-medium text-gray-700">
                  Pelanggan ID
                </label>
                <input
                  type="text"
                  id="pelanggan"
                  name="pelangganID"
                  value={editData.pelangganID || ''}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              {/* Barang */}
              <div className="mb-4">
                <label htmlFor="barang" className="block text-sm font-medium text-gray-700">
                  Barang ID
                </label>
                <input
                  type="text"
                  id="barang"
                  name="barangID"
                  value={editData.barangID || ''}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              {/* Mulai */}
              <div className="mb-4">
                <label htmlFor="mulai" className="block text-sm font-medium text-gray-700">
                  Tanggal Mulai Pemesanan
                </label>
                <input
                  type="date"
                  id="mulai"
                  name="tanggalMulaiPemesanan"
                  value={editData.tanggalMulaiPemesanan || ''}
onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              {/* Akhir */}
              <div className="mb-4">
                <label htmlFor="akhir" className="block text-sm font-medium text-gray-700">
                  Tanggal Akhir Pemesanan
                </label>
                <input
                  type="date"
                  id="akhir"
                  name="tanggalAkhirPemesanan"
                  value={editData.tanggalAkhirPemesanan || ''}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              {/* Status */}
              <div className="mb-4">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <input
                  type="text"
                  id="status"
                  name="status"
                  value={editData.status || ''}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </form>
            {/* Tombol Save/Update dan Cancel */}
            <div className="flex">
              <button onClick={isEditing ? handleSave : handleAddNew} className="bg-green-500 text-white px-4 py-2 rounded">
                {isEditing ? 'Update' : 'Save'}
              </button>
              <button onClick={() => {
                setIsModalOpen(false);
                setIsEditing(false);
                setEditData({});
              }} 
              className="bg-red-500 text-white px-4 py-2 rounded ml-2"
            >
              Cancel
            </button>
            </div>
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
  {pesanan.map((item) => (
    <tr key={item._id} className={`bg-white border-b dark:border-gray-700`}>
      {/* Render pesanan sesuai properti yang benar */}
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black ">
        {item.pelangganID ? item.pelangganID.name : ''}
      </td>
      <td className="px-6 py-4">
        {item.barangID ? item.barangID.Merek : ''}
      </td>
      <td className="px-6 py-4">
        {new Date(item.tanggalMulaiPemesanan).toLocaleDateString()}
      </td>
      <td className="px-6 py-4">
        {new Date(item.tanggalAkhirPemesanan).toLocaleDateString()}
      </td>
      <td className="px-6 py-4">
        {item.status}
      </td>
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
};

export default Pesanan;
