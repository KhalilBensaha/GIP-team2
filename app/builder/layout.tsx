"use client"

import { createContext, useState, type ReactNode } from "react"
import Footer from "@/components/footer"

export interface PortfolioData {
  // Step 1: Personal Info
  fullName: string
  email: string
  professionalTitle: string
  bio: string

  // Step 2: Skills
  skills: string[]

  // Step 3: Projects
  projects: Array<{
    name: string
    description: string
  }>

  // Step 4: Links
  links: {
    github?: string
    linkedin?: string
    twitter?: string
    website?: string
  }

  // Template
  template: "minimalist" | "professional" | "vibrant"
}

export const PortfolioContext = createContext<{
  data: PortfolioData
  updateData: (partial: Partial<PortfolioData>) => void
}>({
  data: {
    fullName: "",
    email: "",
    professionalTitle: "",
    bio: "",
    skills: [],
    projects: [],
    links: {},
    template: "vibrant",
  },
  updateData: () => {},
})

export default function BuilderLayout({ children }: { children: ReactNode }) {
  const [data, setData] = useState<PortfolioData>({
    fullName: "",
    email: "",
    professionalTitle: "",
    bio: "",
    skills: [],
    projects: [],
    links: {},
    template: "vibrant",
  })

  const updateData = (partial: Partial<PortfolioData>) => {
    setData((prev) => ({ ...prev, ...partial }))
  }

  return (
    <PortfolioContext.Provider value={{ data, updateData }}>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {children}
        <Footer />
      </div>
    </PortfolioContext.Provider>
  )
}
