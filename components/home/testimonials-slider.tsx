"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Owner, Rajesh Auto Workshop",
    location: "Calicut",
    image: "/testimonial-1-indian-mechanic-workshop-owner.jpg",
    content:
      "Quality tools, fast delivery! Hexamech has been our go-to supplier for all automotive tools. Their spray guns are top-notch and the prices are competitive for wholesale.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mohammed Ashraf",
    role: "Manager, Elite Paint Booth",
    location: "Kochi",
    image: "/testimonial-2-indian-paint-booth-manager.jpg",
    content:
      "Our body shop spray guns are fully from Hexamech now. The Devilbiss guns they supply are genuine and their after-sales support is excellent.",
    rating: 5,
  },
  {
    id: 3,
    name: "Suresh Nair",
    role: "Service Manager, Multi-Brand Center",
    location: "Trivandrum",
    image: "/testimonial-3-indian-service-manager.jpg",
    content:
      "Reliable wholesale partner for our multi-brand service center. They always have stock and delivery to Trivandrum is quick. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "Pradeep Menon",
    role: "Owner, Menon Motors",
    location: "Thrissur",
    image: "/testimonial-4-indian-motors-owner.jpg",
    content:
      "The welding machines we bought from Hexamech have been running perfectly for over a year. Great quality and they helped us choose the right equipment.",
    rating: 5,
  },
  {
    id: 5,
    name: "Anwar Ali",
    role: "Proprietor, Ali Garage",
    location: "Malappuram",
    image: "/testimonial-5-indian-garage-proprietor.jpg",
    content:
      "Being from Malappuram, we get same-day delivery from Hexamech. Their tool selection is impressive and Jithin sir personally ensures quality service.",
    rating: 5,
  },
  {
    id: 6,
    name: "Vineeth Krishnan",
    role: "Owner, VK Auto Care",
    location: "Kannur",
    image: "/testimonial-6-indian-auto-care-owner.jpg",
    content:
      "We've been buying power tools from Hexamech for 6 months now. The Bosch grinders and drills are genuine, and the pricing is much better than retail.",
    rating: 5,
  },
  {
    id: 7,
    name: "Shibu Thomas",
    role: "Head Mechanic, Thomas Motors",
    location: "Kottayam",
    image: "/testimonial-7-indian-head-mechanic.jpg",
    content:
      "The pneumatic tools from Hexamech have transformed our workshop efficiency. Fast response on WhatsApp and delivery tracking is always provided.",
    rating: 5,
  },
  {
    id: 8,
    name: "Abdul Rahman",
    role: "Owner, Rahman Paint Works",
    location: "Palakkad",
    image: "/testimonial-8-indian-paint-works-owner.jpg",
    content:
      "Their SATA spray guns are the best in the market. Hexamech understands the needs of professional painters. Will continue to order from them.",
    rating: 5,
  },
  {
    id: 9,
    name: "Gopinath M",
    role: "Service Advisor, Premium Cars",
    location: "Ernakulam",
    image: "/testimonial-9-indian-service-advisor.jpg",
    content:
      "Outstanding bulk pricing for our dealership. The engine cranes and transmission jacks are heavy-duty quality. Very satisfied with Hexamech service.",
    rating: 5,
  },
  {
    id: 10,
    name: "Sajith Kumar",
    role: "Owner, SK Automobile Works",
    location: "Kollam",
    image: "/testimonial-10-indian-automobile-owner.jpg",
    content:
      "From hand tools to welding equipment, Hexamech has everything. Their team is knowledgeable and always suggests the right tool for the job. 5-star service!",
    rating: 5,
  },
]

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const itemsPerPage = 4
  const totalItems = testimonials.length

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return
      setIsAnimating(true)
      setCurrentIndex(index % totalItems)
      setTimeout(() => setIsAnimating(false), 500)
    },
    [isAnimating, totalItems],
  )

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % totalItems)
  }, [currentIndex, totalItems, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((currentIndex - 1 + totalItems) % totalItems)
  }, [currentIndex, totalItems, goToSlide])

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const visibleTestimonials = Array.from({ length: itemsPerPage }).map(
    (_, i) => testimonials[(currentIndex + i) % totalItems],
  )

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 md:mb-4">
            What Our Customers Say
          </h2>
        </div>

        <div className="relative">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 transition-opacity duration-500 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            {visibleTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="glass h-full flex flex-col">
                <CardContent className="p-4 sm:p-5 md:p-6 flex flex-col h-full">
                  <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-primary/30 mb-3 sm:mb-4 shrink-0" />

                  <p className="text-foreground leading-relaxed mb-4 sm:mb-6 flex-grow text-xs sm:text-sm">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-3 mt-auto">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover sm:w-12 sm:h-12"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground text-xs sm:text-sm truncate">{testimonial.name}</h4>
                      <p className="text-[10px] sm:text-xs text-muted-foreground truncate">{testimonial.role}</p>
                      <p className="text-[10px] sm:text-xs text-primary">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex gap-0.5 mt-2 sm:mt-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 hidden lg:flex bg-background shadow-lg h-10 w-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 hidden lg:flex bg-background shadow-lg h-10 w-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex justify-center gap-3 mt-4 sm:mt-6 lg:hidden">
          <Button variant="outline" size="icon" onClick={prevSlide} className="h-9 w-9 bg-transparent">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextSlide} className="h-9 w-9 bg-transparent">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6 flex-wrap">
          {[...Array(totalItems)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 sm:h-3 rounded-full transition-all ${
                index >= currentIndex && index < currentIndex + itemsPerPage
                  ? "bg-primary w-5 sm:w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2 sm:w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
