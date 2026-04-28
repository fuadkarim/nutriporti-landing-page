"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

const galleryImages = [
  {
    src: "/images/cocoa-products.jpg",
    alt: "Premium cocoa beans and products",
    title: "Cocoa Products",
    description: "Premium grade cocoa beans, powder, and butter ready for export",
  },
  {
    src: "/images/bulk-oils.jpg",
    alt: "Bulk vegetable oil storage",
    title: "Bulk Oil Storage",
    description: "IBC containers and drums of refined sunflower oil",
  },
  {
    src: "/images/gallery-warehouse.jpg",
    alt: "Warehouse operations",
    title: "Warehouse Operations",
    description: "State-of-the-art storage facilities with climate control",
  },
  {
    src: "/images/gallery-containers.jpg",
    alt: "Shipping containers",
    title: "Global Shipping",
    description: "Container loading at major international ports",
  },
  {
    src: "/images/gallery-quality.jpg",
    alt: "Quality control laboratory",
    title: "Quality Assurance",
    description: "In-house laboratory testing and certification",
  },
  {
    src: "/images/gallery-oil-drums.jpg",
    alt: "Oil drums and IBCs",
    title: "Packaging Solutions",
    description: "Various packaging options for flexible delivery",
  },
]

export function ProductGallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <section id="gallery" className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">
              Visual Proof
            </p>
            <h2 className="text-3xl lg:text-5xl font-serif text-foreground tracking-tight text-balance">
              Supply Chain Gallery
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore our operations, from sourcing and storage to quality control and global shipping.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-card/90 flex items-center justify-center mb-3">
                    <ZoomIn className="h-5 w-5 text-foreground" />
                  </div>
                  <p className="text-card font-semibold text-center px-4">{image.title}</p>
                </div>

                {/* Bottom Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                  <p className="text-card text-sm font-medium">{image.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card/20 hover:bg-card/30 flex items-center justify-center transition-colors z-10"
          >
            <X className="h-6 w-6 text-card" />
          </button>

          {/* Navigation - Previous */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 lg:left-8 w-12 h-12 rounded-full bg-card/20 hover:bg-card/30 flex items-center justify-center transition-colors z-10"
          >
            <ChevronLeft className="h-6 w-6 text-card" />
          </button>

          {/* Navigation - Next */}
          <button
            onClick={goToNext}
            className="absolute right-4 lg:right-8 w-12 h-12 rounded-full bg-card/20 hover:bg-card/30 flex items-center justify-center transition-colors z-10"
          >
            <ChevronRight className="h-6 w-6 text-card" />
          </button>

          {/* Image Container */}
          <div className="relative w-full max-w-5xl mx-auto px-4">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
              <Image
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                fill
                className="object-contain"
              />
            </div>

            {/* Caption */}
            <div className="text-center mt-6">
              <h3 className="text-xl font-semibold text-card mb-2">
                {galleryImages[currentIndex].title}
              </h3>
              <p className="text-card/80">
                {galleryImages[currentIndex].description}
              </p>
              <p className="text-sm text-card/60 mt-4">
                {currentIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
