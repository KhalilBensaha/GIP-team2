import { Suspense } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import ReadySection from "@/components/ready-section"
import About from "@/components/about"
import Mission from "@/components/mission"
import CoreValues from "@/components/core-values"
import Contact from "@/components/contact"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <Features />
      <ReadySection />
      <About />
      <Mission />
      <CoreValues />
      <Contact />
      <Suspense fallback={<div className="h-20" />}>
        <FAQ />
      </Suspense>
      <Footer />
    </main>
  )
}
