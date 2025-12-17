import type { Metadata } from "next"
import { OffersContent } from "@/components/offers/offers-content"

export const metadata: Metadata = {
  title: "Special Offers | Hexamech Linich Tools | Discounts on Automotive Tools",
  description:
    "Grab the best deals on automotive tools. Special discounts on spray guns, welders, power tools & more. Limited time offers for workshops across India.",
}

export default function OffersPage() {
  return (
    <div className="min-h-screen pt-16 sm:pt-18 md:pt-20">
      <OffersContent />
    </div>
  )
}
