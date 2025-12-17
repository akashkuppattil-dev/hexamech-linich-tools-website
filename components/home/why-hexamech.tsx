"use client"

import React from "react"

import { useEffect, useRef, useState, useCallback } from "react"
import { Wrench, Truck, Award, HeadphonesIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Wrench,
    title: "Automotive Specialized",
    description: "We focus exclusively on tools for workshops & garages. Our team understands your needs.",
  },
  {
    icon: Truck,
    title: "Fast Delivery Across India",
    description: "Same-day dispatch for Kerala. All India shipping with tracking & secure packaging.",
  },
  {
    icon: Award,
    title: "Curated Brands",
    description: "Only genuine products from Bosch, Stanley, Blue Point, Devilbiss & trusted brands.",
  },
  {
    icon: HeadphonesIcon,
    title: "Hands-on Support",
    description: "Our tool experts help you choose the right products for your specific requirements.",
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

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length)
  }, [])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % features.length)
  }, [])

  return (
    <section ref={sectionRef} className="py-8 md:py-10 lg:py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 md:mb-4">
            Why Choose Hexamech?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            India's trusted automotive tools wholesaler since 2024. We're committed to supporting your workshop with
            quality tools and exceptional service.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`glass overflow-hidden group hover:shadow-xl transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-4 sm:p-5 md:p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-primary/10 mb-3 sm:mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-foreground mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="md:hidden">
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" onClick={goToPrev} className="h-10 w-10 flex-shrink-0 bg-transparent">
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Card className="glass overflow-hidden flex-1">
              <CardContent className="p-4 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-3 group-hover:bg-primary transition-all">
                  {React.createElement(features[currentIndex].icon, { className: "h-6 w-6 text-primary" })}
                </div>
                <h3 className="font-bold text-base text-foreground mb-2">{features[currentIndex].title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{features[currentIndex].description}</p>
              </CardContent>
            </Card>

            <Button variant="outline" size="icon" onClick={goToNext} className="h-10 w-10 flex-shrink-0 bg-transparent">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-center gap-1.5 mt-4">
            {features.map((_, index) => (
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
