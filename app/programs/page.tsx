"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import bulum2022 from "@/asset/cdd/bulum2022.jpg"
import philote2023 from "@/asset/cdd/philote2023.jpg"
import dakha2024 from "@/asset/cdd/dakha2024.jpg"
import soni2024 from "@/asset/cdd/soni2024.jpg"
import suoiphen2025 from "@/asset/cdd/suoiphen2025.jpg"
import background from "@/asset/chuong_trinh/background.jpg"
import AvatarCDD from "@/asset/cdd/Avatar.jpg"
import AvatarNDD from "@/asset/ndd/AvatarNdd.jpg"
import AvatarHTNC from "@/asset/htnc/AvatarHTNC.jpg"
import AvatarDA from "@/asset/da/AvatarDA.jpg"
import AvatarTT from "@/asset/tt/AvatarTT.jpg"
// Programs data
const programs = [
  {
    id: "cdd",
    title: "Chiến dịch DOP",
    description:
      "Chiến dịch DOP là một hoạt động thường niên do Tổ chức Giáo dục và Phát triển Cộng đồng (DOP) thực hiện, nhằm hỗ trợ giáo dục và phát triển kỹ năng sống cho trẻ em tại các khu vực khó khăn, đặc biệt là vùng sâu, vùng xa. Mỗi năm, chiến dịch mang một chủ đề riêng, phản ánh mục tiêu và tinh thần của chương trình trong năm đó.",
    image: AvatarCDD,
    locations: [
      {
        name: "Hà Nội",
        description:
          "Triển khai các dự án phát triển cộng đồng tại các huyện ngoại thành Hà Nội, tập trung vào cải thiện cơ sở hạ tầng và phát triển sinh kế.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Hồ Chí Minh",
        description:
          "Các dự án tại TP.HCM tập trung vào phát triển kỹ năng cho thanh niên và hỗ trợ các doanh nghiệp nhỏ trong cộng đồng.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Đà Nẵng",
        description:
          "Tại Đà Nẵng, chúng tôi triển khai các dự án bảo vệ môi trường và phát triển du lịch cộng đồng bền vững.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Cần Thơ",
        description:
          "Các dự án tại Cần Thơ tập trung vào thích ứng với biến đổi khí hậu và phát triển nông nghiệp bền vững.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Huế",
        description: "Tại Huế, chúng tôi triển khai các dự án bảo tồn văn hóa và phát triển du lịch cộng đồng.",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
  {
    id: "ndd",
    title: "Người đỡ đầu",
    description:
      "Nhằm thực hiện sứ mệnh lan tỏa những điều tích cực đến xã hội, dự án Người đỡ đầu của Tổ chức DOP ra đời với mong muốn đồng hành và hỗ trợ những bạn trẻ trên con đường Đại học, Cao đẳng và học nghề. Trải qua hai khóa dự án, dẫu còn gặp một số vấn đề trong quá trình vận hành, Người đỡ đầu vẫn gặt về những thành quả tốt đẹp nhờ sự chung tay của Cộng đồng, sự nỗ lực không ngừng của các bạn thụ hưởng.",
    image: AvatarNDD,
    locations: [],
  },
  {
    id: "htnc",
    title: "Hành trình nuôi chữ",
    description:
      "Dự án Hành trình nuôi chữ là một sáng kiến giáo dục do Tổ chức DOP khởi xướng, nhằm mang lại cơ hội học tập cho trẻ em ở những khu vực mà điều kiện kinh tế và cơ sở hạ tầng còn nhiều hạn chế. Với mong muốn giúp các em nhỏ không chỉ biết đọc, biết viết mà còn có nền tảng kiến thức vững chắc để xây dựng tương lai, dự án hỗ trợ giáo dục bằng nhiều hình thức khác nhau: cung cấp tài liệu học tập, xây dựng lớp học và tổ chức các hoạt động ngoại khóa.",
    image: AvatarHTNC,
    locations: [
      {
        name: "Thôn Bãi Trâu 3",
        description:
          "Dự án Hành trình nuôi chữ 2022 diễn ra tại Bãi Trâu 3, nơi có nhiều trẻ em chưa được tiếp cận với giáo dục chính quy.",
        image: bulum2022,
      },
      {
        name: "Bon Phi lơ te",
        description:
          "Dự án Hành trình nuôi chữ 2023 tại Bon Phi lơ te tập trung vào việc cung cấp tài liệu học tập và tổ chức các hoạt động ngoại khóa.",
        image: philote2023,
      },
      {
        name: "Bon Bulum",
        description:
          "Dự án Hành trình nuôi chữ 2024 diễn ra tại Bon Bu Lum, nơi có nhiều trẻ em chưa được tiếp cận với giáo dục chính quy.",
        image: bulum2022,
      },
      {
        name: "Bản Nam Sơni",
        description:
            "Dự án Hành trình nuôi chữ 2024 tại Bản Nam Sơni tập trung vào việc cung cấp tài liệu học tập và tổ chức các hoạt động ngoại khóa.",
        image: soni2024,
      },
      {
        name: "Suối Phèn",
        description:
          "Dự án Hành trình nuôi chữ 2025 diễn ra tại Suối Phèn, nơi có nhiều trẻ em chưa được tiếp cận với giáo dục chính quy.",
        image: suoiphen2025,
      },
    ],
  },
  {
    id: "da",
    title: "Đông ấm",
    description:
      "Đông Ấm là chương trình thường niên Tổ chức DOP thực hiện vào mỗi cuối năm, nhằm khảo sát các điểm bản dự kiến tổ chức Chiến dịch DOP năm tiếp theo. Đây cũng là dịp để DOP mang áo ấm, mền, khăn len và những món quà nho nhỏ dành tặng cho các em nhỏ và người dân tại bản làng xa xôi.",
    image: AvatarDA,
    locations: [],
  },
  {
    id: "tt",
    title: "Trăng sáng từ bao giờ?",
    description:
      "Trăng sáng từ bao giờ? là chương trình Trung thu thường niên do Tổ chức Giáo dục và Phát triển Cộng đồng (DOP) tại TP Hồ Chí Minh tổ chức. Chương trình này nằm trong khuôn khổ dự án Hành trình nuôi chữ, nhằm mang lại niềm vui và trải nghiệm Tết Trung thu cho trẻ em tại các bản làng vùng sâu, vùng xa, đặc biệt ở khu vực Tây Nguyên.",
    image: AvatarTT,
    locations: [
      {
        name: "Hà Nội",
        description:
          "Tại Hà Nội, chúng tôi tổ chức các sự kiện nâng cao nhận thức về bảo vệ môi trường và phát triển bền vững.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Hồ Chí Minh",
        description:
          "Các chiến dịch tại TP.HCM tập trung vào giáo dục cộng đồng về các vấn đề xã hội và khuyến khích tình nguyện viên tham gia.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Đà Nẵng",
        description:
          "Tại Đà Nẵng, chúng tôi triển khai các chiến dịch truyền thông về bảo vệ biển và phát triển du lịch bền vững.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Cần Thơ",
        description:
          "Các hoạt động tại Cần Thơ tập trung vào nâng cao nhận thức về biến đổi khí hậu và bảo vệ nguồn nước.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Huế",
        description:
          "Tại Huế, chúng tôi tổ chức các sự kiện văn hóa và giáo dục để nâng cao nhận thức về bảo tồn di sản.",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
]

export default function ProgramsPage() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null)
  const programRefs = {
    cdd: useRef<HTMLDivElement>(null),
    ndd: useRef<HTMLDivElement>(null),
    htnc: useRef<HTMLDivElement>(null),
    da: useRef<HTMLDivElement>(null),
    tt: useRef<HTMLDivElement>(null),
  }

  const scrollToProgram = (id: keyof typeof programRefs) => {
    if (programRefs[id].current) {
      programRefs[id].current?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-[#0d3a4e]/70 z-10" />
        <Image src="/placeholder.svg?height=800&width=1920" alt="DOP Programs" fill className="object-cover" />
        <div className="container mx-auto px-4 relative z-20 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Các chương trình của DOP</h1>
          <p className="text-xl max-w-2xl">
            Khám phá các chương trình đa dạng của DOP nhằm tạo ra những tác động tích cực đến cộng đồng và xã hội.
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
              onClick={() => scrollToProgram("cdd")}
            >
              CDD
            </Button>
            <Button
              variant="ghost"
              className="hover:bg-[#ddf1f9] hover:text-[#0d3a4e]"
              onClick={() => scrollToProgram("ndd")}
            >
              NDD
            </Button>
            <Button
              variant="ghost"
              className="hover:bg-[#ddf1f9] hover:text-[#0d3a4e]"
              onClick={() => scrollToProgram("htnc")}
            >
              HTNC
            </Button>
            <Button
              variant="ghost"
              className="hover:bg-[#ddf1f9] hover:text-[#0d3a4e]"
              onClick={() => scrollToProgram("da")}
            >
              ĐA
            </Button>
            <Button
              variant="ghost"
              className="hover:bg-[#ddf1f9] hover:text-[#0d3a4e]"
              onClick={() => scrollToProgram("tt")}
            >
              TT
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Sections */}
      {programs.map((program) => (
        <section
          key={program.id}
          ref={programRefs[program.id as keyof typeof programRefs]}
          id={program.id}
          className={`py-16 ${program.id === "cdd" || program.id === "htnc" || program.id === "da" ? "bg-white" : "bg-[#f8f9fa]"}`}
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#0d3a4e]">{program.title}</h2>
                <p className="text-lg mb-8 text-gray-700">{program.description}</p>
                <Button className="bg-[#ec4c24] hover:bg-[#bd3d1c]">Tìm hiểu thêm</Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
              </div>
            </div>

            {program.locations.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold mb-8 text-[#0d3a4e]">Địa bàn hoạt động</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
                  {program.locations.map((location) => (
                    <div
                      key={location.name}
                      className={`relative h-32 rounded-lg overflow-hidden cursor-pointer transition-all ${
                        activeLocation === location.name ? "ring-4 ring-[#ec4c24]" : "hover:shadow-lg"
                      }`}
                      onClick={() => setActiveLocation(location.name === activeLocation ? null : location.name)}
                    >
                      <div className="absolute inset-0 bg-black/40 z-10" />
                      <Image
                        src={location.image || "/placeholder.svg"}
                        alt={location.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <h4 className="text-white text-xl font-bold">{location.name}</h4>
                      </div>
                    </div>
                  ))}
                </div>

                {activeLocation && (
                  <div className="bg-[#ddf1f9] rounded-lg p-8 animate-fadeIn">
                    {program.locations
                      .filter((loc) => loc.name === activeLocation)
                      .map((location) => (
                        <div key={location.name} className="grid md:grid-cols-2 gap-8 items-center">
                          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                            <Image
                              src={location.image || "/placeholder.svg"}
                              alt={location.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl font-bold mb-4 text-[#0d3a4e]">
                              {program.title} tại {location.name}
                            </h4>
                            <p className="text-gray-700 mb-6">{location.description}</p>
                            <Button className="bg-[#1d84b1] hover:bg-[#186b8f]">Xem chi tiết</Button>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Impact Section */}
      <section className="py-16 bg-[#f8bfb1]/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0d3a4e]">Tác động của chúng tôi</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-5xl font-bold text-[#ec4c24] mb-4">50+</div>
                <h3 className="text-xl font-semibold mb-2 text-[#0d3a4e]">Dự án</h3>
                <p className="text-gray-600">
                  Chúng tôi đã triển khai hơn 50 dự án trên khắp Việt Nam, mang lại những thay đổi tích cực cho cộng
                  đồng.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-5xl font-bold text-[#ec4c24] mb-4">1000+</div>
                <h3 className="text-xl font-semibold mb-2 text-[#0d3a4e]">Người hưởng lợi</h3>
                <p className="text-gray-600">
                  Hơn 1000 người đã được hưởng lợi trực tiếp từ các chương trình của DOP, cải thiện chất lượng cuộc
                  sống.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-5xl font-bold text-[#ec4c24] mb-4">20+</div>
                <h3 className="text-xl font-semibold mb-2 text-[#0d3a4e]">Đối tác</h3>
                <p className="text-gray-600">
                  Chúng tôi hợp tác với hơn 20 đối tác trong và ngoài nước để mở rộng tác động của các chương trình.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
