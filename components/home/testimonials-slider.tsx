"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Owner, Auto Workshop",
    location: "Calicut",
    image: "/testimonial-1-indian-mechanic-workshop-owner.jpg",
    content: "Quality tools, fast delivery! Hexamech has been our go-to supplier for all automotive tools. Competitive wholesale prices.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mohammed Ashraf",
    role: "Manager, Body Shop",
    location: "Kochi",
    image: "/testimonial-2-indian-paint-booth-manager.jpg",
    content: "Our body shop spray guns are fully from Hexamech. Genuine products and excellent after-sales support.",
    rating: 5,
  },
  {
    id: 3,
    name: "Suresh Nair",
    role: "Service Manager",
    location: "Trivandrum",
    image: "/testimonial-3-indian-service-manager.jpg",
    content: "Reliable wholesale partner. They always have stock and delivery to Trivandrum is quick. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "Pradeep Menon",
    role: "Proprietor",
    location: "Thrissur",
    image: "/testimonial-4-indian-motors-owner.jpg",
    content: "Welding machines have been running perfectly for a year. They helped us choose the right equipment.",
    rating: 5,
  },
  {
    id: 5,
    name: "Anwar Ali",
    role: "Workshop Owner",
    location: "Malappuram",
    image: "/testimonial-5-indian-garage-proprietor.jpg",
    content: "The range of power tools available at Hexamech is unmatched. We received our order within 24 hours in Malappuram.",
    rating: 5,
  },
  {
    id: 6,
    name: "Shibu Thomas",
    role: "Chief Technician",
    location: "Kottayam",
    image: "/testimonial-7-indian-head-mechanic.jpg",
    content: "Highly impressed with the quality of pneumatic tools. Hexamech is definitely the best in Kerala for industrial tools.",
    rating: 5,
  },
]

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(4)
  const totalItems = testimonials.length

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1)
      else if (window.innerWidth < 1024) setItemsToShow(2)
      else setItemsToShow(4)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = useCallback(() => setCurrentIndex((prev) => (prev + 1) % totalItems), [totalItems])
  const prevSlide = useCallback(() => setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems), [totalItems])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const visibleTestimonials = Array.from({ length: itemsToShow }).map(
    (_, i) => testimonials[(currentIndex + i) % totalItems],
  )

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full mb-4">
            <Star className="h-3 w-3 text-[#2E7D32] fill-current" />
            <span className="text-[10px] font-black text-[#2E7D32] uppercase tracking-widest">Customer Satisfaction</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white mb-4 tracking-tight">Voices of Trust</h2>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-medium max-w-xl mx-auto italic">
            Feedback from professional workshops and industrial partners across South India.
          </p>
        </div>

        <div className="relative group/testimonials max-w-7xl mx-auto">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute -left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white dark:bg-zinc-800 shadow-xl border-zinc-100 dark:border-zinc-800 opacity-0 group-hover/testimonials:opacity-100 transition-all hover:bg-[#2E7D32] hover:text-white"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {visibleTestimonials.map((testimonial, idx) => (
              <Card key={`${testimonial.id}-${idx}`} className="bg-zinc-50 dark:bg-zinc-900 border-none shadow-sm hover:shadow-md transition-all rounded-3xl p-6 flex flex-col h-full animate-in fade-in duration-500">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-2.5 w-2.5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-[#2E7D32]/20 mb-4" />
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed italic mb-6 flex-1">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white dark:border-zinc-700 shadow-sm">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-[11px] text-zinc-900 dark:text-zinc-100 truncate">{testimonial.name}</h4>
                    <p className="text-[10px] text-[#2E7D32] font-black uppercase tracking-tight truncate">{testimonial.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute -right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white dark:bg-zinc-800 shadow-xl border-zinc-100 dark:border-zinc-800 opacity-0 group-hover/testimonials:opacity-100 transition-all hover:bg-[#2E7D32] hover:text-white"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all ${index === currentIndex ? "w-8 bg-[#2E7D32]" : "w-2 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
