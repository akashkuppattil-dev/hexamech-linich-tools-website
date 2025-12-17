"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Truck, Wrench, Shield } from "lucide-react"

const trustItems = [
  {
    icon: Star,
    title: "4.5★ TrustScore",
    subtitle: "4,000+ Happy Workshops",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    subtitle: "Across Kerala & All India",
  },
  {
    icon: Wrench,
    title: "Automotive Specialist",
    subtitle: "Workshop Tools Expert",
  },
  {
    icon: Shield,
    title: "GST Verified",
    subtitle: "Trusted B2B Supplier",
  },
]

export function TrustBand() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section ref={sectionRef} className="py-6 sm:py-8 bg-primary/5 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className={`glass rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center transition-all duration-500 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 mb-2 sm:mb-3">
                <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-sm sm:text-base">{item.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
