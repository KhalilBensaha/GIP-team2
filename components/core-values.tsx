"use client"

import { Card } from "@/components/ui/card"
import { Users, TrendingUp, Award } from "lucide-react"

const goals = [
  {
    id: 1,
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Enhance Member Visibility",
    description:
      "Enhance members' visibility and personal branding within the tech community through professional portfolios that stand out.",
    color: "bg-blue-600",
  },
  {
    id: 2,
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    title: "Professional Growth",
    description:
      "Encourage professional growth and collaboration by making it easy to showcase skills, projects, and achievements.",
    color: "bg-green-600",
  },
  {
    id: 3,
    icon: <Award className="w-6 h-6 text-white" />,
    title: "Maintain GDG Identity",
    description:
      "Maintain GDG visual identity and standards across all portfolios, creating a unified and recognizable brand.",
    color: "bg-red-600",
  },
]

export default function CoreValues() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white text-sm text-muted-foreground ring-1 ring-gray-200">Our Goals</span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-foreground">What We Aim to Achieve</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Our platform is built with clear objectives to support the GDG community
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {goals.map((g) => (
            <Card key={g.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${g.color}`}>{g.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{g.title}</h3>
                  <p className="text-muted-foreground text-sm">{g.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
