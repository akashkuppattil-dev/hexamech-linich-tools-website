"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart, Trash2, ShoppingCart, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/context/cart-context"

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart } = useCart()

  const handleAddToCart = (item: (typeof wishlist)[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      sku: item.sku,
      price: item.price,
      minOrderQty: 1,
      image: item.image,
    })
  }

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/shop" className="inline-flex items-center text-muted-foreground hover:text-primary mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">My Wishlist</h1>
          <p className="text-muted-foreground mt-2">
            {wishlist.length} {wishlist.length === 1 ? "item" : "items"} saved
          </p>
        </div>

        {wishlist.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((item) => (
              <Card key={item.id} className="glass overflow-hidden group">
                <div className="relative aspect-square bg-secondary/50">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-contain p-4" />
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-3 right-3 p-2 bg-destructive/10 hover:bg-destructive text-destructive hover:text-destructive-foreground rounded-full transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <CardContent className="p-4">
                  <p className="text-xs text-muted-foreground mb-1">SKU: {item.sku}</p>
                  <h3 className="font-semibold text-foreground line-clamp-2 mb-2">{item.name}</h3>
                  <p className="text-lg font-bold text-primary mb-4">₹{item.price.toLocaleString()}</p>
                  <Button className="w-full" onClick={() => handleAddToCart(item)}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to RFQ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Your wishlist is empty</h3>
            <p className="text-muted-foreground mb-6">Start adding products you're interested in!</p>
            <Link href="/shop">
              <Button>Browse Products</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
