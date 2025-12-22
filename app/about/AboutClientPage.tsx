"use client"

import StatsCounter from "@/components/about/stats-counter"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Award, ChevronLeft, ChevronRight, Eye, MapPin, Rocket, Target, Truck, Users, Wrench, Phone, Mail } from "lucide-react"
import Image from "next/image"
import React, { useState } from "react"

const stats = [
  { label: "Annual Turnover", value: "1.5-10", suffix: "Cr", iconName: "Award" as const },
  { label: "Team Strength", value: "25+", suffix: "+", iconName: "Users" as const },
  { label: "Tools & SKUs", value: "1000", suffix: "+", iconName: "Package" as const },
  { label: "Workshops Served", value: "4000", suffix: "+", iconName: "ThumbsUp" as const },
]

const icons = {
  Award,
  Truck,
  Wrench,
  Users,
}

export default function AboutClientPage() {
  const [trustIndex, setTrustIndex] = useState(0)
  const [foundersIndex, setFoundersIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Trust items
  const trustItems = [
    {
      icon: "Award",
      title: "100% Genuine",
      description: "Only authentic tools from authorized distributors.",
    },
    {
      icon: "Truck",
      title: "Fast Delivery",
      description: "Fast delivery in Kerala, reliable shipping India-wide.",
    },
    {
      icon: "Wrench",
      title: "Expert Guidance",
      description: "Our team helps you choose the right tool.",
    },
    {
      icon: "Users",
      title: "B2B Focus",
      description: "Exclusive for workshops & industrial buyers.",
    },
    {
      icon: "Award",
      title: "Trusted Partner",
      description: "Relationships built on integrity & support.",
    },
  ]

  // Founders data
  const founders = [
    {
      name: "Jithin Mullasseri Chulliyil",
      role: "Co-Founder of Hexamech",
      image: "/images/jithin-mullasseri.jpg",
    },
    {
      name: "Lineesh TP",
      role: "Co-Founder of Hexamech",
      image: "/images/lineesh-tp.jpg",
    },
    {
      name: "Shaibeesh TP",
      role: "Co-Founder of Hexamech",
      image: "/images/shaibeesh-tp.jpg",
    },
  ]

  // Handle touch for carousels
  const handleTrustTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX)
  const handleTrustTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX)
    handleTrustSwipe()
  }
  const handleTrustSwipe = () => {
    const isLeftSwipe = touchStart - touchEnd > 50
    const isRightSwipe = touchEnd - touchStart > 50
    if (isLeftSwipe) {
      setTrustIndex((prev) => (prev + 1) % trustItems.length)
    }
    if (isRightSwipe) {
      setTrustIndex((prev) => (prev - 1 + trustItems.length) % trustItems.length)
    }
  }

  const handleFoundersTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX)
  const handleFoundersTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX)
    handleFoundersSwipe()
  }
  const handleFoundersSwipe = () => {
    const isLeftSwipe = touchStart - touchEnd > 50
    const isRightSwipe = touchEnd - touchStart > 50
    if (isLeftSwipe) {
      setFoundersIndex((prev) => (prev + 1) % founders.length)
    }
    if (isRightSwipe) {
      setFoundersIndex((prev) => (prev - 1 + founders.length) % founders.length)
    }
  }

  return (
    <div className="pt-14 sm:pt-16 md:pt-18 w-full overflow-x-hidden">
      {/* HERO */}
      <section className="relative py-8 md:py-12 overflow-hidden bg-gradient-to-br from-secondary/50 via-background to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 px-4 py-1.5 text-xs font-semibold">Trusted Since 2023</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Powering India's Workshops with <span className="text-primary">Professional Tools</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hexamech Linich Tools is Kerala's leading B2B automotive tools supplier, delivering genuine equipment to over 4,000 workshops across India.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-6 md:py-10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-2 bg-accent/10 text-accent border-accent/20 text-xs">Our Identity</Badge>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Who We Are</h2>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Hexamech Linich Tools</strong> was founded in 2023 in Chulliparamba, Kerala — with a single mission: to provide automotive workshops with reliable access to genuine, professional-grade tools at wholesale prices.
              </p>
              <p>
                We are not just a supplier; we are a <strong className="text-foreground">trusted partner</strong> to workshops, service centers, and industrial buyers across India. Today, we proudly serve <strong className="text-primary">4,000+ workshops</strong> with over <strong className="text-primary">1,000+ SKUs</strong> from world-renowned brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-6 md:py-10 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">Why Workshops Trust Hexamech</h2>
            <p className="text-muted-foreground text-sm md:text-base">
              The Hexamech difference.
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {trustItems.map((item) => {
              const IconComponent = icons[item.icon as keyof typeof icons]
              return (
                <Card key={item.title} className="glass p-6 text-center flex flex-col items-center h-full hover:shadow-lg transition-all duration-300 border-primary/5">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    {IconComponent && React.createElement(IconComponent, { className: "h-6 w-6 text-primary" })}
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              )
            })}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden" onTouchStart={handleTrustTouchStart} onTouchEnd={handleTrustTouchEnd}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <button
                onClick={() => setTrustIndex((prev) => (prev - 1 + trustItems.length) % trustItems.length)}
                className="p-1 hover:bg-primary/20 rounded-lg transition"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <Card className="glass p-5 text-center flex-1 h-56 flex flex-col justify-center items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  {(() => {
                    const IconComponent = icons[trustItems[trustIndex].icon as keyof typeof icons]
                    return IconComponent
                      ? React.createElement(IconComponent, { className: "h-5 w-5 text-primary" })
                      : null
                  })()}
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">{trustItems[trustIndex].title}</h3>
                <p className="text-sm text-muted-foreground">{trustItems[trustIndex].description}</p>
              </Card>

              <button
                onClick={() => setTrustIndex((prev) => (prev + 1) % trustItems.length)}
                className="p-1 hover:bg-primary/20 rounded-lg transition"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex justify-center gap-1.5">
              {trustItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTrustIndex(idx)}
                  className={`h-1.5 rounded-full transition ${idx === trustIndex ? "bg-primary w-6" : "bg-primary/30 w-1.5"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="py-6 md:py-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <Badge className="mb-2 bg-primary/10 text-primary border-primary/20 text-xs">Leadership</Badge>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">Meet the Founders</h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Visionaries driving the automotive tools revolution in India.
            </p>
          </div>

          {/* Desktop Grid (3 Columns) */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {founders.map((founder) => (
              <Card key={founder.name} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-muted bg-card">
                <div className="flex flex-col items-center p-6 text-center">
                  <div className="relative w-40 h-40 mb-4">
                    <Image
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      fill
                      className="object-cover object-top rounded-full border-4 border-secondary shadow-md"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{founder.name}</h3>
                  <p className="text-primary font-medium text-sm">{founder.role}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden" onTouchStart={handleFoundersTouchStart} onTouchEnd={handleFoundersTouchEnd}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <button
                onClick={() => setFoundersIndex((prev) => (prev - 1 + founders.length) % founders.length)}
                className="p-1.5 hover:bg-primary/20 rounded-lg transition shrink-0"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <Card className="flex-1 text-center p-5 bg-card border-none shadow-sm">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={founders[foundersIndex].image || "/placeholder.svg"}
                    alt={founders[foundersIndex].name}
                    fill
                    className="object-cover object-top rounded-full border-4 border-secondary shadow-md"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{founders[foundersIndex].name}</h3>
                <p className="text-primary font-medium text-xs">{founders[foundersIndex].role}</p>
              </Card>

              <button
                onClick={() => setFoundersIndex((prev) => (prev + 1) % founders.length)}
                className="p-1.5 hover:bg-primary/20 rounded-lg transition shrink-0"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* THE HEXAMECH TEAM */}
      <section className="py-6 md:py-10 bg-secondary/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Badge className="mb-2 bg-primary/10 text-primary border-primary/20 text-xs">Our People</Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">The Hexamech Team</h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Behind every successful delivery is a dedicated team of professionals who understand the automotive industry from the ground up: technical experts, procurement specialists, and logistics coordinators working to help workshops operate efficiently.
          </p>
        </div>
      </section>

      {/* MISSION / VISION / FUTURE */}
      <section className="py-6 md:py-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">What Drives Us Forward</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass p-6 hover:bg-secondary/20 transition-colors border-l-4 border-l-primary/50">
              <div className="flex items-center gap-3 mb-2">
                <Target className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-foreground text-lg">Our Mission</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To empower automotive workshops across India with genuine tools, expert guidance, and reliable service.
              </p>
            </Card>

            <Card className="glass p-6 hover:bg-secondary/20 transition-colors border-l-4 border-l-accent/50">
              <div className="flex items-center gap-3 mb-2">
                <Eye className="h-5 w-5 text-accent" />
                <h3 className="font-bold text-foreground text-lg">Our Vision</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To become India's most trusted B2B automotive tools supplier — recognized for integrity and lasting partnerships.
              </p>
            </Card>

            <Card className="glass p-6 hover:bg-secondary/20 transition-colors border-l-4 border-l-primary/50">
              <div className="flex items-center gap-3 mb-2">
                <Rocket className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-foreground text-lg">Our Future</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Expand to 5,000+ SKUs, establish regional distribution centers, and serve 25,000+ workshops.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-8 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-1">Hexamech by the Numbers</h2>
              <p className="text-primary-foreground/80 text-sm">Trust reflected in growth.</p>
            </div>
            <div className="flex-1 w-full md:w-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <StatsCounter key={stat.label} stat={stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION & CONTACT */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">Visit Us</h2>
            <p className="text-muted-foreground text-sm">Based in Kerala, serving workshops across India.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="group p-6 border border-border shadow-sm flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300 bg-gradient-to-b from-transparent to-primary/5">
              <div className="w-14 h-14 bg-white shadow-sm ring-1 ring-border rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Head Office</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Door No 17/346, Chulliparamba<br />
                Near Farook College<br />
                <span className="font-semibold text-primary">Calicut, Kerala – India</span>
              </p>
            </Card>

            <Card className="group p-6 border border-border shadow-sm flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300 bg-gradient-to-b from-transparent to-primary/5">
              <div className="w-14 h-14 bg-white shadow-sm ring-1 ring-border rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Truck className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Delivery Coverage</h3>
              <div className="flex flex-col items-center gap-2 w-full max-w-[200px]">
                <Badge variant="secondary" className="justify-center py-1 bg-green-100 text-green-700 hover:bg-green-200 border-green-200 w-full">Kerala – Fast Delivery</Badge>
                <Badge variant="secondary" className="justify-center py-1 bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 w-full">All India Shipping</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
