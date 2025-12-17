"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { getTopProducts } from "@/lib/products"

export function TopProductsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const topProducts = getTopProducts(10)
  const getItemsToShow = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1
      if (window.innerWidth < 1024) return 2
      return 4
    }
    return 4
  }
  const [itemsToShow] = useState(getItemsToShow())

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % topProducts.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + topProducts.length) % topProducts.length)
  }

  const getVisibleItems = () => {
    const items = []
    for (let i = 0; i < itemsToShow; i++) {
      items.push(topProducts[(currentIndex + i) % topProducts.length])
    }
    return items
  }

  return (
    <section className="py-8 md:py-10 lg:py-14">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4 md:mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 md:mb-2">
              Best-Selling Automotive & Workshop Equipment
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Professionally trusted tools used by workshops and dealerships across Kerala and India
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/shop">
              <Button variant="outline" className="group bg-transparent">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative">
          {/* Navigation Buttons and Product Grid */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* Previous Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrev}
              className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0 bg-transparent"
              aria-label="Previous products"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </Button>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 py-6">
              {getVisibleItems().map((product, index) => (
                <div key={`${currentIndex}-${index}`} className="h-full">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {/* Next Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0 bg-transparent"
              aria-label="Next products"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center gap-2 mt-6">
            {topProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-border"
                }`}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
