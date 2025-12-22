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
]

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalItems = testimonials.length

  const nextSlide = useCallback(() => setCurrentIndex((prev) => (prev + 1) % totalItems), [totalItems])
  const prevSlide = useCallback(() => setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems), [totalItems])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="py-12 sm:py-16 bg-zinc-50 dark:bg-zinc-900/10 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white mb-2 tracking-tighter">Voices of Trust</h2>
          <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-medium max-w-xl mx-auto italic">
            Feedback from professional workshops and industrial partners.
          </p>
        </div>

        <div className="relative group/testimonials max-w-5xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute -left-2 sm:-left-12 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white dark:bg-zinc-800 shadow-md border border-zinc-100 dark:border-zinc-800 opacity-0 group-hover/testimonials:opacity-100 transition-all hover:bg-primary hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
            {[0, 1].map((offset) => {
              const testimonial = testimonials[(currentIndex + offset) % totalItems]
              return (
                <Card key={testimonial.id} className="bg-white dark:bg-zinc-900 border-none shadow-lg rounded-2xl p-6 flex flex-col h-full animate-in fade-in duration-500">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/10 mb-4" />
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed italic mb-6 flex-1">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-zinc-100 dark:border-zinc-800">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-xs text-zinc-900 dark:text-zinc-100 truncate">{testimonial.name}</h4>
                      <p className="text-[10px] text-zinc-500 dark:text-zinc-500 font-medium truncate">{testimonial.role} • {testimonial.location}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute -right-2 sm:-right-12 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white dark:bg-zinc-800 shadow-md border border-zinc-100 dark:border-zinc-800 opacity-0 group-hover/testimonials:opacity-100 transition-all hover:bg-primary hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex justify-center gap-1.5 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all ${index === currentIndex ? "w-6 bg-primary" : "w-1.5 bg-zinc-300 dark:bg-zinc-800"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
