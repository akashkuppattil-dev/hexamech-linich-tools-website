"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Truck, Wrench, Shield } from "lucide-react"

const trustItems = [
  {
    icon: Star,
    title: "4.5★ TrustScore",
    subtitle: "4,000+ Workshops",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    subtitle: "PAN India Service",
  },
  {
    icon: Wrench,
    title: "Tool Specialist",
    subtitle: "Expert Support",
  },
  {
    icon: Shield,
    title: "GST Verified",
    subtitle: "B2B Manufacturer",
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
    <section ref={sectionRef} className="py-2 sm:py-4 bg-zinc-50 dark:bg-zinc-900/50 border-y border-zinc-100 dark:border-zinc-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-8">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className={`flex items-center gap-3 p-2 sm:p-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary/10 dark:bg-primary/20">
                <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-black text-zinc-900 dark:text-zinc-100 text-[11px] sm:text-xs uppercase tracking-tight leading-none mb-1">{item.title}</h3>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-500 font-medium whitespace-nowrap">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
