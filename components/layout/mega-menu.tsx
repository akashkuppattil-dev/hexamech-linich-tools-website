import { categories } from "@/lib/products"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function MegaMenu({ onClose }: { onClose: () => void }) {
    return (
        <div
            className="absolute top-full left-0 mt-0 pt-4 w-[850px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
            onMouseLeave={onClose}
        >
            <div className="bg-white shadow-xl rounded-md border border-gray-100 p-8 relative">
                {/* Tiny triangle arrow pointing up */}
                <div className="absolute -top-1.5 left-8 w-3 h-3 bg-white border-t border-l border-gray-100 rotate-45 transform"></div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/shop?category=${category.id}`}
                            className="group"
                            onClick={onClose}
                        >
                            <span className="font-medium text-[15px] text-gray-700 group-hover:text-primary transition-colors block py-1 border-b border-transparent group-hover:border-gray-100">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
                    <Link href="/shop" className="text-xs font-bold text-primary hover:text-primary-dark uppercase tracking-wide flex items-center gap-1" onClick={onClose}>
                        View All Products <ChevronRight className="h-3 w-3" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
