import { HeroSection } from "@/components/home/hero-section"
import { TrustBand } from "@/components/home/trust-band"
import { TopProductsCarousel } from "@/components/home/top-products-carousel"
import { CategoriesGrid } from "@/components/home/categories-grid"
import { ProductVideosSection } from "@/components/home/product-videos-section"
import { TestimonialsSlider } from "@/components/home/testimonials-slider"
import { WhyHexamech } from "@/components/home/why-hexamech"
import { BusinessDetails } from "@/components/home/business-details"
import { BrandsSection } from "@/components/home/brands-section"
import { TrustedCustomersSection } from "@/components/home/trusted-customers-section"
import { CtaBand } from "@/components/home/cta-band"
import { InstagramStrip } from "@/components/home/instagram-strip"

export default function HomePage() {
  return (
    <div className="pt-0">
      <HeroSection />
      <TrustBand />
      <TopProductsCarousel />
      <CategoriesGrid />
      <BrandsSection />
      <TrustedCustomersSection />
      <ProductVideosSection />
      <TestimonialsSlider />
      <WhyHexamech />
      <BusinessDetails />
      <CtaBand />
      <InstagramStrip />
    </div>
  )
}
