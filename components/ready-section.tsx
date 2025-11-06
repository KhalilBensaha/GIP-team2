import { Button } from "@/components/ui/button"

export default function ReadySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready to Build Your Portfolio?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of GOS members who have created their professional portfolios
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
          <a href="/builder">
            Create Portfolio Now
          </a>
        </Button>
      </div>
    </section>
  )
}
