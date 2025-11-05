"use client"

import { useContext } from "react"
import { useRouter } from "next/navigation"
import { PortfolioContext } from "../layout"
import StepLayout from "@/components/builder/step-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Step1() {
  const router = useRouter()
  const { data, updateData } = useContext(PortfolioContext)

  const handleNext = () => {
    if (data.fullName && data.email && data.professionalTitle) {
      router.push("/builder/step-2")
    }
  }

  return (
    <StepLayout step={1} title="Personal Information" description="Tell us about yourself">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Full name *</label>
            <Input
              placeholder="Your Name"
              value={data.fullName}
              onChange={(e) => updateData({ fullName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
            <div className="relative">
              <Input
                type="email"
                placeholder="your@email.com"
                value={data.email}
                onChange={(e) => updateData({ email: e.target.value })}
              />
              <span className="absolute right-3 top-3 text-muted-foreground">✉</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Professional Title *</label>
          <Input
            placeholder="Full Stack Developer"
            value={data.professionalTitle}
            onChange={(e) => updateData({ professionalTitle: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Bio / About Me *</label>
          <Textarea
            placeholder="Tell us about your experience, interests, and what makes you unique..."
            value={data.bio}
            onChange={(e) => updateData({ bio: e.target.value })}
            rows={5}
          />
        </div>

        <div className="flex gap-3 pt-4">
          <Button variant="outline" onClick={() => router.back()}>
            ← Back
          </Button>
          <Button onClick={handleNext} className="ml-auto">
            Next →
          </Button>
        </div>
      </div>
    </StepLayout>
  )
}
