import axios from "axios";
import React, { useState, useEffect } from "react";

const Pelanggan = () => {
    const [editData, setEditData] = useState({});
    const [pelanggan, setPelanggan] = useState([]);
    const [modal, setModal] = useState(false);
    const [edit, setEdit] = useState(false);
    const header = ["userID", "name", "Alamat", "NoTelp", "Email"];

    useEffect(() => {
        fetchPelanggan();
    }, []);

    const handleEdit = (data) => {
        setEditData(data);
        setModal(true);
        setEdit(true);
    };

    const fetchPelanggan = async () => {
        try {
            const response = await axios.get('http://localhost:3000/pelanggan');
            const data = response.data;
            if (Array.isArray(data)) {
                setPelanggan(data);
            } else {
                console.error('Expected an array but got', data);
                setPelanggan([]);
            }
        } catch (err) {
            console.error('Error fetching pelanggan', err);
        }
    };

    const handleAddNew = async () => {
        try {
            const requestData = {
                UserID: editData.UserID,
                name: editData.name,
                Alamat: editData.Alamat,
                NoTelp: editData.NoTelp,
                Email: editData.Email,
            };
            if (edit) {
                await axios.put(`http://localhost:3000/pelanggan/${editData._id}`, requestData);
            } else {
                await axios.post('http://localhost:3000/pelanggan', requestData);
            }
            fetchPelanggan();
            setEditData({});
            setEdit(false);
            setModal(false);
        } catch (err) {
            console.log('Error adding/updating data', err);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/pelanggan/${id}`);
            fetchPelanggan();
        } catch (err) {
            console.error('Error deleting pelanggan', err);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
    };

    return (
        <div className="container mx-auto p-4 max-w-full md:max-w-screen-md lg:max-w-screen-lg">
            <h1 className="text-2xl font-bold mb-4">Daftar Pelanggan</h1>
            <button
                onClick={() => {
                    setModal(true);
                    setEdit(false);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            >
                ADD NEW
            </button>
            {modal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
                    <div className="relative w-full max-w-md max-h-full bg-white p-6 rounded shadow-sm">
                        <h2 className="text-lg font-semibold mb-4">{edit ? "Edit Pelanggan" : "Add New Pelanggan"}</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="UserID" className="block text-sm font-medium text-gray-700">
                                    UserID
                                </label>
                                <input
                                    type="text"
                                    id="UserID"
                                    name="UserID"
                                    value={editData.UserID || ""}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={editData.name || ""}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="Alamat" className="block text-sm font-medium text-gray-700">
                                    Alamat
                                </label>
                                <input
                                    type="text"
                                    id="Alamat"
                                    name="Alamat"
                                    value={editData.Alamat || ""}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="NoTelp" className="block text-sm font-medium text-gray-700">
                                    NoTelp
                                </label>
                                <input
                                    type="text"
                                    id="NoTelp"
                                    name="NoTelp"
                                    value={editData.NoTelp || ""}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="Email"
                                    name="Email"
                                    value={editData.Email || ""}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleAddNew}
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    {edit ? "Update" : "Add"}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setModal(false)}
                                    className="ml-2 bg-red-500 text-white px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
                        <tr>
                            {header.map((head) => (
                                <th scope="col" className="px-6 py-3" key={head}>
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(pelanggan) && pelanggan.map((item) => (
                            <tr key={item._id} className={`bg-white border-b dark:border-gray-700`}>
                                <td>{item.UserID?.username}</td>
                                <td>{item.name}</td>
                                <td>{item.Alamat}</td>
                                <td>{item.NoTelp}</td>
                                <td>{item.Email}</td>
                                <td>
                                    <button
                                        onClick={() => handleEdit(item)}
                                        className="bg-yellow-500 text-white px-2 py-1 rounded"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Pelanggan;

