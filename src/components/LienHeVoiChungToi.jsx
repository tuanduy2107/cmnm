import HomePage6 from '../assets/HomePage6.jpg';
const LienHeVoiChungToi = () => {
    return (
        <div className="relative flex flex-col items-center justify-center bg-white min-h-screen z-10">
            <img
                src={HomePage6}
                alt="Homepage6"
                className="absolute inset-0 w-full h-full object-cover opacity-40 -z-10"
            />
            {/* Tiêu đề */}
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Liên hệ với chúng tôi</h1>

            {/* Dòng chữ "Đăng ký ngay để cập nhật..." */}
            <p className="text-xl text-center text-gray-600 mb-8">Đăng ký ngay để cập nhật nhiều thông tin mới nhất</p>

            {/* Khung nhập email */}
            <div className="flex justify-center mb-8">
                <input
                    type="email"
                    placeholder="Nhập email của bạn..."
                    className="w-80 p-3 border border-gray-300 rounded-l-md text-lg"
                />
                <button className="bg-green-500 text-white p-3 rounded-r-md hover:bg-green-600">
                    Gửi
                </button>
            </div>

            {/* Tabs */}
            <div className="mb-8">
                <ul className="flex justify-center space-x-6 text-xl font-semibold">
                    <li><a href="#" className="text-gray-700 hover:text-green-500">Trang chủ</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-green-500">Về chúng tôi</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-green-500">Chương trình mục tiêu</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-green-500">Truyền thông</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-green-500">Đồng hành cùng VSF</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-green-500">Ủng hộ</a></li>
                </ul>
            </div>

            {/* Thông tin liên hệ */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="font-semibold text-lg text-gray-800">Thông tin liên hệ:</p>
                <p className="text-gray-600">Địa chỉ: 123 Đường ABC, Quận XYZ, TP. HCM</p>
                <p className="text-gray-600">Điện thoại: (08) 123 456 789</p>
                <p className="text-gray-600">Email: info@vfs.org.vn</p>
            </div>

        </div>
    );
}

export default LienHeVoiChungToi;

