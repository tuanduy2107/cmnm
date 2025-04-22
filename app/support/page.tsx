import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CreditCard, Heart, Users } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-[#0d3a4e]/70 z-10" />
        <Image src="/placeholder.svg?height=800&width=1920" alt="Support DOP" fill className="object-cover" />
        <div className="container mx-auto px-4 relative z-20 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Đồng hành cùng DOP</h1>
          <p className="text-xl max-w-2xl">Cùng chúng tôi tạo nên những thay đổi tích cực cho cộng đồng và xã hội.</p>
        </div>
      </section>

      {/* Ways to Support Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0d3a4e]">Cách thức đồng hành</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#ddf1f9] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CreditCard className="w-8 h-8 text-[#1d84b1]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0d3a4e]">Đóng góp tài chính</h3>
                <p className="text-gray-600 mb-6">
                  Mỗi đóng góp, dù lớn hay nhỏ, đều có ý nghĩa quan trọng trong việc duy trì và phát triển các chương
                  trình của DOP.
                </p>
                <Button className="bg-[#ec4c24] hover:bg-[#bd3d1c]">Đóng góp ngay</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#ddf1f9] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-[#1d84b1]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0d3a4e]">Tình nguyện viên</h3>
                <p className="text-gray-600 mb-6">
                  Tham gia đội ngũ tình nguyện viên của DOP để trực tiếp đóng góp vào các hoạt động và chương trình của
                  chúng tôi.
                </p>
                <Button className="bg-[#1d84b1] hover:bg-[#186b8f]">Đăng ký tình nguyện</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#ddf1f9] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-[#1d84b1]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0d3a4e]">Đối tác</h3>
                <p className="text-gray-600 mb-6">
                  Trở thành đối tác của DOP để cùng nhau tạo ra những tác động lớn hơn và bền vững hơn cho cộng đồng.
                </p>
                <Button className="bg-[#1d84b1] hover:bg-[#186b8f]">Liên hệ hợp tác</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Information Section */}
      <section className="py-16 bg-[#ddf1f9]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0d3a4e]">Thông tin chuyển khoản</h2>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6 text-[#0d3a4e]">Tài khoản ngân hàng</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-[#1d84b1]">Ngân hàng A</p>
                    <p className="text-gray-700">Số tài khoản: 123456789</p>
                    <p className="text-gray-700">Chủ tài khoản: Tổ chức DOP</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1d84b1]">Ngân hàng B</p>
                    <p className="text-gray-700">Số tài khoản: 987654321</p>
                    <p className="text-gray-700">Chủ tài khoản: Tổ chức DOP</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="font-semibold text-[#0d3a4e]">Nội dung chuyển khoản:</p>
                  <p className="text-gray-700">[Họ tên] - [Email/SĐT] - Đóng góp cho DOP</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6 text-[#0d3a4e]">Các hình thức khác</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-[#1d84b1]">Ví điện tử</p>
                    <p className="text-gray-700">MoMo: 0123456789</p>
                    <p className="text-gray-700">ZaloPay: 0123456789</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1d84b1]">Đóng góp quốc tế</p>
                    <p className="text-gray-700">PayPal: donate@dop.org.vn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#0d3a4e]">Liên hệ với chúng tôi</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Nếu bạn có bất kỳ câu hỏi nào về cách đóng góp hoặc đồng hành cùng DOP, vui lòng liên hệ với chúng tôi.
          </p>

          <div className="max-w-3xl mx-auto">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Họ và tên
                  </label>
                  <Input id="name" placeholder="Nhập họ và tên của bạn" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Nhập email của bạn" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Số điện thoại
                  </label>
                  <Input id="phone" placeholder="Nhập số điện thoại của bạn" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Chủ đề
                  </label>
                  <Input id="subject" placeholder="Nhập chủ đề liên hệ" />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Nội dung
                  </label>
                  <Textarea id="message" placeholder="Nhập nội dung liên hệ của bạn" className="h-[212px]" />
                </div>
                <Button className="w-full bg-[#ec4c24] hover:bg-[#bd3d1c]">Gửi liên hệ</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
