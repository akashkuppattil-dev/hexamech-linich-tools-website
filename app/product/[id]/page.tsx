import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MessageCircle, Mail, Phone, ShoppingCart, Info, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { products } from "@/lib/products"

export const metadata = {
  title: "Product Details | Hexamech Linich Tools",
  description: "View detailed specifications of our automotive tools",
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const product = products.find((p) => p.id === resolvedParams.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="pt-4 md:pt-6 pb-8">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          {/* Back Button - More compact */}
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-gray-200 rounded text-[11px] font-bold text-gray-500 hover:text-primary transition-all shadow-sm mb-4"
          >
            ← Back to Shop
          </Link>

          {/* Product Header Section - Compact */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <Badge variant="outline" className="text-[10px] border-primary/20 text-primary font-mono uppercase px-1.5 py-0 bg-primary/5 shadow-none">
                {product.sku}
              </Badge>
              <span>/</span>
              <span className="text-gray-500">{product.brand}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight tracking-tight mb-2">
              {product.name}
            </h1>
            <div className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-4xl border-l-2 border-primary/20 pl-4 py-0.5">
              {product.description}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Reduced Image Size Container */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="relative aspect-square w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md group transition-all duration-500">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 1024px) 100vw, 400px"
                />

                {product.isOffer && product.offerBadge && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-white text-[9px] uppercase tracking-widest px-2.5 py-0.5 shadow-md">
                      {product.offerBadge}
                    </Badge>
                  </div>
                )}
              </div>
            </div>

            {/* Collapsed Technical & Procurement Area */}
            <div className="lg:col-span-7 xl:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Specs Card - Compacted */}
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-4 pb-2.5 border-b border-gray-50">
                  <Activity className="h-4 w-4 text-primary" />
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em]">Technical Data</span>
                </div>
                <div className="grid grid-cols-1 gap-y-3.5">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center bg-gray-50/50 p-2 rounded-lg">
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-tight">{key}</p>
                      <p className="text-xs font-bold text-gray-800">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order & CTA Card - Compacted */}
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl border border-primary/10 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Info className="h-4 w-4 text-primary" />
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em]">Procurement</span>
                    </div>
                    <Badge className="bg-green-50 text-[10px] text-green-600 border-none shadow-none font-bold">
                      ACTIVE
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center text-center">
                      <p className="text-[9px] text-gray-400 font-bold uppercase mb-0.5">Min Order</p>
                      <p className="text-sm font-black text-gray-900">{product.minOrderQty}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center text-center">
                      <p className="text-[9px] text-gray-400 font-bold uppercase mb-0.5">HSN Code</p>
                      <p className="text-sm font-black text-gray-900">{product.hsn}</p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <a
                      href={`https://wa.me/917510638693?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}%20(SKU:%20${product.sku})`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-black py-5 rounded-lg text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2">
                        <MessageCircle className="h-4.5 w-4.5" />
                        WHATSAPP QUOTE
                      </Button>
                    </a>

                    <div className="grid grid-cols-2 gap-2">
                      <a href={`mailto:hexamechlinichtools@gmail.com?subject=Inquiry%20about%20${encodeURIComponent(product.name)}&body=SKU:%20${product.sku}`} className="flex-1">
                        <Button variant="outline" className="w-full h-10 rounded-lg text-[10px] font-bold bg-white flex items-center justify-center gap-1.5 border-gray-200">
                          <Mail className="h-3.5 w-3.5" /> EMAIL
                        </Button>
                      </a>
                      <a href="tel:+917510638693" className="flex-1">
                        <Button variant="secondary" className="w-full h-10 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1.5">
                          <Phone className="h-3.5 w-3.5" /> CALL
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Shipping info small bar */}
                <div className="p-3 bg-primary/5 rounded-xl border border-primary/10 flex items-center gap-3">
                  <ShoppingCart className="h-4 w-4 text-primary shrink-0 opacity-70" />
                  <p className="text-[10px] font-semibold text-gray-500 italic">
                    Fast delivery available across Kerala and India.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
