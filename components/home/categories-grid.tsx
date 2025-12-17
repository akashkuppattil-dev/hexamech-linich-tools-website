"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { categories } from "@/lib/products"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"

const categoryImages: Record<string, string> = {
  "hand-tools": "/hand-tools-wrenches-pliers-professional.jpg",
  "power-tools": "/power-tools-drill-grinder-electric.jpg",
  "spray-guns": "/spray-gun-paint-automotive-hvlp.jpg",
  welding: "/welding-machine-mig-tig-industrial.jpg",
  lifting: "/engine-crane-hydraulic-hoist-workshop.jpg",
  transmission: "/transmission-jack-stand-automotive.jpg",
  "special-tools": "/special-service-tools-automotive-oem.jpg",
  pneumatic: "/pneumatic-tools-air-compressor-impact.jpg",
  stanley: "/stanley-tools-professional-yellow-black.jpg",
  bosch: "/bosch-power-tools-blue-professional.jpg",
}

export function CategoriesGrid() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }

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

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-12">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 md:mb-4">
              Shop by Category
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
              Browse our comprehensive range of automotive and workshop tools. From spray guns to engine cranes, we have
              everything your workshop needs.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/shop" onClick={handleClick}>
              <Button variant="outline" className="group w-full sm:w-auto bg-transparent">
                View All Categories
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
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

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4"
            onScroll={checkScroll}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.slice(0, 10).map((category) => (
              <Link key={category.id} href="/shop" onClick={handleClick}>
                <div className="min-w-[240px] max-w-[240px] sm:min-w-[260px] sm:max-w-[260px] md:min-w-[280px] md:max-w-[280px]">
                  <Card className="group glass overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full cursor-pointer">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={categoryImages[category.id] || "/placeholder.svg?height=200&width=300&query=tools"}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    </div>

                    <CardContent className="p-3 sm:p-4 relative">
                      <h3 className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {category.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mt-1 mb-2 sm:mb-3 hidden sm:block">
                        {category.description}
                      </p>
                      <span className="inline-flex items-center text-xs sm:text-sm font-medium text-primary group-hover:gap-2 transition-all">
                        View All
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </Link>
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
