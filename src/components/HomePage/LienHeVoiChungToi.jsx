import HomePage6 from '/src/assets/HomePage6.jpg';
import Logo from '/src/assets/DOP_logo.png';

const LienHeVoiChungToi = () => {
    return (
        <div className="bg-gray-800 relative flex flex-col min-w-screen min-h-screen sm:items-center sm:justify-center">
            {/* Ảnh nền */}
            <div className="relative w-screen h-1/3 sm:h-screen">
                <img
                    src={HomePage6}
                    alt="Homepage6"
                    className="w-full h-full object-cover opacity-60 z-30"
                />

                {/* Tiêu đề */}
                <h1 className="absolute top-[25%] left-1/2 text-xl font-bold text-center text-white transform -translate-x-1/2 -translate-y-1/2 w-3/4 
                sm:top-[20%] sm:text-4xl lg:top-[15%] lg:text-5xl">
                    LIÊN HỆ VỚI CHÚNG TÔI
                </h1>

                {/* Dòng chữ "Đăng ký ngay để cập nhật..." */}
                <p className="absolute top-[40%]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-bold text-center text-white w-3/5 
                sm:top-1/4 sm:text-2xl ">
                    Đăng ký ngay để cập nhật nhiều thông tin mới nhất
                </p>

                {/* Khung nhập email */}
                <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center sm:w-5/6 sm:top-1/3">
                    <input
                        type="email"
                        placeholder="Nhập email của bạn..."
                        className="w-5/6 h-10 p-3 border border-gray-300 rounded-l-md text-sm sm:w-2/5 sm:min-h-14 sm:text-lg"
                    />
                    <button className="bg-[#25a5dd] h-10 w-10 text-white rounded-r-md hover:bg-[#186b8f] sm:min-h-14 sm:min-w-14">
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    </button>
                </div>
            </div>

            {/* Tabs và Thông tin liên hệ */}
            <div className="absolute bottom-[0%] sm:bottom-[5%] lg:h-1/2 lg:bottom-[10%] left-1/2 transform -translate-x-1/2 w-full flex flex-col items-center">
                {/* Tabs */}
                <div className="w-screen sm:w-2/3 lg:w-4/5 bg-[#FF641E] text-white py-4 overflow-x-auto scroll-smooth snap-x">
                    <ul className="flex justify-start sm:justify-center space-x-6 text-sm sm:text-lg sm:space-x-14 font-semibold whitespace-nowrap px-6">
                        <li className="snap-start"><a href="/" className="hover:text-gray-200">TRANG CHỦ</a></li>
                        <li className="snap-start"><a href="/about-us" className="hover:text-gray-200">VỀ CHÚNG TÔI</a></li>
                        <li className="snap-start"><a href="/campaign" className="hover:text-gray-200">CHƯƠNG TRÌNH MỤC TIÊU</a></li>
                        <li className="snap-start"><a href="/gallery" className="hover:text-gray-200">TRUYỀN THÔNG</a></li>
                        <li className="snap-start"><a href="#" className="hover:text-gray-200">ĐỒNG HÀNH CÙNG DOP</a></li>
                    </ul>
                </div>

                {/* Thông tin liên hệ */}
                <div className="w-screen sm:w-2/3 lg:w-4/5 lg:h-2/5 bg-white grid grid-cols-1 sm:grid-cols-12">
                    <div className="sm:h-full sm:col-span-4 bg-gray-200 flex flex-col items-center justify-center">
                        <img src={Logo} alt="Logo" className="w-2/3 mx-2 my-10 lg:my-0" />
                        <h3 className="font-semibold text-lg text-gray-800 text-center mt-8 hidden sm:block">
                            © Dự án Hành trình nuôi chữ 2023
                        </h3>
                        <h3 className="font-semibold text-lg text-gray-800 text-center hidden sm:block">All rights reserved</h3>
                    </div>

                    <div className="bg-[#FFC9B0] sm:col-span-8">
                        <div className="my-6 lg:my-2 flex flex-col">
                            <h3 className="text-2xl text-gray-800 font-semibold">Tổ chức DOP</h3>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <div className="w-11/12 h-0.5 bg-black flex items-center justify-center"></div>
                        </div>

                        <div className="w-full px-9 py-2 text-start">
                            <p className="text-gray-700 mb-4">
                                <strong>Địa chỉ:</strong> Số 268 đường Lý Thường Kiệt, phường 14 quận 10, TP.HCM
                            </p>
                            <p className="text-gray-700 mb-4">
                                <strong>Điện thoại:</strong> (+84) 098 265 90 52
                            </p>
                            <p className="text-gray-700 mb-4">
                                <strong>Email:</strong> tochucdop@gmail.com
                            </p>
                            <p className="text-gray-700 flex items-center space-x-4">
                                <strong>Mạng xã hội:</strong>
                                <a href="https://www.facebook.com/dreamofthepoor" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.instagram.com/dream.of.the.poor" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.youtube.com/channel/UCUpCJkgzIl1ja6oDOiQI1Qw" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-youtube-play fa-2x" aria-hidden="true"></i>
                                </a>
                            </p>
                            <p className="text-gray-700 hidden sm:block sm:mt-6 sm:text-lg sm:font-bold text-center">
                                Let&apos;s make dreams come true!
                            </p>
                        </div>
                        <div className="w-full px-2 py-9 lg:py-6 text-center">
                            <p className="text-gray-700 sm:hidden font-bold">
                                Let&apos;s make dreams come true!
                                <h3 className="font-semibold text-lg text-gray-800 text-center mt-2">© Dự án Hành trình nuôi chữ 2023</h3>
                                <h3 className="font-semibold text-lg text-gray-800 text-center">All rights reserved</h3>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default LienHeVoiChungToi;

