"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Trash2, Search, Upload, X, MoreHorizontal, Edit, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

// Dữ liệu giả lập
const images = [
  {
    id: 1,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Hoạt động CDD tại Hà Nội",
    category: "CDD",
    date: "15/04/2025",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Đào tạo NDD tại TP.HCM",
    category: "NDD",
    date: "02/04/2025",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Hỗ trợ HTNC tại Hà Giang",
    category: "HTNC",
    date: "25/03/2025",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Dự án ĐA về năng lượng tái tạo",
    category: "ĐA",
    date: "18/03/2025",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Sự kiện TT tại Đà Nẵng",
    category: "TT",
    date: "10/03/2025",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Hoạt động CDD tại Cần Thơ",
    category: "CDD",
    date: "05/03/2025",
  },
]

export default function GalleryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  // Lọc ảnh
  const filteredImages = images.filter((image) => {
    const matchesSearch = image.alt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || image.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  // Danh sách các danh mục duy nhất
  const categories = Array.from(new Set(images.map((image) => image.category)))

  // Xử lý khi chọn file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedImage(file)

      // Tạo URL xem trước
      const fileReader = new FileReader()
      fileReader.onload = () => {
        if (typeof fileReader.result === "string") {
          setPreviewUrl(fileReader.result)
        }
      }
      fileReader.readAsDataURL(file)
    }
  }

  // Xử lý khi hủy chọn file
  const handleCancelFile = () => {
    setSelectedImage(null)
    setPreviewUrl(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Thư viện ảnh</h1>
          <p className="text-muted-foreground">Quản lý tất cả hình ảnh trên trang web</p>
        </div>
        <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#1d84b1] hover:bg-[#186b8f]">
              <Upload className="mr-2 h-4 w-4" /> Tải ảnh lên
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Tải ảnh lên</DialogTitle>
              <DialogDescription>
                Tải lên hình ảnh mới cho thư viện. Hỗ trợ định dạng JPG, PNG và GIF.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="image">Chọn ảnh</Label>
                <div className="grid w-full items-center gap-1.5">
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="image-upload"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                    >
                      {previewUrl ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={previewUrl || "/placeholder.svg"}
                            alt="Preview"
                            fill
                            className="object-contain p-2"
                          />
                          <button
                            type="button"
                            onClick={handleCancelFile}
                            className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-sm"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-2 text-gray-500" />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Nhấp để tải lên</span> hoặc kéo thả
                          </p>
                          <p className="text-xs text-gray-500">PNG, JPG hoặc GIF (Tối đa 2MB)</p>
                        </div>
                      )}
                      <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="alt">Mô tả ảnh</Label>
                <Input id="alt" placeholder="Nhập mô tả cho ảnh" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Danh mục</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn danh mục" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setUploadDialogOpen(false)}>
                Hủy
              </Button>
              <Button
                className="bg-[#1d84b1] hover:bg-[#186b8f]"
                disabled={!selectedImage}
                onClick={() => {
                  // Xử lý tải ảnh lên
                  setUploadDialogOpen(false)
                  setSelectedImage(null)
                  setPreviewUrl(null)
                }}
              >
                Tải lên
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Tìm kiếm ảnh..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Danh mục" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả danh mục</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredImages.length === 0 ? (
        <div className="flex h-[400px] items-center justify-center rounded-md border border-dashed">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <Search className="h-10 w-10 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Không tìm thấy ảnh nào</h3>
            <p className="mt-2 text-sm text-muted-foreground">Thử tìm kiếm với từ khóa khác hoặc tải lên ảnh mới.</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-md border">
              <div className="aspect-square relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex space-x-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="secondary" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Thao tác</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        <span>Chỉnh sửa</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        <span>Tải xuống</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Xóa</span>
                          </DropdownMenuItem>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Bạn có chắc chắn muốn xóa?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Hành động này không thể hoàn tác. Ảnh sẽ bị xóa vĩnh viễn khỏi hệ thống.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Hủy</AlertDialogCancel>
                            <AlertDialogAction className="bg-red-600 hover:bg-red-700">Xóa</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="p-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium truncate">{image.alt}</p>
                  <Badge variant="outline" className="ml-2 shrink-0">
                    {image.category}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{image.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
