"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

const productInterests = [
  { value: "general", label: "General Enquiry" },
  { value: "spray-guns", label: "Spray Guns & Paint Equipment" },
  { value: "welding", label: "Welding Machines" },
  { value: "engine-cranes", label: "Engine Cranes & Lifting" },
  { value: "power-tools", label: "Power Tools" },
  { value: "special-tools", label: "Special Service Tools" },
  { value: "bulk-order", label: "Bulk Order" },
  { value: "workshop-setup", label: "Workshop Setup" },
  { value: "others", label: "Others" },
]

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="glass">
        <CardContent className="p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-4">Our team will respond within 30 minutes during working hours.</p>
          <Button variant="outline" onClick={() => setIsSubmitted(false)}>
            Send Another Enquiry
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="glass">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number *</Label>
              <Input id="mobile" name="mobile" type="tel" placeholder="+91 98765 43210" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" type="email" placeholder="your@email.com" required />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company / Workshop Name</Label>
              <Input id="company" name="company" placeholder="Your workshop name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gst">GST Number</Label>
              <Input id="gst" name="gst" placeholder="GST number (if applicable)" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="interest">Product Interest *</Label>
            <Select name="interest" required>
              <SelectTrigger>
                <SelectValue placeholder="Select your interest" />
              </SelectTrigger>
              <SelectContent>
                {productInterests.map((interest) => (
                  <SelectItem key={interest.value} value={interest.value}>
                    {interest.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message / Requirement *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Describe your requirements, quantities needed, or any questions..."
              rows={5}
              required
            />
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Submit Enquiry
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
