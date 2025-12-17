"use client"

import StatsCounter from "@/components/about/stats-counter"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Award, ChevronLeft, ChevronRight, Eye, Rocket, Target, Truck, Users, Wrench } from "lucide-react"
import Image from "next/image"
import React, { useState } from "react"

const stats = [
  { label: "Annual Turnover", value: "1.5-5", suffix: "Cr", iconName: "Award" as const },
  { label: "Team Strength", value: "10", suffix: "+", iconName: "Users" as const },
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
  ]

  // Founders data
  const founders = [
    {
      name: "Jithin Mullasseri Chulliyil",
      role: "Co-Founder of Hexamech | Chief Executive Officer",
      image: "/images/jithin-mullasseri.jpg",
      bio: "Jithin is the driving force behind Hexamech's vision and strategic direction. With a deep-rooted passion for automotive technology and years of hands-on experience in the industry, he understands exactly what workshops need to operate at their best. As CEO, Jithin oversees supplier partnerships, brand selection, and quality assurance — personally ensuring that every tool Hexamech supplies meets the rigorous standards demanded by professional mechanics. His commitment to building trust-based relationships with workshops across India has been instrumental in Hexamech's rapid growth and reputation for reliability.",
    },
    {
      name: "Lineesh TP",
      role: "Co-Founder of Hexamech | Sales & Business Development",
      image: "/images/lineesh-tp.jpg",
      bio: "Lineesh brings exceptional expertise in sales strategy and dealer development to Hexamech. His ability to understand market dynamics and customer needs has been pivotal in building Hexamech's extensive network of workshop partners. He leads all sales initiatives, dealer engagement programs, and regional expansion efforts — ensuring Hexamech stays closely connected to the real-world requirements of automotive professionals. Lineesh's focus on sustainable growth and long-term partnerships has helped Hexamech establish a loyal customer base that trusts us as their go-to tools supplier.",
    },
    {
      name: "Shaibeesh TP",
      role: "Co-Founder of Hexamech | Operations & Supply Chain",
      image: "/images/shaibeesh-tp.jpg",
      bio: "Shaibeesh is the operational backbone of Hexamech, ensuring that every order is fulfilled accurately, on time, and with the utmost care. His expertise in logistics and supply chain management keeps Hexamech running like a well-oiled machine. He manages inventory planning, warehouse operations, vendor coordination, and delivery logistics — making sure workshops receive their tools exactly when they need them. Shaibeesh's operational discipline and attention to detail enable Hexamech to deliver consistently at scale, maintaining our reputation for reliability across India.",
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
    <div className="pt-16 sm:pt-18 md:pt-20">
      {/* HERO */}
      <section className="relative py-8 md:py-12 overflow-hidden bg-gradient-to-br from-secondary/50 via-background to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Trusted Since 2023</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Powering India's Workshops with <span className="text-primary">Professional Tools</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Hexamech Linich Tools is Kerala's leading B2B automotive tools supplier, delivering genuine equipment to
            over 4,000 workshops across India.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Our Identity</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Who We Are</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Hexamech Linich Tools</strong> was founded in 2023 in Chulliparamba,
                near Farook College, Kerala — with a single mission: to provide automotive workshops with reliable
                access to genuine, professional-grade tools at wholesale prices.
              </p>
              <p>
                We are not just a supplier; we are a <strong className="text-foreground">trusted partner</strong> to
                workshops, service centers, dealerships, and industrial buyers across India. Our team brings together
                deep automotive expertise, operational excellence, and a commitment to building long-term relationships.
              </p>
              <p>
                Today, we proudly serve <strong className="text-primary">4,000+ workshops</strong> with over{" "}
                <strong className="text-primary">1,000+ SKUs</strong> from world-renowned brands — ensuring every
                mechanic has the right tool for the job.
              </p>
            </div>
          </div>

          {/* LOGO */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 via-secondary to-accent/10 flex items-center justify-center p-8">
              <Image
                src="/images/logo.jpg"
                alt="Hexamech Linich Tools Logo"
                width={600}
                height={600}
                className="object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 600px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-10 md:py-14 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Difference</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Workshops Trust Hexamech</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We understand the automotive industry because we come from it. Here's what sets us apart.
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map((item) => {
              const IconComponent = icons[item.icon as keyof typeof icons]
              return (
                <Card key={item.title} className="glass p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {IconComponent && React.createElement(IconComponent, { className: "h-6 w-6 text-primary" })}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              )
            })}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden" onTouchStart={handleTrustTouchStart} onTouchEnd={handleTrustTouchEnd}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={() => setTrustIndex((prev) => (prev - 1 + trustItems.length) % trustItems.length)}
                className="p-2 hover:bg-primary/20 rounded-lg transition"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <Card className="glass p-6 text-center flex-1">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {(() => {
                    const IconComponent = icons[trustItems[trustIndex].icon as keyof typeof icons]
                    return IconComponent
                      ? React.createElement(IconComponent, { className: "h-6 w-6 text-primary" })
                      : null
                  })()}
                </div>
                <h3 className="font-bold text-foreground mb-2">{trustItems[trustIndex].title}</h3>
                <p className="text-sm text-muted-foreground">{trustItems[trustIndex].description}</p>
              </Card>

              <button
                onClick={() => setTrustIndex((prev) => (prev + 1) % trustItems.length)}
                className="p-2 hover:bg-primary/20 rounded-lg transition"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex justify-center gap-2">
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
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Leadership</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet the Founders</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hexamech Linich Tools is built and led by three visionary entrepreneurs who share a passion for automotive
              excellence and a commitment to serving India's workshops.
            </p>
          </div>

          {/* Desktop Stack */}
          <div className="hidden md:space-y-12">
            {founders.map((founder, idx) => (
              <div
                key={founder.name}
                className={`grid md:grid-cols-3 gap-8 items-center ${idx % 2 === 1 ? "md:grid-flow-dense" : ""}`}
              >
                <div className={`flex justify-center ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative w-44 h-44 md:w-48 md:h-48">
                    <Image
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      fill
                      className="object-cover rounded-full border-4 border-primary shadow-xl"
                    />
                  </div>
                </div>
                <div className={`md:col-span-2 text-center md:text-left ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                  <h3 className="text-2xl font-bold text-foreground">{founder.name}</h3>
                  <p className="text-primary font-semibold mb-4">{founder.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden" onTouchStart={handleFoundersTouchStart} onTouchEnd={handleFoundersTouchEnd}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={() => setFoundersIndex((prev) => (prev - 1 + founders.length) % founders.length)}
                className="p-2 hover:bg-primary/20 rounded-lg transition shrink-0"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex-1">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={founders[foundersIndex].image || "/placeholder.svg"}
                    alt={founders[foundersIndex].name}
                    fill
                    className="object-cover rounded-full border-4 border-primary shadow-xl"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground text-center">{founders[foundersIndex].name}</h3>
                <p className="text-primary font-semibold text-center text-sm mb-3">{founders[foundersIndex].role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed text-center">
                  {founders[foundersIndex].bio}
                </p>
              </div>

              <button
                onClick={() => setFoundersIndex((prev) => (prev + 1) % founders.length)}
                className="p-2 hover:bg-primary/20 rounded-lg transition shrink-0"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex justify-center gap-2">
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
      <section className="py-10 md:py-14 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our People</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">The Hexamech Team</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Behind every successful delivery is a dedicated team of professionals who understand the automotive industry
            from the ground up.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our team includes technical tool experts who can recommend the perfect equipment for any job, procurement
            specialists who source only genuine products, logistics coordinators who ensure timely deliveries, and
            customer support professionals who are always ready to help.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Based in Kerala and serving customers across India, every member of the Hexamech team works with a single
            purpose — to help workshops operate more efficiently and profitably with the right tools.
          </p>
        </div>
      </section>

      {/* MISSION / VISION / FUTURE */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Direction</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Drives Us Forward</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-xl mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower automotive workshops across India with genuine, professional-grade tools, expert guidance,
                and reliable service — enabling them to deliver excellence to their customers every day.
              </p>
            </Card>

            <Card className="glass p-8">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold text-foreground text-xl mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become India's most trusted B2B automotive tools supplier — recognized for integrity, product
                knowledge, competitive pricing, and lasting partnerships with workshops nationwide.
              </p>
            </Card>

            <Card className="glass p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-xl mb-3">Our 10-Year Plan</h3>
              <p className="text-muted-foreground leading-relaxed">
                Expand our product range to 5,000+ SKUs, establish regional distribution centers, launch private-label
                professional tools, and build a pan-India B2B network serving 25,000+ workshops.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10 md:py-14 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Hexamech by the Numbers</h2>
            <p className="text-primary-foreground/80">Our growth reflects the trust workshops place in us every day.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatsCounter key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Visit Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Location</h2>
            <p className="text-muted-foreground">Based in Kerala, serving workshops across India.</p>
          </div>

          <Card className="glass rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <ChevronLeft className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-3">Head Office</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ground Floor, Door No 17/346
                    <br />
                    Vpalp School, Chulliparamba
                    <br />
                    Near Farook College
                    <br />
                    Malappuram, Kerala – India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-3">Delivery Coverage</h3>
                  <p className="text-muted-foreground mb-4">Fast and reliable delivery to workshops everywhere.</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/10 text-primary">Kerala – Same Day</Badge>
                    <Badge className="bg-accent/10 text-accent">All India Shipping</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
