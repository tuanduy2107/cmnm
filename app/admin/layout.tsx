"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FileText, ImageIcon, Users, Settings, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "Quản lý bài viết",
    href: "/admin/posts",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Thư viện ảnh",
    href: "/admin/gallery",
    icon: <ImageIcon className="h-5 w-5" />,
  },
  {
    title: "Người dùng",
    href: "/admin/users",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Cài đặt",
    href: "/admin/settings",
    icon: <Settings className="h-5 w-5" />,
  },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile sidebar */}
      <div className="lg:hidden">
        <div className="fixed inset-0 z-40 flex">
          {/* Sidebar overlay */}
          {sidebarOpen && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
          )}

          {/* Sidebar */}
          <div
            className={cn(
              "fixed inset-y-0 left-0 flex w-64 flex-col bg-[#0d3a4e] transition-transform duration-300 ease-in-out",
              sidebarOpen ? "translate-x-0" : "-translate-x-full",
            )}
          >
            <div className="flex h-16 flex-shrink-0 items-center px-4">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-white">DOP Admin</span>
              </Link>
              <button className="ml-auto text-white focus:outline-none" onClick={() => setSidebarOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto">
              <nav className="flex-1 space-y-1 px-2 py-4">
                {sidebarItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group flex items-center rounded-md px-2 py-2 text-sm font-medium",
                      pathname === item.href
                        ? "bg-[#186b8f] text-white"
                        : "text-gray-300 hover:bg-[#186b8f] hover:text-white",
                    )}
                  >
                    {item.icon}
                    <span className="ml-3">{item.title}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex min-h-0 flex-1 flex-col bg-[#0d3a4e]">
          <div className="flex h-16 flex-shrink-0 items-center px-4">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">DOP Admin</span>
            </Link>
          </div>
          <div className="flex flex-1 flex-col overflow-y-auto">
            <nav className="flex-1 space-y-1 px-2 py-4">
              {sidebarItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group flex items-center rounded-md px-2 py-2 text-sm font-medium",
                    pathname === item.href
                      ? "bg-[#186b8f] text-white"
                      : "text-gray-300 hover:bg-[#186b8f] hover:text-white",
                  )}
                >
                  {item.icon}
                  <span className="ml-3">{item.title}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top navbar */}
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1d84b1] lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex flex-1 justify-between px-4">
            <div className="flex flex-1"></div>
            <div className="ml-4 flex items-center md:ml-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Tài khoản của tôi</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Cài đặt</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Đăng xuất</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Main content */}
        <main className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
