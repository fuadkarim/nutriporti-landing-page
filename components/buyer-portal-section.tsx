"use client"

import { useState } from "react"
import { Lock, Shield, FileText, Users, ArrowRight, X, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"

const protectedDocuments = [
  {
    title: "Factory Documentation",
    description: "Original factory licenses, production capacity reports, and facility certifications",
    icon: FileText,
  },
  {
    title: "Certificates of Analysis",
    description: "Lab-verified COAs with complete batch traceability and quality parameters",
    icon: Shield,
  },
  {
    title: "Proof of Performance",
    description: "Past shipment records, client references, and delivery documentation",
    icon: Users,
  },
]

export function BuyerPortalSection() {
  const [loginOpen, setLoginOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  return (
    <>
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Restricted Access Banner */}
            <div className="bg-card rounded-xl border border-border overflow-hidden shadow-lg">
              {/* Banner Header */}
              <div className="bg-primary/5 border-b border-border px-8 py-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Lock className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-serif text-foreground">Protected Buyer Portal</h2>
                    <p className="text-muted-foreground">Restricted Access Area</p>
                  </div>
                </div>
              </div>

              {/* Banner Content */}
              <div className="p-8">
                <p className="text-foreground leading-relaxed mb-8">
                  Sensitive factory documentation, original Certificates of Analysis (COAs), and Proof of Past Performance are available exclusively to registered buyers under Non-Disclosure Agreement (NDA).
                </p>

                {/* Protected Documents Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {protectedDocuments.map((doc) => (
                    <div
                      key={doc.title}
                      className="relative bg-muted rounded-lg p-5 border border-border"
                    >
                      {/* Lock overlay */}
                      <div className="absolute top-3 right-3">
                        <Lock className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <doc.icon className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-semibold text-foreground mb-1">{doc.title}</h3>
                      <p className="text-sm text-muted-foreground">{doc.description}</p>
                    </div>
                  ))}
                </div>

                {/* Access Requirements */}
                <div className="bg-accent/10 rounded-lg p-5 mb-8">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-accent" />
                    Access Requirements
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      Verified business registration with valid VAT/Tax ID
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      Signed Non-Disclosure Agreement (NDA)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      Minimum order intent of 20 MT or equivalent
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      Approval by Nutriporti compliance team
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => setLoginOpen(true)}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    Member Login
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href="#contact">
                      Request Access
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Login Modal */}
      {loginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" 
            onClick={() => setLoginOpen(false)}
          />
          <div className="relative bg-card w-full max-w-md rounded-xl shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="bg-primary px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-accent" />
                <h3 className="text-lg font-semibold text-primary-foreground">
                  Buyer Portal Login
                </h3>
              </div>
              <button
                onClick={() => setLoginOpen(false)}
                className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
              >
                <X className="h-4 w-4 text-primary-foreground" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <p className="text-muted-foreground mb-6">
                Enter your credentials to access protected documentation. Contact us if you need assistance.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full px-4 py-2.5 pr-12 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-muted-foreground">Remember me</span>
                  </label>
                  <a href="#" className="text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Sign In
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground">
                  {"Don't have an account? "}
                  <a href="#contact" className="text-primary font-medium hover:underline" onClick={() => setLoginOpen(false)}>
                    Request Access
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
