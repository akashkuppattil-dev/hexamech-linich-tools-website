import Link from "next/link"
import Image from "next/image"
import {
  Instagram,
  MessageCircle,
  Facebook,
  MapPin,
  Mail,
  Clock,
  Truck,
  Phone,
  ShieldCheck,
  ExternalLink,
} from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/offers", label: "Offers" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* PREMIUM CTA STRIP */}
      <div className="bg-secondary/40 border-b border-border">
        <div className="container mx-auto px-4 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm sm:text-base font-semibold text-foreground">
              Need reliable automotive tools for your workshop or dealership?
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Fast RFQs • Genuine brands • Dedicated B2B support
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="tel:+917510638693"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs sm:text-sm font-medium hover:opacity-90 transition"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xs:inline">Call Now</span>
              <span className="xs:hidden">Call</span>
            </a>
            <a
              href="https://wa.me/917510638693?text=Hi%20Hexamech%2C%20I%27m%20interested%20in%20your%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-[#25D366] text-white text-xs sm:text-sm font-medium hover:opacity-90 transition"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="Hexamech Linich Tools"
                width={56}
                height={56}
                className="rounded-xl"
                unoptimized
              />
              <div>
                <h2 className="font-bold text-lg text-foreground">Hexamech</h2>
                <p className="text-xs text-muted-foreground">Linich Tools</p>
              </div>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional automotive & workshop tools supplier serving workshops, dealers, and industrial buyers across
              India.
            </p>

            <div className="flex items-center gap-2 mt-4 text-sm text-accent">
              <Truck className="h-4 w-4" />
              <span>Kerala Same-Day • All-India Shipping</span>
            </div>

            <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" />
              GST Registered • Verified B2B Supplier
            </div>

            <div className="flex gap-3 mt-5">
              <a
                href="https://instagram.com/hexamech_linich_tools"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/917510638693?text=Hi%20Hexamech%2C%20I%27m%20interested%20in%20your%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-full hover:bg-[#25D366] hover:text-white transition"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/hexamechtools"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-full hover:bg-[#1877F2] hover:text-white transition"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Ground Floor, Door No 17/346, Chulliparamba, Near Farook College, Calicut, Kerala – India</span>
              </li>

              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+917510638693" className="hover:text-primary">
                  +91 75106 38693
                </a>
              </li>

              <li className="flex gap-3">
                <MessageCircle className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="https://wa.me/917510638693?text=Hi%20Hexamech%2C%20I%27m%20interested%20in%20your%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  WhatsApp Business
                </a>
              </li>

              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:hexamechlinichtools@gmail.com" className="hover:text-primary break-all">
                  hexamechlinichtools@gmail.com
                </a>
              </li>

              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <a
              href="https://instagram.com/hexamech_linich_tools"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 sm:p-6 rounded-xl bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 transition group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <Instagram className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">@hexamech_linich_tools</p>
                  <p className="text-white/80 text-xs">Follow for latest offers</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white text-sm font-medium">
                <span>Visit Instagram</span>
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            <div className="mt-4 p-4 bg-secondary/50 rounded-xl">
              <p className="text-xs text-muted-foreground mb-2">Get instant quotes via WhatsApp</p>
              <a
                href="https://wa.me/917510638693?text=Hi%20Hexamech%2C%20I%27m%20interested%20in%20your%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] font-semibold text-sm hover:underline"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hexamech Linich Tools. All Rights Reserved.
          </p>
          <p className="text-[10px] sm:text-xs text-muted-foreground">
            B2B Automotive Tools Supplier • Malappuram, Kerala • All-India Delivery
          </p>
        </div>
      </div>
    </footer>
  )
}
