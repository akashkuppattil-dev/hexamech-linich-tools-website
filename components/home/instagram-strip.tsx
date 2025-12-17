import { Instagram, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function InstagramStrip() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-pink-500/5 via-purple-500/10 to-pink-500/5 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Instagram Icon with gradient */}
          <div className="inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 mb-4 sm:mb-6 shadow-lg">
            <Instagram className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
          </div>

          {/* Handle and CTA */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-3">
            @hexamech_linich_tools
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
            Follow for latest offers, new arrivals & live delivery updates
          </p>

          {/* Follow Button */}
          <a href="https://instagram.com/hexamech_linich_tools" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 hover:from-pink-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg text-sm sm:text-base px-4 sm:px-6"
            >
              <Instagram className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Follow on Instagram
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 ml-2" />
            </Button>
          </a>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm text-muted-foreground">
            <span>Daily Product Updates</span>
            <span className="text-pink-500">•</span>
            <span>Live Delivery Stories</span>
            <span className="text-pink-500 hidden sm:inline">•</span>
            <span className="hidden sm:inline">Exclusive Offers</span>
          </div>
        </div>
      </div>
    </section>
  )
}
