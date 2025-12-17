import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MessageCircle, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { products } from "@/lib/products"

export const metadata = {
  title: "Product Details | Hexamech Linich Tools",
  description: "View detailed specifications of our automotive tools",
}

// Generate static params for all products at build time
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
    <div className="min-h-screen bg-background">
      <div className="pt-16 sm:pt-18 md:pt-20 min-h-screen bg-background">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 md:py-5">
          {/* Back Button */}
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-4 sm:mb-5 text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
            {/* Product Image */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="relative aspect-square bg-secondary/50 rounded-lg overflow-hidden border border-primary/10">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-4 sm:p-6 md:p-8"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Badges */}
              {product.isOffer && product.offerBadge && (
                <Badge className="w-fit bg-accent text-accent-foreground text-xs sm:text-sm">
                  {product.offerBadge}
                </Badge>
              )}
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">SKU: {product.sku}</p>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1">{product.name}</h1>
                <p className="text-xs sm:text-sm text-muted-foreground">{product.brand}</p>
              </div>

              {/* Description */}
              <Card className="py-0 border-primary/10">
                <CardContent className="p-3 sm:p-4">
                  <p className="text-xs sm:text-sm text-foreground leading-relaxed">{product.description}</p>
                </CardContent>
              </Card>

              {/* Key Specifications */}
              <Card className="py-0 border-primary/10">
                <CardHeader className="pb-2 p-3 sm:p-4">
                  <CardTitle className="text-sm sm:text-base">Specifications</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 p-3 sm:p-4 pt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="border-b pb-2 last:border-b-0">
                        <p className="text-xs font-semibold text-muted-foreground uppercase">{key}</p>
                        <p className="text-xs sm:text-sm text-foreground mt-0.5">{value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <Card className="py-0 border-primary/10">
                <CardHeader className="pb-2 p-3 sm:p-4">
                  <CardTitle className="text-sm sm:text-base">Order Information</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 p-3 sm:p-4 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-xs sm:text-sm text-muted-foreground">Min Order:</span>
                    <span className="text-xs sm:text-sm font-semibold">
                      {product.minOrderQty} {product.minOrderQty > 1 ? "units" : "unit"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs sm:text-sm text-muted-foreground">Status:</span>
                    <Badge variant={product.inStock ? "default" : "secondary"} className="text-xs py-0 px-2">
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs sm:text-sm text-muted-foreground">Category:</span>
                    <span className="text-xs sm:text-sm font-semibold capitalize">{product.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs sm:text-sm text-muted-foreground">HSN Code:</span>
                    <span className="text-xs sm:text-sm font-semibold">{product.hsn}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <div className="space-y-2 mt-2 sm:mt-3">
                <p className="text-xs sm:text-sm text-muted-foreground font-semibold">Get Price Quote & Place Order</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <a
                    href={`https://wa.me/917510638693?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}%20(SKU:%20${product.sku})`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white text-xs sm:text-sm py-2 h-9 sm:h-10">
                      <MessageCircle className="h-4 w-4 mr-1.5" />
                      <span className="hidden xs:inline">WhatsApp</span>
                    </Button>
                  </a>
                  <a
                    href={`mailto:hexamechlinichtools@gmail.com?subject=Inquiry%20about%20${encodeURIComponent(product.name)}&body=SKU:%20${product.sku}`}
                  >
                    <Button variant="outline" className="w-full text-xs sm:text-sm py-2 h-9 sm:h-10 bg-transparent">
                      <Mail className="h-4 w-4 mr-1.5" />
                      <span className="hidden xs:inline">Email</span>
                    </Button>
                  </a>
                  <a href="tel:+917510638693">
                    <Button variant="secondary" className="w-full text-xs sm:text-sm py-2 h-9 sm:h-10">
                      <Phone className="h-4 w-4 mr-1.5" />
                      <span className="hidden xs:inline">Call</span>
                    </Button>
                  </a>
                </div>
              </div>

              {/* B2B Note */}
              <Card className="bg-primary/5 border-primary/20 py-0">
                <CardContent className="p-3 sm:p-4">
                  <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                    <strong>B2B Wholesale:</strong> Contact us for bulk pricing, GST details, and special discounts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Products or Back to Shop */}
          <div className="text-center mt-6 sm:mt-8">
            <Link href="/shop">
              <Button size="lg" variant="outline" className="text-sm sm:text-base bg-transparent h-9 sm:h-10">
                Browse Similar Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
