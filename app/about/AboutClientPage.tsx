"use client"

import StatsCounter from "@/components/about/stats-counter"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Award, ChevronLeft, ChevronRight, Eye, MapPin, Rocket, Target, Truck, Users, Wrench } from "lucide-react"
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
      description: "Only authentic tools from authorized distributors — no compromises.",
    },
    {
      icon: "Truck",
      title: "Fast Delivery",
      description: "Same-day delivery in Kerala, reliable shipping across India.",
    },
    {
      icon: "Wrench",
      title: "Expert Guidance",
      description: "Our team helps you choose the right tool for every job.",
    },
    {
      icon: "Users",
      title: "B2B Focus",
      description: "Built exclusively for workshops, dealerships, and industrial buyers.",
    },
    {
      icon: "Award",
      title: "Trusted Partnership",
      description: "Long-term relationships built on reliability, integrity, and support.",
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
      image: "/images/lineesh-tp.jpg", },
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
    <div className="pt-14 sm:pt-16 md:pt-18">
      {/* HERO */}
      <section className="relative py-6 md:py-8 overflow-hidden bg-gradient-to-br from-secondary/50 via-background to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Trusted Since 2023</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
            Powering India's Workshops with <span className="text-primary">Professional Tools</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Hexamech Linich Tools is Kerala's leading B2B automotive tools supplier, delivering genuine equipment to over 4,000 workshops across India.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4 grid lg:grid-cols-10 gap-6 md:gap-8 items-center">
          <div className="lg:col-span-7">
            <Badge className="mb-2 bg-accent/10 text-accent border-accent/20">Our Identity</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Who We Are</h2>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Hexamech Linich Tools</strong> was founded in 2023 in Chulliparamba, Kerala — with a single mission: to provide automotive workshops with reliable access to genuine, professional-grade tools at wholesale prices.
              </p>
              <p>
                We are not just a supplier; we are a <strong className="text-foreground">trusted partner</strong> to workshops, service centers, dealerships, and industrial buyers across India. Our team brings together deep automotive expertise, operational excellence, and a commitment to building long-term relationships.
              </p>
              <p>
                Today, we proudly serve <strong className="text-primary">4,000+ workshops</strong> with over <strong className="text-primary">1,000+ SKUs</strong> from world-renowned brands — ensuring every mechanic has the right tool for the job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-6 md:py-8 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">Our Difference</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Why Workshops Trust Hexamech</h2>
            <p className="text-muted-foreground text-sm md:text-base">
              We understand the automotive industry because we come from it. Here's what sets us apart.
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {trustItems.map((item) => {
              const IconComponent = icons[item.icon as keyof typeof icons]
              return (
                <Card key={item.title} className="glass p-4 text-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    {IconComponent && React.createElement(IconComponent, { className: "h-5 w-5 text-primary" })}
                  </div>
                  <h3 className="font-bold text-foreground mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-tight">{item.description}</p>
                </Card>
              )
            })}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden" onTouchStart={handleTrustTouchStart} onTouchEnd={handleTrustTouchEnd}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <button
                onClick={() => setTrustIndex((prev) => (prev - 1 + trustItems.length) % trustItems.length)}
                className="p-2 hover:bg-primary/20 rounded-lg transition"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <Card className="glass p-4 text-center flex-1">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  {(() => {
                    const IconComponent = icons[trustItems[trustIndex].icon as keyof typeof icons]
                    return IconComponent
                      ? React.createElement(IconComponent, { className: "h-5 w-5 text-primary" })
                      : null
                  })()}
                </div>
                <h3 className="font-bold text-foreground mb-1 text-sm">{trustItems[trustIndex].title}</h3>
                <p className="text-xs text-muted-foreground">{trustItems[trustIndex].description}</p>
              </Card>

              <button
                onClick={() => setTrustIndex((prev) => (prev + 1) % trustItems.length)}
                className="p-2 hover:bg-primary/20 rounded-lg transition"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex justify-center gap-1.5">
              {trustItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTrustIndex(idx)}
                  className={`h-2 rounded-full transition ${idx === trustIndex ? "bg-primary w-6" : "bg-primary/30 w-2"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">Leadership</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Meet the Founders</h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Hexamech Linich Tools is built and led by three visionary entrepreneurs committed to serving India's automotive workshops with integrity, expertise, and innovation. With deep industry experience and a workshop-first mindset, our founders drive the company's mission to empower mechanics with genuine, professional-grade tools and reliable B2B partnerships.
            </p>
          </div>

          {/* Desktop Stack */}
          <div className="space-y-8 hidden md:block">
            {founders.map((founder, idx) => (
              <div
                key={founder.name}
                className={`grid md:grid-cols-3 gap-6 items-center ${idx % 2 === 1 ? "md:grid-flow-dense" : ""}`}
              >
                <div className={`flex justify-center ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative w-40 h-40 md:w-44 md:h-44">
                    <Image
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      fill
                      className="object-cover rounded-2xl border-4 border-primary shadow-lg"
                    />
                  </div>
                </div>
                <div className={`md:col-span-2 text-center md:text-left ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                  <h3 className="text-2xl font-bold text-foreground">{founder.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-2">{founder.role}</p>
              </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden" onTouchStart={handleFoundersTouchStart} onTouchEnd={handleFoundersTouchEnd}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <button
                onClick={() => setFoundersIndex((prev) => (prev - 1 + founders.length) % founders.length)}
                className="p-2 hover:bg-primary/20 rounded-lg transition shrink-0"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex-1 text-center">
                <div className="relative w-28 h-28 mx-auto mb-3">
                  <Image
                    src={founders[foundersIndex].image || "/placeholder.svg"}
                    alt={founders[foundersIndex].name}
                    fill
                    className="object-cover rounded-2xl border-4 border-primary shadow-lg"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground">{founders[foundersIndex].name}</h3>
                <p className="text-primary font-semibold text-xs">{founders[foundersIndex].role}</p>
        
              </div>

              <button
                onClick={() => setFoundersIndex((prev) => (prev + 1) % founders.length)}
                className="p-2 hover:bg-primary/20 rounded-lg transition shrink-0"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex justify-center gap-1.5">
              {founders.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setFoundersIndex(idx)}
                  className={`h-2 rounded-full transition ${idx === foundersIndex ? "bg-primary w-6" : "bg-primary/30 w-2"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE HEXAMECH TEAM */}
      <section className="py-6 md:py-8 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">Our People</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">The Hexamech Team</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Behind every successful delivery is a dedicated team of professionals who understand the automotive industry from the ground up. Our team includes technical tool experts, procurement specialists, logistics coordinators, and customer support professionals — all working with a single purpose: to help workshops operate more efficiently with the right tools.
          </p>
        </div>
      </section>

      {/* MISSION / VISION / FUTURE */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">Our Direction</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">What Drives Us Forward</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="glass p-5">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-sm">Our Mission</h3>
              <p className="text-muted-foreground text-xs leading-tight">
                To empower automotive workshops across India with genuine tools, expert guidance, and reliable service — enabling them to deliver excellence every day.
              </p>
            </Card>

            <Card className="glass p-5">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                <Eye className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-sm">Our Vision</h3>
              <p className="text-muted-foreground text-xs leading-tight">
                To become India's most trusted B2B automotive tools supplier — recognized for integrity, product knowledge, and lasting partnerships with workshops nationwide.
              </p>
            </Card>

            <Card className="glass p-5">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Rocket className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-sm">Our Future</h3>
              <p className="text-muted-foreground text-xs leading-tight">
                Expand to 5,000+ SKUs, establish regional distribution centers, and serve 25,000+ workshops — building India's most trusted B2B network.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* STATS & LOCATION */}
      <section className="py-6 md:py-8 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Stats */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">Hexamech by the Numbers</h2>
              <p className="text-primary-foreground/80 text-sm md:text-base mb-6">Our growth reflects the trust workshops place in us every day.</p>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <StatsCounter key={stat.label} stat={stat} />
                ))}
              </div>
            </div>

            {/* Right: Location */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">Visit Us</h2>
              <p className="text-primary-foreground/80 text-sm md:text-base mb-6">Based in Kerala, serving workshops across India.</p>
              
              <Card className="glass bg-white/10 backdrop-blur-sm border-white/20 rounded-lg p-5">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1 text-sm">Head Office</h3>
                    <p className="text-primary-foreground/80 leading-snug text-xs">
                      Door No 17/346, Chulliparamba<br />
                      Near Farook College<br />
                      Malappuram, Kerala – India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Truck className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1 text-sm">Delivery Coverage</h3>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge className="bg-white/20 text-white text-xs border-white/30">Kerala – Same Day</Badge>
                      <Badge className="bg-white/20 text-white text-xs border-white/30">All India Shipping</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
