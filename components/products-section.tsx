import Image from "next/image"
import Link from "next/link"
import { Check, Leaf, Shield, Award, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    title: "Cocoa Products",
    image: "/images/cocoa-products.jpg",
    description: "Premium cocoa beans, powder, and butter sourced from certified farms across West Africa and South America.",
    items: [
      { name: "Cocoa Beans", specs: "Fermented & Sun-Dried" },
      { name: "Cocoa Powder", specs: "10-12% Fat / 20-22% Fat" },
      { name: "Cocoa Butter", specs: "Deodorized / Natural" },
      { name: "Cocoa Liquor", specs: "Alkalized & Natural" },
    ],
    certifications: ["ISO 22000:2018", "Halal"],
    origins: ["Ghana", "Ivory Coast", "Ecuador", "Peru"],
    packaging: ["Jute Bags (60kg)", "Paper Bags (25kg)", "Drums (200kg)", "Flexibags (20MT)"],
  },
  {
    title: "Bulk Vegetable Oils",
    image: "/images/bulk-oils.jpg",
    description: "High-quality sunflower and vegetable oils for food manufacturing, with consistent quality and competitive pricing.",
    items: [
      { name: "Crude Sunflower Oil", specs: "High Oleic / Standard" },
      { name: "Refined Sunflower Oil", specs: "Winterized Grade" },
      { name: "Organic Sunflower Oil", specs: "EU Certified Organic" },
      { name: "Sunflower Lecithin", specs: "Food Grade" },
    ],
    certifications: ["Non-GMO Project", "RSPO", "Kosher & Halal"],
    origins: ["Ukraine", "Argentina", "Bulgaria", "Turkey"],
    packaging: ["Flexitanks (20MT)", "IBCs (1000L)", "Steel Drums (190kg)", "ISO Tanks"],
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">
            Our Products
          </p>
          <h2 className="text-3xl lg:text-5xl font-serif text-foreground tracking-tight text-balance">
            Premium Commodities for Global Trade
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Sourced directly from certified producers, our products meet the highest international standards for quality and sustainability.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-2xl font-serif text-card">{product.title}</h3>
                  <p className="text-sm text-card/80 mt-1">{product.description}</p>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                {/* Product Items */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    Available Products
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.items.map((item) => (
                      <div key={item.name} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-foreground">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.specs}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    Certifications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="px-3 py-1 text-xs font-medium bg-accent/20 text-accent-foreground rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Origins */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-primary" />
                    Origin Countries
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {product.origins.join(" • ")}
                  </p>
                </div>

                {/* Packaging */}
                <div className="pt-4 border-t border-border mb-6">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                    Packaging Options
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {product.packaging.join(" | ")}
                  </p>
                </div>

                {/* Technical Specs Button */}
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <Link href="#quality">
                    <FileText className="h-4 w-4 mr-2" />
                    View Technical Specifications
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
