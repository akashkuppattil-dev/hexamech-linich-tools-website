"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Tag, Percent, Clock, Flame, Zap, Star, Filter, Grid3X3, LayoutGrid, TrendingUp, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { products, categories, brands } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

const offerProducts = products
  .filter((p) => p.originalPrice && p.originalPrice > p.price)
  .map((product) => {
    const discount = Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    return { ...product, discount }
  })
  .sort((a, b) => b.discount - a.discount) // Sort by highest discount first

// Group offers by discount range
const hotDeals = offerProducts.filter((p) => p.discount >= 15)
const weeklyOffers = offerProducts.filter((p) => p.discount >= 10 && p.discount < 15)
const allOffers = offerProducts

export function OffersContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedBrand, setSelectedBrand] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("discount-high")
  const [viewMode, setViewMode] = useState<"grid" | "compact">("grid")

  // Filter and sort offers
  const filteredOffers = useMemo(() => {
    let filtered = [...allOffers]

    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }

    if (selectedBrand !== "all") {
      filtered = filtered.filter((p) => p.brand === selectedBrand)
    }

    // Sort
    switch (sortBy) {
      case "discount-high":
        filtered.sort((a, b) => b.discount - a.discount)
        break
      case "discount-low":
        filtered.sort((a, b) => a.discount - b.discount)
        break
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      default:
        break
    }

    return filtered
  }, [selectedCategory, selectedBrand, sortBy])

  return (
    <div>
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-accent/20 via-primary/10 to-background">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-2 mb-6">
              <Badge className="bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold">
                <Flame className="h-4 w-4 mr-2" />
                Limited Time Only
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm border-primary text-primary font-semibold">
                <Percent className="h-4 w-4 mr-2" />
                Up to 20% OFF
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Sparkles className="h-4 w-4 mr-2" />
                Bulk Discounts Available
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Special <span className="text-accent">Offers</span> &<br className="hidden sm:block" /> Wholesale Deals
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get exclusive discounts on premium automotive tools from world-class brands. Limited stock available at
              wholesale prices. Perfect for workshops, garages, and industrial buyers looking to save on bulk orders.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-border/30">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Best Prices Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Limited Time Offers</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium">Premium Brands Only</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 border-b border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent/10 rounded-full">
                <Tag className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{allOffers.length}</p>
                <p className="text-sm text-muted-foreground">Active Offers</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{hotDeals.length}</p>
                <p className="text-sm text-muted-foreground">Hot Deals (15%+ OFF)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-yellow-500/10 rounded-full">
                <Clock className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">Limited</p>
                <p className="text-sm text-muted-foreground">Time Remaining</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Deals Section */}
      {hotDeals.length > 0 && (
        <section className="py-12 md:py-16 bg-gradient-to-r from-accent/5 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-accent rounded-lg">
                <Flame className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Hot Deals</h2>
                <p className="text-muted-foreground">15% or more discount - Grab before they're gone!</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {hotDeals.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} showOfferBadge />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters & All Offers */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="px-2 py-1 text-xs">
                  <Tag className="h-3 w-3 mr-1" />
                  Active Deals
                </Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">All Discounted Products</h2>
              <p className="text-lg text-muted-foreground">
                {filteredOffers.length} premium tools with special wholesale discounts
              </p>
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[160px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Brand Filter */}
            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                {brands.map((brand) => (
                  <SelectItem key={brand} value={brand}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="discount-high">Highest Discount</SelectItem>
                <SelectItem value="discount-low">Lowest Discount</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>

            {/* View Toggle */}
            <div className="flex border border-border rounded-lg overflow-hidden">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className="rounded-none"
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "compact" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("compact")}
                className="rounded-none"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          {filteredOffers.length > 0 ? (
            <div
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
              }`}
            >
              {filteredOffers.map((product) => (
                <OfferProductCard key={product.id} product={product} compact={viewMode === "compact"} />
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <Tag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No offers found</h3>
              <p className="text-muted-foreground">Try adjusting your filters to see more deals.</p>
            </Card>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary/95 to-accent">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            <Zap className="h-3 w-3 mr-2" />
            Bulk Order Advantage
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need Better Pricing? We've Got You Covered!
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact our B2B sales team for exclusive bulk order pricing. Additional discounts available for orders above
            ₹50,000. GST invoices provided for all transactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917510638693?text=Hi%20Hexamech%2C%20I%20want%20to%20enquire%20about%20bulk%20order%20discounts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-8">
                Get Bulk Quote on WhatsApp
              </Button>
            </a>
            <a href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
              >
                Request Detailed Quote
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function OfferProductCard({ product, compact }: { product: any; compact?: boolean }) {
  const discount = product.discount || 0

  return (
    <Card className="glass overflow-hidden group hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className={`relative ${compact ? "aspect-square" : "aspect-[4/3]"} bg-secondary/50 overflow-hidden`}>
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Discount Badge */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          <Badge className="bg-accent text-accent-foreground font-bold">{discount}% OFF</Badge>
          {product.offerBadge && (
            <Badge variant="secondary" className="bg-primary text-primary-foreground text-xs">
              {product.offerBadge}
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
            <Star className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <CardContent className={compact ? "p-3" : "p-4"}>
        <p className="text-xs text-muted-foreground mb-1">{product.brand}</p>
        <h3 className={`font-semibold text-foreground ${compact ? "text-sm line-clamp-1" : "line-clamp-2"} mb-2`}>
          {product.name}
        </h3>

        {/* Add to RFQ Button */}
        {!compact && (
          <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
            Add to RFQ Cart
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
