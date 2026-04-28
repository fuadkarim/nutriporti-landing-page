import { Factory, Ship, ShieldCheck, Clock, Globe2, BadgeCheck } from "lucide-react"

const benefits = [
  {
    icon: Factory,
    title: "Direct Factory Pricing",
    description: "Cut out intermediaries and access wholesale rates directly from certified producers and processing facilities.",
  },
  {
    icon: Ship,
    title: "Global Logistics & Shipping",
    description: "End-to-end supply chain management with FOB, CIF, and DDP Incoterms. We handle documentation and customs clearance.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Quality Assurance",
    description: "SGS and Bureau Veritas inspections at origin. Full traceability from farm to your facility with COA documentation.",
  },
  {
    icon: Clock,
    title: "Flexible Payment Terms",
    description: "Net 30/60/90 terms available for qualified buyers. LC, TT, and CAD payment options to suit your cash flow needs.",
  },
  {
    icon: Globe2,
    title: "Multi-Origin Sourcing",
    description: "Diversified supply base across multiple countries ensures uninterrupted supply even during regional disruptions.",
  },
  {
    icon: BadgeCheck,
    title: "Compliance & Certification",
    description: "Full regulatory compliance for EU, US, and Asian markets. All required certifications and documentation provided.",
  },
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">
            Why Partner With Us
          </p>
          <h2 className="text-3xl lg:text-5xl font-serif text-foreground tracking-tight text-balance">
            Your Trusted Commodity Partner
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine deep market expertise with operational excellence to deliver reliable, cost-effective commodity solutions.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group bg-card p-8 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
