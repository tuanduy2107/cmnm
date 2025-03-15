import { useEffect, useRef } from 'react';
import Navbar from '../layouts/Navbar';
import LienHeVoiChungToi from '../components/HomePage/LienHeVoiChungToi';
import BackGroundCampaign from '../assets/BackgroundCampaign.jpg';
import CDD from '../assets/CDD.jpg';
import DongAm from '../assets/DongAm.jpg';
import TrungThu from '../assets/TSTBG.jpg';
import HTNC from '../assets/HTNC.jpg';
import NDD from '../assets/NDD.jpg';

const sectionsData = [
    {
        subtitle: 'CHIẾN DỊCH DOP',
        descriptions: [
            'Chiến dịch DOP là một hoạt động thường niên do Tổ chức Giáo dục và Phát triển Cộng đồng (DOP) thực hiện, nhằm hỗ trợ giáo dục và phát triển kỹ năng sống cho trẻ em tại các khu vực khó khăn, đặc biệt là vùng sâu, vùng xa. Mỗi năm, chiến dịch mang một chủ đề riêng, phản ánh mục tiêu và tinh thần của chương trình trong năm đó.',
            'Các chiến dịch DOP không chỉ mang lại kiến thức và kỹ năng cho trẻ em vùng khó khăn mà còn tạo cơ hội cho các tình nguyện viên trải nghiệm, học hỏi và đóng góp cho cộng đồng.',
        ],
        image: CDD
    },
    {
        title: 'CHƯƠNG TRÌNH',
        subtitle: 'TRĂNG SÁNG TỪ BAO GIỜ?',
        descriptions: [
            '"Trăng sáng từ bao giờ?" là chương trình Trung thu thường niên do Tổ chức Giáo dục và Phát triển Cộng đồng (DOP) tại TP Hồ Chí Minh tổ chức. Chương trình này nằm trong khuôn khổ dự án "Hành trình nuôi chữ", nhằm mang lại niềm vui và trải nghiệm Tết Trung thu cho trẻ em tại các bản làng vùng sâu, vùng xa, đặc biệt ở khu vực Tây Nguyên.',
            'Chương trình "Trăng sáng từ bao giờ?" không chỉ mang lại niềm vui Trung thu cho trẻ em vùng cao mà còn giúp các em phát triển kỹ năng cộng đồng, tinh thần sẻ chia và trách nhiệm xã hội. Đây cũng là dịp để các bạn trẻ trong dự án tiếp tục công tác kết nối, xây dựng nền tảng cho các bước tiếp theo của dự án "Hành trình nuôi chữ".',
        ],
        image: TrungThu
    },
    {
        title: 'CHƯƠNG TRÌNH',
        subtitle: 'ĐÔNG ẤM',
        description: 'Đông Ấm là chương trình thường niên Tổ chức DOP thực hiện vào mỗi cuối năm, nhằm khảo sát các điểm bản dự kiến tổ chức Chiến dịch DOP năm tiếp theo. Đây cũng là dịp để DOP mang áo ấm, mền, khăn len và những món quà nho nhỏ dành tặng cho các em nhỏ và người dân tại bản làng xa xôi.',
        image: DongAm
    },
    {
        title: 'DỰ ÁN',
        subtitle: 'HÀNH TRÌNH NUÔI CHỮ',
        descriptions: [
            'Dự án "Hành trình nuôi chữ" là một sáng kiến giáo dục do Tổ chức DOP khởi xướng, nhằm mang lại cơ hội học tập cho trẻ em ở những khu vực mà điều kiện kinh tế và cơ sở hạ tầng còn nhiều hạn chế. Với mong muốn giúp các em nhỏ không chỉ biết đọc, biết viết mà còn có nền tảng kiến thức vững chắc để xây dựng tương lai, dự án hỗ trợ giáo dục bằng nhiều hình thức khác nhau: cung cấp tài liệu học tập, xây dựng lớp học và tổ chức các hoạt động ngoại khóa.',
            'Không chỉ dừng lại ở việc truyền đạt kiến thức, "Hành trình nuôi chữ" còn tạo nên môi trường học tập thân thiện và bền vững cho trẻ em. Dự án kết nối các tình nguyện viên, nhà hảo tâm và các tổ chức giáo dục để mang đến những chương trình giảng dạy sáng tạo, giúp học sinh không chỉ học tập tốt hơn mà còn phát triển toàn diện về kỹ năng và tư duy.',
        ],
        image: HTNC
    },
    {
        title: 'DỰ ÁN',
        subtitle: 'NGƯỜI ĐỠ ĐẦU',
        description: 'Nhằm thực hiện sứ mệnh lan tỏa những điều tích cực đến xã hội, dự án “Người đỡ đầu” của Tổ chức DOP ra đời với mong muốn đồng hành và hỗ trợ những bạn trẻ trên con đường Đại học, Cao đẳng và học nghề. Trải qua hai khóa dự án, dẫu còn gặp một số vấn đề trong quá trình vận hành, “Người đỡ đầu” vẫn gặt về những thành quả tốt đẹp nhờ sự chung tay của Cộng đồng, sự nỗ lực không ngừng của các bạn thụ hưởng.',
        image: NDD
    },
];

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
            <div className='section' ref={(el) => (sectionsRef.current[0] = el)}>
                <div className='flex flex-col items-center justify-center min-h-screen bg-[#0D2F39] relative opacity-90'>
                    <img src={BackGroundCampaign} alt='Background' className='absolute inset-0 w-full h-full opacity-40 object-cover -z-10' />
                    <div className='text-6xl text-[#ec4c24] font-bold text-center mb-4'>CHƯƠNG TRÌNH</div>
                    <div className='text-6xl text-[#ec4c24] font-bold text-center'>DỰ ÁN</div>
                </div>
            </div>

            {sectionsData.map((section, index) => {
                const isEven = index % 2 == 0;
                console.log(isEven);

                return (
                    <div className='section' ref={(el) => (sectionsRef.current[index + 1] = el)} key={index}>
                        <div className={`relative grid grid-cols-2 min-h-screen`}>
                            {isEven ? (
                                <>
                                    <div className='col-span-1'></div>
                                    <div className='bg-[#2F2F2F] bg-opacity-30 flex flex-col items-center justify-start text-white p-8'>
                                        <div className='text-xl text-[#ec4c24] font-bold text-center mt-14 mb-2'>{section.title}</div>
                                        {section.subtitle && (
                                            <div className='text-3xl text-[#ec4c24] font-semibold text-center mb-2'>{section.subtitle}</div>
                                        )}
                                        {section.descriptions ? (
                                            section.descriptions.map((desc, i) => (
                                                <p key={i} className='text-sm text-white font-bold text-left mr-10 mb-2'>{desc}</p>
                                            ))
                                        ) : (
                                            <p className='text-sm text-white font-bold text-left mr-10'>{section.description}</p>
                                        )}
                                    </div>
                                    <img src={section.image} alt={section.title} className='absolute inset-0 w-full h-full object-cover -z-10' />
                                </>
                            ) : (
                                <>
                                    <img src={section.image} alt={section.title} className='absolute inset-0 w-full h-full object-cover -z-10' />
                                    <div className='bg-[#2F2F2F] bg-opacity-50 flex flex-col items-center justify-start text-white p-8'>
                                        <div className='text-xl text-[#ec4c24] font-bold text-center mt-14 mb-2'>{section.title}</div>
                                        {section.subtitle && (
                                            <div className='text-3xl text-[#ec4c24] font-semibold text-center mb-2'>{section.subtitle}</div>
                                        )}
                                        {section.descriptions ? (
                                            section.descriptions.map((desc, i) => (
                                                <p key={i} className='text-sm text-white font-bold text-left mr-10 mb-2'>{desc}</p>
                                            ))
                                        ) : (
                                            <p className='text-sm text-white font-bold text-left mr-10'>{section.description}</p>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                );
            })}

            <div className='section' ref={(el) => (sectionsRef.current[sectionsData.length + 1] = el)}>
                <div className='bg-[#0D2F39] relative opacity-90'>
                    <LienHeVoiChungToi />
                </div>
            </div>
        </div>
    );
};

export default Campaign;
