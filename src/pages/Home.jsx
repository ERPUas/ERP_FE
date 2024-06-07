import React, { useState } from "react";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prevState) => !prevState);
    };

    const handleLOgin = () => {
        navi
    }

    return (
        <section>
            <div className="flex items-center justify-between w-full px-20 py-10 lg:px-40">
                <a href="#" className="font-poppins text-lg">logo</a>
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
                        <li><a href="#" className="block lg:border lg:border-blue-500 lg:text-blue-500 lg:rounded-md lg:hover:bg-blue-500 lg:hover:text-white lg:px-6 lg:py-1
                        md:border-blue-500 md:border md:px-4 md:py-1 md:rounded-md md:text-blue-500 md:hover:bg-blue-500 md:hover:text-white">Login</a></li>
                        <li><a href="#" className="block lg:hover:border lg:hover:border-blue-500 lg:hover:text-blue-500 lg:hover:bg-white lg:px-6 lg:py-1 lg:rounded-md lg:bg-blue-500 lg:text-white
                        md:bg-blue-500 md:px-4 md:py-1 md:rounded-md md:text-white md:hover:bg-white md:border md:border-blue-500 md:hover:text-blue-500">Sign Up</a></li>
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
                            <button className="px-10 py-2 font-bold rounded-md text-white bg-blue-500 hover:border hover:border-blue-500 hover:text-blue-500 hover:bg-white">
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
            </body>




        </section>
        
    );
};

export default Home;
