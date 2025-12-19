"use client"

import type React from "react"

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { getTopProducts } from "@/lib/products"

export function TopProductsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(4)

  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const topProducts = getTopProducts(10)

  /* ---------------------------
     Responsive items count
  ----------------------------*/
  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return

      if (window.innerWidth < 768) setItemsToShow(1)
      else if (window.innerWidth < 1024) setItemsToShow(2)
      else setItemsToShow(4)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  /* ---------------------------
     Touch swipe handling
  ----------------------------*/
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    handleSwipe()
  }

  const handleSwipe = () => {
    const distance = touchStartX.current - touchEndX.current
    const threshold = 50

    if (Math.abs(distance) > threshold) {
      distance > 0 ? goToNext() : goToPrev()
    }
  }

  /* ---------------------------
     Navigation
  ----------------------------*/
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % topProducts.length)
  }

  const goToPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + topProducts.length) % topProducts.length
    )
  }

  /* ---------------------------
     Visible items logic
  ----------------------------*/
  const getVisibleItems = () => {
    const items = []
    for (let i = 0; i < Math.min(itemsToShow, topProducts.length); i++) {
      items.push(topProducts[(currentIndex + i) % topProducts.length])
    }
    return items
  }

  const isDisabled = topProducts.length <= itemsToShow

  return (
    <section className="py-8 md:py-10 lg:py-14">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4 md:mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 md:mb-2">
              Best-Selling Automotive & Workshop Equipment
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Professionally trusted tools used by workshops and dealerships across Kerala and India
            </p>
          </div>

          <Link href="/shop">
            <Button variant="outline" className="group bg-transparent">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* CAROUSEL */}
        <div className="relative">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* LEFT ARROW */}
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrev}
              disabled={isDisabled}
              className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0 bg-transparent"
              aria-label="Previous products"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </Button>

            {/* PRODUCTS GRID */}
            <div
              ref={carouselRef}
              className="flex-1 touch-pan-y cursor-grab active:cursor-grabbing"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 py-6">
                {getVisibleItems().map((product, index) => (
                  <div key={`${currentIndex}-${index}`} className="h-full">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT ARROW */}
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              disabled={isDisabled}
              className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0 bg-transparent"
              aria-label="Next products"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </div>

          
        </div>
      </div>
    </section>
  )
}
