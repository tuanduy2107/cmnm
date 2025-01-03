import { useState, useEffect } from "react";
// import Header from "../components/Header";
import LienHeVoiChungToi from "../components/LienHeVoiChungToi";

import HomePage1 from '../assets/HomePage1.jpg';
import HomePage2 from '../assets/HomePage2.jpg';
import HomePage3 from '../assets/HomePage3.jpg';
import HomePage4 from '../assets/HomePage4.jpg';
import ConSoThongKe from '../assets/ConSoThongKe.jpg';
import HomePage5 from '../assets/HomePage5.jpg';
import HomePage6 from '../assets/HomePage6.jpg';

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
            {/* Nút chuyển ảnh nền bên trái */}
            <button
                onClick={handleNextImage}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition shadow-lg z-10"
            >
                &#8249;
            </button>

            {/* Nút chuyển ảnh nền bên phải */}
            <button
                onClick={handlePrevImage}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition shadow-lg z-10"
            >
                &#8250;
            </button>

            {/* Phần 2 - Nội dung cuộn */}
            <div className="relative flex flex-col items-center justify-center bg-white min-h-screen z-10">
                <img src={HomePage4} alt="Homepage4" className="w-full h-full object-cover opacity-40" />
                <img src={ConSoThongKe} alt="ConSoThongKe" className="absolute w-2/3 h-fit object-cover -mt-64" />
                <div className="absolute w-2/3 h-fit object-cover mt-96 text-center text-white">
                    <h2 className="text-3xl font-bold mb-6 -ml-96 text-black">Những con số ấn tượng (Tính đến tháng 11/2024)</h2>
                    <div className="grid grid-cols-4 gap-4 text-center">
                        <div>
                            <h3 className="text-7xl font-bold text-orange-600">12</h3>
                            <p className="text-gray-600">EM TỐT NGHIỆP ĐẠI HỌC, CAO ĐẲNG (DỰ ÁN NGƯỜI ĐỠ ĐẦU)</p>
                        </div>
                        <div>
                            <h3 className="text-7xl font-bold text-orange-600">03</h3>
                            <p className="text-gray-600">EM THỤ HƯỞNG HỌC ĐẠI HỌC, CAO ĐẲNG (DỰ ÁN NGƯỜI ĐỠ ĐẦU)</p>
                        </div>
                        <div>
                            <h3 className="text-7xl font-bold text-orange-600">36</h3>
                            <p className="text-gray-600">EM THỤ HƯỞNG DỰ ÁN HÀNH TRÌNH NUÔI CHỮ</p>
                        </div>
                        <div>
                            <h3 className="text-7xl font-bold text-orange-600">06</h3>
                            <p className="text-gray-600">MÙA CHIẾN DỊCH DOP ĐÃ THỰC HIỆN</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Phần 3 - Các chương trình tiêu biểu */}
            <div className="relative flex flex-col items-center justify-center bg-white min-h-screen z-10">
                {/* Hình nền */}
                <img
                    src={HomePage5}
                    alt="Homepage5"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
                />

                {/* Nội dung */}
                <div className="relative z-10 flex flex-col items-center text-center text-black px-6 pt-48">
                    <h2 className="text-4xl font-extrabold mb-12 tracking-wide">CÁC CHƯƠNG TRÌNH TIÊU BIỂU</h2>

                    {/* {/* Dùng flex để đẩy grid xuống dưới */}
                    <div className="flex flex-col justify-end w-full h-full">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 min-h-[50vh]">
                            {[
                                { title: "Chiến dịch DOP", type: "Dự án" },
                                { title: "Người đỡ đầu", type: "Dự án" },
                                { title: "Hành trình nuôi chữ", type: "Dự án" },
                                { title: "Đông ấm", type: "Chương trình" },
                                { title: "Trung thu", type: "Chương trình" },
                            ].map((program, index) => (
                                <div
                                    key={index}
                                    className="relative bg-black bg-opacity-70 text-white p-6 rounded-lg text-center transform hover:scale-105 hover:shadow-xl transition-transform duration-300"
                                >
                                    <button className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white text-black font-bold text-lg flex items-center justify-center">
                                        +
                                    </button>
                                    <div className="text-4xl mb-4">{program.icon}</div>
                                    <h3 className="text-lg font-semibold mb-2">{program.type}</h3>
                                    <p className="text-xl font-bold">{program.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Phần 4 - Tin tức */}
            <div className="relative flex flex-col items-center justify-center bg-white min-h-screen z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 w-full h-full">
                    <div className="h-screen rounded-lg bg-gray-500 opacity-50 border border-white"></div>
                    <div className="h-screen rounded-lg bg-gray-500 opacity-50 border border-white"></div>
                    <div className="h-screen rounded-lg bg-gray-500 opacity-50 border border-white"></div>
                    <div className="h-screen rounded-lg bg-gray-500 opacity-50 border border-white"></div>
                    <div className="h-screen rounded-lg bg-gray-500 opacity-50 border border-white"></div>
                </div>
                <img
                    src={HomePage6}
                    alt="Homepage6"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
                />
            </div>

            <LienHeVoiChungToi />


        </div>

    );
};

export default Homepage;