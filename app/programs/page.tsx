"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Programs data
const programs = [
  {
    id: "cdd",
    title: "CDD - Chương trình phát triển cộng đồng",
    description:
      "Chương trình CDD tập trung vào việc phát triển cộng đồng bền vững thông qua các dự án cải thiện cơ sở hạ tầng, nâng cao năng lực và thúc đẩy sinh kế địa phương.",
    image: "/placeholder.svg?height=600&width=1200",
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
    title: "NDD - Nâng cao năng lực người dân địa phương",
    description:
      "Chương trình NDD tập trung vào việc nâng cao năng lực cho người dân địa phương thông qua các khóa đào tạo kỹ năng, hỗ trợ khởi nghiệp và tạo cơ hội việc làm.",
    image: "/placeholder.svg?height=600&width=1200",
    locations: [],
  },
  {
    id: "htnc",
    title: "HTNC - Hỗ trợ người có hoàn cảnh khó khăn",
    description:
      "Chương trình HTNC cung cấp hỗ trợ cho những người có hoàn cảnh khó khăn, bao gồm trẻ em, người già, người khuyết tật và các nhóm dễ bị tổn thương khác.",
    image: "/placeholder.svg?height=600&width=1200",
    locations: [
      {
        name: "Hà Giang",
        description:
          "Tại Hà Giang, chúng tôi hỗ trợ trẻ em vùng cao thông qua các dự án xây dựng trường học và cung cấp học bổng.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Quảng Nam",
        description:
          "Các dự án tại Quảng Nam tập trung vào hỗ trợ người già và người khuyết tật thông qua các dịch vụ chăm sóc và hỗ trợ sinh kế.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Bình Định",
        description:
          "Tại Bình Định, chúng tôi triển khai các dự án hỗ trợ phục hồi sau thiên tai và xây dựng khả năng chống chịu cho cộng đồng.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Cà Mau",
        description:
          "Các dự án tại Cà Mau tập trung vào hỗ trợ ngư dân và gia đình họ thông qua đào tạo kỹ năng và cải thiện điều kiện sống.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Kon Tum",
        description:
          "Tại Kon Tum, chúng tôi hỗ trợ các cộng đồng dân tộc thiểu số thông qua các dự án giáo dục và y tế.",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
  {
    id: "da",
    title: "ĐA - Dự án phát triển bền vững",
    description:
      "Chương trình ĐA tập trung vào các dự án phát triển bền vững, bao gồm bảo vệ môi trường, năng lượng tái tạo và thích ứng với biến đổi khí hậu.",
    image: "/placeholder.svg?height=600&width=1200",
    locations: [],
  },
  {
    id: "tt",
    title: "TT - Truyền thông và nâng cao nhận thức",
    description:
      "Chương trình TT tập trung vào việc nâng cao nhận thức của cộng đồng về các vấn đề xã hội và môi trường thông qua các chiến dịch truyền thông và sự kiện.",
    image: "/placeholder.svg?height=600&width=1200",
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
                              {program.id.toUpperCase()} tại {location.name}
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
