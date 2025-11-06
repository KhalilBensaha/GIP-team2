import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              Powered by GDG
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Build Your GDG Portfolio in <span className="text-blue-600">Minutes</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Generate a professional, customizable GDG-styled portfolio instantly. Showcase your projects, skills, and achievements with ease.
            </p>
            <div className="flex gap-3 pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/builder">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/">Learn More</Link>
              </Button>
            </div>
            <div className="flex gap-8 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span
                  className="inline-block w-2 h-2 bg-emerald-500 rounded-full"
                  aria-hidden="true"
                />
                <span>Free to use</span>
              </div>
              <div>
                <span
                  className="inline-block w-2 h-2 bg-yellow-500 rounded-full"
                  aria-hidden="true"
                />
                <span> No coding needed</span>
              </div>
              </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 lg:h-full min-h-96 bg-white rounded-2xl shadow-xl overflow-hidden">
            <Image
              src="/portfolio-preview.jpg"
              alt="Portfolio Generator Preview"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
