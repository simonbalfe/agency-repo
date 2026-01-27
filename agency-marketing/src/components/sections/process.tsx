"use client"

import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"
import { Phone, FileText, Code, Rocket, MessageSquare } from "lucide-react"

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Discovery Call",
    description: "We hop on a quick call to understand your idea, goals, and timeline. No sales pitch—just figuring out if we're a good fit."
  },
  {
    icon: FileText,
    number: "02",
    title: "Requirements & Scope",
    description: "We define exactly what gets built, what's out of scope, and agree on a fixed price. No surprises, no scope creep."
  },
  {
    icon: Code,
    number: "03",
    title: "Build & Iterate",
    description: "We get to work. You'll get regular updates and early access to test as we build. Feedback loops keep us aligned."
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Handoff",
    description: "Your product goes live. We handle deployment, walk you through everything, and provide 30 days of bug support."
  },
  {
    icon: MessageSquare,
    number: "05",
    title: "Ongoing Support",
    description: "Need changes or new features? We're here for ongoing work or retainer arrangements—whatever fits your needs."
  }
]

export function Process() {
  const openCalendly = () => {
    window.open(SITE_CONFIG.calendlyUrl, "_blank")
  }

  return (
    <section id="process" className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-light tracking-tighter sm:text-5xl">
            How We Work
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            A simple, transparent process from first call to launch.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
          
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex gap-6 md:gap-8">
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-primary">{step.number}</span>
                    <h3 className="text-xl font-medium">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button onClick={openCalendly} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Book Your Discovery Call
          </Button>
        </div>
      </div>
    </section>
  )
}
