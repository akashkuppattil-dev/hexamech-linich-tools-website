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
          isScrolled ? "bg-card shadow-lg border-b border-border" : "bg-card shadow-sm border-b border-border/50"
        }`}
      >
        <div className="w-full">
          <div className="container mx-auto px-2 sm:px-3 md:px-4">
            <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 gap-2 sm:gap-3 md:gap-4">
              {/* Logo and Company Name - Simplified logo container with no border, cleaner design */}
              <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0" onClick={handleNavClick}>
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={COMPANY_LOGO || "/placeholder.svg"}
                    alt="Hexamech Linich Tools Logo"
                    fill
                    className="object-contain"
                    priority
                    unoptimized
                  />
                </div>
                <div className="block">
                  <h1 className="font-black text-xs sm:text-lg sm:text-xl md:text-2xl text-foreground leading-tight tracking-tight">
                    Hexamech
                  </h1>
                  <p className="text-xs sm:text-sm text-primary font-bold leading-tight">Linich Tools</p>
                </div>
              </Link>

              {/* Desktop Nav - Increased gap between nav items for better spacing */}
              <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className={`text-sm xl:text-base font-semibold transition-colors whitespace-nowrap ${
                      pathname === link.href
                        ? "text-primary border-b-2 border-primary pb-1"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Actions - Increased spacing between action buttons */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Search - hidden on mobile for space, visible on md+ */}
                <div className="relative hidden md:block">
                  <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground" />
                  <Input
                    placeholder="Search..."
                    className="w-32 lg:w-48 pl-7 pr-2 py-1.5 text-xs bg-secondary text-foreground placeholder-muted-foreground"
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
                  className="h-8 w-8 sm:h-9 sm:w-9 rounded-full hover:bg-secondary flex-shrink-0"
                >
                  {theme === "light" ? (
                    <Moon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
                  ) : (
                    <Sun className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent" />
                  )}
                </Button>

                {/* Wishlist */}
                <Link href="/wishlist" onClick={handleNavClick}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative h-8 w-8 sm:h-9 sm:w-9 hover:bg-secondary text-muted-foreground flex-shrink-0"
                  >
                    <Heart className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    {wishlist.length > 0 && (
                      <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-xs bg-destructive">
                        {wishlist.length}
                      </Badge>
                    )}
                  </Button>
                </Link>

                {/* Shop Icon */}
                <Link href="/shop" onClick={handleNavClick} title="Browse Products">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 sm:h-9 sm:w-9 hover:bg-secondary text-muted-foreground flex-shrink-0"
                  >
                    <ShoppingCart className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Button>
                </Link>

                {/* Quote CTA */}
                <a
                  href="https://wa.me/917510638693?text=Hi%20Hexamech%2C%20I%20need%20a%20bulk%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex flex-shrink-0"
                >
                  <Button
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1.5 h-8 sm:h-9 whitespace-nowrap"
                  >
                    Get Quote
                  </Button>
                </a>

                {/* Mobile Menu */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden h-8 w-8 sm:h-9 sm:w-9 text-muted-foreground hover:bg-secondary flex-shrink-0"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU - Left-sliding drawer with smooth animation and backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden animate-in fade-in duration-200">
          <div
            className="absolute inset-0 bg-black/50 transition-opacity duration-300 ease-out"
            onClick={() => setMobileMenuOpen(false)}
            role="presentation"
          />
          <div className="absolute left-0 top-0 bottom-0 w-64 sm:w-72 bg-card shadow-2xl flex flex-col animate-in slide-in-from-left duration-300 ease-out">
            <div className="flex items-center justify-between px-4 py-4 border-b border-border/50 bg-card">
              <h2 className="font-bold text-lg text-foreground">Menu</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-200 ease-out"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col px-2 py-3 overflow-y-auto">
              {navLinks.map((link) => {
                const Icon = link.icon
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className={`flex items-center gap-3 px-4 py-3 text-base font-semibold rounded-lg transition-all duration-200 ease-out ${
                      isActive
                        ? "bg-primary/15 text-primary border-l-4 border-primary"
                        : "text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    <Icon className={`h-5 w-5 flex-shrink-0 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            <div className="border-t border-border/50 p-4 space-y-3 bg-card">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 h-10 transition-all duration-200 ease-out"
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
