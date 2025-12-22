"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const brandImageFiles = [
  "black-decker.jpg",
  "blue-point-snapon.jpg",
  "chicago-pneumatic.jpg",
  "devilbiss-refinish.jpg",
  "dewalt.jpg",
  "force.jpg",
  "german-polish.jpg",
  "karcher.jpg",
  "kovax.jpg",
  "linich-logo.jpg",
  "menzerna-logo.jpg",
  "mr-tools.jpg",
  "progrip.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.05_50cf4637.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.06_24105a75.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.06_27e1b7c5.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.07_309c0c3a.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.07_8f761bd4.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.07_f9e6ad78.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.08_4ab9343f.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.08_8163f38d.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.09_74981a3c.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.09_c255bd56.jpg",
];

const brands = brandImageFiles.map((file) => ({
  name: file.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
  logo: `/images/brands/${file}`,
}));

export function BrandsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [brandsPerRow, setBrandsPerRow] = useState(6)
  const totalRows = 1

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
    }, 4000)
    return () => clearInterval(timer)
  }, [brandsPerRow])

  const nextRow = () => setCurrentIndex((prev) => (prev + brandsPerRow) % brands.length)
  const prevRow = () => setCurrentIndex((prev) => (prev - brandsPerRow + brands.length) % brands.length)

  const visibleBrands = Array.from({ length: brandsPerRow * totalRows }).map(
    (_, i) => brands[(currentIndex + i) % brands.length],
  )

  return (
    <section className="py-12 sm:py-16 bg-zinc-50 dark:bg-zinc-900/10 transition-colors">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white mb-8 tracking-tighter">
          Our Brand Partners
        </h2>

        {/* Highlight Main Partner */}
        <div className="mb-12">
          <Link href="/shop?brand=Linich">
            <Card className="max-w-xl mx-auto p-4 sm:p-6 bg-white dark:bg-zinc-900 border border-primary/20 shadow-xl hover:shadow-2xl transition-all group overflow-hidden rounded-2xl">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="relative w-32 h-20 flex-shrink-0">
                  <Image
                    src="/images/brands/linich-logo.jpg"
                    alt="LINICH Partner"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center sm:text-left flex-1 min-w-0">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <h3 className="text-xl font-black text-zinc-900 dark:text-white tracking-tight">LINICH</h3>
                    <Badge className="bg-primary/10 text-primary border-none text-[9px] font-black uppercase tracking-widest px-2 py-0.5">Primary</Badge>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium italic mb-2">
                    Official Strategic Partner. Premium tools for professional workshops.
                  </p>
                  <div className="text-primary font-black text-[9px] uppercase tracking-widest flex items-center justify-center sm:justify-start gap-1 group-hover:gap-2 transition-all">
                    Explore Linich Range <ChevronRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>

        {/* Slider for other brands */}
        <div className="relative group/brands">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevRow}
            className="absolute -left-2 xl:-left-12 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white dark:bg-zinc-800 shadow-md border border-zinc-100 dark:border-zinc-700 opacity-0 group-hover/brands:opacity-100 hover:bg-primary hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {visibleBrands.map((brand, index) => (
              <Card
                key={index}
                className="aspect-[4/3] flex items-center justify-center p-4 bg-white dark:bg-zinc-900 border-none shadow hover:shadow-lg transition-all group/brand-card rounded-xl"
              >
                <div className="w-full h-full relative">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    fill
                    className="object-contain group-hover/brand-card:scale-110 transition-transform duration-500"
                  />
                </div>
              </Card>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextRow}
            className="absolute -right-2 xl:-right-12 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white dark:bg-zinc-800 shadow-md border border-zinc-100 dark:border-zinc-700 opacity-0 group-hover/brands:opacity-100 hover:bg-primary hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
