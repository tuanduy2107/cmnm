import { useState } from 'react';
import { motion } from 'framer-motion';
import BG from '../assets/SuMenh.jpg';
import LienHeVoiChungToi from '../components/HomePage/LienHeVoiChungToi';
import Header from "../layouts/Header";
const categories = [
    {
        title: 'Lễ kỷ niệm và Chương trình nghệ thuật',
        images: [
            '/src/assets/HomePage1.jpg',
            '/src/assets/HomePage2.jpg',
            '/src/assets/HomePage3.jpg',
            '/src/assets/HomePage4.jpg',
            '/src/assets/HomePage5.jpg',
        ],
    },
    {
        title: 'Hoạt động cộng đồng',
        images: [
            '/src/assets/HomePage6.jpg',
            '/src/assets/HTNC.jpg',
            '/src/assets/BackgroundCampaign.jpg',
            '/src/assets/DongAm.jpg',
            '/src/assets/KN.png',
            '/src/assets/NDD.jpg',
        ],
    },
    {
        title: 'Chiến dịch',
        images: [
            '/src/assets/HomePage6.jpg',
            '/src/assets/HTNC.jpg',
            '/src/assets/BackgroundCampaign.jpg',
            '/src/assets/DongAm.jpg',
            '/src/assets/KN.png',
            '/src/assets/NDD.jpg',
        ],
    },
];

export default function GalleryPage() {
    const [viewAll, setViewAll] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);

    const toggleViewAll = (categoryTitle) => {
        setViewAll((prev) => ({
            ...prev,
            [categoryTitle]: !prev[categoryTitle],
        }));
    };

    return (
        <div className='bg-[#07212c] w-screen min-h-screen text-white text-center'>
            <Header />
            <div className='flex flex-col items-center justify-center h-64 bg-[#0D2F39] relative opacity-90'>
                <img src={BG} alt='Background' className='absolute inset-0 w-full h-64 opacity-40 object-cover -z-10' />
                <div className='text-6xl text-white font-bold text-center'>TRUYỀN THÔNG</div>
            </div>
            <h1 className='text-4xl font-bold mb-8 pt-6 text-orange-500'>THƯ VIỆN ẢNH</h1>
            <div className='space-y-10 px-5'>
                {categories.map((category, index) => (
                    <div key={index}>
                        <h2 className='text-2xl font-semibold text-orange-500'>{category.title}</h2>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-2 mt-4'>
                            {(viewAll[category.title]
                                ? category.images
                                : category.images.slice(0, 3)
                            ).map((src, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.05 }}
                                    className='overflow-hidden rounded-lg shadow-lg cursor-pointer'
                                    onClick={() => setSelectedImage(src)}
                                >
                                    <img src={src} alt={`Image ${idx + 1}`} className='mx-2 my-2 w-full h-80 object-cover rounded-lg' />
                                </motion.div>
                            ))}
                        </div>
                        {category.images.length > 3 && (
                            <button
                                className='mt-4 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600'
                                onClick={() => toggleViewAll(category.title)}>
                                {viewAll[category.title] ? 'Thu gọn' : 'Xem tất cả thư viện ảnh'}
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4' onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt='Selected' className='max-w-full max-h-full rounded-lg' />
                </div>
            )}
        </div>
    );
}
