"use client"

import { ProductCard } from "@/components/product-card"
import { ShopFilters } from "@/components/shop/shop-filters"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { brands, categories, products } from "@/lib/products"
import { Award, Filter, Grid3X3, LayoutGrid, MessageCircle, Package, SlidersHorizontal, ChevronRight, Search, Zap } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import { Input } from "@/components/ui/input"

const ITEMS_PER_PAGE_MOBILE = 6
const ITEMS_PER_PAGE_DESKTOP = 12

type SortOption = "popularity" | "latest" | "price-low" | "price-high" | "rating"

export function ShopContent() {
  const searchParams = useSearchParams()
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [availability, setAvailability] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<SortOption>("popularity")
  const [gridCols, setGridCols] = useState<3 | 4>(4)
  const [currentPage, setCurrentPage] = useState(1)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768)
      }, 150)
    }
    setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    const category = searchParams.get("category")
    const brand = searchParams.get("brand")

    if (category) setSelectedCategories([category])
    if (brand) setSelectedBrands([brand])
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    const searchQuery = searchParams.get("search")?.toLowerCase()
    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery) ||
          p.description.toLowerCase().includes(searchQuery) ||
          p.brand.toLowerCase().includes(searchQuery),
      )
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.category))
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((p) => selectedBrands.includes(p.brand))
    }

    if (availability.length > 0) {
      if (availability.includes("in-stock") && !availability.includes("out-of-stock")) {
        filtered = filtered.filter((p) => p.inStock)
      } else if (availability.includes("out-of-stock") && !availability.includes("in-stock")) {
        filtered = filtered.filter((p) => !p.inStock)
      }
      if (availability.includes("on-offer")) {
        filtered = filtered.filter((p) => p.isOffer)
      }
    }

    switch (sortBy) {
      case "latest":
        filtered.sort((a, b) => Number(b.id) - Number(a.id))
        break
      default:
        break
    }

    return filtered
  }, [selectedCategories, selectedBrands, availability, sortBy, searchParams])

  const itemsPerPage = isMobile ? ITEMS_PER_PAGE_MOBILE : ITEMS_PER_PAGE_DESKTOP
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedBrands([])
    setAvailability([])
    setCurrentPage(1)
  }

  const activeFiltersCount = selectedCategories.length + selectedBrands.length + availability.length

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen pb-20 transition-colors">
      {/* Refined Header - Responsive visibility controlled */}
      <div className="relative bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-900 overflow-hidden">
        {/* Subtle Background Patterns */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[radial-gradient(#4CAF50_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 bg-green-500/10 dark:bg-green-500/20 px-3 py-1 rounded-full border border-green-500/20">
                <Zap className="h-3 w-3 text-green-600 dark:text-green-400 fill-current" />
                <span className="text-[10px] text-green-700 dark:text-green-400 font-black uppercase tracking-widest">Authorized Distributor</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 bg-zinc-50 dark:bg-zinc-900 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800">
                <Award className="h-3 w-3 text-zinc-400" />
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-tight">4,000+ Partners</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white leading-none tracking-tighter">
              Professional <span className="text-primary italic">Industrial Tools</span>
            </h1>

            <p className="text-xs md:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed font-medium">
              High-performance automotive equipment and workshop essentials. Serving authorized service centers and professional installers across India.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 md:mt-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Main Sidebar - Hidden on mobile, controlled via Sheet */}
          <aside className="hidden lg:block w-72 shrink-0 h-fit sticky top-28">
            <div className="bg-zinc-50/50 dark:bg-zinc-900/30 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 backdrop-blur-sm">
              <div className="mb-8">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-8">Filter Catalog</h3>
                <ShopFilters
                  categories={categories}
                  brands={brands}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                  selectedBrands={selectedBrands}
                  setSelectedBrands={setSelectedBrands}
                  availability={availability}
                  setAvailability={setAvailability}
                  onClearFilters={clearFilters}
                  activeFiltersCount={activeFiltersCount}
                />
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-800">
                <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10">
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">B2B Support</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed mb-4">Talk to an expert for bulk discounts.</p>
                  <a href="https://wa.me/917510638693" className="inline-flex items-center gap-2 text-xs font-black text-primary hover:gap-3 transition-all">
                    WHATSAPP US <ChevronRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Catalog Content Area */}
          <div className="flex-1 space-y-8">
            {/* Action Bar - Optimized for Mobile */}
            <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center justify-between w-full md:w-auto gap-4">
                <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden h-10 px-5 rounded-xl border-zinc-200 dark:border-zinc-800 font-black text-[10px] uppercase tracking-widest gap-2 bg-transparent">
                      <SlidersHorizontal className="h-3.5 w-3.5" />
                      Refine
                      {activeFiltersCount > 0 && <span className="ml-1 px-1.5 py-0.5 bg-primary text-white rounded-full text-[8px]">{activeFiltersCount}</span>}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] p-0 border-none bg-white dark:bg-zinc-950">
                    <div className="h-full overflow-y-auto p-10 custom-scrollbar">
                      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-10">Filters</h3>
                      <ShopFilters
                        categories={categories}
                        brands={brands}
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                        selectedBrands={selectedBrands}
                        setSelectedBrands={setSelectedBrands}
                        availability={availability}
                        setAvailability={setAvailability}
                        onClearFilters={clearFilters}
                        activeFiltersCount={activeFiltersCount}
                      />
                    </div>
                  </SheetContent>
                </Sheet>

                <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">
                  Found <span className="text-zinc-900 dark:text-white">{filteredProducts.length}</span> items
                </p>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
                  <SelectTrigger className="flex-1 md:w-48 h-10 rounded-xl border-zinc-100 dark:border-zinc-800 font-bold text-xs bg-zinc-50 dark:bg-zinc-800/50 shadow-none ring-0">
                    <SelectValue placeholder="Ordering" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-zinc-200 dark:border-zinc-800">
                    <SelectItem value="popularity">Popular Products</SelectItem>
                    <SelectItem value="latest">New Arrivals</SelectItem>
                  </SelectContent>
                </Select>

                <div className="hidden md:flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-xl p-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`h-8 w-8 rounded-lg transition-all ${gridCols === 3 ? "bg-white dark:bg-zinc-700 shadow-sm text-primary" : "text-zinc-400"}`}
                    onClick={() => setGridCols(3)}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`h-8 w-8 rounded-lg transition-all ${gridCols === 4 ? "bg-white dark:bg-zinc-700 shadow-sm text-primary" : "text-zinc-400"}`}
                    onClick={() => setGridCols(4)}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Active Chip Filters */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                {selectedCategories.map((cat) => (
                  <Badge key={cat} className="bg-primary/5 text-primary border border-primary/10 px-3 py-1.5 rounded-lg flex items-center gap-2">
                    <span className="text-[9px] font-black uppercase tracking-tight">{categories.find((c) => c.id === cat)?.name}</span>
                    <button onClick={() => setSelectedCategories((prev) => prev.filter((c) => c !== cat))} className="text-xs font-bold px-1 hover:bg-primary/10 rounded cursor-pointer">×</button>
                  </Badge>
                ))}
                {selectedBrands.map((brand) => (
                  <Badge key={brand} className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-none px-3 py-1.5 rounded-lg flex items-center gap-2">
                    <span className="text-[9px] font-black uppercase tracking-tight">{brand}</span>
                    <button onClick={() => setSelectedBrands((prev) => prev.filter((b) => b !== brand))} className="text-xs font-bold px-1 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded cursor-pointer">×</button>
                  </Badge>
                ))}
                <button onClick={clearFilters} className="text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-primary transition-colors ml-2 underline underline-offset-4 decoration-zinc-200">Reset</button>
              </div>
            )}

            {/* Product Rendering */}
            {paginatedProducts.length > 0 ? (
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-${gridCols} gap-6 md:gap-8`}
              >
                {paginatedProducts.map((product) => (
                  <div key={product.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-32 bg-zinc-50 dark:bg-zinc-900/10 rounded-3xl border-2 border-dashed border-zinc-100 dark:border-zinc-800">
                <Package className="h-16 w-16 mx-auto text-zinc-200 dark:text-zinc-800 mb-6" />
                <p className="text-xl font-black text-zinc-900 dark:text-white mb-2">No Equipment Found</p>
                <p className="text-sm text-zinc-400 mb-8 max-w-xs mx-auto">Try clearing your filters or changing your search terms.</p>
                <Button onClick={clearFilters} className="rounded-xl px-10 h-12 font-black uppercase tracking-widest text-xs shadow-lg shadow-primary/20">Expand Search</Button>
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 border-t border-zinc-100 dark:border-zinc-900">
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Page {currentPage} of {totalPages}</p>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setCurrentPage((p) => Math.max(1, p - 1))
                      window.scrollTo({ top: 400, behavior: 'smooth' })
                    }}
                    disabled={currentPage === 1}
                    className="h-10 px-4 rounded-xl border-zinc-100 dark:border-zinc-800 font-bold text-[10px] uppercase tracking-widest disabled:opacity-30"
                  >
                    Prev
                  </Button>
                  <div className="flex gap-1.5">
                    {[...Array(totalPages)].map((_, i) => (
                      <Button
                        key={i}
                        variant={currentPage === i + 1 ? "default" : "ghost"}
                        className={`h-10 w-10 rounded-xl font-black text-[10px] transition-all ${currentPage === i + 1 ? "bg-primary shadow-lg shadow-primary/20" : "text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"}`}
                        onClick={() => {
                          setCurrentPage(i + 1)
                          window.scrollTo({ top: 400, behavior: 'smooth' })
                        }}
                      >
                        {i + 1}
                      </Button>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                      window.scrollTo({ top: 400, behavior: 'smooth' })
                    }}
                    disabled={currentPage === totalPages}
                    className="h-10 px-4 rounded-xl border-zinc-100 dark:border-zinc-800 font-bold text-[10px] uppercase tracking-widest disabled:opacity-30"
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
