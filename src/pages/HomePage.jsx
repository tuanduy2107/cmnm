import { useState, useEffect, useRef } from "react";
// import Header from "../layouts/Header";
import NhungConSoAnTuong from "../components/HomePage/NhungConSoAnTuong";
import CacChuongTrinhTieuBieu from "../components/HomePage/CacChuongTrinhTieuBieu";
import TinTuc from "../components/HomePage/TinTuc";
import LienHeVoiChungToi from "../components/HomePage/LienHeVoiChungToi";
import DoiTacDongHanh from "../components/HomePage/DoiTacDongHanh";
import HomePage1 from '../assets/HomePage1.jpg';
import HomePage2 from '../assets/HomePage2.jpg';
import HomePage3 from '../assets/HomePage3.jpg';

const images = [HomePage1, HomePage2, HomePage3];

const Homepage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const sectionsRef = useRef([]);
    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
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
            {/* Header Component */}
            <div className="section" ref={(el) => (sectionsRef.current[0] = el)}>
                <div className="flex flex-col items-center justify-center bg-white min-h-screen relative">
                    {/* Mũi tên trái */}
                    <button
                        onClick={handlePrevImage}
                        className="absolute top-1/2 left-8 transform -translate-y-1/2 px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition shadow-lg z-10"
                    >
                        &#8249;
                    </button>

                    {/* Mũi tên phải */}
                    <button
                        onClick={handleNextImage}
                        className="absolute top-1/2 right-8 transform -translate-y-1/2 px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition shadow-lg z-10"
                    >
                        &#8250;
                    </button>
                    <img
                        src={images[currentImageIndex]}
                        alt="Homepage"
                        className="w-screen h-screen object-cover"
                    />
                </div>
            </div>

            {/* Phần 2 - Những con số ấn tượng */}
            <div className="section" ref={(el) => (sectionsRef.current[1] = el)}>
                <NhungConSoAnTuong />
            </div>

            {/* Phần 3 - Các chương trình tiêu biểu */}
            <div className="section" ref={(el) => (sectionsRef.current[2] = el)}>
                <CacChuongTrinhTieuBieu />
            </div>

            {/* Phần 4 - Tin tức */}
            <div className="section" ref={(el) => (sectionsRef.current[3] = el)}>
                <TinTuc />
            </div>

            {/* Phần 5 - Đối tác đồng hành */}
            <div className="section" ref={(el) => (sectionsRef.current[4] = el)}>
                <DoiTacDongHanh />
            </div>

            {/* Phần 6 - Liên hệ với chúng tôi */}
            <div className="section" ref={(el) => (sectionsRef.current[5] = el)}>
                <LienHeVoiChungToi />
            </div>
        </div>
    );
};

export default Homepage;
