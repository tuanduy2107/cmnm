import React, { useState } from 'react';
import HomePage6 from '../assets/HomePage6.jpg';

const TinTuc = () => {
    // Tạo state để theo dõi grid nào được hover
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    // Mảng chứa nội dung cho từng grid
    const grids = [
        {
            date: "04/01/2025",
            title: "HÀNH TRÌNH NUÔI CHỮ 2024 - BẢN NAM SƠNI",
        },
        {
            date: "04/01/2025",
            title: "HÀNH TRÌNH NUÔI CHỮ 2024 - BON BU LUM",
        },
        {
            date: "04/01/2025",
            title: "HÀNH TRÌNH NUÔI CHỮ 2024 - BON PHI LƠ TE",
        },
        {
            date: "04/01/2025",
            title: "HÀNH TRÌNH NUÔI CHỮ 2024 - BÃI TRÂU 3",
        }
    ];

    return (
        <div className="relative flex flex-col items-center justify-center bg-white min-h-screen z-10">
            <img
                src={HomePage6}
                alt="Homepage6"
                className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
            />
            <div className="grid grid-cols-1 lg:grid-cols-4 w-full h-full">
                {grids.map((item, index) => (
                    <div
                        key={index}
                        className={`relative h-screen border border-white transition-all duration-300 p-4 flex flex-col items-center justify-center ${index == hoveredIndex
                            ? 'bg-pink-400 opacity-60' : ''
                            }`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(-1)}
                    >
                        {/* Nội dung hiển thị khi chưa hover */}
                        {index != hoveredIndex && (
                            <div className="absolute bottom-0 w-full p-2 py-4 bg-black text-white text-center min-h-28">
                                <p className="text-lg font-bold">{item.date}</p>
                                <p className="text-sm">{item.title}</p>

                            </div>
                        )}

                        {/* Nội dung hiển thị khi hover */}
                        {index == hoveredIndex && (
                            <div className="text-center text-white">
                                <p className="text-lg font-bold">{item.date}</p>
                                <p className="text-sm">{item.title}</p>
                                <p className="mt-2 text-sm underline cursor-pointer">Xem chi tiết</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TinTuc;
