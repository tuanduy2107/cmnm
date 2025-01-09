import { useEffect, useRef } from "react";
import { useState } from "react";
import AboutUs from "/src/assets/HomePage2.jpg";
import LienHeVoiChungToi from "../components/HomePage/LienHeVoiChungToi";
import SuMenh from "/src/assets/SuMenh.jpg";
import GiaTriCotLoi from "/src/assets/GiaTriCotLoi.jpg";
import SangLapVien from "/src/assets/SangLapVien.jpg";
import CoCauToChuc from "/src/assets/CoCauToChuc.png";
import CoCauToChucBG from "/src/assets/CoCauToChucBG.jpg";
import BanDieuHanh from "/src/assets/BanDieuHanh.jpg";
import BanQuanLy from "/src/assets/BanQuanLy.png";
import BanQuanLy2 from "/src/assets/BanQuanLy2.png";
const AboutUsPage = () => {

    const sectionsRef = useRef([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        CoCauToChuc,
        BanDieuHanh,
        BanQuanLy,
        BanQuanLy2
    ];

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    const handleScroll = (event) => {
        event.preventDefault();
        const delta = Math.sign(event.deltaY);

        const currentSectionIndex = sectionsRef.current.findIndex(
            (section) => Math.abs(section.getBoundingClientRect().top) < window.innerHeight / 2
        );

        const nextSectionIndex = Math.min(
            Math.max(0, currentSectionIndex + delta),
            sectionsRef.current.length - 1
        );

        const nextSection = sectionsRef.current[nextSectionIndex];
        nextSection.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);
    return (
        <div className="relative flex flex-col w-screen">
            {/*Poster Component */}
            <div className="section" ref={(el) => (sectionsRef.current[0] = el)}>
                <div className="flex flex-col items-center justify-center bg-white min-h-screen relative">
                    <img
                        src={AboutUs}
                        alt="Homepage"
                        className="w-screen h-screen object-cover"
                    />
                </div>
            </div>

            <div className="section" ref={(el) => (sectionsRef.current[1] = el)}>
                {/* Sứ mệnh */}

                <div className="items-center justify-center min-h-screen relative grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                    <img
                        src={SuMenh}
                        alt="SuMenh"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 -z-10"
                    />
                    <div className="h-96 ml-12 rounded-lg  flex flex-col items-center justify-center text-white">
                        <div className="text-4xl font-bold text-center mb-4">Về chúng tôi</div>
                        <div className="text-6xl font-bold text-center">Sứ mệnh</div>
                    </div>
                    <div className="h-96 rounded-lg bg-[#f5a591] lg:col-span-2 mr-80 flex items-center justify-center">
                        <div className="text-2xl text-center mx-2">Quỹ Vì Tầm Vóc Việt (VSF) là Quỹ xã hội hoạt động không vì mục tiêu lợi nhuận, đóng góp cho mục tiêu Phát triển bền vững (SDGs), hỗ trợ cộng đồng trong lĩnh vực bảo vệ và chăm sóc sức khỏe cho người dân, đặc biệt ưu tiên trẻ em có hoàn cảnh khó khăn; tài trợ và xây dựng các chương trình phát triển trí tuệ, tài năng, giáo dục, góp phần phát triển tầm vóc, thể lực và trí tuệ cho người dân Việt Nam.</div>
                    </div>
                </div>

            </div>

            <div className="section" ref={(el) => (sectionsRef.current[2] = el)}>
                {/* Giá trị cốt lõi */}

                <div className="flex flex-col items-center justify-center min-h-screen relative">
                    <img
                        src={GiaTriCotLoi}
                        alt="GiaTriCotLoi"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 -z-10"
                    />
                    <div className="text-4xl font-bold text-center mb-4">Về chúng tôi</div>
                    <div className="text-6xl font-bold text-center">Giá trị cốt lõi</div>
                    <hr className="w-1/4 h-0.5 bg-black my-8" />
                    <div className="text-4xl font-bold text-center my-4">Vì một tầm vóc Việt</div>
                    <div className="text-4xl font-bold text-center my-4">Kết nối cộng đồng</div>
                    <div className="text-4xl font-bold text-center my-4">Khơi dậy và nuôi dưỡng tính nhân văn</div>
                </div>
            </div>

            <div className="section" ref={(el) => (sectionsRef.current[3] = el)}>
                {/* Sáng lập viên */}
                <div className="flex flex-col items-center justify-center min-h-screen relative">
                    <img
                        src={SangLapVien}
                        alt="SangLapVien"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 -z-10"
                    />
                    <div className="text-4xl font-bold text-center mb-4">Về chúng tôi</div>
                    <div className="text-6xl font-bold text-center">Sáng lập viên</div>
                </div>
            </div>

            <div className="section" ref={(el) => (sectionsRef.current[4] = el)}>
                {/* Cơ cấu tổ chức */}
                <div className="flex flex-col items-center justify-center min-h-screen relative">
                    <img
                        src={CoCauToChucBG}
                        alt="CoCauToChucBG"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 -z-10"
                    />
                    <div className="text-4xl font-bold text-center mb-4">Về chúng tôi</div>
                    <div className="text-6xl font-bold text-center">Cơ cấu tổ chức</div>
                    {/* Khung ảnh với kích thước cố định */}
                    <div className="relative w-2/5" style={{ height: '60vh' }}>
                        <img
                            src={images[currentIndex]}
                            alt={`CoCauToChuc-${currentIndex}`}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="flex w-full justify-center absolute bottom-10 mb-4">
                        {/* Nút Previous */}
                        <button
                            onClick={handlePrevious}
                            className={`px-4 py-2 bg-gray-800 text-white rounded-l hover:bg-gray-700 mx-2 ${currentIndex == 0 ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            disabled={currentIndex == 0}
                        >
                            &lt;
                        </button>
                        {/* Nút Next */}
                        <button
                            onClick={handleNext}
                            className={`px-4 py-2 bg-gray-800 text-white rounded-r hover:bg-gray-700 mx-2 ${currentIndex == images.length - 1 ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            disabled={currentIndex == images.length - 1}
                        >
                            &gt;
                        </button>
                    </div>
                </div>



            </div>

            <div className="section" ref={(el) => (sectionsRef.current[5] = el)}>
                {/* Đối tác */}
                <div className="flex flex-col items-center justify-center bg-white min-h-screen relative">
                    <h1 className="text-4xl font-bold text-center">Đội ngũ</h1>
                    <p className="text-lg text-center">Chúng tôi có đội ngũ giáo viên giàu kinh nghiệm và tâm huyết.</p>
                </div>
            </div>

            <div className="section" ref={(el) => (sectionsRef.current[6] = el)}>
                {/* Đối tác */}
                <div className="flex flex-col items-center justify-center bg-white min-h-screen relative">
                    <h1 className="text-4xl font-bold text-center">Đối tác</h1>
                    <p className="text-lg text-center">Chúng tôi hợp tác với nhiều tổ chức trong và ngoài nước.</p>
                </div>
            </div>

            <div className="section" ref={(el) => (sectionsRef.current[7] = el)}>
                {/* Liên hệ */}
                <div className="flex flex-col items-center justify-center bg-white min-h-screen relative">
                    <h1 className="text-4xl font-bold text-center">Liên hệ</h1>
                    <p className="text-lg text-center">Chúng tôi luôn sẵn lòng lắng nghe và hỗ trợ bạn.</p>
                </div>
            </div>

            <div className="section" ref={(el) => (sectionsRef.current[8] = el)}>
                {/* Liên hệ */}
                <LienHeVoiChungToi />
            </div>

        </div>
    );
};

export default AboutUsPage;