"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Gallery data
const galleryCategories = [
  {
    id: "all",
    name: "Tất cả",
  },
  {
    id: "cdd",
    name: "Chương trình CDD",
  },
  {
    id: "ndd",
    name: "Chương trình NDD",
  },
  {
    id: "htnc",
    name: "Chương trình HTNC",
  },
  {
    id: "da",
    name: "Dự án ĐA",
  },
  {
    id: "tt",
    name: "Truyền thông TT",
  },
]

const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Hoạt động CDD tại Hà Nội",
    category: "cdd",
    description: "Hoạt động phát triển cộng đồng tại một làng nghề ở ngoại thành Hà Nội.",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Đào tạo NDD tại TP.HCM",
    category: "ndd",
    description: "Khóa đào tạo kỹ năng cho thanh niên tại TP.HCM.",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Hỗ trợ HTNC tại Hà Giang",
    category: "htnc",
    description: "Chương trình hỗ trợ trẻ em vùng cao tại Hà Giang.",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Dự án ĐA về năng lượng tái tạo",
    category: "da",
    description: "Dự án năng lượng tái tạo tại một cộng đồng nông thôn.",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Sự kiện TT tại Đà Nẵng",
    category: "tt",
    description: "Sự kiện nâng cao nhận thức về bảo vệ biển tại Đà Nẵng.",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Hoạt động CDD tại Cần Thơ",
    category: "cdd",
    description: "Dự án phát triển nông nghiệp bền vững tại Cần Thơ.",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Đào tạo NDD tại Huế",
    category: "ndd",
    description: "Khóa đào tạo kỹ năng nghề cho người dân tại Huế.",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Hỗ trợ HTNC tại Quảng Nam",
    category: "htnc",
    description: "Chương trình hỗ trợ người già và người khuyết tật tại Quảng Nam.",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Dự án ĐA về bảo vệ rừng",
    category: "da",
    description: "Dự án bảo vệ rừng và đa dạng sinh học tại Tây Nguyên.",
  },
  {
    id: 10,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Sự kiện TT tại Hà Nội",
    category: "tt",
    description: "Chiến dịch truyền thông về phát triển bền vững tại Hà Nội.",
  },
  {
    id: 11,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Hoạt động CDD tại Huế",
    category: "cdd",
    description: "Dự án bảo tồn làng nghề truyền thống tại Huế.",
  },
  {
    id: 12,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Đào tạo NDD tại Đà Nẵng",
    category: "ndd",
    description: "Khóa đào tạo kỹ năng số cho thanh niên tại Đà Nẵng.",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-[#0d3a4e]/70 z-10" />
        <Image src="/placeholder.svg?height=800&width=1920" alt="DOP Gallery" fill className="object-cover" />
        <div className="container mx-auto px-4 relative z-20 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Thư viện ảnh</h1>
          <p className="text-xl max-w-2xl">
            Khám phá những khoảnh khắc đáng nhớ từ các hoạt động và chương trình của DOP.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" onValueChange={setActiveCategory}>
            <TabsList className="flex flex-wrap justify-center mb-12">
              {galleryCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory} className="min-h-[60vh]">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredImages.map((image) => (
                  <div
                    key={image.id}
                    className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-[#ec4c24] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full">
            <div className="relative w-full aspect-video">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-white">
              <h3 className="text-xl font-bold">{selectedImage.alt}</h3>
              <p className="text-gray-300 mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
