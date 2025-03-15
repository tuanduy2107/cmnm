import PropTypes from 'prop-types';
import Navbar from '/src/layouts/Navbar';

const CampaignSection = ({ title, subtitle, description, imgSrc }) => {
    return (
        <div className="relative grid grid-cols-2 min-h-screen">
            <img src={imgSrc} alt={title} className="absolute inset-0 w-full h-full object-cover -z-10" />
            <Navbar />
            <div className="bg-[#2F2F2F] bg-opacity-50 flex flex-col items-center justify-start text-white p-8">
                <div className="text-3xl text-[#ec4c24] font-bold text-center mt-14">{title}</div>
                {subtitle && <div className="text-3xl text-[#ec4c24] font-bold text-center mt-2 mb-4">{subtitle}</div>}
                <p className="text-sm text-white font-bold text-left mr-10">{description}</p>
            </div>
        </div>
    );
};

// 🔥 Thêm propTypes để kiểm tra kiểu dữ liệu
CampaignSection.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
};

export default CampaignSection;
