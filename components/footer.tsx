import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

const navigation = {
  products: [
    { name: "Cocoa Beans", href: "#products" },
    { name: "Cocoa Powder", href: "#products" },
    { name: "Cocoa Butter", href: "#products" },
    { name: "Sunflower Oil", href: "#products" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Our Process", href: "#process" },
    { name: "Certifications", href: "#" },
    { name: "Careers", href: "#" },
  ],
  support: [
    { name: "Contact", href: "#contact" },
    { name: "Request Quote", href: "#contact" },
    { name: "FAQs", href: "#" },
    { name: "Shipping Info", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
}

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Email", href: "mailto:trade@nutriporti.com", icon: Mail },
]

export function Footer() {
  return (
    <footer className="bg-foreground" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8 lg:py-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Image
                src="/images/nutriporti-logo.png"
                alt="Nutriporti"
                width={200}
                height={55}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm text-background/60 leading-relaxed max-w-xs">
              Your trusted partner in global commodity trading. Connecting manufacturers with premium cocoa and vegetable oil suppliers worldwide.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5 text-background/80" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-background">Products</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-background/60 hover:text-background transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-background">Company</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-background/60 hover:text-background transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-background">Support</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-background/60 hover:text-background transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-background">Legal</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-background/60 hover:text-background transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/10">
          <p className="text-xs text-background/50 text-center">
            &copy; {new Date().getFullYear()} Nutriporti Trading B.V. All rights reserved. Registered in the Netherlands.
          </p>
        </div>
      </div>
    </footer>
  )
}
