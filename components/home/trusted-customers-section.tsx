"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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
  const itemsPerRow = 6
  const totalRows = 2
  const itemsPerPage = itemsPerRow * totalRows

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + itemsPerRow) % customers.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - itemsPerRow + customers.length) % customers.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + itemsPerRow) % customers.length)
  }

  const visibleCustomers = Array.from({ length: itemsPerPage }).map(
    (_, i) => customers[(currentIndex + i) % customers.length],
  )

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-4">
            Our Trusted Customers
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Trusted by leading automotive dealerships and service networks across South India.
          </p>
        </div>

        <div className="relative px-8 sm:px-12 md:px-16">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-background shadow-lg z-10 hover:bg-primary hover:text-white transition-colors h-8 w-8 sm:h-10 sm:w-10"
            onClick={handlePrev}
            aria-label="Previous customers"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
            {visibleCustomers.map((customer, index) => (
              <Card
                key={index}
                className="aspect-square flex items-center justify-center p-2 sm:p-3 md:p-4 bg-white/50 dark:bg-secondary/30 border-primary/20 hover:border-primary/50 hover:bg-white/70 dark:hover:bg-secondary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
                  <Image
                    src={customer.logo || "/placeholder.svg"}
                    alt={customer.name}
                    fill
                    className="object-contain p-1 sm:p-2 scale-125"
                    unoptimized
                  />
                </div>
              </Card>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-background shadow-lg z-10 hover:bg-primary hover:text-white transition-colors h-8 w-8 sm:h-10 sm:w-10"
            onClick={handleNext}
            aria-label="Next customers"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>

        <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
          {Array.from({ length: Math.ceil(customers.length / itemsPerRow) }).map((_, rowIndex) => (
            <button
              key={rowIndex}
              onClick={() => setCurrentIndex(rowIndex * itemsPerRow)}
              className={`h-1.5 sm:h-2 rounded-full transition-all ${
                rowIndex === Math.floor(currentIndex / itemsPerRow)
                  ? "bg-primary w-4 sm:w-6"
                  : "bg-muted-foreground/30 w-1.5 sm:w-2 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to row ${rowIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
