import HomePage5 from '../assets/HomePage5.jpg';
const CacChuongTrinhTieuBieu = () => {
    return (
        <div className="relative flex flex-col items-center justify-center bg-white min-h-screen z-10">
            {/* Hình nền */}
            <img
                src={HomePage5}
                alt="Homepage5"
                className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
            />

            {/* Nội dung */}
            <div className="relative z-10 flex flex-col items-center text-center text-black px-6 pt-48">
                <h2 className="text-4xl mb-12 tracking-wide">CÁC CHƯƠNG TRÌNH TIÊU BIỂU</h2>

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
    );
}

export default CacChuongTrinhTieuBieu;

