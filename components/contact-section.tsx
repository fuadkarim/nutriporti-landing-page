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
import { MapPin, Mail, Phone, Send, CheckCircle, Loader2 } from "lucide-react"

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
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "",
    product: "", volume: "", port: "", message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Failed to send")
      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please try again or email us directly at info@nutriporti.com")
    } finally {
      setLoading(false)
    }
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
                    info@nutriporti.com
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
                  onClick={() => { setSubmitted(false); setFormData({ name: "", company: "", email: "", phone: "", product: "", volume: "", port: "", message: "" }) }}
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                    <Input id="name" placeholder="John Smith" required value={formData.name} onChange={handleChange} className="bg-background border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground">Company Name *</Label>
                    <Input id="company" placeholder="ABC Foods Inc." required value={formData.company} onChange={handleChange} className="bg-background border-border" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Business Email *</Label>
                    <Input id="email" type="email" placeholder="john@abcfoods.com" required value={formData.email} onChange={handleChange} className="bg-background border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 234 567 8900" value={formData.phone} onChange={handleChange} className="bg-background border-border" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-foreground">Product Type *</Label>
                    <Select required onValueChange={(val) => setFormData({ ...formData, product: val })}>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Select product" />
                      </SelectTrigger>
                      <SelectContent>
                        {productTypes.map((product) => (
                          <SelectItem key={product} value={product}>
                            {product}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-foreground">Estimated Volume (MT) *</Label>
                    <Select required onValueChange={(val) => setFormData({ ...formData, volume: val })}>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Select volume" />
                      </SelectTrigger>
                      <SelectContent>
                        {volumeRanges.map((volume) => (
                          <SelectItem key={volume} value={volume}>
                            {volume}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="port" className="text-foreground">Destination Port *</Label>
                  <Input id="port" placeholder="e.g., Port of Los Angeles, USA" required value={formData.port} onChange={handleChange} className="bg-background border-border" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Additional Requirements</Label>
                  <Textarea id="message" placeholder="Tell us about specific certifications needed, packaging preferences, delivery timeline, etc." rows={4} value={formData.message} onChange={handleChange} className="bg-background border-border resize-none" />
                </div>

                {error && (
                  <p className="text-sm text-red-500 text-center">{error}</p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  {loading ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
                  ) : (
                    <>Submit Quote Request <Send className="ml-2 h-4 w-4" /></>
                  )}
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
