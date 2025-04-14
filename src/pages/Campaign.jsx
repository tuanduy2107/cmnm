import { useEffect, useRef } from 'react';
import Navbar from '../layouts/Navbar';
import LienHeVoiChungToi from '../components/HomePage/LienHeVoiChungToi';
import BackGroundCampaign from '../assets/BackgroundCampaign.jpg';
import sectionsData from '../data/chuon_trinh_du_an';
import Card from '../components/Campaign/Card';
import Header from "../layouts/Header";
const Campaign = () => {
    const sectionsRef = useRef([]);

    const handleScroll = (event) => {
        event.preventDefault();
        const delta = Math.sign(event.deltaY);
        const currentSectionIndex = sectionsRef.current.findIndex(
            (section) => Math.abs(section.getBoundingClientRect().top) < window.innerHeight / 2
        );
        const nextSectionIndex = Math.max(0, Math.min(currentSectionIndex + delta, sectionsRef.current.length - 1));
        sectionsRef.current[nextSectionIndex]?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScroll, { passive: false });
        return () => window.removeEventListener('wheel', handleScroll);
    }, []);

    return (
        <div className='relative flex flex-col w-screen'>
            {/* Header */}
            <Header />

            {/* Background */}
            <div className='section' ref={(el) => (sectionsRef.current[0] = el)}>
                <div className='flex flex-col items-center justify-center min-h-screen bg-[#0D2F39] relative opacity-90'>
                    <img src={BackGroundCampaign} alt='Background' className='absolute inset-0 w-full h-full opacity-40 object-cover -z-10' />
                    <div className='text-6xl text-[#ec4c24] font-bold text-center mb-4'>CHƯƠNG TRÌNH</div>
                    <div className='text-6xl text-[#ec4c24] font-bold text-center'>DỰ ÁN</div>
                </div>
            </div>

            {/* Render các section */}
            {sectionsData.map((section, index) => {
                const isEven = index % 2 === 0;
                const { title, subtitle, descriptions, description, image, yearHTNC, yearTT, yearDA, yearCDD, locationsHTNC, locationsCDD } = section;

                return (
                    <div className='section' ref={(el) => (sectionsRef.current[index + 1] = el)} key={index}>
                        <div className='relative grid grid-cols-2 min-h-screen'>
                            {/* Phần nội dung */}
                            {isEven && <div className='w-1/2' />}
                            <div className='bg-[#07212c] bg-opacity-30 flex flex-col items-center justify-start text-white p-8'>
                                <div className='text-xl text-[#ec4c24] font-bold text-center mt-14 mb-2'>{title}</div>
                                {subtitle && <div className='text-3xl text-[#ec4c24] font-semibold text-center mb-2'>{subtitle}</div>}
                                {(descriptions || description) && (
                                    <div className='text-lg text-white font-bold text-left mr-10'>
                                        {descriptions ? descriptions.map((desc, i) => <p key={i} className='mb-2'>{desc}</p>) : <p>{description}</p>}
                                    </div>
                                )}
                            </div>

                            {/* Hình ảnh */}
                            <img src={image} alt={title} className={`absolute inset-0 w-full h-full object-cover -z-10 ${isEven ? 'order-1' : 'order-2'}`} />

                            {/* Danh sách Card */}
                            <div className='absolute w-screen bottom-12 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center'>
                                {yearCDD?.map((year, i) => <Card key={i} title={title} subtitle={subtitle} year={year} place={locationsCDD?.[i]} />)}
                                {yearTT?.map((year, i) => <Card key={i} title={title} subtitle={subtitle} year={year} />)}
                                {yearDA?.map((year, i) => <Card key={i} title={title} subtitle={subtitle} year={year} />)}
                                {yearHTNC?.map((year, i) => <Card key={i} title={title} subtitle={subtitle} year={year} place={locationsHTNC?.[i]} />)}
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* Liên hệ */}
            <div className='section' ref={(el) => (sectionsRef.current[sectionsData.length + 1] = el)}>
                <div className='bg-[#0D2F39] relative opacity-90'>
                    <LienHeVoiChungToi />
                </div>
            </div>
        </div>
    );
};

export default Campaign;