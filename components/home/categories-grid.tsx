"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { categories } from "@/lib/products"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" })
    }
  }

  return (
    <section className="py-10 md:py-12 lg:py-14 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-10">
          <div className="text-center sm:text-left max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 md:mb-3">
              Shop by Category
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Explore core product categories across automotive workshop infrastructure, lifting, welding, hand tools,
              and pneumatic solutions engineered for professional use.
            </p>
          </div>
          <Link href="/shop" onClick={handleClick} className="w-full sm:w-auto">
            <Button variant="outline" className="group w-full sm:w-auto bg-transparent">
              View All Categories
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link key={category.id} href="/shop" onClick={handleClick} className="h-full">
              <Card className="group h-full flex flex-col overflow-hidden rounded-lg glass hover:shadow-xl transition-all duration-200 hover:-translate-y-1 cursor-pointer">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={categoryImages[category.id] || "/placeholder.svg?height=200&width=300&query=tools"}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-200 will-change-transform"
                  />
                </div>

                <CardContent className="flex-1 flex flex-col p-3 md:p-4 gap-1.5">
                  <h3 className="font-semibold text-sm md:text-base text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {category.name}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                    {category.description}
                  </p>
                  <div className="mt-3 md:mt-4 pt-2 border-t border-border/60 flex items-center justify-between text-xs md:text-sm">
                    <span className="font-medium text-primary group-hover:text-primary-dark transition-colors">
                      View Products
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
