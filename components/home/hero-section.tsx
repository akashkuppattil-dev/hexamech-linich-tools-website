"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, MessageCircle, Shield, BadgeCheck, Truck, Award, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/automotive-workshop-mechanic-tools-spray-gun-weldi.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/90 to-background/60 sm:from-background/95 sm:via-background/80 sm:to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Animated Background Elements */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      )}

      {/* Content - Improved mobile layout and text sizing */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex flex-col xs:flex-row flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Badge variant="secondary" className="glass px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm w-fit">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-primary" />
              GST Verified – 32CWVPM3137R1ZP
            </Badge>
            <Badge variant="secondary" className="glass px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm w-fit">
              <BadgeCheck className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-accent" />
              B2B Wholesale Supplier
            </Badge>
            <Badge variant="secondary" className="glass px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm w-fit">
              <Award className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-primary" />
              Trusted by 4,000+ Workshops
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
            Professional Automotive &<span className="text-primary block">Industrial Tools Supplier</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl leading-relaxed">
            Your trusted B2B partner for premium automotive tools and equipment. Serving workshops, dealerships, and
            industrial buyers across India with genuine products, wholesale pricing, and expert support.
          </p>

          {/* CTAs - Stack on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="/shop" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group w-full sm:w-auto"
              >
                View Product Catalog
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a
              href="https://wa.me/917510638693?text=I%20need%20to%20request%20a%20quote%20for%20bulk%20orders"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white bg-transparent w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Request Quote
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/50">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-primary">4,000+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Satisfied Customers</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-primary">1,000+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Premium Products</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-primary">24 Hours</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Quote Response Time</p>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              <div>
                <p className="text-base sm:text-lg font-bold text-accent">PAN India</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Fast Delivery</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/50 text-xs sm:text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Zap className="h-3 w-3 text-primary" />
              GST Verified
            </span>
            <span className="hidden sm:inline text-primary/30">|</span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-3 w-3 text-primary" />
              Genuine Products
            </span>
            <span className="hidden sm:inline text-primary/30">|</span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-3 w-3 text-primary" />
              Bulk Discounts
            </span>
            <span className="hidden sm:inline text-primary/30">|</span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-3 w-3 text-primary" />
              Expert Support
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
