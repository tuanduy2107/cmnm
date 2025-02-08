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
import MucTieuPhatTrien from "/src/assets/MucTieuPhatTrien.png";

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

            {/* Sứ mệnh */}
            <div className="section" ref={(el) => (sectionsRef.current[1] = el)}>
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
                    <div className="h-64 rounded-lg bg-[#f5a591] lg:col-span-2 mr-80 flex items-center justify-center">
                        <div className="text-3xl text-center mx-2">DOP là tổ chức phi lợi nhuận hoạt động trong lĩnh vực giáo dục nhằm nâng cao năng lực cho người nghèo, người yếu thế tại Việt Nam; vì những thay đổi tích cực trong hành vi, ý thức cộng đồng.</div>
                    </div>
                </div>

            </div>

            {/* Giá trị cốt lõi */}
            <div className="section" ref={(el) => (sectionsRef.current[2] = el)}>
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

            {/* Tầm nhìn và tác động */}
            <div className="section" ref={(el) => (sectionsRef.current[3] = el)}>
                <div className="flex flex-col items-center justify-center min-h-screen relative bg-gray-50">
                    <div className="relative w-screen flex items-center justify-center h-screen bg-cover bg-center" >
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70 -z-10"></div>
                        <div className="text-center text-black px-4">
                            <h1 className="text-5xl md:text-7xl font-bold mb-4">Tầm nhìn - Tác động</h1>
                            <p className="text-lg md:text-2xl max-w-3xl mx-auto my-4">
                                Hành trình kiến tạo giá trị vì một cộng đồng tốt đẹp hơn.
                            </p>
                            <div className="w-screen grid grid-cols-1 gap-5 lg:grid-cols-5 lg:gap-4">
                                <div className="h-64 mx-16 rounded-lg bg-gray-200"></div>
                                <div className="h-64 mx-16 rounded-lg bg-gray-200"></div>
                                <div className="h-64 mx-16 rounded-lg bg-gray-200"></div>
                                <div className="h-64 mx-16 rounded-lg bg-gray-200"></div>
                                <div className="h-64 mx-16 rounded-lg bg-gray-200"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Mục tiêu phát triển */}
            <div className="section" ref={(el) => (sectionsRef.current[4] = el)}>
                <div className="flex flex-col items-center justify-center h-screen relative">
                    <img
                        src={SangLapVien}
                        alt="SangLapVien"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 -z-10"
                    />
                    <div className="text-4xl font-bold text-center mb-4">Về chúng tôi</div>
                    <div className="text-6xl font-bold text-center">Mục tiêu phát triển</div>
                    <div className="relative w-2/5" style={{ height: '60vh' }}>
                        <img
                            src={MucTieuPhatTrien}
                            alt="MucTieuPhatTrien"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Quan điểm và phương pháp giáo dục */}
            <div className="section" ref={(el) => (sectionsRef.current[5] = el)}>
                <div className="flex flex-col items-center justify-center bg-white min-h-screen relative">
                    <h1 className="text-4xl font-bold text-center">Liên hệ</h1>
                    <p className="text-lg text-center">Chúng tôi luôn sẵn lòng lắng nghe và hỗ trợ bạn.</p>
                </div>
            </div>

            {/* Sáng lập viên */}
            <div className="section" ref={(el) => (sectionsRef.current[6] = el)}>
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

            {/* Cơ cấu tổ chức */}
            <div className="section" ref={(el) => (sectionsRef.current[7] = el)}>
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

            {/* Liên hệ */}
            <div className="section" ref={(el) => (sectionsRef.current[8] = el)}>
                <LienHeVoiChungToi />
            </div>

        </div>
    );
};

export default AboutUsPage;