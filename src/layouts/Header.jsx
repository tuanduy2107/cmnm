import { useState, useRef, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function MobileHeader() {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef()
    const location = useLocation()

    const toggleMenu = () => setIsOpen(prev => !prev)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    const navItems = [
        { label: 'Trang chủ', path: '/' },
        { label: 'Giới thiệu', path: '/about-us' },
        { label: 'Dự án', path: '/campaign' },
        { label: 'Tin tức', path: '/gallery' },
        { label: 'Liên hệ', path: '/' },
    ]

    return (
        <>
            {/* Header cố định */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-orange-400 shadow-md">
                <div className="flex justify-between items-center px-4 py-3">
                    <div className="text-xl font-bold text-black">LOGO</div>
                    <div className="flex items-center gap-2">
                        <button className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm">ỦNG HỘ</button>
                        <button onClick={toggleMenu} className="text-black">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Overlay nền mờ khi mở menu */}
            {isOpen && <div className="fixed inset-0 bg-black bg-opacity-40 z-40" />}

            {/* Menu trượt */}
            <div
                ref={menuRef}
                className={`fixed top-0 right-0 w-2/5 h-full bg-white text-black z-50 p-6 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <ul className="space-y-5 mt-12 text-lg font-bold">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`transition-colors ${location.pathname == item.path ? 'text-orange-500' : 'text-black'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
