"use client"

import { Card } from "@/components/ui/card"

const missions = [
  {
    id: 1,
    icon: "👁️",
    title: "Enhance Member Visibility",
    description: "Increase professional visibility by providing tools for every developer to showcase their best work",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    icon: "📈",
    title: "Professional Growth",
    description: "Support career advancement with portfolio resources and community networking opportunities",
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    icon: "🛡️",
    title: "Maintain GOS Identity",
    description: "Ensure brand consistency and professional standards across all member portfolios",
    color: "bg-red-100 text-red-600",
  },
]

export default function Mission() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide p-1  bg-blue-100 rounded-2xl">Our Mission</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-4">What We Aim To Achieve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our platform is built with clear objectives to empower the GOS community and help every member reach their
            full professional potential
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {missions.map((mission) => (
            <Card
              key={mission.id}
              className="p-8 text-center hover:shadow-lg hover:border-blue-200 transition-all group"
            >
              <div
                className={`w-16 h-16 ${mission.color} rounded-lg flex items-center justify-center mb-6 mx-auto text-4xl group-hover:scale-110 transition-transform`}
              >
                {mission.icon}
              </div>
              <h3 className="font-semibold text-lg mb-3 text-foreground">{mission.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{mission.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
