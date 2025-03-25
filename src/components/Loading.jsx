import { motion } from 'framer-motion';

export default function LoadingPage() {
    return (
        <div className="flex w-screen justify-center items-center min-h-screen bg-gray-900 text-white">
            <motion.div
                className="text-3xl font-bold text-orange-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                Đang tải...
            </motion.div>
        </div>
    );
}
