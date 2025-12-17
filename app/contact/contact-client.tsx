"use client"

import type React from "react"

import { useState } from "react"
import { ContactForm } from "@/components/contact/contact-form"
import {
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Users,
  Headphones,
  Zap,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    value: "+91 75106 38693",
    href: "tel:+917510638693",
    description: "Call our sales team for immediate assistance",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business",
    value: "+91 75106 38693",
    href: "https://wa.me/917510638693?text=Hi%20Hexamech%2C%20I%27m%20interested%20in%20your%20products",
    description: "Fast RFQs & bulk enquiries via WhatsApp",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hexamechlinichtools@gmail.com",
    href: "mailto:hexamechlinichtools@gmail.com",
    description: "Detailed product or dealership enquiries",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon – Sat | 9 AM – 7 PM",
    description: "Response within 30 minutes",
  },
]

const whyContactUs = [
  {
    icon: Zap,
    title: "Quick Response",
    description: "Get quotes within 30 minutes",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Personal manager for bulk orders",
  },
  {
    icon: Headphones,
    title: "Expert Guidance",
    description: "Technical advice from pros",
  },
  {
    icon: CheckCircle,
    title: "Verified Supplier",
    description: "GST registered business",
  },
]

export function ContactClientPage() {
  const [contactIndex, setContactIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX)
  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX)
    handleSwipe()
  }
  const handleSwipe = () => {
    const isLeftSwipe = touchStart - touchEnd > 50
    const isRightSwipe = touchEnd - touchStart > 50
    if (isLeftSwipe) {
      setContactIndex((prev) => (prev + 1) % contactMethods.length)
    }
    if (isRightSwipe) {
      setContactIndex((prev) => (prev - 1 + contactMethods.length) % contactMethods.length)
    }
  }

  return (
    <div className="pt-16 sm:pt-18 md:pt-20">
      {/* ... existing hero and why contact us sections ... */}

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Contact Form - Left Column */}
            <div className="lg:col-span-2">
              <Badge className="mb-3 sm:mb-4 bg-accent/10 text-accent border-accent/20 text-xs sm:text-sm">
                Get in Touch
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Request a Quote / Business Enquiry
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                Submit your requirement and our team will get back to you within
                <strong> 30 minutes</strong> during business hours.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info - Right Column */}
            <div className="lg:col-span-1 space-y-4 sm:space-y-6">
              <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
                Quick Contact
              </Badge>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Contact Channels</h3>

              {/* Desktop Contact Methods */}
              <div className="hidden md:space-y-4">
                {contactMethods.map((method) => (
                  <Card key={method.title} className="glass hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg shrink-0">
                          {method.icon({ className: "h-4 w-4 sm:h-5 sm:w-5 text-primary" })}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-foreground text-xs sm:text-sm">{method.title}</h4>
                          {method.href ? (
                            <a
                              href={method.href}
                              className="text-primary hover:underline font-medium text-xs sm:text-sm break-all"
                              target={method.href.startsWith("http") ? "_blank" : undefined}
                              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            >
                              {method.value}
                            </a>
                          ) : (
                            <p className="font-medium text-foreground text-xs sm:text-sm">{method.value}</p>
                          )}
                          <p className="text-xs text-muted-foreground mt-0.5">{method.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Mobile Carousel for Contact Channels */}
              <div className="md:hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <button
                    onClick={() =>
                      setContactIndex((prev) => (prev - 1 + contactMethods.length) % contactMethods.length)
                    }
                    className="p-2 hover:bg-primary/20 rounded-lg transition shrink-0"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <Card className="glass hover:shadow-lg transition-all duration-300 flex-1">
                    <CardContent className="p-3">
                      <div className="flex items-start gap-2">
                        <div className="p-1.5 bg-primary/10 rounded-lg shrink-0">
                          {contactMethods[contactIndex].icon({ className: "h-4 w-4 text-primary" })}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold text-foreground text-xs">
                            {contactMethods[contactIndex].title}
                          </h4>
                          {contactMethods[contactIndex].href ? (
                            <a
                              href={contactMethods[contactIndex].href}
                              className="text-primary hover:underline font-medium text-xs break-all block"
                              target={contactMethods[contactIndex].href.startsWith("http") ? "_blank" : undefined}
                              rel={
                                contactMethods[contactIndex].href.startsWith("http") ? "noopener noreferrer" : undefined
                              }
                            >
                              {contactMethods[contactIndex].value}
                            </a>
                          ) : (
                            <p className="font-medium text-foreground text-xs">{contactMethods[contactIndex].value}</p>
                          )}
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {contactMethods[contactIndex].description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <button
                    onClick={() => setContactIndex((prev) => (prev + 1) % contactMethods.length)}
                    className="p-2 hover:bg-primary/20 rounded-lg transition shrink-0"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex justify-center gap-2">
                  {contactMethods.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setContactIndex(idx)}
                      className={`h-2 rounded-full transition ${idx === contactIndex ? "bg-primary w-6" : "bg-primary/30 w-2"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ... existing trust indicators and address sections ... */}
        </div>
      </section>

      {/* ... existing find location and chat sections ... */}
    </div>
  )
}
