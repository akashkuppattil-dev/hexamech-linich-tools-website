import { ContactForm } from "@/components/contact/contact-form"
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Users,
  Headphones,
  Zap,
  CheckCircle,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Contact Hexamech Linich Tools | B2B Automotive Tools Supplier | Kerala",
  description:
    "Contact Hexamech Linich Tools for RFQs, bulk procurement, dealership enquiries, and professional tool recommendations. Response within 30 minutes during business hours.",
}

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

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32">
      {/* Hero Section - Improved mobile */}
      <section className="py-10 sm:py-16 md:py-24 bg-gradient-to-br from-secondary/50 via-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
            <Headphones className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
            B2B Sales & Support
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Let's Build Your
            <span className="text-primary block">Workshop Together</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Connect with our expert team for product enquiries, bulk procurement, dealership opportunities, and
            technical assistance.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
            <span className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <strong>4,000+</strong> Happy Workshops
            </span>
            <span className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <strong>30 min</strong> Response Time
            </span>
            <span className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <strong>GST</strong> Verified Business
            </span>
          </div>
        </div>
      </section>

      {/* Why Contact Us - Improved mobile grid */}
      <section className="py-8 sm:py-12 border-b border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {whyContactUs.map((item) => (
              <div key={item.title} className="text-center p-3 sm:p-4">
                <div className="inline-flex p-2 sm:p-3 bg-primary/10 rounded-lg sm:rounded-xl mb-2 sm:mb-3">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Improved mobile layout */}
      <section className="py-10 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div>
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

            {/* Contact Info */}
            <div>
              <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
                Contact Information
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Talk to Our Team</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {contactMethods.map((method) => (
                  <Card key={method.title} className="glass hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="p-2 sm:p-3 bg-primary/10 rounded-lg sm:rounded-xl shrink-0">
                          <method.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-semibold text-foreground text-sm sm:text-base">{method.title}</h3>
                          {method.href ? (
                            <a
                              href={method.href}
                              className="text-primary hover:underline font-medium text-sm sm:text-base break-all"
                              target={method.href.startsWith("http") ? "_blank" : undefined}
                              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            >
                              {method.value}
                            </a>
                          ) : (
                            <p className="font-medium text-foreground text-sm sm:text-base">{method.value}</p>
                          )}
                          <p className="text-xs sm:text-sm text-muted-foreground mt-1">{method.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Trust Indicators */}
              <Card className="glass mb-6 sm:mb-8 border-primary/20">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-lg sm:rounded-xl shrink-0">
                      <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm sm:text-base mb-2 sm:mb-3">
                        Trusted B2B Supplier
                      </h3>
                      <ul className="text-xs sm:text-sm text-muted-foreground space-y-1.5 sm:space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
                          GST Registered Business
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
                          Genuine OEM & Professional Tool Brands
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
                          Dedicated B2B Sales & Support Team
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
                          Secure & Confidential Enquiries
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Address */}
              <Card className="glass">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-accent/10 rounded-lg sm:rounded-xl shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm sm:text-base mb-2">Visit Our Office</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Ground Floor, Door No 17/346,
                        <br />
                        Vpalp School, Chulliparamb,
                        <br />
                        Near Farook College, Calicut
                        <br />
                        Kerala – India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Map */}
              <div className="mt-6 sm:mt-8 rounded-xl overflow-hidden aspect-video relative group shadow-lg">
                <a
                  href="https://maps.app.goo.gl/JB79VHee4sQ4QkDT7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label="Open location in Google Maps"
                />

                <iframe
                  src="https://www.google.com/maps?q=Near+Farook+College+Calicut+Kerala&output=embed"
                  className="w-full h-full pointer-events-none"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hexamech Linich Tools Location"
                />

                <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-medium text-foreground shadow-md opacity-0 group-hover:opacity-100 transition">
                  Open in Google Maps
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat Indicator - Hidden on mobile */}
      <div className="fixed bottom-24 right-4 sm:right-6 z-40 hidden lg:block">
        <div className="glass rounded-xl shadow-xl p-4 max-w-xs border border-primary/20">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="font-medium text-sm">Chat with our Tool Expert</span>
          </div>
          <p className="text-xs text-muted-foreground">Average response time: 30 minutes</p>
        </div>
      </div>
    </div>
  )
}
