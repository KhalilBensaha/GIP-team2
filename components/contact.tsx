"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: "✉️",
      title: "Email Us",
      detail: "contact@gosportfolio.com",
      color: "bg-blue-100 text-blue-600",
      action: "mailto:contact@gosportfolio.com",
    },
    {
      icon: "👥",
      title: "Join Our Community",
      detail: "Connect with 1000+ GOS members",
      color: "bg-green-100 text-green-600",
      action: "#",
    },
    {
      icon: "📞",
      title: "Call Hours",
      detail: "Mon-Fri, 10:00 AM - 6:00 PM EST",
      color: "bg-orange-100 text-orange-600",
      action: "#",
    },
    {
      icon: "📍",
      title: "Global Community",
      detail: "Remote-first, members worldwide",
      color: "bg-red-100 text-red-600",
      action: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about your portfolio? Our team is here to help. Reach out and we'll get back to you quickly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">Send us a Message</h3>
              <p className="text-sm text-muted-foreground">Fill out the form below and we'll respond within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-colors"
                required
              />
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 transition-colors" disabled={submitted}>
                {submitted ? "✓ Message Sent!" : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info - Enhanced layout */}
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">Connect With Us</h3>
              <p className="text-sm text-muted-foreground">Multiple ways to reach out and join our community</p>
            </div>
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <Card
                  key={idx}
                  className="p-5 hover:shadow-md hover:border-blue-200 transition-all group cursor-pointer"
                >
                  <div className="flex gap-4 items-start">
                    <div
                      className={`flex-shrink-0 w-12 h-12 ${info.color} rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}
                    >
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-sm mb-1">{info.title}</h4>
                      <p className="text-muted-foreground text-sm">{info.detail}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
