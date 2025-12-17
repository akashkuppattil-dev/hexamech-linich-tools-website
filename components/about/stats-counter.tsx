"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Users, Package, ThumbsUp } from "lucide-react"

interface StatProps {
  stat: {
    label: string
    value: string
    suffix: string
    iconName: "Award" | "Users" | "Package" | "ThumbsUp"
  }
}

const iconMap = {
  Award,
  Users,
  Package,
  ThumbsUp,
}

export function StatsCounter({ stat }: StatProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const numericValue = Number.parseFloat(stat.value.replace(/[^0-9.]/g, ""))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = numericValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, numericValue])

  const Icon = iconMap[stat.iconName]

  return (
    <div ref={ref} className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-4">
        <Icon className="h-8 w-8 text-primary-foreground" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
        {stat.value.includes("-") ? stat.value : Math.floor(count).toLocaleString()}
        {stat.suffix}
      </div>
      <p className="text-primary-foreground/80">{stat.label}</p>
    </div>
  )
}
