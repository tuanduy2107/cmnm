import HomePage6 from '/src/assets/HomePage6.jpg';
import Logo from '/src/assets/DOP_logo.png';

const LienHeVoiChungToi = () => {
    return (
        <div className="relative flex flex-col items-center justify-center  min-h-screen z-10">
            {/* <img
                src={HomePage6}
                alt="Homepage6"
                className="absolute inset-0 w-full h-full object-cover opacity-60 -z-10"
            /> */}
            {/* Tiêu đề */}
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Liên hệ với chúng tôi</h1>

            {/* Dòng chữ "Đăng ký ngay để cập nhật..." */}
            <p className="text-xl font-bold text-center text-black-600 mb-8">Đăng ký ngay để cập nhật nhiều thông tin mới nhất</p>

            {/* Khung nhập email */}
            <div className="flex justify-center mb-8">
                <input
                    type="email"
                    placeholder="Nhập email của bạn..."
                    className="w-80 p-3 border border-gray-300 rounded-l-md text-lg"
                />
                <button className="bg-[#25a5dd] text-white p-5 rounded-r-md hover:bg-[#186b8f]">
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
            </div>

            {/* Tabs */}
            <div className="w-2/3 bg-[#FF641E] text-white py-4">
                <ul className="flex justify-center space-x-14 text-lg font-semibold">
                    <li><a href="/" className="hover:text-gray-200">TRANG CHỦ</a></li>
                    <li><a href="/about-us" className="hover:text-gray-200">VỀ CHÚNG TÔI</a></li>
                    <li><a href="#" className="hover:text-gray-200">CHƯƠNG TRÌNH MỤC TIÊU</a></li>
                    <li><a href="#" className="hover:text-gray-200">TRUYỀN THÔNG</a></li>
                    <li><a href="#" className="hover:text-gray-200">ĐỒNG HÀNH CÙNG DOP</a></li>
                </ul>
            </div>

            {/* Thông tin liên hệ */}
            <div className=" w-2/3 bg-white grid grid-cols-1 lg:grid-cols-12">
                <div className="h-72 bg-gray-200 lg:col-span-4 flex flex-col items-center justify-center">
                    <img src={Logo} alt="Logo" className="w-80 h-auto mx-2 my-12" />
                    <h3 className="font-semibold text-lg text-gray-800 text-center">© Dự án Hành trình nuôi chữ 2023</h3>
                    <h3 className="font-semibold text-lg text-gray-800 text-center">All rights reserved</h3>
                </div>

                <div className="h-72 bg-[#FFC9B0] lg:col-span-8">
                    <div className="h-1/4 flex items-center">
                        <h3 className="text-2xl text-gray-800 font-semibold justify-start pl-8">
                            Tổ chức DOP
                        </h3>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <div className="w-11/12 h-0.5 bg-black flex items-center justify-center"></div>
                    </div>

                    <div className="w-full px-9 py-2 text-start">
                        {/* <div className="bg-white p-8 rounded-lg shadow-lg text-left max-w-3xl mx-auto"> */}
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
                            <strong>Kết nối qua mạng xã hội:</strong>
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
                    </div>
                    <div className="w-full px-9 py-2 text-center">
                        <p className="text-gray-700">
                            Let&apos;s make dreams come true!
                        </p>
                    </div>

                </div>


            </div>

        </div>
    );
}

export default LienHeVoiChungToi;

