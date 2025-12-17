"use client"

import { Building2, Calendar, Users, Receipt, TrendingUp, BadgeCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const businessDetails = [
  {
    icon: Building2,
    label: "Nature of Business",
    value: "Trader - Wholesaler/Distributor",
    color: "text-primary",
  },
  {
    icon: BadgeCheck,
    label: "Legal Status of Firm",
    value: "Proprietorship",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    label: "Annual Turnover",
    value: "1.5 - 5 Cr",
    color: "text-accent",
  },
  {
    icon: Calendar,
    label: "GST Registration Date",
    value: "20-07-2023",
    color: "text-primary",
  },
  {
    icon: Users,
    label: "Total Number of Employees",
    value: "Upto 10 People",
    color: "text-primary",
  },
  {
    icon: Receipt,
    label: "GST Number",
    value: "32CWVPM3137R1ZP",
    color: "text-accent",
  },
]

export function BusinessDetails() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 md:mb-4">Business Details</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Hexamech Linich Tools - Your trusted partner for automotive workshop equipment
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {businessDetails.map((detail, index) => (
            <Card key={index} className="glass hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 sm:p-6 flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-secondary/50 ${detail.color}`}>
                  <detail.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">{detail.label}</p>
                  <p className="font-semibold text-sm sm:text-base text-foreground">{detail.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
