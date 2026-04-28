import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { QualityStandardsSection } from "@/components/quality-standards-section"
import { WhyUsSection } from "@/components/why-us-section"
import { ProductGallerySection } from "@/components/product-gallery-section"
import { DocumentVaultSection } from "@/components/document-vault-section"
import { BuyerPortalSection } from "@/components/buyer-portal-section"
import { ProcessSection } from "@/components/process-section"
import { TrustBar } from "@/components/trust-bar"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductsSection />
      <QualityStandardsSection />
      <WhyUsSection />
      <ProductGallerySection />
      <DocumentVaultSection />
      <BuyerPortalSection />
      <ProcessSection />
      <TrustBar />
      <ContactSection />
      <Footer />
    </main>
  )
}
