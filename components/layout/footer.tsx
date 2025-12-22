import {
    Clock,
    ExternalLink,
    Facebook,
    Instagram,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    ShieldCheck,
    Truck,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
    <footer className="bg-slate-950 text-slate-100">
      {/* PREMIUM CTA STRIP */}
      <div className="border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-900 w-full">
        <div className="px-4 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left flex-1">
            <p className="text-sm sm:text-base font-semibold text-slate-100">
              Need reliable automotive tools for your workshop or dealership?
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Fast RFQs • Genuine brands • Dedicated B2B support
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="tel:+917510638693"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-blue-600 text-white text-xs sm:text-sm font-semibold hover:bg-blue-700 transition duration-200"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xs:inline">Call Now</span>
              <span className="xs:hidden">Call</span>
            </a>
            <a
              href="https://wa.me/917510638693?text=Hi%20Hexamech%2C%20I%27m%20interested%20in%20your%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-[#25D366] text-white text-xs sm:text-sm font-semibold hover:bg-[#20BA5C] transition duration-200"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div className="w-full px-4 py-8 sm:py-9 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 mb-6">
          {/* COLUMN 1: BRAND & IDENTITY */}
          <div className="lg:pr-4">
            <div className="mb-4">
              <Link href="/" className="inline-flex items-center gap-3 mb-4">
                <div className="relative">
                  <Image
                    src="/images/logo.jpg"
                    alt="Hexamech Linich Tools"
                    width={72}
                    height={72}
                    className="rounded-xl shadow-lg"
                    sizes="72px"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-xl sm:text-2xl text-white">Hexamech</h2>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium">Linich Tools</p>
                </div>
              </Link>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Trusted B2B supplier of automotive & workshop tools across India. Serving workshops, dealers, and industrial buyers with quality and reliability.
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Truck className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>Kerala Same-Day • All-India Shipping</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-300">
                <ShieldCheck className="h-5 w-5 text-blue-400 shrink-0" />
                <span>GST Registered • Verified Supplier</span>
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/hexamech_linich_tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-800 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] text-slate-300 hover:text-white rounded-full transition duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/917510638693?text=Hi%20Hexamech%2C%20I%27m%20interested%20in%20your%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-800 hover:bg-[#25D366] text-slate-300 hover:text-white rounded-full transition duration-300 transform hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com/hexamechtools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-800 hover:bg-[#1877F2] text-slate-300 hover:text-white rounded-full transition duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: QUICK NAVIGATION */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
              Company
            </h3>
            <nav>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-blue-400 transition duration-200 font-medium flex items-center gap-1 group"
                    >
                      <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition duration-200">→</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* COLUMN 3: CONTACT INFORMATION */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300 leading-relaxed">
                  Ground Floor, Door No 17/346, Chulliparamba, Near Farook College, Calicut, Kerala – India
                </span>
              </li>

              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <a href="tel:+917510638693" className="text-sm text-slate-300 hover:text-blue-400 font-medium transition duration-200">
                  +91 75106 38693
                </a>
              </li>

              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:hexamechlinichtools@gmail.com"
                  className="text-sm text-slate-300 hover:text-blue-400 break-all font-medium transition duration-200"
                >
                  hexamechlinichtools@gmail.com
                </a>
              </li>

              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300">Mon – Sat: 9:00 AM – 7:00 PM</span>
              </li>

              <li className="flex gap-3">
                <MessageCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/917510638693?text=Hi%20Hexamech%2C%20I%27m%20interested%20in%20your%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-300 hover:text-[#25D366] font-medium transition duration-200"
                >
                  WhatsApp Business
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: CONNECT & TRUST */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-amber-500 rounded-full"></span>
              Why Choose Us
            </h3>
            
            {/* Instagram CTA */}
            <a
              href="https://instagram.com/hexamech_linich_tools"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-lg bg-gradient-to-br from-slate-800 to-slate-700 hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] border border-slate-700 hover:border-transparent transition duration-300 group mb-3"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-slate-700 group-hover:bg-white/20 rounded-lg transition duration-300">
                  <Instagram className="h-5 w-5 text-slate-300 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-slate-100 font-semibold text-sm">Instagram</p>
                  <p className="text-slate-400 text-xs">@hexamech_linich_tools</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-300 group-hover:text-white text-xs font-medium transition duration-300">
                <span>View Updates</span>
                <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917510638693?text=Hi%20Hexamech%2C%20I%27m%20interested%20in%20your%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-lg bg-gradient-to-br from-[#25D366] to-[#20BA5C] hover:shadow-lg shadow-green-500/20 border border-[#25D366] transition duration-300 group mb-3"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Quick Support</p>
                  <p className="text-white/80 text-xs">Instant replies via WhatsApp</p>
                </div>
              </div>
            </a>

            {/* Trust Badges */}
            <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Pan-India Reach</p>
              <ul className="space-y-1 text-xs text-slate-300">
                <li>✓ B2B Wholesale</li>
                <li>✓ Same-Day Kerala Delivery</li>
                <li>✓ Verified GST Supplier</li>
              </ul>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-slate-800 my-4"></div>

        {/* BOTTOM BAR */}
        <div className="px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs sm:text-sm text-slate-400">
            © {new Date().getFullYear()} Hexamech Linich Tools. All Rights Reserved.
          </p>
          <p className="text-xs text-slate-500">
            B2B Automotive Tools Supplier • Malappuram, Kerala • All-India Delivery
          </p>
        </div>
      </div>
    </footer>
  )
}
