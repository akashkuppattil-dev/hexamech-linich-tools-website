import Link from "next/link"
import { MessageCircle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaBand() {
  return (
    <section className="py-8 sm:py-10 md:py-12 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-3 sm:mb-4">
            Need Bulk Pricing or Workshop Setup?
          </h2>
          <p className="text-primary-foreground/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
            Setting up a new workshop or need bulk quantities? Get customized quotes and expert guidance from our team.
          </p>
          <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link href="/contact" className="w-full xs:w-auto">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 w-full xs:w-auto"
              >
                <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Send RFQ
              </Button>
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi%20Hexamech%2C%20I%20need%20bulk%20pricing%20for%20workshop%20setup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full xs:w-auto"
            >
              <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white border-0 w-full xs:w-auto">
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
