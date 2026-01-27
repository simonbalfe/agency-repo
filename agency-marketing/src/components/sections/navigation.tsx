"use client"

import { Button } from "@/components/ui/button"
import { motion } from "motion/react"
import { SITE_CONFIG } from "@/lib/constants"

export function Navigation() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-xl"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-light text-foreground cursor-pointer tracking-tight"
            onClick={() => window.location.href = "/"}
          >
            LaunchStack
          </motion.div>
          <div className="flex items-center space-x-8">
            <a 
              href="/#services" 
              className="text-sm font-semibold text-foreground/80 hover:text-foreground hover:underline decoration-2 underline-offset-4 transition-all"
            >
              Services
            </a>
            <a 
              href={SITE_CONFIG.demoUrl} 
              className="text-sm font-semibold text-foreground/80 hover:text-foreground hover:underline decoration-2 underline-offset-4 transition-all"
            >
              Our Work
            </a>
            <a 
              href="/blog" 
              className="text-sm font-semibold text-foreground/80 hover:text-foreground hover:underline decoration-2 underline-offset-4 transition-all"
            >
              Blog
            </a>
            <Button asChild size="lg" className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={SITE_CONFIG.calendlyUrl} target="_blank" rel="noopener noreferrer">
                Start Your Project
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
