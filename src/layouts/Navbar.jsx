const Navbar = () => {
    return (
        <nav className="absolute top-0 w-full flex justify-end items-center p-4">
            {/* Nút Ủng Hộ */}
            <button className="bg-[#ec4c24] text-white px-4 py-2 rounded-lg font-bold">
                ỦNG HỘ
            </button>

            {/* Icon tìm kiếm & menu */}
            <div className="flex space-x-4">
                <button className="text-white text-xl">🔍</button>
                <button className="text-white text-xl">☰</button>
            </div>
        </nav>
    );
};

export default Navbar;
