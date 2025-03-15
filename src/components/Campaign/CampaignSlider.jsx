import { useRef } from 'react';
import PropTypes from 'prop-types';

const CampaignSlider = ({ campaigns }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 220;
            scrollRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
        }
    };

    return (
        <div className="absolute bottom-8 w-full flex justify-center items-center space-x-4">
            <button className="text-white text-2xl" onClick={() => scroll('left')}>⬅</button>
            <div className="w-[880px] overflow-hidden relative">
                <div ref={scrollRef} className="flex space-x-4 p-4 overflow-x-scroll scroll-smooth snap-x no-scrollbar">
                    {campaigns.map((item, index) => (
                        <div key={index} className="bg-[#F6F6F6] opacity-75 p-4 text-center rounded-lg text-[#ec4c24] font-bold snap-center min-w-[200px]">
                            CHIẾN DỊCH DOP <br /> {item.name} <br /> {item.year}
                        </div>
                    ))}
                </div>
            </div>
            <button className="text-white text-2xl" onClick={() => scroll('right')}>➡</button>
        </div>
    );
};

// Khai báo propTypes để tránh lỗi ESLint
CampaignSlider.propTypes = {
    campaigns: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            year: PropTypes.number.isRequired
        })
    ).isRequired
};

export default CampaignSlider;
