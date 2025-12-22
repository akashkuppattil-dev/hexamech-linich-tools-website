import { Clock, Instagram, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/shop", label: "Products" },
  { href: "/shop", label: "Brands" },
  { href: "/shop", label: "Workshop Solutions" },
  { href: "/contact", label: "Contact" },
]

const legalLinks = [
  { href: "/offers", label: "Offers" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
]

const productCategories = [
  "Lifts & Hoists",
  "Welding Machines",
  "Paint & Spray Systems",
  "Air Compressors",
  "Wheel Service Equipment",
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-100">
      {/* TOP CTA STRIP */}
      <div className="border-b border-slate-800 bg-slate-900/80">
        <div className="container mx-auto px-4 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <p className="text-sm sm:text-base font-semibold text-slate-50">
              Planning or upgrading an automotive workshop?
            </p>
            <p className="text-xs sm:text-sm text-slate-400">
              Fast RFQs · Genuine global brands · Dedicated B2B support
            </p>
          </div>
          <div className="flex gap-2 sm:gap-3 w-full sm:w-auto justify-center sm:justify-end">
            <a
              href="tel:+917510638693"
              className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-md bg-primary text-primary-foreground text-xs sm:text-sm font-semibold"
            >
              <Phone className="h-4 w-4" />
              <span>Call Sales</span>
            </a>
            <a
              href="https://wa.me/917510638693?text=Hi%20Hexamech%2C%20I%27m%20interested%20in%20your%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-md bg-emerald-500 text-white text-xs sm:text-sm font-semibold"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp RFQ</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="container mx-auto px-4 py-10 md:py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Column 1 – Company Identity */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt="Hexamech Linich Tools"
                width={52}
                height={52}
                className="rounded-md border border-slate-700 bg-slate-900 object-contain"
              />
              <div className="leading-tight">
                <p className="text-xs tracking-[0.18em] uppercase text-slate-400">Hexamech</p>
                <p className="font-semibold text-sm sm:text-base text-slate-50">
                  Hexamech Linich Tools
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-xs">
              B2B supplier of automotive workshop infrastructure and industrial tools, serving professional
              workshops and service centers across India.
            </p>

            <div className="flex items-center gap-2 text-sm text-slate-200">
              <Truck className="h-4 w-4 text-primary" />
              <span>Kerala same-day · Pan-India dispatch</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>GST registered · Verified B2B supplier</span>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href="https://instagram.com/hexamech_linich_tools"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 hover:border-primary hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/917510638693?text=Hi%20Hexamech%2C%20I%27m%20interested%20in%20your%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 px-3 items-center justify-center rounded-full border border-slate-700 text-emerald-400 hover:border-emerald-500 hover:text-emerald-300 transition-colors text-xs font-medium"
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                WhatsApp Business
              </a>
            </div>
          </div>

          {/* Column 2 – Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide text-slate-200 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex text-slate-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-slate-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Product Categories */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide text-slate-200 uppercase">
              Product Categories
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {productCategories.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="inline-block h-px w-3 bg-slate-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Contact & Business Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide text-slate-200 uppercase">
              Contact &amp; Business
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                <span>
                  Ground Floor, Door No 17/346, Chulliparamba, Near Farook College, Calicut, Kerala – India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+917510638693" className="hover:text-primary transition-colors">
                  +91 75106 38693
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a
                  href="mailto:hexamechlinichtools@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  hexamechlinichtools@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-primary shrink-0" />
                <a
                  href="https://wa.me/917510638693?text=Hi%20Hexamech%2C%20I%27m%20interested%20in%20your%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp contact for RFQs
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span>Business hours: Mon – Sat, 9:00 AM – 7:00 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <Truck className="h-4 w-4 text-primary shrink-0" />
                <span>Service region: Pan-India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-slate-400">
            Copyright © {currentYear} Hexamech Linich Tools. All rights reserved.
          </p>
          <p className="text-[10px] sm:text-xs text-slate-500">
            B2B automotive workshop infrastructure &amp; industrial tools · Malappuram, Kerala · Pan-India delivery
          </p>
        </div>
      </div>
    </footer>
  )
}
