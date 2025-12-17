"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { getTopProducts } from "@/lib/products"

export function TopProductsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(4)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const topProducts = getTopProducts(10)

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 768) setItemsToShow(1)
        else if (window.innerWidth < 1024) setItemsToShow(2)
        else setItemsToShow(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    handleSwipe()
  }

  const handleSwipe = () => {
    const difference = touchStartX.current - touchEndX.current
    const threshold = 50

    if (Math.abs(difference) > threshold) {
      if (difference > 0) {
        // Swipe left (move to next)
        goToNext()
      } else {
        // Swipe right (move to previous)
        goToPrev()
      }
    }
  }

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
          <div
            ref={carouselRef}
            className="w-full touch-pan-y cursor-grab active:cursor-grabbing"
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
