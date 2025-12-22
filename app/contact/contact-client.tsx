"use client"

import { ContactForm } from "@/components/contact/contact-form"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CONTACT } from "@/lib/constants"
import {
    CheckCircle,
    Clock,
    ExternalLink,
    Headphones,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Users,
    Zap,
} from "lucide-react"

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
  // Google Maps embed URL
  // To get your exact embed code:
  // 1. Go to https://www.google.com/maps
  // 2. Search for: "Chulliparamba, Near Farook College, Calicut"
  // 3. Click Share > Embed a map > Copy the iframe src URL
  // 4. Replace the mapUrl below with your copied URL
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d75.8!3d11.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDEyJzAwLjAiTiA3NcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.BUSINESS_ADDRESS)}`

  return (
    <div className="pt-12 sm:pt-14 md:pt-16">
      {/* Hero Section */}
      <section className="py-6 sm:py-7 md:py-8 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Contact Us</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
            Get in Touch with Hexamech
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help with your automotive tools needs. Reach out for quotes, technical support, or bulk orders.
          </p>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-6 sm:py-7 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {whyContactUs.map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.title} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Contact Form - Left Column */}
            <div className="lg:col-span-2">
              <Badge className="mb-2 bg-accent/10 text-accent border-accent/20 text-xs sm:text-sm">
                Get in Touch
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Request a Quote / Business Enquiry
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Submit your requirement and our team will get back to you within
                <strong> 30 minutes</strong> during business hours.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info - Right Column */}
            <div className="lg:col-span-1 space-y-4">
              <div>
                <Badge className="mb-2 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
                  Quick Contact
                </Badge>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Contact Channels</h3>

                {/* All Contact Methods - Displayed in List */}
                <div className="space-y-3">
                  {contactMethods.map((method) => {
                    const Icon = method.icon
                    return (
                      <Card key={method.title} className="glass hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="font-semibold text-foreground text-sm mb-1">{method.title}</h4>
                              {method.href ? (
                                <a
                                  href={method.href}
                                  className="text-primary hover:underline font-medium text-sm break-all block"
                                  target={method.href.startsWith("http") ? "_blank" : undefined}
                                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                >
                                  {method.value}
                                </a>
                              ) : (
                                <p className="font-medium text-foreground text-sm">{method.value}</p>
                              )}
                              <p className="text-xs text-muted-foreground mt-1">{method.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-6 sm:py-8 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4 sm:mb-5">
            <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">Find Us</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">Visit Our Location</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {CONTACT.BUSINESS_ADDRESS}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            {/* Google Maps Embed */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full h-64 sm:h-80 md:h-96">
                  <iframe
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                    title="Hexamech Linich Tools Location"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Map Info Card */}
            <Card className="glass">
              <CardContent className="p-5 flex flex-col justify-center h-full">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Business Address</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{CONTACT.BUSINESS_ADDRESS}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                      <p className="text-sm text-muted-foreground">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>

                  <a
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
