"use client"

import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const productVideos = [
  {
    id: 1,
    title: "Car O Liner Automatic Spot Welding Machine",
    thumbnail: "/spot-welding-machine-automotive-body-repair.jpg",
    videoId: "g3jg28x2Y6Y",
  },
  {
    id: 2,
    title: "Digital Display PCL Tyre Inflator Gauge",
    thumbnail: "/digital-tyre-inflator-gauge-pcl-professional.jpg",
    videoId: "S3q04gUcK3U",
  },
  {
    id: 3,
    title: "Black Digital PCL Accura QUBE0 Tyre Inflator",
    thumbnail: "/pcl-accura-qube-tyre-inflator-black-digital.jpg",
    videoId: "g-7UG0yFF7g",
  },
  {
    id: 4,
    title: "Bosch GPO 12 CE Professional Polisher",
    thumbnail: "/bosch-gpo-12-ce-professional-polisher-car-detailin.jpg",
    videoId: "IHm6-hAqg5c",
  },
]

export function ProductVideosSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 md:mb-4">Product Videos</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Watch our products in action and see how they can enhance your workshop
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {productVideos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="glass overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-video bg-secondary/50">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-5 w-5 sm:h-6 sm:w-6 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-3 sm:p-4">
                  <h3 className="font-semibold text-sm sm:text-base text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
