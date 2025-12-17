"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

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
  const [brandsPerRow, setBrandsPerRow] = useState(6)
  const totalRows = 2

  useEffect(() => {
    const updateBrandsPerRow = () => {
      setBrandsPerRow(window.innerWidth < 768 ? 2 : 6)
    }
    updateBrandsPerRow()
    window.addEventListener("resize", updateBrandsPerRow)
    return () => window.removeEventListener("resize", updateBrandsPerRow)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + brandsPerRow) % brands.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [brandsPerRow])

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
    <section className="py-8 md:py-10 lg:py-14 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Brands We Deal With
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            We partner with globally recognized brands to deliver genuine, high-performance automotive and workshop
            solutions.
          </p>
        </div>

        <div className="mb-12 md:mb-16">
          <div className="flex justify-center gap-2 mb-5">
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Main Brand Partner</span>
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
          </div>
          <Card className="max-w-4xl mx-auto p-6 md:p-8 bg-gradient-to-br from-primary/5 via-white to-yellow-50 dark:from-primary/10 dark:via-secondary/30 dark:to-yellow-900/10 border-2 border-primary/30 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="text-center">
              <div className="relative w-80 h-28 md:w-full md:h-32 mx-auto mb-4">
                <Image
                  src="/images/brands/linich-official.jpg"
                  alt="LINICH - Main Brand Partner"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">LINICH</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Official Main Brand Partner of Hexamech. Premium automotive tools and equipment trusted by professionals
                across Kerala.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
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

        <div className="text-center mb-7">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Other Trusted Brands</p>
        </div>

        <div className="relative px-14 md:px-20">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-1 top-1/2 -translate-y-1/2 bg-background shadow-lg z-10 hover:bg-primary hover:text-white transition-colors h-10 w-10"
            onClick={prevRow}
            aria-label="Previous brands"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-5">
            {visibleBrands.map((brand, index) => (
              <Card
                key={index}
                className="aspect-square flex items-center justify-center p-4 md:p-5 bg-white/60 dark:bg-secondary/40 border-primary/20 hover:border-primary/60 hover:bg-white/80 dark:hover:bg-secondary/60 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    fill
                    className="object-contain p-2.5 md:p-3 scale-160 hover:scale-175 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    loading="lazy"
                  />
                </div>
              </Card>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-background shadow-lg z-10 hover:bg-primary hover:text-white transition-colors h-10 w-10"
            onClick={nextRow}
            aria-label="Next brands"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-10">
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
