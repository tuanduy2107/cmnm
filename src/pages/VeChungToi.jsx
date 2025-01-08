import { useEffect, useRef } from "react";
import AboutUs from "/src/assets/HomePage2.jpg";
import LienHeVoiChungToi from "../components/HomePage/LienHeVoiChungToi";
const AboutUsPage = () => {

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
                <div className="flex flex-col items-center justify-center bg-white min-h-screen relative">
                    <h1 className="text-4xl font-bold text-center">Về chúng tôi</h1>
                    <p className="text-lg text-center">Chúng tôi là một tổ chức phi lợi nhuận hoạt động trong lĩnh vực giáo dục và phát triển cộng đồng.</p>
                </div>
            </div>

            <div className="section" ref={(el) => (sectionsRef.current[2] = el)}>
                {/* Giá trị cốt lõi */}
                <div className="flex flex-col items-center justify-center bg-white min-h-screen relative">
                    <h1 className="text-4xl font-bold text-center">Sứ mệnh</h1>
                    <p className="text-lg text-center">Chúng tôi mong muốn mọi người đều có cơ hội học tập và phát triển bản thân.</p>
                </div>
            </div>

            <div className="section" ref={(el) => (sectionsRef.current[3] = el)}>
                {/* Sáng lập viên */}
                <div className="flex flex-col items-center justify-center bg-white min-h-screen relative">
                    <h1 className="text-4xl font-bold text-center">Giá trị cốt lõi</h1>
                    <p className="text-lg text-center">Chúng tôi tôn trọng và đề cao giá trị của mỗi cá nhân.</p>
                </div>
            </div>

            <div className="section" ref={(el) => (sectionsRef.current[4] = el)}>
                {/* Đội ngũ */}
                <div className="flex flex-col items-center justify-center bg-white min-h-screen relative">
                    <h1 className="text-4xl font-bold text-center">Sáng lập viên</h1>
                    <p className="text-lg text-center">Chúng tôi là những người trẻ đầy nhiệt huyết và đam mê với giáo dục.</p>
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