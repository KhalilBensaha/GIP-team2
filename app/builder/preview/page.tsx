"use client"

import { useContext } from "react"
import { useRouter } from "next/navigation"
import { PortfolioContext } from "../layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Preview() {
  const router = useRouter()
  const { data } = useContext(PortfolioContext)

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">{data.fullName}</h1>
          <p className="text-xl text-primary mb-8">{data.professionalTitle}</p>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => router.push("/builder/step-1")}>← Edit</Button>
            <Button variant="outline">📥 Download</Button>
            <Button variant="outline">🔗 Share</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 col-span-1 md:col-span-3">
            <h2 className="text-2xl font-bold text-foreground mb-2">About</h2>
            <p className="text-muted-foreground">{data.bio}</p>
          </Card>

          {data.skills.length > 0 && (
            <Card className="p-6 col-span-1 md:col-span-3">
              <h2 className="text-2xl font-bold text-foreground mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-primary text-primary-foreground rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          )}

          {data.projects.length > 0 && (
            <Card className="p-6 col-span-1 md:col-span-3">
              <h2 className="text-2xl font-bold text-foreground mb-4">Projects</h2>
              <div className="space-y-4">
                {data.projects.map((project, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground">{project.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {Object.values(data.links).some(Boolean) && (
            <Card className="p-6 col-span-1 md:col-span-3">
              <h2 className="text-2xl font-bold text-foreground mb-4">Links</h2>
              <div className="flex flex-wrap gap-4">
                {data.links.github && (
                  <a
                    href={data.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {data.links.linkedin && (
                  <a
                    href={data.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    LinkedIn
                  </a>
                )}
                {data.links.twitter && (
                  <a
                    href={data.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Twitter
                  </a>
                )}
                {data.links.website && (
                  <a
                    href={data.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Website
                  </a>
                )}
              </div>
            </Card>
          )}
        </div>
      </div>
    </main>
  )
}
