"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Share2, MessageCircle, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/context/cart-context"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [showShareMenu, setShowShareMenu] = useState(false)
  const { addToWishlist, removeFromWishlist, isInWishlist } = useCart()

  const inWishlist = isInWishlist(product.id)

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (inWishlist) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        sku: product.sku,
        price: product.price,
        image: product.image,
      })
    }
  }

  const productUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/product/${product.id}`
  const shareText = `Check out ${product.name} from Hexamech Linich Tools`

  const shareOptions = [
    {
      name: "Share",
      action: async () => {
        if (navigator.share) {
          try {
            await navigator.share({
              title: product.name,
              text: shareText,
              url: productUrl,
            })
          } catch (err) {
            console.log("Share cancelled")
          }
        } else {
          // Fallback to copy link
          navigator.clipboard.writeText(productUrl)
          alert("Link copied to clipboard!")
        }
      },
      icon: "↗",
    },
    {
      name: "WhatsApp",
      url: `https://wa.me/?text=${encodeURIComponent(shareText + " " + productUrl)}`,
      icon: "📱",
    },
    {
      name: "Copy Link",
      action: () => {
        navigator.clipboard.writeText(productUrl)
        alert("Link copied to clipboard!")
      },
      icon: "🔗",
    },
  ]

  return (
    <Link href={`/product/${product.id}`}>
      <Card className="group relative overflow-hidden glass hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col cursor-pointer">
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10 flex flex-col gap-1">
          {product.isOffer && product.offerBadge && (
            <Badge className="bg-accent text-accent-foreground text-xs">{product.offerBadge}</Badge>
          )}
        </div>

        {/* Quick Actions - Added Web Share API for native sharing */}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10 flex flex-col gap-1 sm:gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="icon"
            variant={inWishlist ? "default" : "secondary"}
            className={`h-7 w-7 sm:h-8 sm:w-8 ${inWishlist ? "bg-accent text-accent-foreground" : ""}`}
            onClick={handleToggleWishlist}
          >
            <Heart className={`h-3 w-3 sm:h-4 sm:w-4 ${inWishlist ? "fill-current" : ""}`} />
          </Button>
          <div className="relative">
            <Button
              size="icon"
              variant="secondary"
              className="h-7 w-7 sm:h-8 sm:w-8"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setShowShareMenu(!showShareMenu)
              }}
            >
              <Share2 className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            {showShareMenu && (
              <div className="absolute right-0 top-10 bg-background border rounded-lg shadow-lg z-20 min-w-max">
                {shareOptions.map((option) => (
                  <button
                    key={option.name}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      if (option.action) {
                        option.action()
                      } else {
                        window.open(option.url, "_blank")
                      }
                      setShowShareMenu(false)
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-secondary text-sm"
                  >
                    {option.icon} {option.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Image */}
        <div className="relative aspect-square bg-secondary/50 overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain p-3 sm:p-4 group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <CardContent className="p-3 sm:p-4 flex-grow flex flex-col">
          {/* Brand - increased font size */}
          <p className="text-xs sm:text-sm text-muted-foreground mb-1">{product.brand}</p>

          {/* Name - increased font size */}
          <h3 className="font-semibold text-base sm:text-lg text-foreground line-clamp-2 mb-1 sm:mb-2 min-h-[2rem] sm:min-h-[2.5rem]">
            {product.name}
          </h3>

          {/* SKU & Category - increased font size */}
          <p className="text-xs sm:text-sm text-muted-foreground mb-1">{product.category}</p>
          <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">SKU: {product.sku}</p>

          {/* Key Features & Specs - increased font size */}
          <div className="mb-3 sm:mb-4 flex-grow">
            <p className="text-xs sm:text-sm font-semibold text-foreground mb-1">Specifications:</p>
            <ul className="text-xs sm:text-sm text-muted-foreground space-y-0.5">
              {Object.entries(product.specs)
                .slice(0, 3)
                .map(([key, value]) => (
                  <li key={key} className="flex items-start gap-1">
                    <span className="text-primary font-bold shrink-0">•</span>
                    <span className="truncate">{value}</span>
                  </li>
                ))}
            </ul>
          </div>

          <div className="space-y-2 mt-auto">
            <div className="flex gap-2 w-full overflow-hidden">
              <Button
                variant="outline"
                className="flex-1 h-8 sm:h-9 text-xs px-2 border-primary/30 bg-primary/5 hover:bg-primary/10 font-medium whitespace-nowrap"
                disabled
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                }}
              >
                <Lock className="h-3 w-3 mr-1 shrink-0" />
                Request
              </Button>
              <Button
                className="flex-1 h-8 sm:h-9 text-xs px-2 bg-[#25D366] hover:bg-[#128C7E] text-white whitespace-nowrap overflow-hidden"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  window.open(
                    `https://wa.me/917510638693?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}%20SKU:%20${product.sku}`,
                    "_blank",
                  )
                }}
              >
                <MessageCircle className="h-3 w-3 shrink-0" />
                <span className="hidden sm:inline ml-1">WhatsApp</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
