import type { Metadata } from "next"
import { OffersContent } from "@/components/offers/offers-content"

export const metadata: Metadata = {
  title: "Special Offers | Hexamech Linich Tools | Discounts on Automotive Tools",
  description:
    "Grab the best deals on automotive tools. Special discounts on spray guns, welders, power tools & more. Limited time offers for workshops across India.",
}

export default function OffersPage() {
  return (
    <div className="pt-20 md:pt-24">
      <OffersContent />
    </div>
  )
}
