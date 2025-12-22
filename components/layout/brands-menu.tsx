"use client"

import { brands, products } from "@/lib/products"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ChevronRight } from "lucide-react"

export function BrandsMenu({ onClose }: { onClose: () => void }) {
    const [selectedBrand, setSelectedBrand] = useState(brands[0])

    const filteredProducts = products.filter(p => p.brand === selectedBrand)

    return (
        <div
            className="absolute top-full left-0 mt-0 pt-4 w-[850px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
            onMouseLeave={onClose}
        >
            <div className="bg-white dark:bg-zinc-950 shadow-2xl rounded-lg border border-gray-100 dark:border-zinc-800 overflow-hidden flex h-[500px] transition-colors">
                {/* Left Column: Brands List */}
                <div className="w-[240px] bg-gray-50/50 dark:bg-zinc-900/50 border-r border-gray-100 dark:border-zinc-800 flex flex-col">
                    <div className="p-4 border-b border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                        <span className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest">Our Brands</span>
                    </div>
                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                        {brands.map((brand) => (
                            <button
                                key={brand}
                                onMouseEnter={() => setSelectedBrand(brand)}
                                onClick={() => {
                                    window.location.href = `/shop?brand=${encodeURIComponent(brand)}`
                                    onClose()
                                }}
                                className={`w-full text-left px-6 py-3.5 text-sm font-semibold transition-all flex items-center justify-between group ${selectedBrand === brand
                                    ? "bg-white dark:bg-zinc-900 text-primary border-l-4 border-primary"
                                    : "text-gray-600 dark:text-zinc-400 hover:bg-gray-100/50 dark:hover:bg-zinc-800/50"
                                    }`}
                            >
                                {brand}
                                <ChevronRight className={`h-4 w-4 transition-transform ${selectedBrand === brand ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Column: Featured Products */}
                <div className="flex-1 bg-white dark:bg-zinc-950 flex flex-col overflow-hidden">
                    <div className="p-6 pb-2 flex items-center justify-between">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{selectedBrand} <span className="text-gray-400 dark:text-zinc-500 font-normal ml-1">Products</span></h3>
                        <Link
                            href={`/shop?brand=${encodeURIComponent(selectedBrand)}`}
                            onClick={onClose}
                            className="text-xs font-bold text-primary hover:underline uppercase tracking-wider"
                        >
                            View All
                        </Link>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 pt-2 custom-scrollbar">
                        <div className="grid grid-cols-2 gap-4">
                            {filteredProducts.map((product) => (
                                <Link
                                    key={product.id}
                                    href={`/product/${product.id}`}
                                    onClick={onClose}
                                    className="group flex flex-col gap-3 p-3 rounded-xl border border-gray-100 dark:border-zinc-800 hover:border-primary/20 hover:shadow-md transition-all bg-white dark:bg-zinc-900"
                                >
                                    <div className="relative aspect-square w-full bg-gray-50 dark:bg-zinc-800 rounded-lg overflow-hidden">
                                        <Image
                                            src={product.image || "/placeholder.svg"}
                                            alt={product.name}
                                            fill
                                            className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs font-medium text-gray-900 dark:text-zinc-200 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                            {product.name}
                                        </p>
                                        <p className="text-[10px] text-gray-400 dark:text-zinc-500 font-mono">{product.sku}</p>
                                    </div>
                                </Link>
                            ))}
                            {filteredProducts.length === 0 && (
                                <div className="col-span-2 flex flex-col items-center justify-center text-center p-10 opacity-50">
                                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-zinc-900 flex items-center justify-center mb-3 text-2xl">📦</div>
                                    <p className="text-sm font-medium text-gray-500 dark:text-zinc-400">Products coming soon for this brand.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="p-4 border-t border-gray-100 dark:border-zinc-800 bg-gray-50/30 dark:bg-zinc-900/30">
                        <Link
                            href="/shop"
                            className="text-xs text-center block font-bold text-gray-500 dark:text-zinc-400 hover:text-primary transition-colors"
                            onClick={onClose}
                        >
                            BROWSE ENTIRE CATALOG
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 5px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #e5e7eb;
                    border-radius: 10px;
                }
                :global(.dark) .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #3f3f46;
                }
            `}</style>
        </div>
    )
}
