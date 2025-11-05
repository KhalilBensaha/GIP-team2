"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function TemplateSelection() {
  const router = useRouter()

  const templates = [
    {
      id: "minimalist",
      name: "Modern Minimalist",
      color: "blue",
      description: "Light background, simple spacing, subtle gradients",
      features: ["Clean Layout", "Subtle Animations", "Minimalist Design", "Professional Look"],
    },
    {
      id: "professional",
      name: "Classic Professional",
      color: "green",
      description: "Dark background, structured sections, focus on text",
      features: ["Dark Theme", "Traditional Layout", "Typography Focus", "Corporate Style"],
    },
    {
      id: "vibrant",
      name: "Creative Vibrant (GDG Theme)",
      color: "red",
      description: "GDG colors, dynamic shapes, youthful layout",
      features: ["Colorful Design", "Dynamic Shapes", "Modern Feel", "GDG Branding"],
      selected: true,
    },
  ]

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Choose Your Template</h1>
          <p className="text-muted-foreground text-lg">
            Select a design that best represents your style and professional identity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {templates.map((template) => (
            <Card
              key={template.id}
              className={`p-6 cursor-pointer transition-all ${
                template.selected ? "border-2 border-primary ring-2 ring-primary/20" : "border-border"
              }`}
            >
              <div className="space-y-4">
                <div className="h-40 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg" />
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{template.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{template.description}</p>
                  </div>
                  {template.selected && (
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm">
                      ✓
                    </div>
                  )}
                </div>
                <ul className="space-y-2">
                  {template.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => router.push("/builder/step-1")}
                  variant={template.selected ? "default" : "outline"}
                  className="w-full"
                >
                  {template.selected ? "Selected" : "Select Template"}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Don't worry, you can change your template later from the preview page
        </p>
      </div>
    </main>
  )
}
