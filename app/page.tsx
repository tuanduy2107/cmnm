"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import homePage1 from "@/asset/home_page/homePage1.jpg"
import homePage2 from "@/asset/home_page/homePage2.jpg"
import homePage3 from "@/asset/home_page/homePage3.jpg"
import AvatarCDD from "@/asset/cdd/Avatar.jpg"
import AvatarNDD from "@/asset/ndd/AvatarNdd.jpg"
import AvatarHTNC from "@/asset/htnc/AvatarHTNC.jpg"
import AvatarDA from "@/asset/da/AvatarDA.jpg"
import AvatarTT from "@/asset/tt/AvatarTT.jpg"
// Slider images
const sliderImages = [
  {
    url: homePage1,
    title: "Chào mừng đến với DOP",
    description: "Tổ chức hoạt động vì cộng đồng và phát triển bền vững",
  },
  {
    url: homePage2,
    title: "Chương trình CDD",
    description: "Phát triển cộng đồng bền vững",
  },
  {
    url: homePage3,
    title: "Chương trình NDD",
    description: "Nâng cao năng lực người dân địa phương",
  },
]

// Stats data
const stats = [
  { id: 1, value: "12", label: "EM TỐT NGHIỆP ĐẠI HỌC, CAO ĐẲNG" },
  { id: 2, value: "03", label: "EM THỤ HƯỞNG HỌC ĐẠI HỌC, CAO ĐẲNG" },
  { id: 3, value: "36", label: "DỰ ÁN HÀNH TRÌNH NUÔI CHỮ" },
  { id: 4, value: "6", label: "MÙA CHIẾN DỊCH DOP" },
]

// Programs data
const programs = [
  {
    id: "cdd",
    title: "Chiến dịch DOP",
    description: "Chương trình phát triển cộng đồng",
    image: AvatarCDD,
  },
  {
    id: "ndd",
    title: "Người đỡ đầu",
    description: "Nâng cao năng lực người dân địa phương",
    image: AvatarNDD,
  },
  {
    id: "htnc",
    title: "Hành trình nuôi chữ",
    description: "Hỗ trợ người có hoàn cảnh khó khăn",
    image: AvatarHTNC,
  },
  {
    id: "da",
    title: "Đông ấm",
    description: "Dự án phát triển bền vững",
    image: AvatarDA,
  },
  {
    id: "tt",
    title: "Trăng sáng từ bao giờ?",
    description: "Truyền thông và nâng cao nhận thức",
    image: AvatarTT,
  },
]

// News data
const news = [
  {
    id: 1,
    title: "DOP tổ chức sự kiện gây quỹ thành công",
    date: "15/04/2025",
    image: "/placeholder.svg?height=300&width=500",
    excerpt: "Sự kiện gây quỹ của DOP đã thu hút hơn 200 người tham gia và gây quỹ thành công...",
  },
  {
    id: 2,
    title: "Chương trình CDD mở rộng đến tỉnh mới",
    date: "02/04/2025",
    image: "/placeholder.svg?height=300&width=500",
    excerpt: "DOP vừa mở rộng chương trình CDD đến tỉnh mới, mang lại cơ hội phát triển cho cộng đồng địa phương...",
  },
  {
    id: 3,
    title: "Đối tác mới đồng hành cùng DOP",
    date: "25/03/2025",
    image: "/placeholder.svg?height=300&width=500",
    excerpt: "DOP vui mừng thông báo về đối tác mới sẽ đồng hành cùng tổ chức trong các dự án sắp tới...",
  },
]

// Partners data
const partners = [
  { id: 1, name: "Partner 1", logo: "/placeholder.svg?height=100&width=200" },
  { id: 2, name: "Partner 2", logo: "/placeholder.svg?height=100&width=200" },
  { id: 3, name: "Partner 3", logo: "/placeholder.svg?height=100&width=200" },
  { id: 4, name: "Partner 4", logo: "/placeholder.svg?height=100&width=200" },
  { id: 5, name: "Partner 5", logo: "/placeholder.svg?height=100&width=200" },
  { id: 6, name: "Partner 6", logo: "/placeholder.svg?height=100&width=200" },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Hero Slider */}
      <section className="relative h-screen">
        {sliderImages.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <Image
              src={slide.url || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl md:text-2xl max-w-3xl">{slide.description}</p>
              <Button className="mt-8 bg-[#ec4c24] hover:bg-[#bd3d1c] text-white">Tìm hiểu thêm</Button>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-[#ec4c24]" : "bg-white/50"}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#ddf1f9]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0d3a4e]">Những con số ấn tượng</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white rounded-lg shadow-lg p-8 text-center transform transition-transform hover:scale-105"
              >
                <div className="text-4xl font-bold text-[#25a5dd] mb-2">{stat.value}</div>
                <div className="text-[#0d3a4e]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#0d3a4e]">Các chương trình tiêu biểu</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            DOP tự hào triển khai nhiều chương trình có tác động tích cực đến cộng đồng
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Link key={program.id} href={`/programs#${program.id}`}>
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#1d84b1]">{program.title}</h3>
                    <p className="text-gray-600">{program.description}</p>
                    <div className="mt-4 text-[#ec4c24] font-medium">Xem chi tiết →</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-[#f8bfb1]/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0d3a4e]">Tin tức mới nhất</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-[#ec4c24] mb-2">{item.date}</div>
                  <h3 className="text-xl font-bold mb-2 text-[#0d3a4e]">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <Link href="#" className="text-[#1d84b1] font-medium hover:text-[#25a5dd]">
                    Đọc thêm →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#1d84b1] hover:bg-[#186b8f]">Xem tất cả tin tức</Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0d3a4e]">Đối tác đồng hành</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center grayscale hover:grayscale-0 transition-all"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={150}
                  height={75}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
