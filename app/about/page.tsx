"use client"

import type React from "react"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import background from "@/asset/ve_chung_toi/background.jpg"
// Team data
const founders = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    role: "Nhà sáng lập & Chủ tịch",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Với hơn 15 năm kinh nghiệm trong lĩnh vực phát triển cộng đồng, ông A đã sáng lập DOP với mong muốn tạo ra những thay đổi tích cực cho xã hội.",
  },
  {
    id: 2,
    name: "Trần Thị B",
    role: "Đồng sáng lập & Giám đốc điều hành",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Bà B có chuyên môn sâu về quản lý dự án phát triển và đã có nhiều đóng góp quan trọng trong việc xây dựng các chương trình của DOP.",
  },
  {
    id: 3,
    name: "Lê Văn C",
    role: "Đồng sáng lập & Giám đốc tài chính",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Ông C có hơn 10 năm kinh nghiệm trong lĩnh vực tài chính và quản lý nguồn lực, giúp DOP sử dụng hiệu quả các nguồn lực để tạo tác động lớn nhất.",
  },
]

// Organization structure
const orgStructure = [
  {
    id: 1,
    title: "Ban điều hành",
    members: ["Chủ tịch", "Giám đốc điều hành", "Giám đốc tài chính", "Giám đốc chương trình"],
  },
  {
    id: 2,
    title: "Ban chương trình",
    members: [
      "Quản lý chương trình CDD",
      "Quản lý chương trình NDD",
      "Quản lý chương trình HTNC",
      "Quản lý chương trình ĐA",
      "Quản lý chương trình TT",
    ],
  },
  {
    id: 3,
    title: "Ban hỗ trợ",
    members: ["Nhân sự & Hành chính", "Tài chính & Kế toán", "Truyền thông & Đối ngoại", "Công nghệ thông tin"],
  },
]

export default function AboutPage() {
  const missionRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const visionRef = useRef<HTMLDivElement>(null)
  const goalsRef = useRef<HTMLDivElement>(null)
  const foundersRef = useRef<HTMLDivElement>(null)
  const structureRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-[#0d3a4e]/70 z-10" />
        <Image src={background} alt="About DOP" fill className="object-cover" />
        <div className="container mx-auto px-4 relative z-20 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Về chúng tôi</h1>
          <p className="text-xl max-w-2xl">
            Tổ chức DOP hoạt động vì cộng đồng và phát triển bền vững, mang lại những thay đổi tích cực cho xã hội.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="sticky top-16 bg-white shadow-md z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="ghost"
              className="hover:bg-[#ddf1f9] hover:text-[#0d3a4e]"
              onClick={() => scrollToSection(missionRef)}
            >
              Sứ mệnh
            </Button>
            <Button
              variant="ghost"
              className="hover:bg-[#ddf1f9] hover:text-[#0d3a4e]"
              onClick={() => scrollToSection(valuesRef)}
            >
              Giá trị cốt lõi
            </Button>
            <Button
              variant="ghost"
              className="hover:bg-[#ddf1f9] hover:text-[#0d3a4e]"
              onClick={() => scrollToSection(visionRef)}
            >
              Tầm nhìn
            </Button>
            <Button
              variant="ghost"
              className="hover:bg-[#ddf1f9] hover:text-[#0d3a4e]"
              onClick={() => scrollToSection(goalsRef)}
            >
              Mục tiêu
            </Button>
            <Button
              variant="ghost"
              className="hover:bg-[#ddf1f9] hover:text-[#0d3a4e]"
              onClick={() => scrollToSection(foundersRef)}
            >
              Sáng lập viên
            </Button>
            <Button
              variant="ghost"
              className="hover:bg-[#ddf1f9] hover:text-[#0d3a4e]"
              onClick={() => scrollToSection(structureRef)}
            >
              Cơ cấu tổ chức
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-16 bg-white" id="mission">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#0d3a4e]">Sứ mệnh của chúng tôi</h2>
              <p className="text-lg mb-6 text-gray-700">
                DOP ra đời với sứ mệnh thúc đẩy sự phát triển bền vững của cộng đồng thông qua các chương trình hỗ trợ
                thiết thực, nâng cao năng lực và cải thiện chất lượng cuộc sống cho người dân địa phương.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Chúng tôi tin rằng mỗi cá nhân đều có tiềm năng và khả năng đóng góp vào sự phát triển chung của xã hội.
                Vì vậy, DOP nỗ lực tạo ra môi trường và cơ hội để mọi người phát huy tối đa khả năng của mình.
              </p>
              <Button className="bg-[#ec4c24] hover:bg-[#bd3d1c]">Tìm hiểu thêm</Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=800&width=1200" alt="Sứ mệnh DOP" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-16 bg-[#f8f9fa]" id="values">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Giá trị cốt lõi DOP"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-[#0d3a4e]">Giá trị cốt lõi</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#1d84b1] mb-2">Tính minh bạch</h3>
                  <p className="text-gray-700">
                    Chúng tôi cam kết minh bạch trong mọi hoạt động, từ quản lý tài chính đến triển khai dự án.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1d84b1] mb-2">Tôn trọng</h3>
                  <p className="text-gray-700">
                    Chúng tôi tôn trọng sự đa dạng văn hóa, ý kiến và quyền của mỗi cá nhân trong cộng đồng.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1d84b1] mb-2">Bền vững</h3>
                  <p className="text-gray-700">
                    Mọi hoạt động của DOP đều hướng đến sự phát triển bền vững, cân bằng giữa con người và môi trường.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1d84b1] mb-2">Đổi mới</h3>
                  <p className="text-gray-700">
                    Chúng tôi luôn tìm kiếm những giải pháp sáng tạo và hiệu quả để giải quyết các thách thức xã hội.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section ref={visionRef} className="py-16 bg-white" id="vision">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-[#0d3a4e]">Tầm nhìn</h2>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl mb-8">
              <Image src="/placeholder.svg?height=600&width=1200" alt="Tầm nhìn DOP" fill className="object-cover" />
            </div>
            <p className="text-lg mb-6 text-gray-700">
              DOP hướng tới một xã hội công bằng, nơi mọi người đều có cơ hội phát triển và đóng góp vào sự tiến bộ
              chung. Chúng tôi mong muốn xây dựng các cộng đồng tự chủ, có khả năng phát triển bền vững và thích ứng với
              những thay đổi của thời đại.
            </p>
            <p className="text-lg mb-8 text-gray-700">
              Đến năm 2030, DOP phấn đấu trở thành một trong những tổ chức phi lợi nhuận hàng đầu tại Việt Nam, với mạng
              lưới hoạt động rộng khắp và tác động tích cực đến hàng triệu người.
            </p>
            <Button className="bg-[#1d84b1] hover:bg-[#186b8f]">Tìm hiểu thêm</Button>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section ref={goalsRef} className="py-16 bg-[#f8f9fa]" id="goals">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#0d3a4e]">Mục tiêu</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#ec4c24] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    1
                  </div>
                  <p className="text-gray-700">
                    Phát triển và triển khai các chương trình hỗ trợ thiết thực, đáp ứng nhu cầu thực tế của cộng đồng.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#ec4c24] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    2
                  </div>
                  <p className="text-gray-700">
                    Nâng cao năng lực cho người dân địa phương, giúp họ tự tin và có kỹ năng để cải thiện cuộc sống.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#ec4c24] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    3
                  </div>
                  <p className="text-gray-700">
                    Xây dựng mạng lưới đối tác rộng khắp để huy động nguồn lực và tạo tác động lớn hơn.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#ec4c24] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    4
                  </div>
                  <p className="text-gray-700">
                    Thúc đẩy các giải pháp bền vững, cân bằng giữa phát triển kinh tế và bảo vệ môi trường.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#ec4c24] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    5
                  </div>
                  <p className="text-gray-700">
                    Nâng cao nhận thức của cộng đồng về các vấn đề xã hội và môi trường thông qua các hoạt động truyền
                    thông.
                  </p>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=800&width=1200" alt="Mục tiêu DOP" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section ref={foundersRef} className="py-16 bg-white" id="founders">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#0d3a4e]">Đội ngũ sáng lập</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <Card key={founder.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-80">
                  <Image src={founder.image || "/placeholder.svg"} alt={founder.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-[#0d3a4e]">{founder.name}</h3>
                  <p className="text-[#ec4c24] mb-4">{founder.role}</p>
                  <p className="text-gray-600">{founder.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Structure Section */}
      <section ref={structureRef} className="py-16 bg-[#f8f9fa]" id="structure">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#0d3a4e]">Cơ cấu tổ chức</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl mb-12">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Cơ cấu tổ chức DOP"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {orgStructure.map((dept) => (
                <Card key={dept.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-[#1d84b1] text-center">{dept.title}</h3>
                    <ul className="space-y-2">
                      {dept.members.map((member, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-[#ec4c24] rounded-full mr-2"></div>
                          <span className="text-gray-700">{member}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
