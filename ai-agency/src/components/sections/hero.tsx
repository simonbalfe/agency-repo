"use client"

import { useState, useEffect } from "react"
import { SITE_CONFIG } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Hero() {
  const openCalendly = () => {
    window.open(SITE_CONFIG.calendlyUrl, "_blank")
  }

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-4xl flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-secondary-foreground mb-6 md:mb-8 leading-[1.15] md:leading-[1.1]">
              Turn Your Website Into a{" "}
              <span className="text-primary">24/7 Revenue Machine</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              AI that answers, qualifies, and converts visitors while you sleep. Stop losing $10K+ monthly to missed leads—our systems close deals around the clock.
            </p>
            <div className="flex flex-row items-center justify-center gap-4">
              <Button
                onClick={() => window.location.href = "/demo"}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                See It In Action
              </Button>
              <Button 
                variant="secondary"
                size="lg"
                onClick={openCalendly}
              >
                Talk to a Human
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground">
               <div className="flex -space-x-2">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs overflow-hidden">
                       <img src={`/images/${i}.png`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
               </div>
               <p>Trusted by 50+ businesses generating $2M+ in AI-driven revenue</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
