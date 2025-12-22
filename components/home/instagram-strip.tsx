import { Instagram, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function InstagramStrip() {
  return (
    <section className="py-8 bg-zinc-50 dark:bg-zinc-900/10 border-t border-zinc-100 dark:border-zinc-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex p-3 rounded-2xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 mb-4 shadow-xl">
            <Instagram className="h-6 w-6 text-white" />
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white mb-2 tracking-tighter">
            @hexamech_linich_tools
          </h3>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-6 font-medium italic">
            Join 4,000+ workshop partners for live delivery stories and new gear drops.
          </p>

          <a href="https://instagram.com/hexamech_linich_tools" target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:opacity-90 shadow-lg text-[10px] font-black uppercase tracking-widest px-8 h-10 rounded-xl"
            >
              <Instagram className="h-3.5 w-3.5 mr-2" />
              Follow Instagram
              <ExternalLink className="h-3 w-3 ml-2 opacity-50" />
            </Button>
          </a>

          <div className="flex flex-wrap justify-center gap-4 mt-8 text-[9px] font-black uppercase tracking-widest text-zinc-400">
            <span>Daily Updates</span>
            <span className="text-zinc-200 dark:text-zinc-800">•</span>
            <span>Live Stories</span>
            <span className="text-zinc-200 dark:text-zinc-800">•</span>
            <span>Bulk Offers</span>
          </div>
        </div>
      </div>
    </section>
  )
}
