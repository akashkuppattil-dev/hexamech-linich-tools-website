import { brands } from "@/lib/products"
import Link from "next/link"

export function BrandsMenu({ onClose }: { onClose: () => void }) {
    return (
        <div
            className="absolute top-full left-0 mt-0 pt-4 w-[500px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
            onMouseLeave={onClose}
        >
            <div className="bg-white shadow-xl rounded-md border border-gray-100 p-6 relative">
                {/* Tiny triangle arrow pointing up */}
                <div className="absolute -top-1.5 left-8 w-3 h-3 bg-white border-t border-l border-gray-100 rotate-45 transform"></div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                    {brands.map((brand, index) => (
                        <Link
                            key={index}
                            href={`/shop?brand=${encodeURIComponent(brand)}`}
                            className="block text-sm font-medium text-gray-700 hover:text-primary transition-colors py-0.5"
                            onClick={onClose}
                        >
                            {brand}
                        </Link>
                    ))}
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 text-right">
                    <Link href="/shop" className="text-xs font-bold text-gray-500 hover:text-primary uppercase tracking-wide transition-colors" onClick={onClose}>
                        View All Brands
                    </Link>
                </div>
            </div>
        </div>
    )
}
