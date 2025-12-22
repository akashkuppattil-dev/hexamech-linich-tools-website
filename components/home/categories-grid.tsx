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
  const itemsToShow = 4

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
    <section className="py-12 sm:py-16 bg-zinc-50 dark:bg-zinc-900/10 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white mb-2 tracking-tighter">
              Shop by Category
            </h2>
            <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-medium italic">
              Explore our range of high-performance tools.
            </p>
          </div>
          <Link href="/shop" onClick={handleClick} className="hidden sm:block">
            <Button size="sm" variant="link" className="text-primary font-black uppercase tracking-widest text-[10px] p-0 h-auto">
              View All Categories <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Link>
        </div>

        <div className="relative group/categories">
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrev}
            className="absolute -left-2 xl:-left-12 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white dark:bg-zinc-800 shadow-md border border-zinc-100 dark:border-zinc-700 transition-all opacity-0 group-hover/categories:opacity-100 hover:bg-primary hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {getVisibleCategories().map((category) => (
              <Link key={category.id} href="/shop" onClick={handleClick}>
                <Card className="group relative h-[300px] sm:h-[350px] overflow-hidden rounded-xl border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <Image
                    src={categoryImages[category.id] || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />

                  <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                    <h3 className="font-black text-xl text-white mb-1 leading-tight group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-[10px] text-zinc-300 line-clamp-2 italic mb-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      {category.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-black text-[9px] uppercase tracking-widest">
                      Explore <ArrowRight className="h-3 w-3 translate-x-0 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute -right-2 xl:-right-12 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white dark:bg-zinc-800 shadow-md border border-zinc-100 dark:border-zinc-700 transition-all opacity-0 group-hover/categories:opacity-100 hover:bg-primary hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="mt-8 sm:hidden text-center">
          <Link href="/shop" onClick={handleClick}>
            <Button variant="outline" className="w-full text-primary border-primary rounded-xl font-bold h-11 text-xs uppercase tracking-widest">
              All Categories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
