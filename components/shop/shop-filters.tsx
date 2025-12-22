"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"

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
  availability,
  setAvailability,
}: ShopFiltersProps) {
  const [brandSearch, setBrandSearch] = useState("")

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

  const filteredBrands = brands.filter(b => b.toLowerCase().includes(brandSearch.toLowerCase()))

  return (
    <div className="space-y-4">
      <Accordion type="multiple" defaultValue={["categories", "brands", "availability"]} className="w-full">
        {/* Categories Section */}
        <AccordionItem value="categories" className="border-none">
          <AccordionTrigger className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 hover:text-primary py-4 hover:no-underline select-none">
            Categories
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <div className="space-y-2.5 pt-1">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-3 group cursor-pointer" onClick={() => toggleCategory(category.id)}>
                  <Checkbox
                    id={`cat-${category.id}`}
                    checked={selectedCategories.includes(category.id)}
                    className="h-4 w-4 rounded border-zinc-200 dark:border-zinc-800 data-[state=checked]:bg-primary data-[state=checked]:border-primary transition-all"
                  />
                  <Label
                    htmlFor={`cat-${category.id}`}
                    className={`text-xs font-bold cursor-pointer transition-colors ${selectedCategories.includes(category.id) ? "text-primary" : "text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100"}`}
                  >
                    {category.name}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Brands Section */}
        <AccordionItem value="brands" className="border-none">
          <AccordionTrigger className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 hover:text-primary py-4 hover:no-underline select-none">
            Brands
          </AccordionTrigger>
          <AccordionContent className="pb-4 overflow-hidden">
            <div className="relative mb-4 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-300 dark:text-zinc-700 group-focus-within:text-primary transition-colors" />
              <Input
                placeholder="Search..."
                className="h-9 pl-9 text-xs bg-zinc-50 dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-800 rounded-xl transition-all font-medium"
                value={brandSearch}
                onChange={(e) => setBrandSearch(e.target.value)}
              />
            </div>
            <div className="space-y-2.5 pt-1 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredBrands.map((brand) => (
                <div key={brand} className="flex items-center space-x-3 group cursor-pointer" onClick={() => toggleBrand(brand)}>
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={selectedBrands.includes(brand)}
                    className="h-4 w-4 rounded border-zinc-200 dark:border-zinc-800 data-[state=checked]:bg-primary data-[state=checked]:border-primary transition-all"
                  />
                  <Label
                    htmlFor={`brand-${brand}`}
                    className={`text-xs font-bold cursor-pointer transition-colors ${selectedBrands.includes(brand) ? "text-primary" : "text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100"}`}
                  >
                    {brand}
                  </Label>
                </div>
              ))}
              {filteredBrands.length === 0 && (
                <p className="text-[10px] text-zinc-400 italic py-2">No brands found.</p>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Availability Section */}
        <AccordionItem value="availability" className="border-none">
          <AccordionTrigger className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 hover:text-primary py-4 hover:no-underline select-none">
            Quick Filter
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <div className="space-y-2.5 pt-1">
              {[
                { id: "in-stock", label: "Ready to Ship" },
                { id: "on-offer", label: "Special Deals" },
              ].map((option) => (
                <div key={option.id} className="flex items-center space-x-3 group cursor-pointer" onClick={() => toggleAvailability(option.id)}>
                  <Checkbox
                    id={option.id}
                    checked={availability.includes(option.id)}
                    className="h-4 w-4 rounded border-zinc-200 dark:border-zinc-800 data-[state=checked]:bg-primary data-[state=checked]:border-primary transition-all"
                  />
                  <Label htmlFor={option.id} className={`text-xs font-bold cursor-pointer transition-colors ${availability.includes(option.id) ? "text-primary" : "text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100"}`}>
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 10px;
        }
        :global(.dark) .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #27272a;
        }
      `}</style>
    </div>
  )
}
