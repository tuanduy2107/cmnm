"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Globe,
  Mail,
  Shield,
  Settings,
  Save,
  Upload,
  AlertTriangle,
  Database,
  RefreshCw,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Info,
} from "lucide-react"

export default function SettingsPage() {
  const [isSaving, setIsSaving] = useState(false)
  const [logoPreview, setLogoPreview] = useState("/placeholder.svg?height=100&width=200")
  const [faviconPreview, setFaviconPreview] = useState("/placeholder.svg?height=32&width=32")

  // Xử lý khi thay đổi logo
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setLogoPreview(reader.result)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  // Xử lý khi thay đổi favicon
  const handleFaviconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setFaviconPreview(reader.result)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  // Xử lý khi lưu cài đặt
  const handleSave = () => {
    setIsSaving(true)
    // Giả lập lưu cài đặt
    setTimeout(() => {
      setIsSaving(false)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Cài đặt hệ thống</h1>
        <p className="text-muted-foreground">Quản lý cài đặt và cấu hình cho trang web</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-2">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span className="hidden md:inline">Chung</span>
          </TabsTrigger>
          <TabsTrigger value="seo" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="hidden md:inline">SEO</span>
          </TabsTrigger>
          <TabsTrigger value="social" className="flex items-center gap-2">
            <Facebook className="h-4 w-4" />
            <span className="hidden md:inline">Mạng xã hội</span>
          </TabsTrigger>
          <TabsTrigger value="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span className="hidden md:inline">Email</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span className="hidden md:inline">Bảo mật</span>
          </TabsTrigger>
          <TabsTrigger value="backup" className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            <span className="hidden md:inline">Sao lưu</span>
          </TabsTrigger>
        </TabsList>

        {/* Cài đặt chung */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Cài đặt chung</CardTitle>
              <CardDescription>Quản lý các cài đặt cơ bản của trang web</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Thông tin trang web</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="site-name">Tên trang web</Label>
                    <Input id="site-name" defaultValue="DOP Organization" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="site-url">URL trang web</Label>
                    <Input id="site-url" defaultValue="https://dop.org.vn" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-description">Mô tả trang web</Label>
                  <Textarea
                    id="site-description"
                    defaultValue="Tổ chức DOP hoạt động vì cộng đồng và phát triển bền vững"
                    className="min-h-[100px]"
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Logo và Favicon</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <Label>Logo trang web</Label>
                    <div className="flex items-center gap-4">
                      <div className="relative h-20 w-40 overflow-hidden rounded-md border">
                        <Image
                          src={logoPreview || "/placeholder.svg"}
                          alt="Logo preview"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <Label
                          htmlFor="logo-upload"
                          className="flex cursor-pointer items-center gap-2 rounded-md border bg-background px-3 py-2 text-sm hover:bg-accent"
                        >
                          <Upload className="h-4 w-4" />
                          <span>Tải lên</span>
                          <Input
                            id="logo-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleLogoChange}
                          />
                        </Label>
                        <p className="mt-1 text-xs text-muted-foreground">PNG, JPG hoặc GIF. Tối đa 1MB.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Label>Favicon</Label>
                    <div className="flex items-center gap-4">
                      <div className="relative h-10 w-10 overflow-hidden rounded-md border">
                        <Image
                          src={faviconPreview || "/placeholder.svg"}
                          alt="Favicon preview"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <Label
                          htmlFor="favicon-upload"
                          className="flex cursor-pointer items-center gap-2 rounded-md border bg-background px-3 py-2 text-sm hover:bg-accent"
                        >
                          <Upload className="h-4 w-4" />
                          <span>Tải lên</span>
                          <Input
                            id="favicon-upload"
                            type="file"
                            accept="image/x-icon,image/png"
                            className="hidden"
                            onChange={handleFaviconChange}
                          />
                        </Label>
                        <p className="mt-1 text-xs text-muted-foreground">ICO hoặc PNG. Kích thước 32x32px.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Cài đặt hiển thị</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="language">Ngôn ngữ mặc định</Label>
                    <Select defaultValue="vi">
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn ngôn ngữ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vi">Tiếng Việt</SelectItem>
                        <SelectItem value="en">Tiếng Anh</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Múi giờ</Label>
                    <Select defaultValue="asia_ho_chi_minh">
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn múi giờ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asia_ho_chi_minh">Asia/Ho_Chi_Minh (GMT+7)</SelectItem>
                        <SelectItem value="asia_bangkok">Asia/Bangkok (GMT+7)</SelectItem>
                        <SelectItem value="asia_singapore">Asia/Singapore (GMT+8)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="maintenance-mode" />
                  <Label htmlFor="maintenance-mode">Bật chế độ bảo trì</Label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-[#1d84b1] hover:bg-[#186b8f]" onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Đang lưu...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Lưu thay đổi
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Cài đặt SEO */}
        <TabsContent value="seo">
          <Card>
            <CardHeader>
              <CardTitle>Cài đặt SEO</CardTitle>
              <CardDescription>Tối ưu hóa trang web cho các công cụ tìm kiếm</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Meta tags</h3>
                <div className="space-y-2">
                  <Label htmlFor="meta-title">Meta title</Label>
                  <Input id="meta-title" defaultValue="DOP Organization - Hoạt động vì cộng đồng" />
                  <p className="text-xs text-muted-foreground">Tối đa 60 ký tự</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meta-description">Meta description</Label>
                  <Textarea
                    id="meta-description"
                    defaultValue="DOP là tổ chức phi lợi nhuận hoạt động vì cộng đồng và phát triển bền vững, triển khai nhiều dự án có tác động tích cực đến xã hội."
                    className="min-h-[100px]"
                  />
                  <p className="text-xs text-muted-foreground">Tối đa 160 ký tự</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meta-keywords">Meta keywords</Label>
                  <Input
                    id="meta-keywords"
                    defaultValue="DOP, tổ chức phi lợi nhuận, phát triển cộng đồng, phát triển bền vững"
                  />
                  <p className="text-xs text-muted-foreground">Phân cách bằng dấu phẩy</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Robots.txt</h3>
                <div className="space-y-2">
                  <Textarea
                    id="robots-txt"
                    defaultValue={`User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /auth/\n\nSitemap: https://dop.org.vn/sitemap.xml`}
                    className="min-h-[150px] font-mono text-sm"
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Sitemap</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">
                      Sitemap URL: <span className="font-medium">https://dop.org.vn/sitemap.xml</span>
                    </p>
                    <p className="text-xs text-muted-foreground">Cập nhật lần cuối: 15/04/2025 14:30</p>
                  </div>
                  <Button variant="outline" className="flex items-center gap-2">
                    <RefreshCw className="h-4 w-4" />
                    Tạo lại sitemap
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Cài đặt nâng cao</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch id="canonical-urls" defaultChecked />
                    <Label htmlFor="canonical-urls">Sử dụng canonical URLs</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="open-graph" defaultChecked />
                    <Label htmlFor="open-graph">Bật Open Graph meta tags</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="twitter-cards" defaultChecked />
                    <Label htmlFor="twitter-cards">Bật Twitter Cards</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="structured-data" defaultChecked />
                    <Label htmlFor="structured-data">Sử dụng Structured Data (JSON-LD)</Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-[#1d84b1] hover:bg-[#186b8f]" onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Đang lưu...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Lưu thay đổi
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Cài đặt mạng xã hội */}
        <TabsContent value="social">
          <Card>
            <CardHeader>
              <CardTitle>Cài đặt mạng xã hội</CardTitle>
              <CardDescription>Quản lý liên kết đến các trang mạng xã hội</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Liên kết mạng xã hội</h3>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <Facebook className="h-5 w-5 text-[#1877F2]" />
                    <div className="flex-1">
                      <Label htmlFor="facebook-url">Facebook</Label>
                      <Input id="facebook-url" defaultValue="https://facebook.com/doporganization" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="facebook-enabled" defaultChecked />
                      <Label htmlFor="facebook-enabled" className="sr-only">
                        Hiển thị
                      </Label>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Instagram className="h-5 w-5 text-[#E4405F]" />
                    <div className="flex-1">
                      <Label htmlFor="instagram-url">Instagram</Label>
                      <Input id="instagram-url" defaultValue="https://instagram.com/doporganization" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="instagram-enabled" defaultChecked />
                      <Label htmlFor="instagram-enabled" className="sr-only">
                        Hiển thị
                      </Label>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Youtube className="h-5 w-5 text-[#FF0000]" />
                    <div className="flex-1">
                      <Label htmlFor="youtube-url">YouTube</Label>
                      <Input id="youtube-url" defaultValue="https://youtube.com/doporganization" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="youtube-enabled" defaultChecked />
                      <Label htmlFor="youtube-enabled" className="sr-only">
                        Hiển thị
                      </Label>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Twitter className="h-5 w-5 text-[#1DA1F2]" />
                    <div className="flex-1">
                      <Label htmlFor="twitter-url">Twitter</Label>
                      <Input id="twitter-url" defaultValue="" placeholder="https://twitter.com/doporganization" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="twitter-enabled" />
                      <Label htmlFor="twitter-enabled" className="sr-only">
                        Hiển thị
                      </Label>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Linkedin className="h-5 w-5 text-[#0A66C2]" />
                    <div className="flex-1">
                      <Label htmlFor="linkedin-url">LinkedIn</Label>
                      <Input
                        id="linkedin-url"
                        defaultValue=""
                        placeholder="https://linkedin.com/company/doporganization"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="linkedin-enabled" />
                      <Label htmlFor="linkedin-enabled" className="sr-only">
                        Hiển thị
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Chia sẻ mạng xã hội</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch id="enable-sharing" defaultChecked />
                    <Label htmlFor="enable-sharing">Hiển thị nút chia sẻ trên trang</Label>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="share-image">Hình ảnh mặc định khi chia sẻ</Label>
                      <div className="flex items-center gap-4">
                        <div className="relative h-20 w-40 overflow-hidden rounded-md border">
                          <Image
                            src="/placeholder.svg?height=400&width=800"
                            alt="Share image"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <Label
                            htmlFor="share-image-upload"
                            className="flex cursor-pointer items-center gap-2 rounded-md border bg-background px-3 py-2 text-sm hover:bg-accent"
                          >
                            <Upload className="h-4 w-4" />
                            <span>Tải lên</span>
                            <Input id="share-image-upload" type="file" accept="image/*" className="hidden" />
                          </Label>
                          <p className="mt-1 text-xs text-muted-foreground">Kích thước khuyến nghị: 1200x630px</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="share-title">Tiêu đề mặc định khi chia sẻ</Label>
                      <Input id="share-title" defaultValue="DOP Organization - Hoạt động vì cộng đồng" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-[#1d84b1] hover:bg-[#186b8f]" onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Đang lưu...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Lưu thay đổi
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Cài đặt email */}
        <TabsContent value="email">
          <Card>
            <CardHeader>
              <CardTitle>Cài đặt email</CardTitle>
              <CardDescription>Cấu hình gửi email từ hệ thống</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Cấu hình SMTP</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="smtp-host">SMTP Host</Label>
                    <Input id="smtp-host" defaultValue="smtp.gmail.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtp-port">SMTP Port</Label>
                    <Input id="smtp-port" defaultValue="587" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtp-username">SMTP Username</Label>
                    <Input id="smtp-username" defaultValue="contact@dop.org.vn" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtp-password">SMTP Password</Label>
                    <Input id="smtp-password" type="password" defaultValue="••••••••••••" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="smtp-encryption" defaultChecked />
                    <Label htmlFor="smtp-encryption">Sử dụng mã hóa TLS/SSL</Label>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Gửi email kiểm tra
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email thông báo</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email-from-name">Tên người gửi</Label>
                    <Input id="email-from-name" defaultValue="DOP Organization" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-from-address">Địa chỉ email gửi</Label>
                    <Input id="email-from-address" defaultValue="contact@dop.org.vn" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-reply-to">Địa chỉ email trả lời</Label>
                    <Input id="email-reply-to" defaultValue="contact@dop.org.vn" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-admin">Email quản trị viên</Label>
                    <Input id="email-admin" defaultValue="admin@dop.org.vn" />
                    <p className="text-xs text-muted-foreground">Nhận thông báo hệ thống</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Mẫu email</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email chào mừng</p>
                      <p className="text-sm text-muted-foreground">Gửi khi người dùng đăng ký tài khoản mới</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Chỉnh sửa
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email đặt lại mật khẩu</p>
                      <p className="text-sm text-muted-foreground">Gửi khi người dùng yêu cầu đặt lại mật khẩu</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Chỉnh sửa
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email liên hệ</p>
                      <p className="text-sm text-muted-foreground">Gửi khi có người gửi form liên hệ</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Chỉnh sửa
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-[#1d84b1] hover:bg-[#186b8f]" onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Đang lưu...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Lưu thay đổi
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Cài đặt bảo mật */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Cài đặt bảo mật</CardTitle>
              <CardDescription>Quản lý các cài đặt bảo mật cho trang web</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Chính sách mật khẩu</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch id="password-complexity" defaultChecked />
                    <Label htmlFor="password-complexity">Yêu cầu mật khẩu phức tạp</Label>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="min-password-length">Độ dài tối thiểu</Label>
                      <Select defaultValue="8">
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn độ dài" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6">6 ký tự</SelectItem>
                          <SelectItem value="8">8 ký tự</SelectItem>
                          <SelectItem value="10">10 ký tự</SelectItem>
                          <SelectItem value="12">12 ký tự</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password-expiry">Thời hạn mật khẩu</Label>
                      <Select defaultValue="90">
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn thời hạn" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="never">Không bao giờ hết hạn</SelectItem>
                          <SelectItem value="30">30 ngày</SelectItem>
                          <SelectItem value="60">60 ngày</SelectItem>
                          <SelectItem value="90">90 ngày</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="password-history" defaultChecked />
                      <Label htmlFor="password-history">Không cho phép sử dụng lại mật khẩu cũ</Label>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Xác thực hai yếu tố (2FA)</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch id="enable-2fa" defaultChecked />
                    <Label htmlFor="enable-2fa">Cho phép xác thực hai yếu tố</Label>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="2fa-method">Phương thức xác thực</Label>
                    <Select defaultValue="app">
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn phương thức" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="app">Ứng dụng xác thực (Google Authenticator, Authy)</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="sms">SMS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="force-2fa-admin" defaultChecked />
                    <Label htmlFor="force-2fa-admin">Bắt buộc 2FA cho tài khoản quản trị viên</Label>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Bảo vệ tài khoản</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch id="login-attempts" defaultChecked />
                    <Label htmlFor="login-attempts">Giới hạn số lần đăng nhập thất bại</Label>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="max-attempts">Số lần thử tối đa</Label>
                      <Select defaultValue="5">
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn số lần" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3">3 lần</SelectItem>
                          <SelectItem value="5">5 lần</SelectItem>
                          <SelectItem value="10">10 lần</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lockout-duration">Thời gian khóa tài khoản</Label>
                      <Select defaultValue="15">
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn thời gian" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5 phút</SelectItem>
                          <SelectItem value="15">15 phút</SelectItem>
                          <SelectItem value="30">30 phút</SelectItem>
                          <SelectItem value="60">1 giờ</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Bảo mật phiên đăng nhập</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch id="session-timeout" defaultChecked />
                    <Label htmlFor="session-timeout">Tự động đăng xuất sau thời gian không hoạt động</Label>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeout-duration">Thời gian không hoạt động</Label>
                    <Select defaultValue="30">
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn thời gian" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 phút</SelectItem>
                        <SelectItem value="30">30 phút</SelectItem>
                        <SelectItem value="60">1 giờ</SelectItem>
                        <SelectItem value="120">2 giờ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-[#1d84b1] hover:bg-[#186b8f]" onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Đang lưu...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Lưu thay đổi
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Cài đặt sao lưu */}
        <TabsContent value="backup">
          <Card>
            <CardHeader>
              <CardTitle>Sao lưu và khôi phục</CardTitle>
              <CardDescription>Quản lý sao lưu và khôi phục dữ liệu hệ thống</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert className="bg-blue-50 border-blue-200">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-blue-700">
                  Sao lưu dữ liệu thường xuyên giúp bảo vệ thông tin quan trọng và dễ dàng khôi phục khi cần thiết.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Sao lưu tự động</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch id="auto-backup" defaultChecked />
                    <Label htmlFor="auto-backup">Bật sao lưu tự động</Label>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="backup-frequency">Tần suất sao lưu</Label>
                      <Select defaultValue="daily">
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn tần suất" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hourly">Hàng giờ</SelectItem>
                          <SelectItem value="daily">Hàng ngày</SelectItem>
                          <SelectItem value="weekly">Hàng tuần</SelectItem>
                          <SelectItem value="monthly">Hàng tháng</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="backup-retention">Thời gian lưu trữ</Label>
                      <Select defaultValue="30">
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn thời gian" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="7">7 ngày</SelectItem>
                          <SelectItem value="30">30 ngày</SelectItem>
                          <SelectItem value="90">90 ngày</SelectItem>
                          <SelectItem value="365">1 năm</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Sao lưu thủ công</h3>
                  <Button className="bg-[#1d84b1] hover:bg-[#186b8f]">
                    <Database className="mr-2 h-4 w-4" />
                    Tạo bản sao lưu ngay
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="rounded-md border">
                    <div className="p-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">backup_20250415_143022.zip</p>
                            <p className="text-sm text-muted-foreground">15/04/2025 14:30:22 • 24.5 MB</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              Tải xuống
                            </Button>
                            <Button variant="outline" size="sm">
                              Khôi phục
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">backup_20250414_090015.zip</p>
                            <p className="text-sm text-muted-foreground">14/04/2025 09:00:15 • 24.3 MB</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              Tải xuống
                            </Button>
                            <Button variant="outline" size="sm">
                              Khôi phục
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">backup_20250413_090018.zip</p>
                            <p className="text-sm text-muted-foreground">13/04/2025 09:00:18 • 24.1 MB</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              Tải xuống
                            </Button>
                            <Button variant="outline" size="sm">
                              Khôi phục
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Khôi phục dữ liệu</h3>
                <div className="space-y-3">
                  <Alert className="bg-amber-50 border-amber-200">
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                    <AlertDescription className="text-amber-700">
                      Khôi phục dữ liệu sẽ ghi đè lên dữ liệu hiện tại. Hãy đảm bảo bạn đã sao lưu dữ liệu hiện tại
                      trước khi thực hiện.
                    </AlertDescription>
                  </Alert>
                  <div className="space-y-2">
                    <Label htmlFor="restore-file">Tải lên file sao lưu</Label>
                    <div className="flex items-center gap-4">
                      <Input id="restore-file" type="file" accept=".zip" />
                      <Button variant="outline">Tải lên</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-[#1d84b1] hover:bg-[#186b8f]" onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Đang lưu...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Lưu thay đổi
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
