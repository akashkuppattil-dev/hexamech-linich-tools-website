import { Suspense } from "react"
import { ShopContent } from "@/components/shop/shop-content"

export const metadata = {
  title: "Shop Automotive Tools | Hexamech Linich Tools | Kerala",
  description:
    "Browse 1000+ automotive tools. Spray guns, welders, power tools, garage equipment. Wholesale prices for Kerala workshops.",
}

export default function ShopPage() {
  return (
    <div className="min-h-screen pt-14 sm:pt-16">
      <Suspense fallback={<ShopLoading />}>
        <ShopContent />
      </Suspense>
    </div>
  )
}

function ShopLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <div className="hidden lg:block w-64 shrink-0">
          <div className="h-96 bg-muted animate-pulse rounded-lg" />
        </div>
        <div className="flex-1">
          <div className="h-12 bg-muted animate-pulse rounded-lg mb-6" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-72 bg-muted animate-pulse rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
