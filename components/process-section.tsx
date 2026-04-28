import { FileText, FlaskConical, FileCheck, Truck } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: FileText,
    title: "Inquire / RFQ",
    description: "Submit your requirements including product type, specifications, volume, and destination. Our team responds within 24 hours with a detailed quotation.",
  },
  {
    step: "02",
    icon: FlaskConical,
    title: "Sample Verification",
    description: "Request samples for quality verification before committing. We provide pre-shipment samples with full COA documentation for your lab testing.",
  },
  {
    step: "03",
    icon: FileCheck,
    title: "Contract & Payment",
    description: "Finalize contract terms and payment conditions. We offer flexible Net 30/60/90 terms, Letters of Credit, and bank transfers to qualified buyers.",
  },
  {
    step: "04",
    icon: Truck,
    title: "Global Delivery",
    description: "Your order ships with full documentation, insurance, and real-time tracking. We coordinate delivery to any major port or inland destination worldwide.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-3xl lg:text-5xl font-serif text-foreground tracking-tight text-balance">
            Simple, Transparent Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial inquiry to final delivery, we make international commodity trading straightforward and stress-free.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5 bg-border" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                {/* Step Number Circle */}
                <div className="relative z-10 w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg">
                  <step.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                
                {/* Step Number Badge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                  {step.step}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <div className="w-8 h-8 border-r-2 border-b-2 border-border rotate-45 transform" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
