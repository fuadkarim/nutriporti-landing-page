import { ShieldCheck, Ship, Award, Building2 } from "lucide-react"

const verifiedSuppliers = [
  { name: "SGS Verified", icon: ShieldCheck },
  { name: "Bureau Veritas", icon: Award },
  { name: "ISO 22000", icon: ShieldCheck },
  { name: "HACCP Certified", icon: Award },
]

const shippingPartners = [
  { name: "Maersk Line", icon: Ship },
  { name: "MSC", icon: Ship },
  { name: "CMA CGM", icon: Ship },
  { name: "Hapag-Lloyd", icon: Ship },
]

export function TrustBar() {
  return (
    <section className="py-16 bg-muted border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Verified Suppliers */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <Building2 className="h-5 w-5 text-primary" />
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Verified Suppliers & Certifications
              </h3>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
              {verifiedSuppliers.map((supplier) => (
                <div
                  key={supplier.name}
                  className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border"
                >
                  <supplier.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{supplier.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Partners */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <Ship className="h-5 w-5 text-primary" />
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Global Shipping Partners
              </h3>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
              {shippingPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border"
                >
                  <partner.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
