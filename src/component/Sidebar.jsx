import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import Pesanan from './Pesanan';
import { MembersTable } from "./Product";

const Dashboard = () => <div>Dashboard Content</div>;
const Barang = () => <div>Barang Content</div>;

const SideBar = () => {
    const [open, setOpen] = useState(true);
    const [activeMenu, setActiveMenu] = useState("Dashboard");

    const Menus = [
        { title: "Dashboard", component: <Dashboard /> },
        { title: "Barang", component: <MembersTable />},
        { title: "Pesanan", component: <Pesanan /> },
    ];

    const renderContent = () => {
        const activeItem = Menus.find(menu => menu.title === activeMenu);
        return activeItem ? activeItem.component : null;
    };

    return (
        <div className="flex">
            <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
                <BsArrowLeftShort
                    className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />

                <div className="inline-flex">
                    <FaCarSide
                        className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-4 duration-500 ${open && "rotate-[360deg]"}`}
                    />
                    <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>
                        CarReady
                    </h1>
                </div>

                <div className={`flex items-center rounded-md bg-light-white mt-6 ${!open ? "px-4" : "px-2.5"} py-2`}>
                    <CiSearch
                        className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`}
                    />
                    <input
                        type="search"
                        placeholder="Search"
                        className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`}
                    />
                </div>

                <ul className="pt-2">
                    {Menus.map((menu, index) => (
                        <li
                            key={index}
                            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ${
                                menu.spacing ? "mt-9" : "mt-2"
                            } ${activeMenu === menu.title && "bg-light-white"}`}
                            onClick={() => setActiveMenu(menu.title)}
                        >
                            <span className="text-2xl block float-left">
                                <MdDashboard />
                            </span>
                            <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>
                                {menu.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="p-7">
                {renderContent()}
            </div>
        </div>
    );
};

export default SideBar;
