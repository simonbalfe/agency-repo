"use client"

import { SITE_CONFIG } from "@/lib/constants"
import { Button } from "@/components/ui/button"

export function Hero() {
  const openCalendly = () => {
    window.open(SITE_CONFIG.calendlyUrl, "_blank")
  }

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-4xl flex flex-col items-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              MVP Development & Chatbot Automation
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-secondary-foreground mb-6 md:mb-8 leading-[1.15] md:leading-[1.1]">
              Build Fast.{" "}
              <span className="text-primary">Scale Faster.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              We turn your ideas into working MVPs and your manual processes into automated chatbot systems. Ship in weeks, not months. Automate what slows you down.
            </p>
            <div className="flex flex-row items-center justify-center gap-4">
              <Button
                onClick={() => window.location.href = SITE_CONFIG.demoUrl}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                See Our Work
              </Button>
              <Button 
                variant="secondary"
                size="lg"
                onClick={openCalendly}
              >
                Book Discovery Call
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
               <p>50+ MVPs launched • 100+ chatbots deployed for startups & SMBs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
