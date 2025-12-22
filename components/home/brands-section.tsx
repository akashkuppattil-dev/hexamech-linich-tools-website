"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
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
  const totalRows = 2

  useEffect(() => {
    const updateBrandsPerRow = () => {
      setBrandsPerRow(window.innerWidth < 640 ? 2 : window.innerWidth < 1024 ? 4 : 6)
    }
    updateBrandsPerRow()
    window.addEventListener("resize", updateBrandsPerRow)
    return () => window.removeEventListener("resize", updateBrandsPerRow)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + brandsPerRow) % brands.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [brandsPerRow])

  const nextRow = () => setCurrentIndex((prev) => (prev + brandsPerRow) % brands.length)
  const prevRow = () => setCurrentIndex((prev) => (prev - brandsPerRow + brands.length) % brands.length)

  const visibleBrands = Array.from({ length: brandsPerRow * totalRows }).map(
    (_, i) => brands[(currentIndex + i) % brands.length],
  )

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full mb-4">
            <Star className="h-3 w-3 text-[#2E7D32] fill-current" />
            <span className="text-[10px] font-black text-[#2E7D32] uppercase tracking-widest">Global Partner Network</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white mb-4 tracking-tight">
            Our Brand Partners
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-medium max-w-2xl mx-auto">
            Supporting workshops with genuine tools from the world's most trusted brands.
          </p>
        </div>

        {/* 2 Layer (2 Rows) Grid Slider */}
        <div className="relative group/brands max-w-6xl mx-auto">
          <Button
            variant="outline"
            size="icon"
            onClick={prevRow}
            className="absolute -left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white dark:bg-zinc-800 shadow-xl border-zinc-100 dark:border-zinc-800 opacity-0 group-hover/brands:opacity-100 transition-all hover:bg-[#2E7D32] hover:text-white"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4">
            {visibleBrands.map((brand, index) => (
              <Card
                key={index}
                className="aspect-[4/3] flex items-center justify-center p-4 bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all group/brand-card rounded-2xl overflow-hidden"
              >
                <div className="w-full h-full relative opacity-70 group-hover/brand-card:opacity-100 group-hover/brand-card:scale-110 transition-all duration-500">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </Card>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextRow}
            className="absolute -right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white dark:bg-zinc-800 shadow-xl border-zinc-100 dark:border-zinc-800 opacity-0 group-hover/brands:opacity-100 transition-all hover:bg-[#2E7D32] hover:text-white"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </div>

        {/* Highlight Main Partner below the grid for balance */}
        <div className="mt-16 sm:mt-24">
          <Link href="/shop?brand=Linich">
            <div className="max-w-4xl mx-auto p-1 bg-gradient-to-r from-green-600/20 via-transparent to-green-600/20 rounded-[2.5rem]">
              <Card className="bg-white dark:bg-zinc-900 border-none shadow-2xl rounded-[2.4rem] p-6 sm:p-10 transition-all group hover:bg-zinc-50 dark:hover:bg-zinc-800/50 overflow-hidden">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                  <div className="relative w-48 h-24 sm:w-64 sm:h-32 flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/images/brands/linich-logo.jpg"
                      alt="LINICH Primary Partner"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                      <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">LINICH TOOLS</h3>
                      <Badge className="bg-[#2E7D32] text-white border-none text-[10px] font-black uppercase tracking-widest px-3 py-1">Strategic Partner</Badge>
                    </div>
                    <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-medium italic mb-6 leading-relaxed">
                      Our primary brand partner since 2024. Providing premium industrial equipment and workshop solutions with unmatched after-sales support.
                    </p>
                    <div className="inline-flex items-center gap-2 text-[#2E7D32] font-black text-xs uppercase tracking-[0.2em] group-hover:gap-3 transition-all">
                      Explore Full Collection <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
