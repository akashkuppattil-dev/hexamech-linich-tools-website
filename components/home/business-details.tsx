"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BadgeCheck, Building2, Calendar, ChevronLeft, ChevronRight, Receipt, TrendingUp, Users } from "lucide-react"
import { useCallback, useState } from "react"

const getIconComponent = (IconComponent: any) => {
  return <IconComponent className="h-5 w-5" />
}

const businessDetails = [
  {
    icon: Building2,
    label: "Nature of Business",
    value: "Trader - Wholesaler/Distributor",
    color: "text-primary",
  },
  {
    icon: BadgeCheck,
    label: "Legal Status of Firm",
    value: "Proprietorship",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    label: "Annual Turnover",
    value: "1.5 - 10 Cr",
    color: "text-accent",
  },
  {
    icon: Calendar,
    label: "GST Registration Date",
    value: "20-07-2023",
    color: "text-primary",
  },
  {
    icon: Users,
    label: "Total Number of Employees",
    value: "Upto 25+ People",
    color: "text-primary",
  },
  {
    icon: Receipt,
    label: "GST Number",
    value: "32CWVPM3137R1ZP",
    color: "text-accent",
  },
]

export function BusinessDetails() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + businessDetails.length) % businessDetails.length)
  }, [])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % businessDetails.length)
  }, [])

  return (
    <section className="py-8 md:py-10 lg:py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 md:mb-4">Business Details</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Hexamech Linich Tools - Your trusted partner for automotive workshop equipment
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {businessDetails.map((detail, index) => {
            const IconComponent = detail.icon
            return (
              <Card key={index} className="glass hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 sm:p-6 flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-secondary/50 ${detail.color}`}>
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">{detail.label}</p>
                    <p className="font-semibold text-sm sm:text-base text-foreground">{detail.value}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="md:hidden">
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" onClick={goToPrev} className="h-10 w-10 flex-shrink-0 bg-transparent">
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {(() => {
              const currentDetail = businessDetails[currentIndex]
              const IconComponent = currentDetail.icon
              return (
                <Card className="glass flex-1 hover:shadow-lg transition-all">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-secondary/50 ${currentDetail.color}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">{currentDetail.label}</p>
                      <p className="font-semibold text-sm text-foreground">{currentDetail.value}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })()}

            <Button variant="outline" size="icon" onClick={goToNext} className="h-10 w-10 flex-shrink-0 bg-transparent">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-center gap-1.5 mt-4">
            {businessDetails.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-5" : "bg-muted-foreground/30 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
