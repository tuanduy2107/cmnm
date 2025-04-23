"use client"

import { useState } from "react"
import { Edit, Trash2, Search, MoreHorizontal, UserPlus, Shield, UserX } from "lucide-react"
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"

// Dữ liệu giả lập
const users = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    role: "admin",
    status: "active",
    lastLogin: "15/04/2025 14:30",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Trần Thị B",
    email: "tranthib@example.com",
    role: "editor",
    status: "active",
    lastLogin: "14/04/2025 09:15",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Lê Văn C",
    email: "levanc@example.com",
    role: "user",
    status: "active",
    lastLogin: "10/04/2025 16:45",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Phạm Thị D",
    email: "phamthid@example.com",
    role: "user",
    status: "inactive",
    lastLogin: "05/03/2025 11:20",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Hoàng Văn E",
    email: "hoangvane@example.com",
    role: "editor",
    status: "active",
    lastLogin: "12/04/2025 08:30",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    name: "Đỗ Thị F",
    email: "dothif@example.com",
    role: "user",
    status: "pending",
    lastLogin: "Chưa đăng nhập",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

// Dữ liệu vai trò
const roles = [
  { id: "admin", name: "Quản trị viên", description: "Quyền truy cập đầy đủ vào tất cả tính năng" },
  { id: "editor", name: "Biên tập viên", description: "Có thể tạo và chỉnh sửa nội dung" },
  { id: "user", name: "Người dùng", description: "Chỉ có thể xem nội dung" },
]

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRole, setSelectedRole] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [isAddUserOpen, setIsAddUserOpen] = useState(false)
  const [isEditRoleOpen, setIsEditRoleOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<(typeof users)[0] | null>(null)

  // Lọc người dùng
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = selectedRole === "all" || user.role === selectedRole
    const matchesStatus = selectedStatus === "all" || user.status === selectedStatus

    return matchesSearch && matchesRole && matchesStatus
  })

  // Xử lý mở dialog chỉnh sửa vai trò
  const handleEditRole = (user: (typeof users)[0]) => {
    setSelectedUser(user)
    setIsEditRoleOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Quản lý người dùng</h1>
          <p className="text-muted-foreground">Quản lý tất cả người dùng trên hệ thống</p>
        </div>
        <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#1d84b1] hover:bg-[#186b8f]">
              <UserPlus className="mr-2 h-4 w-4" /> Thêm người dùng
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Thêm người dùng mới</DialogTitle>
              <DialogDescription>Nhập thông tin để tạo tài khoản người dùng mới.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Họ tên
                </Label>
                <Input id="name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" type="email" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right">
                  Vai trò
                </Label>
                <Select defaultValue="user">
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Chọn vai trò" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Quản trị viên</SelectItem>
                    <SelectItem value="editor">Biên tập viên</SelectItem>
                    <SelectItem value="user">Người dùng</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Mật khẩu
                </Label>
                <Input id="password" type="password" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <div></div>
                <div className="col-span-3 flex items-center space-x-2">
                  <Checkbox id="send-email" />
                  <label
                    htmlFor="send-email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Gửi email thông báo cho người dùng
                  </label>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddUserOpen(false)}>
                Hủy
              </Button>
              <Button
                className="bg-[#1d84b1] hover:bg-[#186b8f]"
                onClick={() => {
                  // Xử lý thêm người dùng
                  setIsAddUserOpen(false)
                }}
              >
                Thêm người dùng
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
              placeholder="Tìm kiếm người dùng..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="flex items-center space-x-2">
            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Vai trò" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả vai trò</SelectItem>
                <SelectItem value="admin">Quản trị viên</SelectItem>
                <SelectItem value="editor">Biên tập viên</SelectItem>
                <SelectItem value="user">Người dùng</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả trạng thái</SelectItem>
                <SelectItem value="active">Hoạt động</SelectItem>
                <SelectItem value="inactive">Không hoạt động</SelectItem>
                <SelectItem value="pending">Chờ xác nhận</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]"></TableHead>
              <TableHead>Người dùng</TableHead>
              <TableHead>Vai trò</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead>Đăng nhập gần nhất</TableHead>
              <TableHead className="text-right">Thao tác</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  Không tìm thấy người dùng nào.
                </TableCell>
              </TableRow>
            ) : (
              filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        user.role === "admin"
                          ? "border-red-200 bg-red-50 text-red-700"
                          : user.role === "editor"
                            ? "border-blue-200 bg-blue-50 text-blue-700"
                            : "border-gray-200 bg-gray-50 text-gray-700"
                      }
                    >
                      {user.role === "admin"
                        ? "Quản trị viên"
                        : user.role === "editor"
                          ? "Biên tập viên"
                          : "Người dùng"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        user.status === "active" ? "default" : user.status === "inactive" ? "secondary" : "outline"
                      }
                      className={
                        user.status === "active"
                          ? "bg-green-500"
                          : user.status === "inactive"
                            ? "bg-gray-500"
                            : "border-yellow-200 bg-yellow-50 text-yellow-700"
                      }
                    >
                      {user.status === "active"
                        ? "Hoạt động"
                        : user.status === "inactive"
                          ? "Không hoạt động"
                          : "Chờ xác nhận"}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.lastLogin}</TableCell>
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
                        <DropdownMenuItem onClick={() => handleEditRole(user)}>
                          <Shield className="mr-2 h-4 w-4" />
                          <span>Phân quyền</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Chỉnh sửa</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {user.status === "active" ? (
                          <DropdownMenuItem>
                            <UserX className="mr-2 h-4 w-4" />
                            <span>Vô hiệu hóa</span>
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem>
                            <UserPlus className="mr-2 h-4 w-4" />
                            <span>Kích hoạt</span>
                          </DropdownMenuItem>
                        )}
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
                                Hành động này không thể hoàn tác. Người dùng sẽ bị xóa vĩnh viễn khỏi hệ thống.
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

      {/* Dialog phân quyền */}
      <Dialog open={isEditRoleOpen} onOpenChange={setIsEditRoleOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Phân quyền người dùng</DialogTitle>
            <DialogDescription>
              {selectedUser && (
                <div className="flex items-center space-x-2 mt-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={selectedUser.avatar || "/placeholder.svg"} alt={selectedUser.name} />
                    <AvatarFallback>{selectedUser.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{selectedUser.name}</p>
                    <p className="text-sm text-muted-foreground">{selectedUser.email}</p>
                  </div>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="space-y-4">
              {roles.map((role) => (
                <div key={role.id} className="flex items-start space-x-3">
                  <div className="flex h-5 items-center">
                    <input
                      type="radio"
                      id={`role-${role.id}`}
                      name="role"
                      value={role.id}
                      defaultChecked={selectedUser?.role === role.id}
                      className="h-4 w-4 border-gray-300 text-[#1d84b1] focus:ring-[#1d84b1]"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor={`role-${role.id}`} className="block text-sm font-medium">
                      {role.name}
                    </label>
                    <p className="text-sm text-gray-500">{role.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditRoleOpen(false)}>
              Hủy
            </Button>
            <Button
              className="bg-[#1d84b1] hover:bg-[#186b8f]"
              onClick={() => {
                // Xử lý cập nhật vai trò
                setIsEditRoleOpen(false)
              }}
            >
              Lưu thay đổi
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
