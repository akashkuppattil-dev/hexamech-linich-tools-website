"use client"

import React, { useEffect, useRef, useState, useCallback } from "react"
import { Wrench, Truck, Award, HeadphonesIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Wrench,
    title: "Workshop Focused",
    description: "Exclusive selection for professional garages and industrial centers.",
  },
  {
    icon: Truck,
    title: "Express Logistics",
    description: "Same-day dispatch for Kerala. Secure PAN India shipping.",
  },
  {
    icon: Award,
    title: "Global Brands",
    description: "Genuine products from Bosch, Stanley, Devilbiss and more.",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Guidance",
    description: "Our tool specialists help you choose the right gear for the job.",
  },
]

export function WhyHexamech() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const goToPrev = useCallback(() => setCurrentIndex((prev) => (prev - 1 + features.length) % features.length), [])
  const goToNext = useCallback(() => setCurrentIndex((prev) => (prev + 1) % features.length), [])

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 bg-white dark:bg-zinc-950 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white mb-2 tracking-tighter">
            Why Hexamech?
          </h2>
          <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-medium max-w-xl mx-auto italic">
            Trusted automotive equipment wholesaler since 2024.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`bg-zinc-50 dark:bg-zinc-900 border-none shadow-sm group hover:shadow-xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <feature.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 mb-2">{feature.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-[11px] leading-relaxed font-medium">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={goToPrev} className="h-10 w-10 flex-shrink-0 bg-white dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800 rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Card className="bg-zinc-50 dark:bg-zinc-900 border-none flex-1 rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-3">
                  <features[currentIndex].icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-sm text-zinc-900 dark:text-white mb-2">{features[currentIndex].title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-[11px] leading-relaxed">{features[currentIndex].description}</p>
              </CardContent>
            </Card>

            <Button variant="ghost" size="icon" onClick={goToNext} className="h-10 w-10 flex-shrink-0 bg-white dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800 rounded-full">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
