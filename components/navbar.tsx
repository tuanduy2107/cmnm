"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const routes = [
  { name: "Trang chủ", path: "/" },
  { name: "Về chúng tôi", path: "/about" },
  { name: "Chương trình", path: "/programs" },
  { name: "Thư viện ảnh", path: "/gallery" },
  { name: "Đồng hành cùng DOP", path: "/support" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-[#0d3a4e]/90 backdrop-blur-md shadow-md py-2" : "bg-[#07212c] py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-white">DOP</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <div className="flex space-x-8 mr-8">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-white hover:text-[#ec4c24] transition-colors",
                  pathname === route.path && "text-[#ec4c24] font-semibold",
                )}
              >
                {route.name}
              </Link>
            ))}
          </div>
          <Link href="/auth/login">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#07212c]">
              <User className="mr-2 h-4 w-4" />
              Đăng nhập
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <Link href="/auth/login">
            <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-[#07212c]">
              <User className="h-4 w-4" />
              <span className="sr-only">Đăng nhập</span>
            </Button>
          </Link>
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0d3a4e] absolute top-full left-0 right-0 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-white hover:text-[#ec4c24] transition-colors py-2",
                  pathname === route.path && "text-[#ec4c24] font-semibold",
                )}
                onClick={() => setIsOpen(false)}
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
