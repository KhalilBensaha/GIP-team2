import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ReadySection() {
  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-blue-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
              Our Mission
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Simplifying Portfolio Creation for Everyone</h2>

            <p className="text-lg text-muted-foreground mb-6 max-w-xl">
              To simplify portfolio creation for GDG members by providing a clean, consistent, and customizable tool aligned with GDG's design principles.
            </p>

            <p className="text-md text-muted-foreground mb-6 max-w-xl">
              We believe that every developer, designer, and tech enthusiast deserves a platform to showcase their work professionally without the hassle of coding from scratch.
            </p>

            <div className="flex items-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="/builder">Create Portfolio Now</a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-100 ring-blue-50">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/mission-image.png"
                  alt="Team collaborating on portfolio"
                  width={584}
                  height={438}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
