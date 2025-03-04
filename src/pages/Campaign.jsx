import { useEffect, useRef } from "react";
import BackGroundCampaign from '../assets/BackgroundCampaign.jpg';
import Navbar from '../layouts/Navbar';
import CDD from "../assets/CDD.jpg";
import DongAm from "../assets/DongAm.jpg";
import TrungThu from "../assets/TSTBG.jpg";
import HTNC from "../assets/HTNC.jpg";
import NDD from "../assets/NDD.jpg";

const Campaign = () => {
    const campaigns = [
        { name: 'BÃI TRÂU 3', year: 2021 },
        { name: 'PHI LO TE', year: 2023 },
        { name: 'BU LUM', year: 2024 },
        { name: 'SƠ NI', year: 2025 },
        { name: 'SUỐI PHÈN', year: 2026 },
    ];

    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 220; // Khoảng cách trượt mỗi lần
            scrollRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
        }
    };

    const sectionsRef = useRef([]);
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
            <div className="section" ref={(el) => (sectionsRef.current[0] = el)}>
                <div className="flex flex-col items-center justify-center opacity-90 bg-[#0D2F39] min-h-screen relative">
                    <img
                        src={BackGroundCampaign}
                        alt="BackgroundCampaign"
                        className="absolute inset-0 w-full h-full opacity-40 object-cover -z-10"
                    />
                    <div className="text-6xl text-[#ec4c24] font-bold text-center mb-4">CHƯƠNG TRÌNH</div>
                    <div className="text-6xl text-[#ec4c24] font-bold text-center">DỰ ÁN</div>
                </div>
            </div>

            <div className="section" ref={(el) => (sectionsRef.current[1] = el)}>
                <div className="relative grid grid-cols-2 min-h-screen">
                    <img
                        src={CDD}
                        alt="Chiến dịch DOP"
                        className="absolute inset-0 w-full h-full object-cover -z-10"
                    />
                    <Navbar />
                    <div></div>
                    <div className="bg-[#2F2F2F] bg-opacity-50 flex flex-col items-center justify-start text-white p-8">
                        <div className="text-3xl text-[#ec4c24] font-bold text-center mt-14 mb-4">CHIẾN DỊCH DOP</div>
                        <div className="text-sm text-white font-bold text-left mr-10">Chiến dịch DOP là một hoạt động thường niên do Tổ chức Giáo dục và Phát triển Cộng đồng (DOP) thực hiện, nhằm hỗ trợ giáo dục và phát triển kỹ năng sống cho trẻ em tại các khu vực khó khăn, đặc biệt là vùng sâu, vùng xa. Mỗi năm, chiến dịch mang một chủ đề riêng, phản ánh mục tiêu và tinh thần của chương trình trong năm đó.</div>
                        <div className="text-sm text-white font-bold text-left mt-4 mr-10">Các chiến dịch DOP không chỉ mang lại kiến thức và kỹ năng cho trẻ em vùng khó khăn mà còn tạo cơ hội cho các tình nguyện viên trải nghiệm, học hỏi và đóng góp cho cộng đồng.</div>
                    </div>

                    <div className="absolute bottom-8 w-full flex justify-center items-center space-x-4">
                        <button className="text-white text-2xl" onClick={() => scroll('left')}>⬅</button>
                        <div className="w-[880px] overflow-hidden relative">
                            <div
                                ref={scrollRef}
                                className="flex space-x-4 p-4 overflow-x-scroll scroll-smooth snap-x no-scrollbar">
                                {campaigns.map((item, index) => (
                                    <div key={index} className="bg-[#F6F6F6] opacity-75 p-4 text-center rounded-lg text-[#ec4c24] font-bold snap-center min-w-[200px]">
                                        CHIẾN DỊCH DOP <br /> {item.name} <br /> {item.year}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="text-white text-2xl" onClick={() => scroll('right')}>➡</button>
                    </div>
                </div>
            </div>

            <div className="section" ref={(el) => (sectionsRef.current[2] = el)}>
                <div className="relative grid grid-cols-2 min-h-screen">
                    <img
                        src={TrungThu}
                        alt="Trăng sáng từ bao giờ?"
                        className="absolute inset-0 w-full h-full object-cover -z-10"
                    />
                    <Navbar />

                    <div className="bg-[#2F2F2F] bg-opacity-50 flex flex-col items-center justify-start text-white p-8">
                        <div className="text-3xl text-[#ec4c24] font-bold text-center mt-14">CHƯƠNG TRÌNH</div>
                        <div className="text-3xl text-[#ec4c24] font-bold text-center mt-4 mb-4">TRĂNG SÁNG TỪ BAO GIỜ?</div>
                        <p className="text-sm text-white font-bold text-left">
                            &ldquo;Trăng sáng từ bao giờ?&rdquo; là chương trình Trung thu thường niên do Tổ chức Giáo dục và Phát triển Cộng đồng (DOP) tại TP Hồ Chí Minh tổ chức. Chương trình này nằm trong khuôn khổ dự án
                            <span className="italic">&ldquo;Hành trình nuôi chữ&rdquo;</span>, nhằm mang lại niềm vui và trải nghiệm Tết Trung thu cho trẻ em tại các bản làng vùng sâu, vùng xa, đặc biệt ở khu vực Tây Nguyên.
                        </p>

                        <p className="text-sm text-white font-bold text-left mt-4">
                            Chương trình <span className="italic">&ldquo;Trăng sáng từ bao giờ?&rdquo;</span> không chỉ mang lại niềm vui Trung thu cho trẻ em vùng cao mà còn giúp các em phát triển kỹ năng cộng đồng, tinh thần sẻ chia và trách nhiệm xã hội. Đây cũng là dịp để các bạn trẻ trong dự án tiếp tục công tác kết nối, xây dựng nền tảng cho các bước tiếp theo của dự án
                            <span className="italic">&ldquo;Hành trình nuôi chữ&rdquo;</span>.
                        </p>

                    </div>
                    <div></div>

                    <div className="absolute bottom-8 w-full flex justify-center items-center space-x-4">
                        <button className="text-white text-2xl" onClick={() => scroll('left')}>⬅</button>
                        <div className="w-[880px] overflow-hidden relative">
                            <div
                                ref={scrollRef}
                                className="flex space-x-4 p-4 overflow-x-scroll scroll-smooth snap-x no-scrollbar">
                                {campaigns.map((item, index) => (
                                    <div key={index} className="bg-[#F6F6F6] opacity-75 p-4 text-center rounded-lg text-[#ec4c24] font-bold snap-center min-w-[200px]">
                                        CHIẾN DỊCH DOP <br /> {item.name} <br /> {item.year}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="text-white text-2xl" onClick={() => scroll('right')}>➡</button>
                    </div>
                </div>
            </div>

            <div className="section" ref={(el) => (sectionsRef.current[3] = el)}>
                <div className="relative grid grid-cols-2 min-h-screen">
                    <img
                        src={DongAm}
                        alt="Đông ấm"
                        className="absolute inset-0 w-full h-full object-cover -z-10"
                    />
                    <Navbar />
                    <div></div>
                    <div className="bg-[#2F2F2F] bg-opacity-50 flex flex-col items-center justify-start text-white p-8">
                        <div className="text-3xl text-[#ec4c24] font-bold text-center mt-14 mb-4">CHIẾN DỊCH DOP</div>
                        <div className="text-sm text-white font-bold text-left mr-10">Chiến dịch DOP là một hoạt động thường niên do Tổ chức Giáo dục và Phát triển Cộng đồng (DOP) thực hiện, nhằm hỗ trợ giáo dục và phát triển kỹ năng sống cho trẻ em tại các khu vực khó khăn, đặc biệt là vùng sâu, vùng xa. Mỗi năm, chiến dịch mang một chủ đề riêng, phản ánh mục tiêu và tinh thần của chương trình trong năm đó.</div>
                        <div className="text-sm text-white font-bold text-left mt-4 mr-10">Các chiến dịch DOP không chỉ mang lại kiến thức và kỹ năng cho trẻ em vùng khó khăn mà còn tạo cơ hội cho các tình nguyện viên trải nghiệm, học hỏi và đóng góp cho cộng đồng.</div>
                    </div>

                    <div className="absolute bottom-8 w-full flex justify-center items-center space-x-4">
                        <button className="text-white text-2xl" onClick={() => scroll('left')}>⬅</button>
                        <div className="w-[880px] overflow-hidden relative">
                            <div
                                ref={scrollRef}
                                className="flex space-x-4 p-4 overflow-x-scroll scroll-smooth snap-x no-scrollbar">
                                {campaigns.map((item, index) => (
                                    <div key={index} className="bg-[#F6F6F6] opacity-75 p-4 text-center rounded-lg text-[#ec4c24] font-bold snap-center min-w-[200px]">
                                        CHIẾN DỊCH DOP <br /> {item.name} <br /> {item.year}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="text-white text-2xl" onClick={() => scroll('right')}>➡</button>
                    </div>
                </div>
            </div>

            <div className="section" ref={(el) => (sectionsRef.current[4] = el)}>
                <div className="relative grid grid-cols-2 min-h-screen">
                    <img
                        src={HTNC}
                        alt="Hành trình nuôi chữ"
                        className="absolute inset-0 w-full h-full object-cover -z-10"
                    />
                    <Navbar />
                    <div className="bg-[#2F2F2F] bg-opacity-50 flex flex-col items-center justify-start text-white p-8">
                        <div className="text-3xl text-[#ec4c24] font-bold text-center mt-14 mb-4">CHIẾN DỊCH DOP</div>
                        <div className="text-sm text-white font-bold text-left mr-10">Chiến dịch DOP là một hoạt động thường niên do Tổ chức Giáo dục và Phát triển Cộng đồng (DOP) thực hiện, nhằm hỗ trợ giáo dục và phát triển kỹ năng sống cho trẻ em tại các khu vực khó khăn, đặc biệt là vùng sâu, vùng xa. Mỗi năm, chiến dịch mang một chủ đề riêng, phản ánh mục tiêu và tinh thần của chương trình trong năm đó.</div>
                        <div className="text-sm text-white font-bold text-left mt-4 mr-10">Các chiến dịch DOP không chỉ mang lại kiến thức và kỹ năng cho trẻ em vùng khó khăn mà còn tạo cơ hội cho các tình nguyện viên trải nghiệm, học hỏi và đóng góp cho cộng đồng.</div>
                    </div>
                    <div></div>

                    <div className="absolute bottom-8 w-full flex justify-center items-center space-x-4">
                        <button className="text-white text-2xl" onClick={() => scroll('left')}>⬅</button>
                        <div className="w-[880px] overflow-hidden relative">
                            <div
                                ref={scrollRef}
                                className="flex space-x-4 p-4 overflow-x-scroll scroll-smooth snap-x no-scrollbar">
                                {campaigns.map((item, index) => (
                                    <div key={index} className="bg-[#F6F6F6] opacity-75 p-4 text-center rounded-lg text-[#ec4c24] font-bold snap-center min-w-[200px]">
                                        CHIẾN DỊCH DOP <br /> {item.name} <br /> {item.year}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="text-white text-2xl" onClick={() => scroll('right')}>➡</button>
                    </div>
                </div>
            </div>

            <div className="section" ref={(el) => (sectionsRef.current[5] = el)}>
                <div className="relative grid grid-cols-2 min-h-screen">
                    <img
                        src={NDD}
                        alt="Người đỡ đầu"
                        className="absolute inset-0 w-full h-full object-cover -z-10"
                    />
                    <Navbar />
                    <div></div>
                    <div className="bg-[#2F2F2F] bg-opacity-50 flex flex-col items-center justify-start text-white p-8">
                        <div className="text-3xl text-[#ec4c24] font-bold text-center mt-14 mb-4">CHIẾN DỊCH DOP</div>
                        <div className="text-sm text-white font-bold text-left mr-10">Chiến dịch DOP là một hoạt động thường niên do Tổ chức Giáo dục và Phát triển Cộng đồng (DOP) thực hiện, nhằm hỗ trợ giáo dục và phát triển kỹ năng sống cho trẻ em tại các khu vực khó khăn, đặc biệt là vùng sâu, vùng xa. Mỗi năm, chiến dịch mang một chủ đề riêng, phản ánh mục tiêu và tinh thần của chương trình trong năm đó.</div>
                        <div className="text-sm text-white font-bold text-left mt-4 mr-10">Các chiến dịch DOP không chỉ mang lại kiến thức và kỹ năng cho trẻ em vùng khó khăn mà còn tạo cơ hội cho các tình nguyện viên trải nghiệm, học hỏi và đóng góp cho cộng đồng.</div>
                    </div>

                    <div className="absolute bottom-8 w-full flex justify-center items-center space-x-4">
                        <button className="text-white text-2xl" onClick={() => scroll('left')}>⬅</button>
                        <div className="w-[880px] overflow-hidden relative">
                            <div
                                ref={scrollRef}
                                className="flex space-x-4 p-4 overflow-x-scroll scroll-smooth snap-x no-scrollbar">
                                {campaigns.map((item, index) => (
                                    <div key={index} className="bg-[#F6F6F6] opacity-75 p-4 text-center rounded-lg text-[#ec4c24] font-bold snap-center min-w-[200px]">
                                        CHIẾN DỊCH DOP <br /> {item.name} <br /> {item.year}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="text-white text-2xl" onClick={() => scroll('right')}>➡</button>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Campaign;