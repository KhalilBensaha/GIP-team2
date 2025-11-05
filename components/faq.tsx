"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

const faqs = [
  {
    question: "Is the portfolio generator free to use?",
    answer:
      "Yes, the GOS Portfolio Generator is completely free for all GOS members. No hidden fees or premium tiers required.",
  },
  {
    question: "Can I create multiple portfolios?",
    answer: "You can create and manage as many portfolios as needed. Each portfolio can be customized independently.",
  },
  {
    question: "What format can I export my portfolio as?",
    answer:
      "You can export your portfolio as PDF, JSON, or deploy directly to a custom domain. All formats maintain full styling and functionality.",
  },
  {
    question: "Can I edit my portfolio after creating it?",
    answer: "Yes, you can edit and update your portfolio anytime. All changes are saved automatically to your account.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Quick answers to common questions</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <button
                className="w-full p-6 flex items-start justify-between hover:bg-muted/50 transition-colors"
                aria-expanded={openIndex === index}
                aria-label={`Toggle answer for: ${faq.question}`}
              >
                <span className="font-semibold text-left text-foreground">{faq.question}</span>
                <span
                  className={`flex-shrink-0 ml-4 transition-transform duration-200 inline-block ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-muted-foreground border-t border-border pt-4">{faq.answer}</div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
