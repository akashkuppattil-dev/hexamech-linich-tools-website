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

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-40 md:pt-52 min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Back Button */}
          <Link href="/shop" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Product Image - Increased size and better aspect ratio */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-square bg-secondary/50 rounded-lg overflow-hidden border border-primary/10">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-6 md:p-8"
                  priority
                />
              </div>

              {/* Badges */}
              {product.isOffer && product.offerBadge && (
                <Badge className="w-fit bg-accent text-accent-foreground text-sm">{product.offerBadge}</Badge>
              )}
            </div>

            {/* Product Details - Better spacing and reduced text sizes */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">SKU: {product.sku}</p>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{product.name}</h1>
                <p className="text-sm text-muted-foreground">{product.brand}</p>
              </div>

              {/* Description */}
              <Card className="py-0 border-primary/10">
                <CardContent className="pt-4 pb-4">
                  <p className="text-sm text-foreground leading-relaxed">{product.description}</p>
                </CardContent>
              </Card>

              {/* Key Specifications */}
              <Card className="py-0 border-primary/10">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Specifications</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="border-b pb-3 last:border-b-0">
                        <p className="text-xs font-semibold text-muted-foreground uppercase">{key}</p>
                        <p className="text-sm text-foreground mt-1">{value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <Card className="py-0 border-primary/10">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Order Information</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Minimum Order Quantity:</span>
                    <span className="text-sm font-semibold">
                      {product.minOrderQty} {product.minOrderQty > 1 ? "units" : "unit"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Availability:</span>
                    <Badge variant={product.inStock ? "default" : "secondary"} className="text-xs">
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Category:</span>
                    <span className="text-sm font-semibold capitalize">{product.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">HSN Code:</span>
                    <span className="text-sm font-semibold">{product.hsn}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <div className="space-y-3 mt-4">
                <p className="text-sm text-muted-foreground font-semibold">Get Price Quote & Place Order</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href={`https://wa.me/917510638693?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}%20(SKU:%20${product.sku})`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white text-sm py-2">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                  </a>
                  <a
                    href={`mailto:hexamechlinichtools@gmail.com?subject=Inquiry%20about%20${encodeURIComponent(product.name)}&body=SKU:%20${product.sku}`}
                  >
                    <Button variant="outline" className="w-full text-sm py-2 bg-transparent">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </a>
                  <a href="tel:+917510638693">
                    <Button variant="secondary" className="w-full text-sm py-2">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                  </a>
                </div>
              </div>

              {/* B2B Note */}
              <Card className="bg-primary/5 border-primary/20 py-0">
                <CardContent className="pt-4 pb-4">
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong>B2B Wholesale:</strong> Contact us for bulk pricing, GST details, and special discounts for
                    workshop owners and dealerships.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Products or Back to Shop */}
          <div className="text-center mt-12">
            <Link href="/shop">
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                Browse Similar Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
