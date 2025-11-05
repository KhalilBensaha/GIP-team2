"use client"

import { Card } from "@/components/ui/card"

const values = [
  {
    id: 1,
    icon: "⚡",
    title: "Simplicity First",
    description: "Easy to use without needing any development knowledge",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    icon: "🎨",
    title: "Quality Design",
    description: "Beautiful templates built with modern design principles",
    color: "bg-red-100 text-red-600",
  },
  {
    id: 3,
    icon: "👥",
    title: "Community Focus",
    description: "Built for the GOS community with member feedback",
    color: "bg-green-100 text-green-600",
  },
  {
    id: 4,
    icon: "💡",
    title: "Continuous Innovation",
    description: "Always adding new features based on community needs",
    color: "bg-orange-100 text-orange-600",
  },
]

export default function CoreValues() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-16 text-center">Our Core Values</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value) => (
            <Card key={value.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 ${value.color} rounded-lg flex items-center justify-center text-2xl`}
                >
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
