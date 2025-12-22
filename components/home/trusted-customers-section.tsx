"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const customers = [
  { name: "Mahindra", logo: "/images/customers/mahindra.jpeg" },
  { name: "A.M. Motors", logo: "/images/customers/am-motors.png" },
  { name: "Amana Toyota", logo: "/images/customers/amana-toyota.png" },
  { name: "Luxon Tata", logo: "/images/customers/luxon-tata.jpeg" },
  { name: "APCO Holdings", logo: "/images/customers/apco.jpeg" },
  { name: "Classic Hyundai", logo: "/images/customers/classic-hyundai.jpeg" },
  { name: "Indus Motors", logo: "/images/customers/indus-motors.jpg" },
  { name: "Popular Vehicles", logo: "/images/customers/popular-vehicles.webp" },
  { name: "Palal Toyota", logo: "/images/customers/palal-toyota.png" },
  { name: "Toyota", logo: "/images/customers/toyota.jpeg" },
  { name: "Eram Motors", logo: "/images/customers/eram-motors.jpeg" },
  { name: "Bridgeway", logo: "/images/customers/bridgeway.jpeg" },
  { name: "DKH Kia", logo: "/images/customers/dkh-kia.jpg" },
].filter((customer) => customer.logo && customer.logo.trim() !== "")

export function TrustedCustomersSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerRow, setItemsPerRow] = useState(6)
  const totalRows = 2
  const itemsPerPage = itemsPerRow * totalRows

  useEffect(() => {
    const updateItemsPerRow = () => {
      setItemsPerRow(window.innerWidth < 768 ? 2 : 6)
    }
    updateItemsPerRow()
    window.addEventListener("resize", updateItemsPerRow)
    return () => window.removeEventListener("resize", updateItemsPerRow)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + itemsPerRow) % customers.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [itemsPerRow])

  const handlePrev = () => setCurrentIndex((prev) => (prev - itemsPerRow + customers.length) % customers.length)
  const handleNext = () => setCurrentIndex((prev) => (prev + itemsPerRow) % customers.length)

  const visibleCustomers = Array.from({ length: itemsPerPage }).map(
    (_, i) => customers[(currentIndex + i) % customers.length],
  )

  return (
    <section className="py-12 sm:py-16 bg-white dark:bg-zinc-950 transition-colors">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white mb-4 tracking-tighter">
          Trusted by Industry Leaders
        </h2>
        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-medium max-w-xl mx-auto mb-10">
          Supplying the largest automotive service networks and dealerships across South India.
        </p>

        <div className="relative group/customers">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrev}
            className="absolute -left-2 xl:-left-12 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white dark:bg-zinc-800 shadow-md border border-zinc-100 dark:border-zinc-700 opacity-0 group-hover/customers:opacity-100 hover:bg-primary hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {visibleCustomers.map((customer, index) => (
              <Card
                key={index}
                className="aspect-[3/2] flex items-center justify-center p-3 bg-white dark:bg-zinc-900 border-none shadow-sm hover:shadow-lg transition-all group/customer-card rounded-xl"
              >
                <div className="w-full h-full relative opacity-70 group-hover/customer-card:opacity-100 transition-opacity">
                  <Image
                    src={customer.logo || "/placeholder.svg"}
                    alt={customer.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </Card>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            className="absolute -right-2 xl:-right-12 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white dark:bg-zinc-800 shadow-md border border-zinc-100 dark:border-zinc-700 opacity-0 group-hover/customers:opacity-100 hover:bg-primary hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
