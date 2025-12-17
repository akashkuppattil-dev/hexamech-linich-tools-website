"use client"

import { FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const hsnCodes = [
  {
    code: "8205",
    description:
      "Hand tools (including glaziers' diamonds), not elsewhere specified or included; blow lamps; vices; clamps and the like",
  },
  {
    code: "8414",
    description:
      "Air or vacuum pumps, air or other gas compressors and fans; ventilating or recycling hoods incorporating a fan",
  },
  {
    code: "8467",
    description:
      "Tools for working in the hand, pneumatic, hydraulic or with self-contained electric or non-electric motor",
  },
  {
    code: "8508",
    description: "Vacuum cleaners, including wet & dry vacuum cleaners",
  },
  {
    code: "8515",
    description: "Electric welding machines, MIG welders, spot welding equipment and parts",
  },
  {
    code: "8424",
    description: "Mechanical appliances for projecting, dispersing or spraying liquids or powders; spray guns",
  },
]

export function HsnCodesSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 md:mb-4">
            HSN Codes We Deal In
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            We supply products under various HSN codes for automotive and workshop equipment
          </p>
        </div>

        <Card className="glass overflow-hidden">
          <CardHeader className="bg-primary/10 border-b border-border">
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <FileText className="h-5 w-5 text-primary" />
              Product HSN Codes
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px] font-semibold">HSN Code</TableHead>
                    <TableHead className="font-semibold">Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {hsnCodes.map((item) => (
                    <TableRow key={item.code} className="hover:bg-secondary/50">
                      <TableCell className="font-mono font-semibold text-primary">{item.code}</TableCell>
                      <TableCell className="text-muted-foreground">{item.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-border">
              {hsnCodes.map((item) => (
                <div key={item.code} className="p-4">
                  <p className="font-mono font-semibold text-primary text-lg mb-1">{item.code}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
