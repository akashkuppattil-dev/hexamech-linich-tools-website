"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, MessageCircle, Shield, BadgeCheck, Truck, Award, Zap, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[70vh] lg:min-h-[85vh] flex items-center overflow-hidden bg-white dark:bg-zinc-950">
      {/* Background with MINIMAL overlay for maximum clarity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 scale-100 opacity-30 dark:opacity-20"
        style={{
          backgroundImage: `url('/automotive-workshop-mechanic-tools-spray-gun-weldi.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-white/20 dark:bg-black/40 transition-colors duration-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12 lg:py-20">
        <div className="max-w-4xl">
          {/* Tagline / Badges Row */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm">
              <CheckCircle2 className="h-3.5 w-3.5 text-red-600" />
              <span className="text-[10px] font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight">B2B Wholesale Supplier</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
              <span className="text-[10px] font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight">Trusted by 4,000+ Workshops</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-zinc-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
            Professional Automotive & <br />
            <span className="text-[#2E7D32]">Industrial Tools Supplier</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl leading-relaxed font-medium">
            Your trusted B2B partner for premium automotive tools and equipment. Serving workshops, dealerships, and industrial buyers across India with genuine products, wholesale pricing, and expert support.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <Link href="/shop" className="w-full sm:w-auto">
              <Button
                className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-8 h-14 text-sm font-black flex items-center justify-center gap-2 rounded-xl transition-all shadow-xl shadow-green-900/20 w-full sm:w-64"
              >
                View Product Catalog
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="https://wa.me/917510638693" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32]/5 px-8 h-14 text-sm font-black flex items-center justify-center gap-2 rounded-xl transition-all w-full sm:w-64"
              >
                <MessageCircle className="h-4 w-4" />
                Request Quote
              </Button>
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full pt-8 border-t border-zinc-100 dark:border-zinc-800">
            {[
              { label: "Satisfied Customers", value: "4,000+" },
              { label: "Premium Products", value: "1,000+" },
              { label: "Quote Response Time", value: "24 Hours" },
              { label: "Fast Delivery", value: "PAN India", icon: Truck },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex items-center gap-2">
                  <div className="text-2xl sm:text-3xl font-black text-[#2E7D32]">{stat.value}</div>
                  {stat.icon && <stat.icon className="h-5 w-5 text-red-600" />}
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-zinc-500 dark:text-zinc-400 mt-1 uppercase tracking-tight leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Bottom Trust Indicators */}
          <div className="flex flex-wrap items-center gap-8 mt-12 pt-8">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-[#2E7D32]" />
              <span className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">GST Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-[#2E7D32]" />
              <span className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">Genuine Products</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
