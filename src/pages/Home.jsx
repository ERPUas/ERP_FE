import React, { useState } from "react";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prevState) => !prevState);
    };

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
                        <h1 className="font-bold text-3xl lg:text-5xl">Easy And Fast Way To</h1>
                        <h1 className="font-bold text-3xl lg:text-5xl mt-4"><span className="text-blue-500">Rent</span> Your Car</h1>
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
            <body className="grid w-full justify-center font-poppins px-20 py-4 lg:px-40">
                <h1>bODY</h1>
            </body>
        </section>
        
    );
};

export default Home;
