import type React from "react"
import type { Metadata, Viewport } from "next"
import { Barlow, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/context/cart-context"

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Hexamech Linich Tools | Automotive Tools Wholesaler Kerala | Chulliparamba, Malappuram",
  description:
    "Hexamech Linich Tools – Kerala's premier automotive tools wholesaler in Chulliparamba, near Farook College, Malappuram. Wholesale spray guns, welders, power tools, garage equipment with fast delivery across Kerala & All India.",
  keywords: [
    "automotive tools",
    "wholesale tools kerala",
    "spray guns",
    "welding machines",
    "power tools",
    "garage equipment",
    "malappuram",
    "kerala",
    "hexamech",
    "linich tools",
  ],
  authors: [{ name: "Hexamech Linich Tools" }],
  icons: {
    icon: [
      {
        url: "https://5.imimg.com/data5/SELLER/Logo/2024/11/463774909/FM/DK/XY/135087769/imtemp1727699006-120x120.jpeg",
        sizes: "120x120",
        type: "image/jpeg",
      },
    ],
    apple: [
      {
        url: "https://5.imimg.com/data5/SELLER/Logo/2024/11/463774909/FM/DK/XY/135087769/imtemp1727699006-120x120.jpeg",
        sizes: "120x120",
        type: "image/jpeg",
      },
    ],
  },
  openGraph: {
    title: "Hexamech Linich Tools - Kerala's Premier Automotive Tools Wholesaler",
    description:
      "Wholesale spray guns, welders, power tools & garage equipment with fast delivery across Kerala & All India.",
    type: "website",
    images: [
      {
        url: "https://5.imimg.com/data5/SELLER/Logo/2024/11/463774909/FM/DK/XY/135087769/imtemp1727699006-120x120.jpeg",
        width: 120,
        height: 120,
        alt: "Hexamech Linich Tools Logo",
      },
    ],
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#22c55e" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://5.imimg.com/data5/SELLER/Logo/2024/11/463774909/FM/DK/XY/135087769/imtemp1727699006-120x120.jpeg"
        />
        <link
          rel="apple-touch-icon"
          href="https://5.imimg.com/data5/SELLER/Logo/2024/11/463774909/FM/DK/XY/135087769/imtemp1727699006-120x120.jpeg"
        />
      </head>
      <body className={`${barlow.variable} ${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <CartProvider>
            <Header />
            <main className="min-h-screen mt-20 sm:mt-24 md:mt-32">{children}</main>
            <Footer />
            <WhatsAppButton />
          </CartProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
