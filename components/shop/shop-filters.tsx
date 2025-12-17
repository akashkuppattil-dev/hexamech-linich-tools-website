"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface Category {
  id: string
  name: string
}

interface ShopFiltersProps {
  categories: Category[]
  brands: string[]
  selectedCategories: string[]
  setSelectedCategories: (categories: string[]) => void
  selectedBrands: string[]
  setSelectedBrands: (brands: string[]) => void
  priceRange: [number, number]
  setPriceRange: (range: [number, number]) => void
  availability: string[]
  setAvailability: (availability: string[]) => void
  onClearFilters: () => void
  activeFiltersCount: number
}

export function ShopFilters({
  categories,
  brands,
  selectedCategories,
  setSelectedCategories,
  selectedBrands,
  setSelectedBrands,
  priceRange,
  setPriceRange,
  availability,
  setAvailability,
  onClearFilters,
  activeFiltersCount,
}: ShopFiltersProps) {
  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(
      selectedCategories.includes(categoryId)
        ? selectedCategories.filter((c) => c !== categoryId)
        : [...selectedCategories, categoryId],
    )
  }

  const toggleBrand = (brand: string) => {
    setSelectedBrands(
      selectedBrands.includes(brand) ? selectedBrands.filter((b) => b !== brand) : [...selectedBrands, brand],
    )
  }

  const toggleAvailability = (option: string) => {
    setAvailability(
      availability.includes(option) ? availability.filter((a) => a !== option) : [...availability, option],
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">Filters</h3>
        {activeFiltersCount > 0 && (
          <Button variant="ghost" size="sm" onClick={onClearFilters} className="text-muted-foreground">
            <X className="h-4 w-4 mr-1" />
            Clear all
          </Button>
        )}
      </div>

      <Accordion type="multiple" defaultValue={["categories", "brands", "availability"]} className="w-full">
        {/* Categories */}
        <AccordionItem value="categories">
          <AccordionTrigger className="text-sm font-medium">Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`cat-${category.id}`}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={() => toggleCategory(category.id)}
                  />
                  <Label
                    htmlFor={`cat-${category.id}`}
                    className="text-sm cursor-pointer hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Brands */}
        <AccordionItem value="brands">
          <AccordionTrigger className="text-sm font-medium">Brand</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={() => toggleBrand(brand)}
                  />
                  <Label
                    htmlFor={`brand-${brand}`}
                    className="text-sm cursor-pointer hover:text-primary transition-colors"
                  >
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Availability */}
        <AccordionItem value="availability">
          <AccordionTrigger className="text-sm font-medium">Availability</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="in-stock"
                  checked={availability.includes("in-stock")}
                  onCheckedChange={() => toggleAvailability("in-stock")}
                />
                <Label htmlFor="in-stock" className="text-sm cursor-pointer hover:text-primary transition-colors">
                  In Stock
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="out-of-stock"
                  checked={availability.includes("out-of-stock")}
                  onCheckedChange={() => toggleAvailability("out-of-stock")}
                />
                <Label htmlFor="out-of-stock" className="text-sm cursor-pointer hover:text-primary transition-colors">
                  Out of Stock
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="on-offer"
                  checked={availability.includes("on-offer")}
                  onCheckedChange={() => toggleAvailability("on-offer")}
                />
                <Label htmlFor="on-offer" className="text-sm cursor-pointer hover:text-primary transition-colors">
                  On Offer
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* B2B Note */}
      <div className="p-4 bg-primary/5 rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">B2B Wholesale</strong>
          <br />
          All prices are wholesale rates. GST extra as applicable. Contact us for bulk pricing.
        </p>
      </div>
    </div>
  )
}
