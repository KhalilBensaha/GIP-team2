"use client"

import { Card } from "@/components/ui/card"

const features = [
  {
    id: 1,
    icon: "feature1.svg",
    title: "Easy Customization",
    description: "Personalize your portfolio with intuitive drag-and-drop controls",
    color: "bg-blue-500 text-blue-600 #4285F4",
  },
  {
    id: 2,
    icon: "feature2.svg",
    title: "Multiple Templates",
    description: "Choose from professionally designed templates for every style",
    color: "bg-red-500 text-red-600",
  },
  {
    id: 3,
    icon: "feature3.svg",
    title: "Export Options",
    description: "Download as PDF, JSON, or deploy directly to your site",
    color: "bg-green-500 text-green-600",
  },
  {
    id: 4,
    icon: "feature4.svg",
    title: "Quick & Simple",
    description: "Get your portfolio live in minutes without any coding",
    color: "bg-orange-500 text-orange-600",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Everything You Need to Stand Out</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create a stunning portfolio with next generation tools and templates
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4 text-2xl`}>
                <img src={`/${feature.icon}`} alt={feature.title} className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
