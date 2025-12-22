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
      <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-lg shadow-lg p-4 z-50">
        <p className="text-sm text-zinc-500 dark:text-zinc-400 italic">No results found for "{query}"</p>
      </div>
    )
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-lg shadow-xl overflow-hidden z-50 transition-colors">
      {matchingCategories.length > 0 && (
        <div className="p-3 border-b border-gray-100 dark:border-zinc-800">
          <p className="text-xs font-bold text-zinc-400 dark:text-zinc-500 mb-2 uppercase tracking-tight">Categories</p>
          <div className="flex flex-wrap gap-2">
            {matchingCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/shop?category=${cat.id}`}
                onClick={onClose}
                className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-3 py-1 rounded-full hover:bg-primary hover:text-white transition-colors font-bold uppercase tracking-wider"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      {results.length > 0 && (
        <div className="p-3">
          <p className="text-xs font-bold text-zinc-400 dark:text-zinc-500 mb-2 uppercase tracking-tight">Top Matches</p>
          <div className="space-y-2">
            {results.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                onClick={onClose}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
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
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {product.brand} {product.price !== undefined && `• ₹${product.price.toLocaleString()}`}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href={`/shop?search=${encodeURIComponent(query)}`}
            onClick={onClose}
            className="block text-center text-xs text-primary font-black mt-3 pt-3 border-t border-gray-100 dark:border-zinc-800 hover:underline uppercase tracking-widest"
          >
            View all results →
          </Link>
        </div>
      )}
    </div>
  )
}
