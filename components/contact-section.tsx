"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react"

const productTypes = [
  "Cocoa Beans",
  "Cocoa Powder",
  "Cocoa Butter",
  "Cocoa Liquor",
  "Crude Sunflower Oil",
  "Refined Sunflower Oil",
  "Organic Sunflower Oil",
  "Other (specify in message)",
]

const volumeRanges = [
  "1-20 MT",
  "20-50 MT",
  "50-100 MT",
  "100-500 MT",
  "500+ MT",
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <div>
            <p className="text-sm font-semibold text-secondary tracking-widest uppercase mb-3">
              Get in Touch
            </p>
            <h2 className="text-3xl lg:text-5xl font-serif text-primary-foreground tracking-tight text-balance">
              Request Your Quote Today
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
              Fill out the form with your requirements and our trade team will provide a detailed quotation within 24 business hours.
            </p>

            {/* Contact Info */}
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-primary-foreground">Headquarters</p>
                  <p className="text-primary-foreground/70 text-sm">
                    Trade Tower, Suite 1450<br />
                    Rotterdam, Netherlands
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-primary-foreground">Email</p>
                  <p className="text-primary-foreground/70 text-sm">
                    trade@nutriporti.com<br />
                    support@nutriporti.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-primary-foreground">Phone</p>
                  <p className="text-primary-foreground/70 text-sm">
                    +31 10 123 4567<br />
                    Mon-Fri: 8:00 - 18:00 CET
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card rounded-2xl p-8 shadow-xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Request Received!
                </h3>
                <p className="text-muted-foreground">
                  Thank you for your inquiry. Our trade team will contact you within 24 hours with a detailed quotation.
                </p>
                <Button 
                  className="mt-6"
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Smith"
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground">Company Name *</Label>
                    <Input
                      id="company"
                      placeholder="ABC Foods Inc."
                      required
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Business Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@abcfoods.com"
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 234 567 8900"
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="product" className="text-foreground">Product Type *</Label>
                    <Select required>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Select product" />
                      </SelectTrigger>
                      <SelectContent>
                        {productTypes.map((product) => (
                          <SelectItem key={product} value={product.toLowerCase().replace(/\s+/g, "-")}>
                            {product}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="volume" className="text-foreground">Estimated Volume (MT) *</Label>
                    <Select required>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Select volume" />
                      </SelectTrigger>
                      <SelectContent>
                        {volumeRanges.map((volume) => (
                          <SelectItem key={volume} value={volume.toLowerCase().replace(/\s+/g, "-")}>
                            {volume}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="port" className="text-foreground">Destination Port *</Label>
                  <Input
                    id="port"
                    placeholder="e.g., Port of Los Angeles, USA"
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Additional Requirements</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about specific certifications needed, packaging preferences, delivery timeline, etc."
                    rows={4}
                    className="bg-background border-border resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Submit Quote Request
                  <Send className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy. We never share your information with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
