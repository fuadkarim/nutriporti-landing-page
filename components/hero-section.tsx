import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-full">
            <Image
              src="/images/hero-cocoa.jpg"
              alt="Premium cocoa beans"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-foreground/60" />
          </div>
          <div className="relative h-full hidden lg:block">
            <Image
              src="/images/sunflower-oil.jpg"
              alt="Premium sunflower oil"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-foreground/60" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-20">
        <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/10 backdrop-blur-sm border border-card/20 text-card text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          Trusted by 200+ Global Buyers
        </p>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-normal text-card leading-tight tracking-tight text-balance">
          Global Supply Chain Excellence for Cocoa & Premium Oils
        </h1>
        
        <p className="mt-6 text-lg lg:text-xl text-card/80 max-w-2xl mx-auto leading-relaxed text-pretty">
          Connecting manufacturers worldwide with certified, traceable commodity sourcing. 
          From farm to factory, we ensure quality at every step.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            asChild 
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-base"
          >
            <Link href="#contact">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-card/30 text-card hover:bg-card/10 px-8 py-6 text-base bg-transparent"
          >
            <Link href="#products">
              View Products
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-card/20 pt-10">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "14+", label: "Countries Served" },
            { value: "5K+", label: "MT Delivered" },
            { value: "100%", label: "Quality Certified" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-secondary">{stat.value}</p>
              <p className="mt-1 text-sm text-card/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-card/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-card/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
