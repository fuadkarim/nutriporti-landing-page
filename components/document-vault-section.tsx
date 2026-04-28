"use client"

import { useState } from "react"
import Image from "next/image"
import { Lock, ShieldCheck, FileCheck, X, Building2, CreditCard, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DocumentVaultSection() {
  const [formOpen, setFormOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    companyName: "",
    vatId: "",
    contactName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const resetForm = () => {
    setFormOpen(false)
    setSubmitted(false)
    setFormData({
      companyName: "",
      vatId: "",
      contactName: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  return (
    <>
      <section className="py-24 lg:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Side */}
            <div>
              <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">
                Secure Access
              </p>
              <h2 className="text-3xl lg:text-5xl font-serif text-primary-foreground tracking-tight text-balance mb-6">
                Compliance & Verified Sourcing
              </h2>
              <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
                Access comprehensive compliance documentation, certificates of origin, and verified supplier credentials. Our document vault contains sensitive information protected under strict confidentiality.
              </p>

              {/* Document Types */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                    <FileCheck className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-primary-foreground">Certificates of Analysis (COA)</p>
                    <p className="text-sm text-primary-foreground/60">Lab-verified quality reports</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-primary-foreground">Origin Certificates</p>
                    <p className="text-sm text-primary-foreground/60">Verified supply chain documentation</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-primary-foreground">Factory Audit Reports</p>
                    <p className="text-sm text-primary-foreground/60">Third-party facility inspections</p>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => setFormOpen(true)}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Lock className="h-4 w-4 mr-2" />
                Request Full Compliance Pack
              </Button>
            </div>

            {/* Certificate Preview Side */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/certificate-preview.jpg"
                  alt="Compliance certificate preview"
                  fill
                  className="object-cover blur-[6px] scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
                
                {/* Lock Icon Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    <Lock className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <p className="text-lg font-semibold text-primary-foreground text-center px-6">
                    Protected Document
                  </p>
                  <p className="text-sm text-primary-foreground/80 text-center px-6 mt-1">
                    Verification required for access
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-card rounded-lg shadow-lg p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">256-bit Encrypted</p>
                    <p className="text-xs text-muted-foreground">Secure Document Storage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Modal */}
      {formOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" 
            onClick={resetForm}
          />
          <div className="relative bg-card w-full max-w-lg rounded-xl shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="bg-primary px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-accent" />
                <h3 className="text-lg font-semibold text-primary-foreground">
                  Request Compliance Pack
                </h3>
              </div>
              <button
                onClick={resetForm}
                className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
              >
                <X className="h-4 w-4 text-primary-foreground" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {!submitted ? (
                <>
                  <p className="text-muted-foreground mb-6">
                    To access our full compliance documentation, please provide your company details for verification.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Company Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Your registered company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        <span className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4" />
                          VAT / Tax ID <span className="text-destructive">*</span>
                        </span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.vatId}
                        onChange={(e) => setFormData({ ...formData, vatId: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="e.g., GB123456789"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Contact Name <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.contactName}
                          onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="+1 234 567 890"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Business Email <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="you@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Additional Notes
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                        placeholder="Specific documents or products you're interested in..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Send className="h-4 w-4 mr-2" />
                      Submit Verification Request
                    </Button>
                  </form>

                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    Your information is protected and will only be used for verification purposes.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Request Submitted</h4>
                  <p className="text-muted-foreground mb-6">
                    Our compliance team will verify your details and contact you within 24-48 business hours with secure access to the documentation.
                  </p>
                  <Button variant="outline" onClick={resetForm}>
                    Close
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
