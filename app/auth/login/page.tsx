"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Facebook, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Giả lập đăng nhập
    setTimeout(() => {
      setIsLoading(false)
      router.push("/admin/dashboard")
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Phần hình ảnh */}
      <div className="hidden md:block md:w-1/2 relative bg-[#0d3a4e]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d3a4e]/80 to-transparent z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1080"
          alt="DOP Organization"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center z-20 p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Chào mừng đến với DOP</h2>
          <p className="text-xl text-center max-w-md">Tổ chức hoạt động vì cộng đồng và phát triển bền vững</p>
          <div className="mt-12 flex space-x-3">
            <div className="w-3 h-3 rounded-full bg-white opacity-50"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-white opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Phần form đăng nhập */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-[#1d84b1]">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Quay lại trang chủ
            </Link>
          </div>

          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-bold text-[#0d3a4e]">DOP</h2>
            </Link>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Đăng nhập</h2>
            <p className="mt-2 text-sm text-gray-600">
              Hoặc{" "}
              <Link href="/auth/register" className="font-medium text-[#1d84b1] hover:text-[#25a5dd]">
                đăng ký tài khoản mới
              </Link>
            </p>
          </div>

          <Card className="border-none shadow-none">
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="social">Mạng xã hội</TabsTrigger>
              </TabsList>

              <TabsContent value="email">
                <form onSubmit={handleLogin}>
                  <CardContent className="space-y-6 px-0">
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-base">
                        Email
                      </Label>
                      <Input id="email" type="email" placeholder="email@example.com" required className="h-12" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password" className="text-base">
                          Mật khẩu
                        </Label>
                        <Link href="/auth/forgot-password" className="text-sm text-[#1d84b1] hover:text-[#25a5dd]">
                          Quên mật khẩu?
                        </Link>
                      </div>
                      <Input id="password" type="password" required className="h-12" />
                    </div>
                  </CardContent>
                  <CardFooter className="px-0 pt-4">
                    <Button
                      type="submit"
                      className="w-full h-12 text-base bg-[#1d84b1] hover:bg-[#186b8f]"
                      disabled={isLoading}
                    >
                      {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
                    </Button>
                  </CardFooter>
                </form>
              </TabsContent>

              <TabsContent value="social">
                <CardContent className="space-y-4 px-0">
                  <Button
                    className="w-full h-12 text-base bg-[#1877F2] hover:bg-[#1864F2] flex items-center justify-center"
                    onClick={() => router.push("/admin/dashboard")}
                  >
                    <Facebook className="mr-2 h-5 w-5" />
                    Đăng nhập với Facebook
                  </Button>
                  <Button
                    className="w-full h-12 text-base bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 flex items-center justify-center"
                    onClick={() => router.push("/admin/dashboard")}
                  >
                    <div className="mr-2 h-5 w-5 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                          <path
                            fill="#4285F4"
                            d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                          />
                          <path
                            fill="#34A853"
                            d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                          />
                          <path
                            fill="#EA4335"
                            d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                          />
                        </g>
                      </svg>
                    </div>
                    Đăng nhập với Google
                  </Button>
                </CardContent>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  )
}
