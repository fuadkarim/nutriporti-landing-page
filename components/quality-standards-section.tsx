"use client"

import { useState } from "react"
import { Shield, Award, Leaf, X, FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    name: "ISO 22000",
    description: "Food Safety Management System",
    icon: Shield,
    color: "text-[#1e3a5f]",
    bgColor: "bg-[#1e3a5f]/10",
  },
  {
    name: "HACCP",
    description: "Hazard Analysis Critical Control Points",
    icon: Award,
    color: "text-[#1e3a5f]",
    bgColor: "bg-[#1e3a5f]/10",
  },
  {
    name: "Fairtrade",
    description: "Certified Fair Trade Products",
    icon: Leaf,
    color: "text-[#2d5016]",
    bgColor: "bg-[#2d5016]/10",
  },
]

const technicalSpecs = {
  cocoa: {
    title: "Cocoa Powder Technical Specifications",
    subtitle: "Nutriporti - Technical Data Sheet",
    data: [
      { label: "Fat Content", value: "8.0–12.0%" },
      { label: "Moisture", value: "Max 7.5% (typical: ~4.8%)" },
      { label: "pH Level", value: "Max 6.0" },
      { label: "Fineness", value: "Residue ≤ 3.0% (sieve No. 23 / 0.315 mm)" },
      { label: "Total Ash", value: "Max 9.0%" },
      { label: "Acid Insoluble Ash", value: "Max 1.0%" },
      { label: "Heavy Metals", value: "Cd: 0.07 mg/kg; As: <0.08 mg/kg; Hg: <0.005 mg/kg" },
      { label: "Mycotoxins", value: "Aflatoxin B1: <0.001 mg/kg" },
      { label: "Pesticides", value: "Not detected" },
      { label: "Microbiology", value: "TPC <50,000 CFU/g; Salmonella: absent" },
      { label: "Processing", value: "Steam-treated (140°C)" },
      { label: "GMO Status", value: "GMO-free" },
      { label: "Shelf Life", value: "12 months from production" },
    ],
    notice: "Factory names and specific supplier details available to verified buyers only.",
  },
  oil: {
    title: "Bulk Oils Technical Specifications",
    subtitle: "Refined Sunflower Oil - Technical Data Sheet",
    data: [
      { label: "Free Fatty Acid (FFA)", value: "Max 0.1%" },
      { label: "Peroxide Value", value: "Max 2 meq/kg" },
      { label: "Iodine Value", value: "118-141" },
      { label: "Smoke Point", value: "232°C (450°F)" },
      { label: "Color (Lovibond)", value: "Max 1.5 Red" },
      { label: "Moisture & Volatiles", value: "Max 0.1%" },
      { label: "Origin Regions", value: "Eastern Europe, South America" },
      { label: "Shelf Life", value: "18 months from production" },
    ],
    notice: "Factory names and specific supplier details available to verified buyers only.",
  },
}

export function QualityStandardsSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeSpec, setActiveSpec] = useState<"cocoa" | "oil" | null>(null)

  const openModal = (type: "cocoa" | "oil") => {
    setActiveSpec(type)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setActiveSpec(null)
  }

  return (
    <>
      <section id="quality" className="py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">
              Compliance & Certification
            </p>
            <h2 className="text-3xl lg:text-5xl font-serif text-foreground tracking-tight text-balance">
              Quality & Standards
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our products meet the highest international standards for food safety, quality assurance, and ethical sourcing.
            </p>
          </div>

          {/* Certification Badges */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col items-center text-center p-8 bg-background rounded-xl border border-border hover:border-accent/50 transition-colors"
              >
                <div className={`w-20 h-20 rounded-full ${cert.bgColor} flex items-center justify-center mb-6`}>
                  <cert.icon className={`h-10 w-10 ${cert.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{cert.name}</h3>
                <p className="text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>

          {/* Technical Specs Download Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-xl border border-border p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#4a2c2a]/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-[#4a2c2a]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Cocoa Products</h3>
                  <p className="text-sm text-muted-foreground">
                    Technical data sheet including fat content, acidity levels, and origin information.
                  </p>
                </div>
              </div>
              <Button
                onClick={() => openModal("cocoa")}
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Technical Specs
              </Button>
            </div>

            <div className="bg-background rounded-xl border border-border p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Bulk Vegetable Oils</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete specifications for refined sunflower oil including FFA, peroxide values.
                  </p>
                </div>
              </div>
              <Button
                onClick={() => openModal("oil")}
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Technical Specs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs Modal */}
      {modalOpen && activeSpec && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" 
            onClick={closeModal}
          />
          <div className="relative bg-card w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="bg-primary px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-primary-foreground">
                  {technicalSpecs[activeSpec].title}
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  {technicalSpecs[activeSpec].subtitle}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
              >
                <X className="h-4 w-4 text-primary-foreground" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {/* Nutriporti Letterhead */}
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">F</span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">Nutriporti</p>
                  <p className="text-sm text-muted-foreground">Global Commodity Solutions</p>
                </div>
              </div>

              {/* Specs Table */}
              <div className="border border-border rounded-lg overflow-hidden mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Parameter</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {technicalSpecs[activeSpec].data.map((row, index) => (
                      <tr key={row.label} className={index % 2 === 0 ? "bg-background" : "bg-muted/50"}>
                        <td className="px-4 py-3 text-sm font-medium text-foreground">{row.label}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Notice */}
              <div className="bg-accent/10 rounded-lg p-4 flex items-start gap-3">
                <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  {technicalSpecs[activeSpec].notice}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-muted flex items-center justify-between">
              <p className="text-xs text-muted-foreground">
                Document Reference: TDS-{activeSpec === "cocoa" ? "COC" : "OIL"}-2024
              </p>
              <Button variant="outline" size="sm" onClick={closeModal}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
