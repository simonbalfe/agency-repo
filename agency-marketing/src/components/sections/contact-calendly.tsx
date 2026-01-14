"use client"

import { Calendar, Mail } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"
import { Button } from "@/components/ui/button"

export function ContactCalendly() {
  const openCalendly = () => {
    window.open(SITE_CONFIG.calendlyUrl, "_blank")
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Let&apos;s Talk
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with AI? Book a consultation with our team
          </p>
        </div>

        <div className="text-center">
          <Button
            onClick={openCalendly}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Schedule a Meeting
          </Button>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">or reach us directly</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
            <a
              href="mailto:admin@vocalbeam.com"
              className="flex items-center gap-2 text-foreground hover:text-muted-foreground font-semibold text-lg transition-colors group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              admin@vocalbeam.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
