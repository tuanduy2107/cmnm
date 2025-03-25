import HomePage4 from '/src/assets/HomePage4.jpg';
import ConSoThongKe from '/src/assets/ConSoThongKe.jpg';
import CountUp from 'react-countup';
import { useState, useEffect, useRef } from 'react';

const NhungConSoAnTuong = () => {
    const [hasStarted, setHasStarted] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const currentRef = sectionRef.current; // Lưu giá trị của ref vào biến cục bộ

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.5 } // Chỉ chạy khi ít nhất 50% phần tử xuất hiện
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef); // Sử dụng biến cục bộ trong cleanup
            }
        };
    }, []);


    return (
        <div
            ref={sectionRef}
            className="relative flex flex-col items-center justify-center bg-white min-h-screen z-10 px-4"
        >
            <img
                src={HomePage4}
                alt="Homepage4"
                className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
            />
            <img
                src={ConSoThongKe}
                alt="ConSoThongKe"
                className="absolute w-2/3 h-fit object-cover -mt-32 sm:-mt-24"
            />
            <div className="relative w-full max-w-screen-lg text-center text-white mt-80 sm:mt-64">
                <h2 className="text-3xl font-bold mb-6 text-black">
                    Những con số ấn tượng (Tính đến tháng 11/2024)
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                        <h3 className="text-6xl md:text-7xl font-bold text-[#FF641E]">
                            {hasStarted && <CountUp start={0} end={12} duration={3.5} />}
                        </h3>
                        <p className="text-black font-bold text-sm md:text-base">
                            EM TỐT NGHIỆP ĐẠI HỌC, CAO ĐẲNG (DỰ ÁN NGƯỜI ĐỠ ĐẦU)
                        </p>
                    </div>
                    <div>
                        <h3 className="text-6xl md:text-7xl font-bold text-[#FF641E]">
                            {hasStarted && <CountUp start={0} end={3} duration={3.5} />}
                        </h3>
                        <p className="text-black font-bold text-sm md:text-base">
                            EM THỤ HƯỞNG HỌC ĐẠI HỌC, CAO ĐẲNG (DỰ ÁN NGƯỜI ĐỠ ĐẦU)
                        </p>
                    </div>
                    <div>
                        <h3 className="text-6xl md:text-7xl font-bold text-[#FF641E]">
                            {hasStarted && <CountUp start={0} end={36} duration={3.5} />}
                        </h3>
                        <p className="text-black font-bold text-sm md:text-base">
                            EM THỤ HƯỞNG DỰ ÁN HÀNH TRÌNH NUÔI CHỮ
                        </p>
                    </div>
                    <div>
                        <h3 className="text-6xl md:text-7xl font-bold text-[#FF641E]">
                            {hasStarted && <CountUp start={0} end={6} duration={3.5} />}
                        </h3>
                        <p className="text-black font-bold text-sm md:text-base">
                            MÙA CHIẾN DỊCH DOP ĐÃ THỰC HIỆN
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NhungConSoAnTuong;
