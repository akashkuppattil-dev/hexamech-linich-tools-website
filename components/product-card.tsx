"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/context/cart-context"
import type { Product } from "@/lib/products"
import { Heart, Lock, MessageCircle, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { memo, useCallback, useEffect, useState } from "react"

interface ProductCardProps {
  product: Product
}

function ProductCardComponent({ product }: ProductCardProps) {
  const [showShareMenu, setShowShareMenu] = useState(false)
  const { addToWishlist, removeFromWishlist, isInWishlist } = useCart()

  const inWishlist = isInWishlist(product.id)

  const handleToggleWishlist = useCallback((e: React.MouseEvent) => {
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
  }, [inWishlist, product.id, product.name, product.sku, product.price, product.image, addToWishlist, removeFromWishlist])

  const [productUrl, setProductUrl] = useState("")
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      setProductUrl(`${window.location.origin}/product/${product.id}`)
    }
  }, [product.id])
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
        <div className="absolute top-1.5 sm:top-2.5 left-1.5 sm:left-2.5 z-10 flex flex-col gap-0.5 sm:gap-1">
          {product.isOffer && product.offerBadge && (
            <Badge className="bg-accent text-accent-foreground text-xs">{product.offerBadge}</Badge>
          )}
        </div>

        {/* Quick Actions - improved mobile responsiveness with better sizing */}
        <div className="absolute top-1.5 sm:top-2.5 right-1.5 sm:right-2.5 z-10 flex flex-col gap-0.5 sm:gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
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
              <div className="absolute right-0 top-9 sm:top-10 bg-background border rounded-lg shadow-lg z-20 min-w-max text-sm">
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
                    className="block w-full text-left px-3 py-2 hover:bg-secondary text-xs sm:text-sm"
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
            className="object-contain p-2.5 sm:p-3 md:p-4 group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg"
            }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        </div>

        <CardContent className="p-2.5 sm:p-3 md:p-4 flex-grow flex flex-col">
          {/* Brand */}
          <p className="text-xs text-muted-foreground mb-0.5 sm:mb-1">{product.brand}</p>

          {/* Name */}
          <h3 className="font-semibold text-xs sm:text-sm md:text-base text-foreground line-clamp-2 mb-0.5 sm:mb-1 min-h-[1.5rem] sm:min-h-[2rem]">
            {product.name}
          </h3>

          {/* SKU & Category */}
          <p className="text-xs text-muted-foreground mb-0.5">{product.category}</p>
          <p className="text-xs text-muted-foreground mb-1.5 sm:mb-2">SKU: {product.sku}</p>

          {/* Key Features & Specs */}
          <div className="mb-2 sm:mb-3 flex-grow">
            <p className="text-xs font-semibold text-foreground mb-0.5">Specs:</p>
            <ul className="text-xs text-muted-foreground space-y-0.5">
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

          <div className="space-y-1.5 mt-auto">
            <div className="flex gap-1 w-full overflow-hidden">
              <Button
                variant="outline"
                className="flex-1 h-7 sm:h-8 text-xs px-1.5 border-primary/30 bg-primary/5 hover:bg-primary/10 font-medium whitespace-nowrap"
                disabled
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                }}
              >
                <Lock className="h-2.5 w-2.5 mr-0.5 shrink-0" />
                <span className="hidden sm:inline">Request</span>
              </Button>
              <Button
                className="flex-1 h-7 sm:h-8 text-xs px-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white whitespace-nowrap overflow-hidden"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  window.open(
                    `https://wa.me/917510638693?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}%20SKU:%20${product.sku}`,
                    "_blank",
                  )
                }}
              >
                <MessageCircle className="h-2.5 w-2.5 shrink-0" />
                <span className="hidden sm:inline ml-1">WhatsApp</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export const ProductCard = memo(ProductCardComponent)
