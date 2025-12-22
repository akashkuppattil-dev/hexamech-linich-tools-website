"use client"

import { SearchDropdown } from "@/components/search-dropdown"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, Search, X, ChevronDown, ShoppingCart, Sun, Moon, Home, Package, Award, Phone, Info, ChevronRight } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState, useRef } from "react"
import { MegaMenu } from "./mega-menu"
import { BrandsMenu } from "./brands-menu"

const COMPANY_LOGO = "/images/logo.jpg"

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<"products" | "brands" | null>(null)

  const pathname = usePathname()
  const router = useRouter()
  const headerRef = useRef<HTMLElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setActiveMenu(null)
    setMobileMenuOpen(false)
    setSearchOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  const handleMenuLeave = (e: React.MouseEvent) => {
    const relatedTarget = e.relatedTarget as Node | null;
    if (relatedTarget instanceof Node && headerRef.current && !headerRef.current.contains(relatedTarget)) {
      setActiveMenu(null);
    }
  }

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchOpen(false)
    }
  }

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 w-full bg-white dark:bg-zinc-950 transition-all duration-300 ${isScrolled ? "shadow-lg py-0 border-b dark:border-zinc-800" : "border-b border-zinc-100 dark:border-zinc-900 py-2"
        }`}
      onMouseLeave={handleMenuLeave}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 md:h-20 lg:h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 group flex-shrink-0 mr-4 md:mr-6" onClick={handleNavClick}>
            <div className="relative w-10 h-10 md:w-14 md:h-14 flex-shrink-0 overflow-hidden border-2 border-primary/10 dark:border-zinc-800 bg-white rounded-lg shadow-sm group-hover:border-primary/20 transition-all duration-300">
              <Image
                src={COMPANY_LOGO || "/placeholder.svg"}
                alt="Hexamech Logo"
                fill
                className="object-contain scale-105 group-hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1
                className="text-xl md:text-3xl font-black text-primary leading-none group-hover:text-primary-dark transition-colors tracking-tight"
                style={{ fontFamily: 'var(--font-dance), cursive' }}
              >
                Hexamech
              </h1>
              <span
                className="text-xs md:text-base text-zinc-500 dark:text-zinc-400 leading-none mt-1 group-hover:text-primary transition-colors pl-px font-medium"
                style={{ fontFamily: 'var(--font-dance), cursive' }}
              >
                Linich Tools
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-8">
            <Link
              href="/"
              className={`text-sm font-bold tracking-tight hover:text-green-600 dark:hover:text-green-400 transition-colors ${pathname === "/" ? "text-green-600 dark:text-green-500 underline underline-offset-8 decoration-2" : "text-zinc-700 dark:text-zinc-300"}`}
            >
              Home
            </Link>

            <div className="relative h-16 flex items-center group" onMouseEnter={() => setActiveMenu("products")}>
              <Link
                href="/shop"
                className={`text-sm font-bold tracking-tight hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center gap-1 ${pathname.startsWith("/shop") && activeMenu !== "brands" ? "text-green-600 dark:text-green-500" : "text-zinc-700 dark:text-zinc-300"}`}
              >
                Products
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === "products" ? "rotate-180" : ""}`} />
              </Link>
              {activeMenu === "products" && <MegaMenu onClose={() => setActiveMenu(null)} />}
            </div>

            <div className="relative h-16 flex items-center group" onMouseEnter={() => setActiveMenu("brands")}>
              <button
                className={`text-sm font-bold tracking-tight hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center gap-1 bg-transparent border-none cursor-pointer ${activeMenu === "brands" ? "text-green-600 dark:text-green-500" : "text-zinc-700 dark:text-zinc-300"}`}
              >
                Brands
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === "brands" ? "rotate-180" : ""}`} />
              </button>
              {activeMenu === "brands" && <BrandsMenu onClose={() => setActiveMenu(null)} />}
            </div>

            <Link href="/about" className={`text-sm font-bold tracking-tight hover:text-green-600 dark:hover:text-green-400 transition-colors ${pathname === "/about" ? "text-green-600 dark:text-green-500" : "text-zinc-700 dark:text-zinc-300"}`}>About</Link>
            <Link href="/contact" className={`text-sm font-bold tracking-tight hover:text-green-600 dark:hover:text-green-400 transition-colors ${pathname === "/contact" ? "text-green-600 dark:text-green-500" : "text-zinc-700 dark:text-zinc-300"}`}>Contact</Link>
          </nav>

          {/* Actions Section */}
          <div className="flex items-center gap-2 md:gap-4">
            <div ref={searchRef} className="relative hidden sm:block group">
              <form onSubmit={handleSearchSubmit}>
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <Input
                  placeholder="Search gear..."
                  className="w-40 md:w-48 lg:w-56 pl-9 h-10 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-800 transition-all text-xs rounded-xl font-medium"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setSearchOpen(e.target.value.length > 0)
                  }}
                  onFocus={() => { if (searchQuery.length > 0) setSearchOpen(true) }}
                />
              </form>
              {searchOpen && (
                <div className="absolute top-full right-0 md:left-0 pt-2 min-w-[300px] md:min-w-[350px]">
                  <SearchDropdown query={searchQuery} onClose={() => setSearchOpen(false)} />
                </div>
              )}
            </div>

            <button onClick={toggleTheme} className="p-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            <Link href="/shop" className="hidden md:flex">
              <Button className="bg-primary hover:bg-primary-dark text-white font-black tracking-tight text-xs px-5 h-10 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-primary/20">
                <span>GET QUOTE</span>
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </Link>

            <Button variant="ghost" size="icon" className="lg:hidden rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
            </Button>
          </div>
        </div>
      </div>

      {/* Modern Responsive Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-[300px] bg-white dark:bg-zinc-950 shadow-2xl flex flex-col animate-in slide-in-from-left duration-500 overflow-hidden">
            {/* Header portion of Mobile Menu */}
            <div className="p-6 border-b border-zinc-100 dark:border-zinc-900 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-900/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 relative bg-white rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden p-1">
                  <Image src={COMPANY_LOGO} alt="Logo" fill className="object-contain" />
                </div>
                <span className="font-black text-lg text-primary tracking-tighter">HEXAMECH</span>
              </div>
              <Button size="icon" variant="ghost" className="rounded-xl" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Mobile Navigation Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
                <Input
                  placeholder="Instant search..."
                  className="w-full pl-10 h-12 bg-zinc-50 dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setSearchOpen(e.target.value.length > 0)
                  }}
                />
                {searchOpen && (
                  <div className="absolute top-full left-0 right-0 z-50 pt-2">
                    <SearchDropdown query={searchQuery} onClose={() => { setSearchOpen(false); setMobileMenuOpen(false); }} />
                  </div>
                )}
              </div>

              {/* Main Links */}
              <div className="space-y-1">
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-4 px-2">Main Navigation</p>
                {[
                  { name: "Home", href: "/", icon: Home },
                  { name: "Product Catalog", href: "/shop", icon: Package },
                  { name: "Our Brands", href: "/shop?view=brands", icon: Award },
                  { name: "About Hexamech", href: "/about", icon: Info },
                  { name: "Contact Support", href: "/contact", icon: Phone },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleNavClick}
                    className={`flex items-center justify-between p-3 rounded-xl transition-all group ${pathname === item.href ? "bg-primary/10 text-primary" : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900"}`}
                  >
                    <div className="flex items-center gap-4">
                      <item.icon className={`h-5 w-5 ${pathname === item.href ? "text-primary" : "text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100"}`} />
                      <span className="font-bold text-sm">{item.name}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </Link>
                ))}
              </div>

              {/* Quick Info Box */}
              <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl p-4 border border-zinc-100 dark:border-zinc-800">
                <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mb-1">Need Pricing?</p>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">Chat with our B2B team for wholesale discounts and GST support.</p>
                <a href="https://wa.me/917510638693" className="block text-center bg-primary hover:bg-primary-dark text-white rounded-xl py-3 text-xs font-black shadow-lg shadow-primary/20 transition-all">
                  WHATSAPP US
                </a>
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-6 border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50/30 dark:bg-zinc-950">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-tight">Appearance</p>
                <button onClick={toggleTheme} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">
                  {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                  <span className="text-[10px] uppercase font-black">{theme === "light" ? "Dark mode" : "Light mode"}</span>
                </button>
              </div>
              <p className="text-[9px] text-zinc-400 text-center font-medium">© 2025 Hexamech Linich Tools. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
