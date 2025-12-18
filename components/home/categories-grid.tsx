"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { categories } from "@/lib/products"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

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
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsToShow = 4 // reduced from 6 to 4 items displayed

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length)
  }

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  const getVisibleCategories = () => {
    const items = []
    for (let i = 0; i < Math.min(itemsToShow, categories.length); i++) {
      items.push(categories[(currentIndex + i) % categories.length])
    }
    return items
  }

  return (
    <section className="py-8 md:py-10 bg-secondary/30">
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
          <Link href="/shop" onClick={handleClick}>
            <Button variant="outline" className="group w-full sm:w-auto bg-transparent">
              View All Categories
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="relative">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrev}
              className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0 bg-transparent"
              aria-label="Previous categories"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </Button>

            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 py-6">
              {" "}
              {/* changed lg:grid-cols-6 to lg:grid-cols-4 */}
              {getVisibleCategories().map((category) => (
                <Link key={category.id} href="/shop" onClick={handleClick}>
                  <Card className="group glass overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full cursor-pointer">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={categoryImages[category.id] || "/placeholder.svg?height=200&width=300&query=tools"}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <CardContent className="p-2 sm:p-3 relative">
                      <h3 className="font-semibold text-xs sm:text-sm text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {category.name}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">{category.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0 bg-transparent"
              aria-label="Next categories"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center gap-2 mt-6">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-border"
                }`}
                aria-label={`Go to category ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
