"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Product } from "@/lib/products"
import { MessageCircle, Share2, ShieldCheck, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { memo, useEffect, useState } from "react"

interface ProductCardProps {
  product: Product
}

function ProductCardComponent({ product }: ProductCardProps) {
  const [productUrl, setProductUrl] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      setProductUrl(`${window.location.origin}/product/${product.id}`)
    }
  }, [product.id])

  return (
    <Card className="group relative overflow-hidden bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 hover:shadow-xl transition-all duration-500 flex flex-col h-full rounded-2xl">
      <Link href={`/product/${product.id}`} className="flex flex-col h-full">
        {/* Featured Image - Full Visibility (360 view) */}
        <div className="relative h-48 sm:h-60 overflow-hidden bg-white dark:bg-zinc-800 border-b border-gray-50 dark:border-zinc-800">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />

          {/* SKU Badge - Floating */}
          <div className="absolute top-3 left-3 z-20">
            <span className="bg-white/95 dark:bg-zinc-900/90 text-[#2ecc71] border border-gray-100 dark:border-zinc-800 text-[10px] sm:text-[11px] font-black uppercase tracking-tight px-3 py-1 rounded-full shadow-sm">
              {product.sku}
            </span>
          </div>
        </div>

        <CardContent className="p-4 sm:p-5 flex-grow flex flex-col space-y-4">
          {/* Brand & Authentication */}
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-black text-gray-400 dark:text-zinc-500 uppercase tracking-tight">{product.brand}</span>
            <div className="bg-[#2ecc71]/10 p-0.5 rounded-full">
              <ShieldCheck className="h-2.5 w-2.5 text-[#2ecc71]" />
            </div>
          </div>

          {/* Product Name & Description */}
          <div className="space-y-1">
            <h3 className="font-bold text-lg text-gray-900 dark:text-zinc-100 group-hover:text-[#4CAF50] dark:group-hover:text-[#4CAF50] transition-colors line-clamp-2 leading-tight">
              {product.name}
            </h3>
            <p className="text-[11px] text-gray-400 dark:text-zinc-500 line-clamp-2 leading-relaxed italic font-medium">
              {product.description}
            </p>
          </div>

          {/* Product Highlights (Features & Specs) */}
          <div className="space-y-2 pt-1 border-t border-gray-50 dark:border-zinc-800">
            {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between text-[10px] uppercase font-bold tracking-tighter">
                <span className="text-gray-400 dark:text-zinc-500">{key}</span>
                <span className="text-gray-900 dark:text-zinc-300">{value}</span>
              </div>
            ))}
          </div>

          {/* Bottom Action Row */}
          <div className="pt-4 mt-auto border-t border-gray-50 dark:border-zinc-800 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#2ecc71] shadow-[0_0_8px_rgba(46,204,113,0.4)]" />
              <span className="text-[9px] font-black text-gray-600 dark:text-zinc-400 uppercase tracking-tighter">AVAILABLE</span>
            </div>

            <Button
              size="sm"
              className="bg-[#2E7D32] hover:bg-[#1B5E20] dark:bg-green-700 dark:hover:bg-green-800 text-white rounded-xl px-5 h-10 shadow-lg shadow-green-900/10 transition-all active:scale-95 group/btn"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open(
                  `https://wa.me/917510638693?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}%20SKU:%20${product.sku}`,
                  "_blank",
                )
              }}
            >
              <MessageCircle className="h-4 w-4 mr-1.5 group-hover/btn:scale-110 transition-transform fill-current" />
              <span className="text-xs font-black uppercase tracking-tight">RFQ</span>
            </Button>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}

export const ProductCard = memo(ProductCardComponent)
