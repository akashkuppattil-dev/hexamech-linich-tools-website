"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, Search, Heart, ShoppingCart, Sun, Moon, X, Home, Store, Tag, Users, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"
import { useCart } from "@/context/cart-context"
import { SearchDropdown } from "@/components/search-dropdown"

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/shop", label: "Shop", icon: Store },
  { href: "/offers", label: "Offers", icon: Tag },
  { href: "/about", label: "About Us", icon: Users },
  { href: "/contact", label: "Contact", icon: Phone },
]

const COMPANY_LOGO = "/images/logo.jpg"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { wishlist } = useCart()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  const handleNavClick = () => {
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
          isScrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        {/* Main header */}
        <div className="w-full">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
              {/* Logo and Company Name */}
              <Link href="/" className="flex items-center gap-2 sm:gap-3" onClick={handleNavClick}>
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg overflow-hidden border border-gray-300 shadow-sm flex-shrink-0 bg-white">
                  <Image
                    src={COMPANY_LOGO || "/placeholder.svg"}
                    alt="Hexamech Linich Tools Logo"
                    fill
                    className="object-contain p-1"
                    priority
                    unoptimized
                  />
                </div>
                <div className="hidden sm:block">
                  <h1 className="font-bold text-lg sm:text-xl md:text-2xl text-green-600 leading-tight">Hexamech</h1>
                  <p className="text-xs sm:text-sm md:text-base text-green-600 font-semibold leading-tight">
                    Linich Tools
                  </p>
                </div>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className={`text-xs xl:text-sm font-semibold transition-colors whitespace-nowrap ${
                      pathname === link.href ? "text-green-600 font-bold" : "text-gray-700 hover:text-green-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Actions */}
              <div className="flex items-center gap-1 sm:gap-2">
                {/* Search */}
                <div className="relative hidden md:block">
                  <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-gray-600" />
                  <Input
                    placeholder="Search..."
                    className="w-40 lg:w-56 pl-8 pr-3 py-1.5 text-xs bg-gray-100 text-gray-900 placeholder-gray-600"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value)
                      setSearchOpen(e.target.value.length > 0)
                    }}
                    onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
                  />
                  {searchOpen && <SearchDropdown query={searchQuery} onClose={() => setSearchOpen(false)} />}
                </div>

                {/* Theme */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="h-9 w-9 rounded-full hover:bg-gray-100"
                >
                  {theme === "light" ? (
                    <Moon className="h-4 w-4 text-gray-700" />
                  ) : (
                    <Sun className="h-4 w-4 text-yellow-500" />
                  )}
                </Button>

                {/* Wishlist */}
                <Link href="/wishlist" onClick={handleNavClick}>
                  <Button variant="ghost" size="icon" className="relative h-9 w-9 hover:bg-gray-100 text-gray-700">
                    <Heart className="h-4 w-4" />
                    {wishlist.length > 0 && (
                      <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-xs bg-red-500">
                        {wishlist.length}
                      </Badge>
                    )}
                  </Button>
                </Link>

                {/* Shop Icon */}
                <Link href="/shop" onClick={handleNavClick} title="Browse Products">
                  <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-gray-100 text-gray-700">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </Link>

                {/* Quote CTA */}
                <a
                  href="https://wa.me/917510638693?text=Hi%20Hexamech%2C%20I%20need%20a%20bulk%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex"
                >
                  <Button
                    size="sm"
                    className="bg-green-600 text-white hover:bg-green-700 text-xs font-bold px-3 py-1.5 h-9"
                  >
                    Get Quote
                  </Button>
                </a>

                {/* Mobile Menu */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden h-9 w-9 text-gray-700 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-background/98 backdrop-blur-2xl"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative h-full flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b bg-white">
              <h2 className="font-bold text-base text-green-600">Hexamech Linich</h2>
              <button onClick={() => setMobileMenuOpen(false)} className="p-1 text-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-start gap-1 p-4">
              {navLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className="flex items-center gap-3 px-4 py-3 text-base font-semibold rounded-lg hover:bg-green-50 text-gray-900 transition-colors"
                  >
                    <Icon className="h-5 w-5 text-green-600" />
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            <div className="border-t p-4">
              <Button
                size="sm"
                className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-bold py-2"
                onClick={() => {
                  window.open(
                    "https://wa.me/917510638693?text=Hi%20Hexamech%2C%20I%20need%20a%20bulk%20quote",
                    "_blank",
                  )
                  setMobileMenuOpen(false)
                }}
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
