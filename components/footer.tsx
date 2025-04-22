import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#07212c] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">DOP</h3>
            <p className="text-gray-300 mb-4">Tổ chức DOP hoạt động vì cộng đồng và phát triển bền vững.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#ec4c24] transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#ec4c24] transition-colors">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-[#ec4c24] transition-colors">
                  Chương trình
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-[#ec4c24] transition-colors">
                  Thư viện ảnh
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-[#ec4c24] transition-colors">
                  Đồng hành cùng DOP
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Liên hệ</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-[#ec4c24] mt-1" />
                <span className="text-gray-300">Địa chỉ văn phòng DOP, Việt Nam</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-[#ec4c24]" />
                <span className="text-gray-300">+84 123 456 789</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-[#ec4c24]" />
                <span className="text-gray-300">tochucdop@gmail.com</span>
              </div>
              <div className="mt-4">
                <p className="text-gray-300 mb-2">Theo dõi chúng tôi:</p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/dreamofthepoor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#ec4c24] transition-colors"
                  >
                    <Facebook size={24} />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#ec4c24] transition-colors"
                  >
                    <Instagram size={24} />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#ec4c24] transition-colors"
                  >
                    <Youtube size={24} />
                    <span className="sr-only">YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; Dự án Hành trình nuôi chữ 2023. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
