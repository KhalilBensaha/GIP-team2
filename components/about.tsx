import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">About GOS Portfolio Generator</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Empowering GOS members to build and showcase their professional journey with tools designed for
              simplicity, consistency, and capability.
            </p>
            <p className="text-muted-foreground">
              Our platform simplifies portfolio creation for GOS members by providing a set of tools that ensure each
              member's portfolio looks professionally polished without the hassle of coding from scratch.
            </p>
          </div>

          <div className="order-1 lg:order-2 relative h-96 lg:h-full min-h-96">
            <Image
              src="/team-collaboration-portfolio.jpg"
              alt="Team collaboration on portfolio building"
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
