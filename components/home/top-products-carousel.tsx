"use client"

import type React from "react"
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { getTopProducts } from "@/lib/products"

export function TopProductsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(4)

  const topProducts = getTopProducts(10)

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return
      if (window.innerWidth < 640) setItemsToShow(1)
      else if (window.innerWidth < 1024) setItemsToShow(2)
      else if (window.innerWidth < 1280) setItemsToShow(3)
      else setItemsToShow(4)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % topProducts.length)
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + topProducts.length) % topProducts.length)

  const getVisibleItems = () => {
    const items = []
    for (let i = 0; i < Math.min(itemsToShow, topProducts.length); i++) {
      items.push(topProducts[(currentIndex + i) % topProducts.length])
    }
    return items
  }

  const isDisabled = topProducts.length <= itemsToShow

  return (
    <section className="py-12 sm:py-16 bg-white dark:bg-zinc-950 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-green-500/10 rounded-full mb-3">
            <Star className="h-2.5 w-2.5 text-green-600 fill-current" />
            <span className="text-[9px] font-black text-green-700 uppercase tracking-widest">Best Sellers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white mb-4 tracking-tighter">
            Heavy-Duty <span className="text-zinc-400">Equipment</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-medium max-w-xl italic">
            Engineered for precision and built for the toughest industrial environments.
          </p>
        </div>

        <div className="relative group/carousel">
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrev}
            disabled={isDisabled}
            className="absolute -left-2 xl:-left-12 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white dark:bg-zinc-800 shadow-md border border-zinc-100 dark:border-zinc-700 transition-all opacity-0 group-hover/carousel:opacity-100 disabled:hidden hover:bg-primary hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {getVisibleItems().map((product, index) => (
              <div key={`${currentIndex}-${index}`} className="h-full">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            disabled={isDisabled}
            className="absolute -right-2 xl:-right-12 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white dark:bg-zinc-800 shadow-md border border-zinc-100 dark:border-zinc-700 transition-all opacity-0 group-hover/carousel:opacity-100 disabled:hidden hover:bg-primary hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="mt-12 text-center">
          <Link href="/shop">
            <Button size="sm" className="bg-primary hover:bg-primary-dark text-white px-8 h-11 text-xs font-black rounded-lg transition-all shadow-lg shadow-primary/20 group">
              Browse All Products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
