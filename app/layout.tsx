import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans'
});

const dmSerif = DM_Serif_Display({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-dm-serif'
});

export const metadata: Metadata = {
  title: 'Nutriporti | Global Cocoa & Premium Oils Trading',
  description: 'Premium B2B commodity trading for cocoa beans, cocoa products, and bulk vegetable oils. Direct factory pricing, global logistics, and certified quality assurance.',
  keywords: 'cocoa trading, bulk oils, sunflower oil, commodity trading, B2B food trading, fair trade cocoa, non-GMO oils',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
