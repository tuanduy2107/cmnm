import { useState, useEffect } from "react";
import Header from "../components/Header";
import NhungConSoAnTuong from "../components/NhungConSoAnTuong";
import CacChuongTrinhTieuBieu from "../components/CacChuongTrinhTieuBieu";
import TinTuc from "../components/TinTuc";
import LienHeVoiChungToi from "../components/LienHeVoiChungToi";

import HomePage1 from '../assets/HomePage1.jpg';
import HomePage2 from '../assets/HomePage2.jpg';
import HomePage3 from '../assets/HomePage3.jpg';

const images = [HomePage1, HomePage2, HomePage3];

const Homepage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Hàm chuyển sang ảnh nền tiếp theo
    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Hàm chuyển sang ảnh nền trước đó
    const handlePrevImage = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    // Hàm cuộn đến phần tiếp theo
    const handleScroll = (event) => {
        event.preventDefault();
        const delta = Math.sign(event.deltaY);
        const nextSection = window.scrollY + window.innerHeight * delta;

        window.scrollTo({
            top: nextSection,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    return (
        <div className="relative flex flex-col w-screen h-screen">
            {/* Header Component */}
            {/* <Header /> */}

            {/* Phần hình ảnh đầy màn hình */}
            <div className="flex flex-col items-center justify-center bg-white min-h-screen">
                <img src={images[currentImageIndex]} alt="Homepage" className="w-full h-full object-cover" />
            </div>

            <button
                onClick={handleNextImage}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition shadow-lg z-10"
            >
                &#8249;
            </button>

            <button
                onClick={handlePrevImage}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition shadow-lg z-10"
            >
                &#8250;
            </button>

            {/* Phần 2 - Những con số ấn tượng */}
            <NhungConSoAnTuong />

            {/* Phần 3 - Các chương trình tiêu biểu */}
            <CacChuongTrinhTieuBieu />

            {/* Phần 4 - Tin tức */}
            <TinTuc />

            {/* Phần 5 - Đối tác đồng hành */}

            {/* Phần 6 - Liên hệ với chúng tôi */}
            <LienHeVoiChungToi />


        </div>

    );
};

export default Homepage;