"use client"

import { useContext } from "react"
import { useRouter } from "next/navigation"
import { PortfolioContext } from "../layout"
import StepLayout from "@/components/builder/step-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Step4() {
  const router = useRouter()
  const { data, updateData } = useContext(PortfolioContext)

  const handleLinkChange = (key: keyof typeof data.links, value: string) => {
    updateData({
      links: { ...data.links, [key]: value },
    })
  }

  const handleFinalize = () => {
    router.push("/builder/preview")
  }

  const linkFields = [
    { key: "github", label: "GitHub", placeholder: "https://github.com/username" },
    { key: "linkedin", label: "LinkedIn", placeholder: "https://linkedin.com/in/username" },
    { key: "twitter", label: "Twitter", placeholder: "https://twitter.com/username" },
    { key: "website", label: "Personal Website", placeholder: "https://yourwebsite.com" },
  ] as const

  return (
    <StepLayout step={4} title="Social Links" description="Add your online presence">
      <div className="space-y-6">
        {linkFields.map(({ key, label, placeholder }) => (
          <div key={key}>
            <label className="block text-sm font-medium text-foreground mb-2">{label}</label>
            <Input
              placeholder={placeholder}
              value={data.links[key] || ""}
              onChange={(e) => handleLinkChange(key, e.target.value)}
            />
          </div>
        ))}

        <div className="flex gap-3 pt-4">
          <Button variant="outline" onClick={() => router.back()}>
            ← Back
          </Button>
          <Button onClick={() => alert("Draft saved!")}>💾 Save Draft</Button>
          <Button onClick={handleFinalize} className="ml-auto">
            Finalize →
          </Button>
        </div>
      </div>
    </StepLayout>
  )
}
