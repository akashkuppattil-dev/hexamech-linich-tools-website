"use client"

import Link from "next/link"
import Image from "next/image"
import { GitCompare, X, ShoppingCart, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"

export default function ComparePage() {
  const { compare, removeFromCompare, clearCompare, addToCart } = useCart()

  // Get all unique spec keys from all products
  const allSpecKeys = Array.from(new Set(compare.flatMap((item) => Object.keys(item.specs))))

  const handleAddToCart = (item: (typeof compare)[0]) => {
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
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link href="/shop" className="inline-flex items-center text-muted-foreground hover:text-primary mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Compare Products</h1>
            <p className="text-muted-foreground mt-2">Compare up to 4 products side by side</p>
          </div>
          {compare.length > 0 && (
            <Button variant="outline" onClick={clearCompare}>
              Clear All
            </Button>
          )}
        </div>

        {compare.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-secondary/50 font-semibold rounded-tl-lg">Product</th>
                  {compare.map((item) => (
                    <th key={item.id} className="p-4 bg-secondary/50 last:rounded-tr-lg">
                      <div className="relative">
                        <button
                          onClick={() => removeFromCompare(item.id)}
                          className="absolute -top-2 -right-2 p-1 bg-destructive text-destructive-foreground rounded-full"
                        >
                          <X className="h-3 w-3" />
                        </button>
                        <div className="relative w-32 h-32 mx-auto mb-4 bg-background rounded-lg">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                        <h3 className="font-semibold text-foreground text-sm line-clamp-2">{item.name}</h3>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Price Row */}
                <tr>
                  <td className="p-4 border-b border-border font-medium">Price</td>
                  {compare.map((item) => (
                    <td key={item.id} className="p-4 border-b border-border text-center">
                      <span className="text-lg font-bold text-primary">₹{item.price.toLocaleString()}</span>
                    </td>
                  ))}
                </tr>

                {/* Brand Row */}
                <tr>
                  <td className="p-4 border-b border-border font-medium">Brand</td>
                  {compare.map((item) => (
                    <td key={item.id} className="p-4 border-b border-border text-center">
                      {item.brand}
                    </td>
                  ))}
                </tr>

                {/* SKU Row */}
                <tr>
                  <td className="p-4 border-b border-border font-medium">SKU</td>
                  {compare.map((item) => (
                    <td key={item.id} className="p-4 border-b border-border text-center text-muted-foreground">
                      {item.sku}
                    </td>
                  ))}
                </tr>

                {/* Spec Rows */}
                {allSpecKeys.map((key) => (
                  <tr key={key}>
                    <td className="p-4 border-b border-border font-medium">{key}</td>
                    {compare.map((item) => (
                      <td key={item.id} className="p-4 border-b border-border text-center">
                        {item.specs[key] || "-"}
                      </td>
                    ))}
                  </tr>
                ))}

                {/* Action Row */}
                <tr>
                  <td className="p-4 font-medium">Action</td>
                  {compare.map((item) => (
                    <td key={item.id} className="p-4 text-center">
                      <Button onClick={() => handleAddToCart(item)} size="sm">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to RFQ
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-16">
            <GitCompare className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No products to compare</h3>
            <p className="text-muted-foreground mb-6">Add products to compare their specifications side by side</p>
            <Link href="/shop">
              <Button>Browse Products</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
