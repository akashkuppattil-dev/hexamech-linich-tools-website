"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { getTopProducts } from "@/lib/products"

export function TopProductsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const topProducts = getTopProducts(10)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
      setTimeout(checkScroll, 300)
    }
  }

  const handleViewAllClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 md:mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 md:mb-2">
              Best-Selling Automotive & Workshop Equipment
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Professionally trusted tools used by workshops and dealerships across Kerala and India
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* View All Button - Added onClick handler */}
            <Link href="/shop" onClick={handleViewAllClick}>
              <Button variant="outline" className="group bg-transparent">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            {/* Navigation Arrows - hidden on mobile */}
            <div className="hidden md:flex gap-2">
              <Button variant="outline" size="icon" onClick={() => scroll("left")} disabled={!canScrollLeft}>
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => scroll("right")} disabled={!canScrollRight}>
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel - Improved responsive sizing */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            onScroll={checkScroll}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {topProducts.map((product) => (
              <div
                key={product.id}
                className="min-w-[240px] max-w-[240px] sm:min-w-[260px] sm:max-w-[260px] md:min-w-[280px] md:max-w-[280px] snap-start"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-4 w-4 md:w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-4 w-4 md:w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          <Button variant="outline" size="icon" onClick={() => scroll("left")} disabled={!canScrollLeft}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => scroll("right")} disabled={!canScrollRight}>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
