"use client"

import { SearchDropdown } from "@/components/search-dropdown"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, Search, X, ChevronDown, ShoppingCart, Sun, Moon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState, useRef } from "react"
import { MegaMenu } from "./mega-menu"
import { BrandsMenu } from "./brands-menu"
import { useTheme } from "next-themes"

const COMPANY_LOGO = "/images/logo.jpg"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<"products" | "brands" | null>(null)

  const { theme, setTheme } = useTheme()

  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menus when path changes
  useEffect(() => {
    setActiveMenu(null)
    setMobileMenuOpen(false)
  }, [pathname])

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  const handleMenuLeave = (e: React.MouseEvent) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (relatedTarget && headerRef.current && !headerRef.current.contains(relatedTarget)) {
      setActiveMenu(null);
    }
  }

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 w-full bg-white transition-all duration-300 ${isScrolled ? "shadow-md py-1.5" : "border-b border-gray-100 py-3"
        }`}
      onMouseLeave={handleMenuLeave}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 sm:gap-4 h-14 md:h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0 mr-4 lg:mr-8" onClick={handleNavClick}>
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0 overflow-hidden border border-gray-100 bg-white rounded-md">
              <Image
                src={COMPANY_LOGO || "/placeholder.svg"}
                alt="Hexamech Logo"
                fill
                className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col justify-center leading-tight">
              <h1
                className="text-xl sm:text-2xl md:text-3xl text-primary leading-tight group-hover:text-primary-dark transition-colors"
                style={{ fontFamily: 'var(--font-dance), cursive' }}
              >
                Hexamech
              </h1>
              <span className="text-[11px] sm:text-xs md:text-sm text-gray-600 mt-0.5 md:mt-1 tracking-wide">
                Automotive Workshop Infrastructure &amp; Industrial Tools
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12 mr-auto">
            <Link
              href="/"
              className={`text-sm font-semibold tracking-wide hover:text-primary transition-colors ${pathname === "/" ? "text-primary" : "text-gray-700"}`}
            >
              Home
            </Link>

            <div
              className="relative h-14 flex items-center group"
              onMouseEnter={() => setActiveMenu("products")}
            >
              <Link
                href="/shop"
                className={`text-sm font-semibold tracking-wide hover:text-primary transition-colors flex items-center gap-1 ${pathname.startsWith("/shop") && activeMenu !== "brands" ? "text-primary" : "text-gray-700"
                  }`}
              >
                Products
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === "products" ? "rotate-180" : ""}`} />
              </Link>
              <div className="absolute top-full left-0 w-full h-8 bg-transparent"></div>
              {/* MegaMenu needs to be wider and aligned properly */}
              {activeMenu === "products" && <MegaMenu onClose={() => setActiveMenu(null)} />}
            </div>

            <div
              className="relative h-14 flex items-center group"
              onMouseEnter={() => setActiveMenu("brands")}
            >
              <button
                className={`text-sm font-semibold tracking-wide hover:text-primary transition-colors flex items-center gap-1 bg-transparent border-none cursor-pointer ${activeMenu === "brands" ? "text-primary" : "text-gray-700"
                  }`}
              >
                Brands
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === "brands" ? "rotate-180" : ""}`} />
              </button>
              <div className="absolute top-full left-0 w-full h-8 bg-transparent"></div>
              {activeMenu === "brands" && <BrandsMenu onClose={() => setActiveMenu(null)} />}
            </div>

            <Link
              href="/about"
              className={`text-sm font-semibold tracking-wide hover:text-primary transition-colors ${pathname === "/about" ? "text-primary" : "text-gray-700"}`}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-semibold tracking-wide hover:text-primary transition-colors ${pathname === "/contact" ? "text-primary" : "text-gray-700"}`}
            >
              Contact
            </Link>
          </nav>

          {/* Actions Section */}
          <div className="flex items-center gap-2 sm:gap-3 ml-auto">
            {/* Search - Compact & Close to Contact (Contact is now in Nav left of actions area) */}
            <div className="relative hidden md:block group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
              <Input
                placeholder="Search products..."
                className="w-40 lg:w-48 pl-9 h-9 bg-gray-50 border-gray-200 focus:bg-white focus:w-64 transition-all duration-200 text-sm rounded-full"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setSearchOpen(e.target.value.length > 0)
                }}
                onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
              />
              {searchOpen && <SearchDropdown query={searchQuery} onClose={() => setSearchOpen(false)} />}
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden sm:flex rounded-full w-9 h-9 text-gray-600 hover:text-primary hover:bg-primary/10"
            >
              <Sun className="h-4.5 w-4.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4.5 w-4.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* GET QUOTE Button */}
            <a
              href="https://wa.me/917510638693?text=Hi%20Hexamech%2C%20I%20need%20a%20bulk%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex"
            >
              <Button
                className="bg-primary hover:bg-primary-dark text-white font-semibold tracking-wide text-xs px-4 h-9 rounded-full shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2"
              >
                <span className="uppercase">Get Quote</span>
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </a>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Drawer) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 lg:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div className="fixed inset-y-0 right-0 w-4/5 max-w-xs bg-white p-6 shadow-xl flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-[0.2em]">Hexamech Linich Tools</p>
                <p className="text-[11px] text-gray-700 mt-1">
                  Automotive Workshop Infrastructure &amp; Industrial Tools
                </p>
              </div>
              <Button size="icon" variant="ghost" className="rounded-full" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav className="flex flex-col gap-4 mb-6">
              <Link href="/" onClick={handleNavClick} className="text-base font-semibold">
                Home
              </Link>
              <Link href="/shop" onClick={handleNavClick} className="text-base font-semibold">
                Products
              </Link>
              <Link href="/shop" onClick={handleNavClick} className="text-base font-semibold">
                Brands
              </Link>
              <Link href="/about" onClick={handleNavClick} className="text-base font-semibold">
                About Us
              </Link>
              <Link href="/contact" onClick={handleNavClick} className="text-base font-semibold">
                Contact
              </Link>
            </nav>

            <div className="mt-auto pt-4 border-t border-gray-100 space-y-3 text-sm">
              <p className="font-medium text-gray-700">Reach our team</p>
              <div className="space-y-2">
                <a href="tel:+917510638693" className="block text-gray-700 hover:text-primary transition-colors">
                  +91 75106 38693
                </a>
                <a
                  href="mailto:hexamechlinichtools@gmail.com"
                  className="block text-gray-600 hover:text-primary transition-colors"
                >
                  hexamechlinichtools@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://wa.me/917510638693"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                >
                  WhatsApp Business
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-gray-500 hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </header>
  )
}
