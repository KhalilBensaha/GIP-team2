"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"

interface StepLayoutProps {
  step: number
  title: string
  description: string
  children: React.ReactNode
}

export default function StepLayout({ step, title, description, children }: StepLayoutProps) {
  const router = useRouter()
  const progress = (step / 4) * 100

  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-foreground">Build Your Portfolio</h1>
          <button
            onClick={() => alert("Draft saved!")}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
          >
            💾 Save Draft
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-1 bg-border rounded-full overflow-hidden">
            <div className="h-full bg-foreground transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
          <p className="text-sm text-muted-foreground mt-2">Step {step} of 4</p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-4">
              <h3 className="text-sm font-semibold text-foreground mb-4">Steps</h3>
              <nav className="space-y-2">
                {[
                  { num: 1, label: "Personal Info" },
                  { num: 2, label: "Skills" },
                  { num: 3, label: "Projects" },
                  { num: 4, label: "Links" },
                ].map(({ num, label }) => (
                  <button
                    key={num}
                    onClick={() => {
                      if (num < step) router.push(`/builder/step-${num}`)
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                      num === step
                        ? "bg-primary text-primary-foreground"
                        : num < step
                          ? "bg-secondary text-foreground hover:bg-secondary/80"
                          : "bg-secondary/50 text-muted-foreground cursor-not-allowed"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          num < step
                            ? "bg-green-500 text-white"
                            : num === step
                              ? "bg-primary-foreground text-primary"
                              : "bg-border text-muted-foreground"
                        }`}
                      >
                        {num < step ? "✓" : num}
                      </div>
                      {label}
                    </div>
                  </button>
                ))}
              </nav>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
                <p className="text-muted-foreground">{description}</p>
              </div>
              {children}
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
