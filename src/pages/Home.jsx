import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import { LiaMedalSolid } from "react-icons/lia";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
    const [ulasan, setUlasan] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [barang, setBarang] = useState([]);
    const navigate = useNavigate(); 

    const handleToggle = () => {
        setIsOpen((prevState) => !prevState);
    };

    useEffect(() => {
        fetchBarang();
        fetchUlasan();
    }, []);

    const fetchBarang = async () => {
        try {
            const response = await axios.get('http://localhost:3000/barang');
            setBarang(response.data);
        } catch (err) {
            console.error('error fetching barang', err);
        }
    };
    
    const fetchUlasan = async () => {
        try {
            const response = await axios.get('http://localhost:3000/ulasan');
            console.log(response.data);
            setUlasan(response.data);
        } catch (error) {
            console.error('error mengambil', error);
        }
    }
     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section>
            {/* Hamburger Menu */}
            <div className="flex items-center justify-between w-full px-4 py-12 lg:px-40 bg-white">
                <a href="/" className="font-poppins text-lg">logo</a>
                <button className="block md:hidden" onClick={handleToggle}>
                    <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
                    <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
                    <span className="block w-6 h-0.5 bg-gray-800"></span>
                </button>
                <nav className={`absolute top-16 left-0 w-full md:relative md:top-0 md:left-0 md:w-auto ${isOpen ? "block" : "hidden"} md:flex items-center bg-white md:bg-transparent`}>
                    <ul className="flex flex-col md:flex-row md:space-x-4 mt-2 md:mt-0 w-full md:w-auto font-poppins">
                        <li><a href="#" className="block p-2 hover:text-blue-500">Home</a></li>
                        <li><a href="#" className="block p-2 hover:text-blue-500">About</a></li>
                        <li><a href="#" className="block p-2 hover:text-blue-500">Contact</a></li>
                    </ul>
                    <ul className="flex flex-col md:flex-row md:space-x-2 mt-2 md:mt-0 w-full md:w-auto ml-auto lg:pl-4 font-poppins font-medium">
                        <li>
                            <a href="/login" className="block border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white px-6 py-1 transition duration-300">
                                Login
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block bg-blue-500 text-white rounded-md hover:bg-white hover:text-blue-500 border border-blue-500 px-6 py-1 transition duration-300">
                                Sign Up
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* Dashboard Home */}
            <header className="grid w-full justify-center font-poppins px-20 py-10 lg:px-40">
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
            </header>
            <main className="grid w-full justify-center font-poppins px-20 py-4 lg:px-40 mt-6">
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
                {/* Latest Inventory Section */}
                <div className="grid w-full justify-center font-poppins mt-28">
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
                                <button className="px-6 py-1 border-2 border-blue-500 font-semibold hover:border-blue-900 hover:text-blue-900 rounded-md text-blue-500" onClick={() => navigate(`/barang/${item._id}`)}>
                                    Detail
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            {/* Features Section */}
            <div className="grid w-full justify-center font-poppins mt-28">
                <h1 className="font-bold text-2xl pb-2 text-center lg:text-4xl md:mt-10 md:text-3xl">Our <span className="text-blue-500">Feature</span></h1>
                <p className="text-sm text-center">We Offer A Wide Range Of Rental Cars To Suit Your Needs</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-10 w-full justify-center px-20 lg:px-40">
                <div className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-2xl hover:shadow-blue-500 hover:duration-500 text-center">
                    <div className="flex justify-center mb-4 text-blue-500">
                        <FaPhoneAlt size={36} />
                    </div>
                    <h2 className="font-bold text-xl mb-2">24/7 Support</h2>
                    <p className="text-gray-600">Always Here For You Anytime, Anywhere</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-2xl hover:shadow-blue-500 hover:duration-500 text-center">
                    <div className="flex justify-center mb-4 text-blue-500">
                        <IoShieldCheckmark size={36} />
                    </div>
                    <h2 className="font-bold text-xl mb-2">Reliable</h2>
                    <p className="text-gray-600">Quality Cars You Can Trust For Your Journey</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-2xl hover:shadow-blue-500 hover:duration-500 text-center">
                    <div className="flex justify-center mb-4 text-blue-500">
                        <TiDeleteOutline size={36} />
                    </div>
                    <h2 className="font-bold text-xl mb-2">No Hidden Charges</h2>
                    <p className="text-gray-600">Transparent Pricing With No Surprises</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-2xl hover:shadow-blue-500 hover:duration-500 text-center">
                    <div className="flex justify-center mb-4 text-blue-500">
                        <LiaMedalSolid size={36} />
                    </div>
                    <h2 className="font-bold text-xl mb-2">Best Quality</h2>
                    <p className="text-gray-600">Top-notch Cars For A Smooth Ride</p>
                </div>
            </div>
            {/* UlasanSlider Component */}
            <div className="grid w-full justify-center font-poppins mt-28">
                <h1 className="font-bold text-2xl pb-2 text-center lg:text-4xl md:mt-10 md:text-3xl">Customer <span className="text-blue-500">Reviews</span></h1>
                <p className="text-sm text-center">Here's What Our Customers Are Saying</p>
            </div>
            <div className="mt-10 w-full px-20 lg:px-40">
                    <Slider {...settings}>
                        {ulasan.map((item) => (
                            <div key={item._id} className="bg-white p-6 rounded-2xl shadow-2xl text-center">
                                <img src={`http://localhost:3000/${item.PelangganID.Gambar}`} alt={item.PelangganID.name} className="w-16 h-16 rounded-full mx-auto"/>
                                <p className="font-bold mt-4">{item.PelangganID.name}</p>
                                <p className="text-gray-600 mt-2">{item.rating} / 5</p>
                                <p className="text-gray-600 mt-2">"{item.ulasan}"</p>
                            </div>
                        ))}
                    </Slider>
                </div>
        </section>
    );
};

export default Home;
