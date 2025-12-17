"use client"

import Link from "next/link"
import Image from "next/image"
import { searchProducts, categories } from "@/lib/products"

interface SearchDropdownProps {
  query: string
  onClose: () => void
}

export function SearchDropdown({ query, onClose }: SearchDropdownProps) {
  const results = searchProducts(query).slice(0, 5)
  const matchingCategories = categories.filter((c) => c.name.toLowerCase().includes(query.toLowerCase())).slice(0, 3)

  if (results.length === 0 && matchingCategories.length === 0) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg p-4 z-50">
        <p className="text-sm text-muted-foreground">No results found for "{query}"</p>
      </div>
    )
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50">
      {matchingCategories.length > 0 && (
        <div className="p-3 border-b border-border">
          <p className="text-xs font-medium text-muted-foreground mb-2">Categories</p>
          <div className="flex flex-wrap gap-2">
            {matchingCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/shop?category=${cat.id}`}
                onClick={onClose}
                className="text-sm bg-secondary px-3 py-1 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      {results.length > 0 && (
        <div className="p-3">
          <p className="text-xs font-medium text-muted-foreground mb-2">Products</p>
          <div className="space-y-2">
            {results.map((product) => (
              <Link
                key={product.id}
                href={`/shop?product=${product.id}`}
                onClick={onClose}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={40}
                  height={40}
                  className="rounded-md object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{product.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {product.brand} • ₹{product.price.toLocaleString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href={`/shop?search=${encodeURIComponent(query)}`}
            onClick={onClose}
            className="block text-center text-sm text-primary font-medium mt-3 pt-3 border-t border-border hover:underline"
          >
            View all results →
          </Link>
        </div>
      )}
    </div>
  )
}
