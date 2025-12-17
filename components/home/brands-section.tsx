"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const brands = [
  { name: "Blue-Point", logo: "/images/brands/blue-point-snapon.jpg" },
  { name: "DeVilbiss", logo: "/images/brands/devilbiss-refinish.jpg" },
  { name: "Force", logo: "/images/brands/force.jpg" },
  { name: "KOVAX", logo: "/images/brands/kovax.jpg" },
  { name: "German Polish", logo: "/images/brands/german-polish.jpg" },
  { name: "Chicago Pneumatic", logo: "/images/brands/chicago-pneumatic.jpg" },
  { name: "Kärcher", logo: "/images/brands/karcher.jpg" },
  { name: "DeWalt", logo: "/images/brands/dewalt.jpg" },
  { name: "Black+Decker", logo: "/images/brands/black-decker.jpg" },
  { name: "ProGrip", logo: "/images/brands/progrip.jpg" },
  { name: "MR Tools", logo: "/images/brands/mr-tools.jpg" },
]

export function BrandsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const brandsPerRow = 6
  const totalRows = 2

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + brandsPerRow) % brands.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const nextRow = () => {
    setCurrentIndex((prev) => (prev + brandsPerRow) % brands.length)
  }

  const prevRow = () => {
    setCurrentIndex((prev) => (prev - brandsPerRow + brands.length) % brands.length)
  }

  const visibleBrands = Array.from({ length: brandsPerRow * totalRows }).map(
    (_, i) => brands[(currentIndex + i) % brands.length],
  )

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-4">
            Brands We Deal With
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            We partner with globally recognized brands to deliver genuine, high-performance automotive and workshop
            solutions.
          </p>
        </div>

        <div className="mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Main Brand Partner</span>
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
          </div>
          <Card className="max-w-md mx-auto p-6 md:p-8 bg-gradient-to-br from-primary/5 via-white to-yellow-50 dark:from-primary/10 dark:via-secondary/30 dark:to-yellow-900/10 border-2 border-primary/30 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="text-center">
              <div className="relative w-48 h-32 md:w-64 md:h-40 mx-auto mb-4">
                <Image
                  src="/images/brands/linich-official.jpg"
                  alt="LINICH - Main Brand Partner"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">LINICH</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Official Main Brand Partner of Hexamech. Premium automotive tools and equipment trusted by professionals
                across Kerala.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  Exclusive Partner
                </span>
                <span className="px-3 py-1 bg-yellow-500/10 text-yellow-600 text-xs font-semibold rounded-full">
                  Premium Quality
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Brands Section */}
        <div className="text-center mb-6">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Other Trusted Brands</p>
        </div>

        <div className="relative px-12 md:px-16">
          {/* Left Navigation Button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-background shadow-lg z-10 hover:bg-primary hover:text-white transition-colors"
            onClick={prevRow}
            aria-label="Previous brands"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
            {visibleBrands.map((brand, index) => (
              <Card
                key={index}
                className="aspect-square flex items-center justify-center p-3 md:p-4 bg-white/50 dark:bg-secondary/30 border-primary/20 hover:border-primary/50 hover:bg-white/70 dark:hover:bg-secondary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    fill
                    className="object-contain p-3 scale-110"
                    unoptimized
                  />
                </div>
              </Card>
            ))}
          </div>

          {/* Right Navigation Button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-background shadow-lg z-10 hover:bg-primary hover:text-white transition-colors"
            onClick={nextRow}
            aria-label="Next brands"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Dot Navigation - shows which row is active */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(brands.length / brandsPerRow) }).map((_, rowIndex) => (
            <button
              key={rowIndex}
              onClick={() => setCurrentIndex(rowIndex * brandsPerRow)}
              className={`h-2 rounded-full transition-all ${
                rowIndex === Math.floor(currentIndex / brandsPerRow)
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to row ${rowIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
