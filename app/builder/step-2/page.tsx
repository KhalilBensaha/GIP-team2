"use client"

import type React from "react"

import { useContext } from "react"
import { useRouter } from "next/navigation"
import { PortfolioContext } from "../layout"
import StepLayout from "@/components/builder/step-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Step2() {
  const router = useRouter()
  const { data, updateData } = useContext(PortfolioContext)

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const skills = e.target.value
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
    updateData({ skills })
  }

  const handleNext = () => {
    if (data.skills.length > 0) {
      router.push("/builder/step-3")
    }
  }

  return (
    <StepLayout step={2} title="Your Skills" description="List your technical and professional skills">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Skills (Comma-separated) *</label>
          <Input
            placeholder="JavaScript, React, Node.js, Python, UI/UX Design, etc."
            value={data.skills.join(", ")}
            onChange={handleSkillsChange}
          />
          <p className="text-sm text-muted-foreground mt-2">
            Separate each skill with a comma. Example: JavaScript, React, Node.js
          </p>
        </div>

        {data.skills.length > 0 && (
          <div className="bg-secondary p-4 rounded-lg">
            <p className="text-sm font-medium text-foreground mb-3">Skills Preview:</p>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3 pt-4">
          <Button variant="outline" onClick={() => router.back()}>
            ← Back
          </Button>
          <Button onClick={handleNext} className="ml-auto" disabled={data.skills.length === 0}>
            Next →
          </Button>
        </div>
      </div>
    </StepLayout>
  )
}
