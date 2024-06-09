import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import { LiaMedalSolid } from "react-icons/lia";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [barang, setBarang] = useState([]);
    const navigate = useNavigate();

    const handleToggle = () => {
        setIsOpen((prevState) => !prevState);
    };

    useEffect(() => {
        fetchBarang();
    }, []);

    const fetchBarang = async () => {
        try {
            const response = await axios.get('http://localhost:3000/barang');
            setBarang(response.data);
        } catch (err) {
            console.error('error fetching barang', err);
        }
    };

    return (
        <section>
            <div className="flex items-center justify-between w-full px-20 py-10 lg:px-40">
                <a href="/" className="font-poppins text-lg">logo</a>
                <button className="block md:hidden" onClick={handleToggle}>
                    <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
                    <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
                    <span className="block w-6 h-0.5 bg-gray-800"></span>
                </button>
                <nav className={`absolute top-16 left-0 w-full md:relative md:top-0 md:left-0 md:w-auto ${isOpen ? "block" : "hidden"} md:flex flex-col md:flex-row items-center`}>
                    <ul className="flex flex-col md:flex-row md:space-x-4 mt-2 md:mt-0 w-full md:w-auto font-poppins">
                        <li><a href="#" className="block p-2 hover:text-blue-500">Home</a></li>
                        <li><a href="#" className="block p-2 hover:text-blue-500">About</a></li>
                        <li><a href="#" className="block p-2 hover:text-blue-500">Contact</a></li>
                    </ul>
                    <ul className="flex flex-col md:flex-row md:space-x-2 mt-2 md:mt-0 md:pl-4 w-full md:w-auto ml-auto lg:pl-4 font-poppins font-medium">
                        <li><a href="/login" className="block lg:border lg:border-blue-500 lg:text-blue-500 lg:rounded-md lg:hover:bg-blue-500 lg:hover:text-white lg:px-6 lg:py-1 hover:duration-300
                        md:border-blue-500 md:border md:px-4 md:py-1 md:rounded-md md:text-blue-500 md:hover:bg-blue-500 md:hover:text-white">Login</a></li>
                        <li><a href="#" className="block lg:hover:border lg:hover:border-blue-500 lg:hover:text-blue-500 lg:hover:bg-white lg:px-6 lg:py-1 lg:rounded-md lg:bg-blue-500 lg:text-white
                        md:bg-blue-500 md:px-4 md:py-1 md:rounded-md md:text-white md:hover:bg-white md:border md:border-blue-500 md:hover:text-blue-500 hover:duration-300">Sign Up</a></li>
                    </ul>
                </nav>
            </div>
            <head className="grid w-full justify-center font-poppins px-20 py-4 lg:px-40">
                <div className="grid md:grid-cols-2 md:gap-20 items-center">
                    <img src="src/assets/img/pngwing.com.png" alt="Car" className="md:hidden w-full h-auto"/>
                    <div>
                        <h1 className="font-bold text-3xl lg:text-5xl">Easy And Fast Way To
                        <span className="text-blue-500"> Rent</span> Your Car
                        </h1>
                        <p className="mt-4 text-sm">We offer a wide range of rental cars to suit your needs. Whether you're planning a weekend getaway or a business trip.</p>
                        <div className="mt-6">
                            <button className="px-10 py-2 font-bold rounded-md text-white bg-blue-500 hover:border hover:border-blue-500 hover:text-blue-500 hover:bg-white hover:duration-300">
                                Rent Car
                            </button>
                        </div>
                    </div>
                    <img src="src/assets/img/pngwing.com.png" alt="Car" className="hidden md:block w-full h-auto"/>
                </div>
            </head>
            <body className="grid w-full justify-center font-poppins px-20 py-4 lg:px-40 mt-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full bg-white md:p-10 lg:p-14 rounded-lg shadow-lg shadow-blue-500 p-4">
                    <div className="md:col-span-1">
                        <label htmlFor="pickupLocation" className="font-bold block text-sm mb-2">Pick Up Location</label>
                        <input type="text" id="pickupLocation" name="pickupLocation" className="border border-gray-500 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-500" />
                    </div>
                    <div className="md:col-span-1 md:mt-0">
                        <label htmlFor="return" className="font-bold block text-sm mb-2">Return Location</label>
                        <input type="text" id="return" name="return" className="border border-gray-500 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-500" />
                    </div>
                    <div className="md:col-span-1">
                        <label htmlFor="pickupDate" className="font-bold block text-sm mb-2">Pick Up Date</label>
                        <input type="text" id="pickupDate" name="pickupDate" className="border border-gray-500 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-500" />
                    </div>
                    <div className="md:col-span-1 md:mt-0">
                        <label htmlFor="returnDate" className="font-bold block text-sm mb-2">Return Date</label>
                        <input type="text" id="returnDate" name="returnDate" className="border border-gray-500 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-500" />
                    </div>
                    <div className="col-span-2 md:col-span-1 md:pt-4 flex justify-center items-center">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded focus:outline-none focus:ring focus:ring-blue-500">
                            Search Car
                        </button>
                    </div>
                </div>
                <div className="grid w-full justify-center font-poppins mt-10">
                    <h1 className="font-bold text-2xl pb-2 text-center lg:text-4xl md:mt-10 md:text-3xl">Latest <span className="text-blue-500">Inventory</span></h1>
                    <p className="text-sm text-center">Experience The Future Of Automotive Innovation With Our Latest Car Models</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                    {barang.map((item) => (
                        <div key={item._id} className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-2xl hover:shadow-blue-500 hover:duration-500">
                            <img src={`http://localhost:3000/${item.Gambar}`} alt={item.Model} className="w-full h-34 md:h-38 lg:h-44 object-cover rounded-md"/>
                            <h2 className="font-bold text-xl mt-4">{item.Merek} {item.Model}</h2>
                            <p className="text-gray-600">{item.Tahun}</p>
                            <p className="text-gray-600">{item.Warna}</p>
                            <p className="text-gray-600">{item.Status}</p>
                            <p className="text-gray-600">Stok: {item.Stok}</p>
                            <hr className="my-2 border-gray-300" />
                            <div className="flex justify-between items-center mt-4">
                                <button className="px-6 py-1 border-2 border-blue-500 font-semibold hover:border-blue-900 hover:text-blue-900 rounded-md text-blue-500">
                                    Rent Car
                                </button>
                                <p className="text-blue-500 font-bold"><span className="font-medium">Rp.</span> {item.Biaya}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <button className="bg-blue-500 text-white text-sm font-poppins font-semibold px-14 py-2 rounded-lg hover:bg-blue-800 hover:duration-300">
                        See All
                    </button>
                </div>
                <div className="grid w-full justify-center mt-14 font-poppins">
                    <h1 className="font-bold text-2xl text-center lg:text-4xl md:text-3xl">Why <span className="text-blue-500">Choose</span> Us</h1>
                    <p className="text-sm text-center mt-4">We Stand As Your Trusted Partner. Our Dedication To Quality, Information <br className="hidden sm:block" />and Customer Satisfacation Set Us Apart</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <div className="hidden md:flex items-center justify-center bg-blue-500 text-white p-2 rounded-md mr-2 md:mr-4">
                            <FaPhoneAlt className="text-lg md:text-2xl" />
                        </div>
                        <div>
                            <h1 className="font-bold text-sm md:text-lg text-center md:text-left">24 Hour Support</h1>
                            <p className="text-sm md:text-base mt-2 text-center md:text-left">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aliquam cumque qui maxime nam quia tempora ipsa consequuntur debitis maiores hic delectus animi magni reprehenderi
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <div className="hidden md:flex items-center justify-center bg-blue-500 text-white p-2 rounded-md mr-2 md:mr-4">
                            <LiaMedalSolid className="text-lg md:text-2xl" />
                        </div>
                        <div>
                            <h1 className="font-bold text-sm md:text-lg text-center md:text-left">Best Price</h1>
                            <p className="text-sm md:text-base mt-2 text-center md:text-left">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aliquam cumque qui maxime nam quia tempora ipsa consequuntur debitis maiores hic delectus animi magni reprehenderi
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <div className="hidden md:flex items-center justify-center bg-blue-500 text-white p-2 rounded-md mr-2 md:mr-4">
                            <IoShieldCheckmark className="text-lg md:text-2xl" />
                        </div>
                        <div>
                            <h1 className="font-bold text-sm md:text-lg text-center md:text-left">Verified Liscense</h1>
                            <p className="text-sm md:text-base mt-2 text-center md:text-left">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aliquam cumque qui maxime nam quia tempora ipsa consequuntur debitis maiores hic delectus animi magni reprehenderi
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <div className="hidden md:flex items-center justify-center bg-blue-500 text-white p-2 rounded-md mr-2 md:mr-4">
                            <TiDeleteOutline className="text-lg md:text-2xl" />
                        </div>
                        <div>
                            <h1 className="font-bold text-sm md:text-lg text-center md:text-left">Free Cancelation</h1>
                            <p className="text-sm md:text-base mt-2 text-center md:text-left">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aliquam cumque qui maxime nam quia tempora ipsa consequuntur debitis maiores hic delectus animi magni reprehenderi
                            </p>
                        </div>
                    </div>
                </div>
            </body>
        </section>
    );
};

export default Home;
