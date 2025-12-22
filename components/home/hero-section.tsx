"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, MessageCircle, Shield, BadgeCheck, Truck, Award, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[60vh] lg:min-h-[75vh] flex items-center overflow-hidden bg-white dark:bg-zinc-950">
      {/* Background with MINIMAL overlay for maximum clarity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 scale-100"
        style={{
          backgroundImage: `url('/automotive-workshop-mechanic-tools-spray-gun-weldi.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-white/5 dark:bg-black/10 transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent dark:from-zinc-950 dark:via-zinc-950/50 dark:to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-10 lg:py-16">
        <div className="max-w-4xl">
          {/* Tagline / Badges Row - Smaller */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-green-500/10 dark:bg-green-500/20 border border-green-500/20 rounded-full backdrop-blur-md">
              <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] sm:text-[10px] font-black text-green-700 dark:text-green-400 uppercase tracking-widest">GST Verified</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-red-500/10 dark:bg-red-500/20 border border-red-500/20 rounded-full backdrop-blur-md">
              <span className="text-[9px] sm:text-[10px] font-black text-red-700 dark:text-red-400 uppercase tracking-widest">B2B Wholesale</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-zinc-900 dark:text-white leading-[0.95] mb-4 tracking-tighter drop-shadow-lg">
            Industrial Grade <br />
            <span className="text-[#4CAF50] inline-flex items-center gap-3">
              Tools & Gear
              <div className="hidden lg:block w-24 h-1.5 bg-[#4CAF50]/20 rounded-full overflow-hidden">
                <div className="w-full h-full bg-[#4CAF50] origin-left animate-slide-right" />
              </div>
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-zinc-900 dark:text-zinc-100 mb-8 max-w-xl leading-relaxed font-bold drop-shadow-md">
            Your trusted B2B partner for premium automotive equipment. Serving workshops, dealerships, and industrial buyers across India.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-12">
            <Link href="/shop">
              <Button
                size="sm"
                className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-6 h-11 text-xs font-bold flex items-center gap-2 rounded-lg transition-all shadow-lg shadow-green-900/30"
              >
                Explore Catalog
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="https://wa.me/917510638693" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="border-zinc-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-zinc-900 dark:text-white px-6 h-11 text-xs font-bold flex items-center gap-2 rounded-lg transition-all"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                Request Quote
              </Button>
            </a>
          </div>

          {/* Stats Grid - Smaller */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl">
            {[
              { label: "Satisfied Customers", value: "4,000+", icon: Award, color: "text-green-500" },
              { label: "Products", value: "1,000+", icon: BadgeCheck, color: "text-blue-500" },
              { label: "Response", value: "24 Hours", icon: Zap, color: "text-amber-500" },
              { label: "Registered", value: "Verified", icon: Shield, color: "text-purple-500" },
            ].map((stat, i) => (
              <div key={i} className="p-3 rounded-2xl bg-white/95 dark:bg-zinc-900/95 border border-white dark:border-zinc-800 shadow-xl transition-transform hover:-translate-y-1">
                <stat.icon className={`h-4 w-4 ${stat.color} mb-2`} />
                <div className="text-lg sm:text-xl font-black text-zinc-900 dark:text-white mb-0.5">{stat.value}</div>
                <div className="text-[8px] sm:text-[9px] font-black text-zinc-500 dark:text-zinc-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
