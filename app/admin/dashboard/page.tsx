"use client"
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, ImageIcon, Eye } from "lucide-react"

// Dữ liệu giả lập
const visitData = [
  { name: "T1", Lượt: 4000 },
  { name: "T2", Lượt: 3000 },
  { name: "T3", Lượt: 2000 },
  { name: "T4", Lượt: 2780 },
  { name: "T5", Lượt: 1890 },
  { name: "T6", Lượt: 2390 },
  { name: "T7", Lượt: 3490 },
  { name: "T8", Lượt: 3200 },
  { name: "T9", Lượt: 2800 },
  { name: "T10", Lượt: 4300 },
  { name: "T11", Lượt: 5200 },
  { name: "T12", Lượt: 6100 },
]

const recentPosts = [
  { id: 1, title: "DOP tổ chức sự kiện gây quỹ thành công", views: 245, date: "15/04/2025" },
  { id: 2, title: "Chương trình CDD mở rộng đến tỉnh mới", views: 189, date: "02/04/2025" },
  { id: 3, title: "Đối tác mới đồng hành cùng DOP", views: 156, date: "25/03/2025" },
  { id: 4, title: "Kết quả dự án phát triển cộng đồng năm 2024", views: 132, date: "18/03/2025" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Tổng quan về hoạt động của trang web</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <FileText className="h-10 w-10 text-[#1d84b1]" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">Bài viết</p>
                <h3 className="text-2xl font-bold">24</h3>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <ImageIcon className="h-10 w-10 text-[#1d84b1]" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">Hình ảnh</p>
                <h3 className="text-2xl font-bold">156</h3>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Users className="h-10 w-10 text-[#1d84b1]" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">Người dùng</p>
                <h3 className="text-2xl font-bold">48</h3>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Eye className="h-10 w-10 text-[#1d84b1]" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">Lượt xem</p>
                <h3 className="text-2xl font-bold">12.5K</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Lượt truy cập</CardTitle>
            <CardDescription>Thống kê lượt truy cập theo tháng</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={visitData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Lượt" stroke="#1d84b1" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Bài viết gần đây</CardTitle>
            <CardDescription>Các bài viết được đăng gần đây</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">{post.title}</p>
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Eye className="mr-1 h-4 w-4" />
                    {post.views}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
