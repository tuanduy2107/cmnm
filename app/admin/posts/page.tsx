"use client"

import { useState } from "react"
import Link from "next/link"
import { Edit, Trash2, Plus, Search, Eye, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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
import { Badge } from "@/components/ui/badge"

// Dữ liệu giả lập
const posts = [
  {
    id: 1,
    title: "DOP tổ chức sự kiện gây quỹ thành công",
    category: "Tin tức",
    status: "published",
    date: "15/04/2025",
    author: "Admin",
  },
  {
    id: 2,
    title: "Chương trình CDD mở rộng đến tỉnh mới",
    category: "Dự án",
    status: "published",
    date: "02/04/2025",
    author: "Admin",
  },
  {
    id: 3,
    title: "Đối tác mới đồng hành cùng DOP",
    category: "Đối tác",
    status: "published",
    date: "25/03/2025",
    author: "Editor",
  },
  {
    id: 4,
    title: "Kết quả dự án phát triển cộng đồng năm 2024",
    category: "Báo cáo",
    status: "draft",
    date: "18/03/2025",
    author: "Editor",
  },
  {
    id: 5,
    title: "Tuyển tình nguyện viên cho dự án mới",
    category: "Tuyển dụng",
    status: "draft",
    date: "10/03/2025",
    author: "Admin",
  },
]

export default function PostsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Lọc bài viết
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === "all" || post.status === selectedStatus
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory

    return matchesSearch && matchesStatus && matchesCategory
  })

  // Danh sách các danh mục duy nhất
  const categories = Array.from(new Set(posts.map((post) => post.category)))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Quản lý bài viết</h1>
          <p className="text-muted-foreground">Quản lý tất cả bài viết trên trang web</p>
        </div>
        <Link href="/admin/posts/new">
          <Button className="bg-[#1d84b1] hover:bg-[#186b8f]">
            <Plus className="mr-2 h-4 w-4" /> Thêm bài viết
          </Button>
        </Link>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Tìm kiếm bài viết..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="flex items-center space-x-2">
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả trạng thái</SelectItem>
                <SelectItem value="published">Đã xuất bản</SelectItem>
                <SelectItem value="draft">Bản nháp</SelectItem>
              </SelectContent>
            </Select>
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
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tiêu đề</TableHead>
              <TableHead>Danh mục</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead>Ngày đăng</TableHead>
              <TableHead>Tác giả</TableHead>
              <TableHead className="text-right">Thao tác</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPosts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  Không tìm thấy bài viết nào.
                </TableCell>
              </TableRow>
            ) : (
              filteredPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium">{post.title}</TableCell>
                  <TableCell>{post.category}</TableCell>
                  <TableCell>
                    <Badge variant={post.status === "published" ? "default" : "secondary"}>
                      {post.status === "published" ? "Đã xuất bản" : "Bản nháp"}
                    </Badge>
                  </TableCell>
                  <TableCell>{post.date}</TableCell>
                  <TableCell>{post.author}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Mở menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Thao tác</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          <span>Xem</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Chỉnh sửa</span>
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
                                Hành động này không thể hoàn tác. Bài viết sẽ bị xóa vĩnh viễn khỏi hệ thống.
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
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
