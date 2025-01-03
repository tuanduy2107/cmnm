import React from "react";
import logoDOP from '../assets/logo_dop.jpg';

const Header = () => {
    return (
        <header className="text-white fixed top-0 left-0 right-0 z-20 bg-transparent backdrop-blur-md">
            <div className="container mx-6 flex justify-between items-center py-4">
                <div className="flex items-center space-x-4">
                    <img
                        src={logoDOP}
                        alt="Logo"
                        className="h-24 w-24"
                    />
                    <span className="text-lg font-semibold text-black">Tổ chức DOP</span>
                </div>

                <div className="flex items-center space-x-4 -mx-72">
                    <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
                        Ủng Hộ
                    </button>
                    <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
                        Tìm kiếm
                    </button>
                    <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
                        SideBar
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
