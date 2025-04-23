"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, ChevronLeft } from "lucide-react"

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Giả lập gửi email
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
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
          <h2 className="text-4xl font-bold mb-6">Khôi phục tài khoản</h2>
          <p className="text-xl text-center max-w-md">
            Đừng lo lắng, chúng tôi sẽ giúp bạn khôi phục lại mật khẩu và truy cập vào tài khoản của mình
          </p>
          <div className="mt-12 flex space-x-3">
            <div className="w-3 h-3 rounded-full bg-white opacity-50"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-white opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Phần form quên mật khẩu */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Link href="/auth/login" className="inline-flex items-center text-sm text-gray-600 hover:text-[#1d84b1]">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Quay lại đăng nhập
            </Link>
          </div>

          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-bold text-[#0d3a4e]">DOP</h2>
            </Link>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Quên mật khẩu</h2>
            <p className="mt-2 text-sm text-gray-600">Nhập email của bạn để nhận liên kết đặt lại mật khẩu</p>
          </div>

          {isSubmitted ? (
            <Alert className="bg-green-50 border-green-200">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <AlertTitle className="text-green-800 text-lg font-semibold">Email đã được gửi!</AlertTitle>
              <AlertDescription className="text-green-700 mt-2">
                Chúng tôi đã gửi email đặt lại mật khẩu đến {email}. Vui lòng kiểm tra hộp thư của bạn.
              </AlertDescription>
              <div className="mt-6">
                <Link href="/auth/login">
                  <Button variant="outline" className="w-full h-12">
                    Quay lại đăng nhập
                  </Button>
                </Link>
              </div>
            </Alert>
          ) : (
            <Card className="border-none shadow-none">
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6 px-0">
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-base">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4 px-0 pt-4">
                  <Button
                    type="submit"
                    className="w-full h-12 text-base bg-[#1d84b1] hover:bg-[#186b8f]"
                    disabled={isLoading}
                  >
                    {isLoading ? "Đang gửi..." : "Gửi liên kết đặt lại mật khẩu"}
                  </Button>
                  <Link href="/auth/login" className="w-full">
                    <Button variant="ghost" className="w-full">
                      Quay lại đăng nhập
                    </Button>
                  </Link>
                </CardFooter>
              </form>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
