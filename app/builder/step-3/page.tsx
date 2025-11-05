"use client"

import { useContext, useState } from "react"
import { useRouter } from "next/navigation"
import { PortfolioContext } from "../layout"
import StepLayout from "@/components/builder/step-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export default function Step3() {
  const router = useRouter()
  const { data, updateData } = useContext(PortfolioContext)
  const [newProject, setNewProject] = useState({ name: "", description: "" })

  const addProject = () => {
    if (newProject.name && newProject.description) {
      updateData({
        projects: [...data.projects, newProject],
      })
      setNewProject({ name: "", description: "" })
    }
  }

  const removeProject = (index: number) => {
    updateData({
      projects: data.projects.filter((_, i) => i !== index),
    })
  }

  const handleNext = () => {
    if (data.projects.length > 0) {
      router.push("/builder/step-4")
    }
  }

  return (
    <StepLayout step={3} title="Your Projects" description="Showcase your best work">
      <div className="space-y-6">
        <div className="space-y-4 bg-secondary p-4 rounded-lg border border-border">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Project Name</label>
            <Input
              placeholder="Project 1"
              value={newProject.name}
              onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Description</label>
            <Textarea
              placeholder="Describe your project, technologies used, and your role..."
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              rows={3}
            />
          </div>
          <Button onClick={addProject} className="w-full">
            + Add Project
          </Button>
        </div>

        {data.projects.length > 0 && (
          <div className="space-y-3">
            {data.projects.map((project, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{project.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeProject(index)}
                    className="text-destructive hover:text-destructive"
                  >
                    ✕
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        <div className="flex gap-3 pt-4">
          <Button variant="outline" onClick={() => router.back()}>
            ← Back
          </Button>
          <Button onClick={handleNext} className="ml-auto" disabled={data.projects.length === 0}>
            Next →
          </Button>
        </div>
      </div>
    </StepLayout>
  )
}
