"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Receipt, TrendingUp, Users } from "lucide-react"
import React, { useCallback, useState } from "react"

const businessDetails = [
  {
    icon: TrendingUp,
    label: "Annual Turnover",
    value: "1.5 - 10 Cr",
    color: "text-zinc-900 dark:text-zinc-100",
  },
  {
    icon: Users,
    label: "Team Strength",
    value: "25+ Specialists",
    color: "text-zinc-900 dark:text-zinc-100",
  },
  {
    icon: Receipt,
    label: "GST Registered",
    value: "32CWVPM3137R1ZP",
    color: "text-zinc-900 dark:text-zinc-100",
  },
]

export function BusinessDetails() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrev = useCallback(() => setCurrentIndex((prev) => (prev - 1 + businessDetails.length) % businessDetails.length), [])
  const goToNext = useCallback(() => setCurrentIndex((prev) => (prev + 1) % businessDetails.length), [])

  return (
    <section className="py-12 sm:py-16 bg-zinc-50 dark:bg-zinc-900/10 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white mb-2 tracking-tighter">Verified Business</h2>
          <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-medium max-w-xl mx-auto italic">
            Hexamech Linich Tools - Professional credibility and industrial scale.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {businessDetails.map((detail, index) => {
            const IconComponent = detail.icon
            return (
              <Card key={index} className="bg-white dark:bg-zinc-900 border-none shadow-sm hover:shadow-lg transition-all rounded-2xl">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 text-primary">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">{detail.label}</p>
                    <p className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{detail.value}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Mobile carousel view */}
        <div className="md:hidden">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={goToPrev} className="h-10 w-10 rounded-full bg-white dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800">
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Card className="bg-white dark:bg-zinc-900 border-none flex-1 rounded-2xl">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 text-primary">
                  {React.createElement(businessDetails[currentIndex].icon, { className: "h-5 w-5" })}
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-0.5">{businessDetails[currentIndex].label}</p>
                  <p className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{businessDetails[currentIndex].value}</p>
                </div>
              </CardContent>
            </Card>

            <Button variant="ghost" size="icon" onClick={goToNext} className="h-10 w-10 rounded-full bg-white dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
