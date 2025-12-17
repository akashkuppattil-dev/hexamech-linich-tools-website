"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Filter, Grid3X3, LayoutGrid, SlidersHorizontal, Package, Award, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductCard } from "@/components/product-card"
import { ShopFilters } from "@/components/shop/shop-filters"
import { products, categories, brands } from "@/lib/products"
import { Badge } from "@/components/ui/badge"

const ITEMS_PER_PAGE_MOBILE = 1
const ITEMS_PER_PAGE_DESKTOP = 12

type SortOption = "popularity" | "latest" | "price-low" | "price-high" | "rating"

export function ShopContent() {
  const searchParams = useSearchParams()
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000])
  const [availability, setAvailability] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<SortOption>("popularity")
  const [gridCols, setGridCols] = useState<3 | 4 | 6>(4)
  const [currentPage, setCurrentPage] = useState(1)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const category = searchParams.get("category")
    const search = searchParams.get("search")

    if (category) {
      setSelectedCategories([category])
    }
    if (search) {
      // Search is handled in filtered products
    }
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

    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

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
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "latest":
        filtered.sort((a, b) => Number(b.id) - Number(a.id))
        break
      case "rating":
      case "popularity":
      default:
        break
    }

    return filtered
  }, [selectedCategories, selectedBrands, priceRange, availability, sortBy, searchParams])

  const itemsPerPage = isMobile ? ITEMS_PER_PAGE_MOBILE : ITEMS_PER_PAGE_DESKTOP
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedBrands([])
    setPriceRange([0, 50000])
    setAvailability([])
    setCurrentPage(1)
  }

  const activeFiltersCount =
    selectedCategories.length +
    selectedBrands.length +
    availability.length +
    (priceRange[0] > 0 || priceRange[1] < 50000 ? 1 : 0)

  return (
    <div className="container mx-auto px-4 py-4 md:py-6">
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="px-3 py-1">
            <Package className="h-3 w-3 mr-2" />
            Professional Grade
          </Badge>
          <Badge variant="outline" className="px-3 py-1">
            <Award className="h-3 w-3 mr-2" />
            Trusted by 4,000+ Workshops
          </Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Shop Automotive <span className="text-primary">Tools & Equipment</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
          Browse {products.length}+ premium automotive tools from world-class brands. Wholesale pricing for workshops,
          garages, body shops, and industrial buyers across India. RFQ-based bulk orders available with same-day
          dispatch.
        </p>
        <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-border/50">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">GST Verified Business</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-sm text-muted-foreground">Genuine OEM Products</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">Bulk Order Discounts</span>
          </div>

          <div className="ml-auto">
            <a
              href="https://wa.me/917510638693?text=I%20need%20a%20bulk%20quote%20for%20automotive%20tools"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg font-semibold text-sm transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Get Bulk Quote
            </a>
          </div>
        </div>
      </div>

      <div className="flex gap-8">
        <aside className="hidden lg:block w-64 shrink-0">
          <ShopFilters
            categories={categories}
            brands={brands}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            availability={availability}
            setAvailability={setAvailability}
            onClearFilters={clearFilters}
            activeFiltersCount={activeFiltersCount}
          />
        </aside>

        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 p-4 bg-secondary/30 rounded-xl">
            <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden bg-transparent">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <span className="ml-2 bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">
                      {activeFiltersCount}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full max-w-sm overflow-y-auto">
                <ShopFilters
                  categories={categories}
                  brands={brands}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                  selectedBrands={selectedBrands}
                  setSelectedBrands={setSelectedBrands}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  availability={availability}
                  setAvailability={setAvailability}
                  onClearFilters={clearFilters}
                  activeFiltersCount={activeFiltersCount}
                />
              </SheetContent>
            </Sheet>

            <p className="text-sm text-muted-foreground">
              Showing {paginatedProducts.length} of {filteredProducts.length} products
            </p>

            <div className="flex items-center gap-3">
              <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>

              <div className="hidden md:flex items-center border border-border rounded-lg">
                <Button
                  variant={gridCols === 3 ? "secondary" : "ghost"}
                  size="icon"
                  className="rounded-r-none"
                  onClick={() => setGridCols(3)}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={gridCols === 4 ? "secondary" : "ghost"}
                  size="icon"
                  className="rounded-l-none"
                  onClick={() => setGridCols(4)}
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedCategories.map((cat) => (
                <span
                  key={cat}
                  className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >
                  {categories.find((c) => c.id === cat)?.name}
                  <button
                    onClick={() => setSelectedCategories((prev) => prev.filter((c) => c !== cat))}
                    className="hover:bg-primary/20 rounded-full p-0.5"
                  >
                    ×
                  </button>
                </span>
              ))}
              {selectedBrands.map((brand) => (
                <span
                  key={brand}
                  className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >
                  {brand}
                  <button
                    onClick={() => setSelectedBrands((prev) => prev.filter((b) => b !== brand))}
                    className="hover:bg-primary/20 rounded-full p-0.5"
                  >
                    ×
                  </button>
                </span>
              ))}
              <button onClick={clearFilters} className="text-sm text-muted-foreground hover:text-foreground underline">
                Clear all
              </button>
            </div>
          )}

          {paginatedProducts.length > 0 ? (
            <div
              className={`grid gap-4 md:gap-6 ${
                gridCols === 3
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : gridCols === 6
                    ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              }`}
            >
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Filter className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your filters or search query</p>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <Button
                variant="outline"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <div className="flex gap-1">
                {[...Array(totalPages)].map((_, i) => {
                  const page = i + 1
                  if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                    return (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="icon"
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    )
                  }
                  if (page === currentPage - 2 || page === currentPage + 2) {
                    return (
                      <span key={page} className="px-2 py-2">
                        ...
                      </span>
                    )
                  }
                  return null
                })}
              </div>
              <Button
                variant="outline"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
