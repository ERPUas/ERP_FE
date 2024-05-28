import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pesanan = () => {
  const [pesanan, setPesanan] = useState([]);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    fetchPesanan();
  }, []);

  const fetchPesanan = async () => {
    try {
      const response = await axios.get('http://localhost:3000/pesanan');
      setPesanan(response.data);
    } catch (error) {
      console.error('Error fetching pesanan:', error);
    }
  };

  const handleEdit = (id) => {
    const editedPesanan = pesanan.find(pesanan => pesanan._id === id);
    setEditData(editedPesanan);
  };

  const handleSave = async (id) => {
    try {
      const updatedFields = {};
      for (const key in editData) {
        if (editData[key] !== pesanan.find(p => p._id === id)[key]) {
          updatedFields[key] = editData[key];
        }
      }
      await axios.patch(`http://localhost:3000/pesanan/${id}`, updatedFields);
      fetchPesanan(); 
      setEditData({});
    } catch (error) {
      console.error('Error saving pesanan:', error);
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
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Daftar Pesanan</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Pelanggan</th>
            <th className="py-2">Barang</th>
            <th className="py-2">Mulai</th>
            <th className="py-2">Akhir</th>
            <th className="py-2">Status</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pesanan.map(pesanan => (
            <tr key={pesanan._id}>
              <td className="border px-4 py-2">{pesanan._id}</td>
              <td className="border px-4 py-2">
                {editData._id === pesanan._id ? (
                  <input
                    type="text"
                    name="pelangganID"
                    value={editData.pelangganID || ''}
                    onChange={handleInputChange}
                    className="w-full border px-2 py-1"
                  />
                ) : (
                  pesanan.pelangganID ? pesanan.pelangganID.name : ''
                )}
              </td>
              <td className="border px-4 py-2">
                {editData._id === pesanan._id ? (
                  <input
                    type="text"
                    name="barangID"
                    value={editData.barangID || ''}
                    onChange={handleInputChange}
                    className="w-full border px-2 py-1"
                  />
                ) : (
                  pesanan.barangID ? pesanan.barangID.name : ''
                )}
              </td>
              <td className="border px-4 py-2">
                {editData._id === pesanan._id ? (
                  <input
                    type="date"
                    name="tanggalMulaiPemesanan"
                    value={editData.tanggalMulaiPemesanan || ''}
                    onChange={handleInputChange}
                    className="w-full border px-2 py-1"
                  />
                ) : (
                  new Date(pesanan.tanggalMulaiPemesanan).toLocaleDateString()
                )}
              </td>
              <td className="border px-4 py-2">
                {editData._id === pesanan._id ? (
                  <input
                    type="date"
                    name="tanggalAkhirPemesanan"
                    value={editData.tanggalAkhirPemesanan || ''}
                    onChange={handleInputChange}
                    className="w-full border px-2 py-1"
                  />
                ) : (
                  new Date(pesanan.tanggalAkhirPemesanan).toLocaleDateString()
                )}
              </td>
              <td className="border px-4 py-2">
                {editData._id === pesanan._id ? (
                  <select
                    name="status"
                    value={editData.status || ''}
                    onChange={handleInputChange}
                    className="w-full border px-2 py-1"
                  >
                    <option value="pending">Pending</option>
                    <option value="success">Success</option>
                    <option value="failed">Failed</option>
                  </select>
                ) : (
                  pesanan.status
                )}
              </td>
              <td className="border px-4 py-2">
                {editData._id === pesanan._id ? (
                  <button onClick={() => handleSave(pesanan._id)} className="bg-green-500 text-white px-2 py-1 mr-2">Save</button>
                ) : (
                  <button onClick={() => handleEdit(pesanan._id)} className="bg-blue-500 text-white px-2 py-1 mr-2">Edit</button>
                )}
                <button onClick={() => handleDelete(pesanan._id)} className="bg-red-500 text-white px-2 py-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pesanan;
