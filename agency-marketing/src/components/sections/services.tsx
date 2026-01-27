"use client"

import { 
  Card, 
  CardContent,
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { AnimatedBeamServices } from "@/components/sections/animated-beam-services"
import { SITE_CONFIG } from "@/lib/constants"

const services = [
  {
    title: "MVP Development",
    description: "Got an idea? We'll turn it into a working product you can put in front of real users. No fluff—just the core features that let you validate and iterate.",
    image: "/images/cold_call.jpg",
    features: [
      "Full-stack web & mobile apps",
      "User auth, payments, dashboards",
      "Clean code you can scale later",
      "Shipped in 4-8 weeks"
    ]
  },
  {
    title: "Chatbot Automation",
    description: "Stop answering the same questions. We build AI chatbots that handle leads, customer support, and internal ops—so your team can focus on what matters.",
    image: "/images/irobot.jpg",
    features: [
      "Lead qualification & booking",
      "Customer support automation",
      "Multi-channel (web, SMS, WhatsApp)",
      "CRM & tool integrations"
    ]
  }
]

export function Services() {
  const openCalendly = () => {
    window.open(SITE_CONFIG.calendlyUrl, "_blank")
  }

  return (
    <section id="services" className="w-full py-12 md:py-20 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-light tracking-tighter sm:text-5xl">
            Two Ways We Help You Move Faster
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Build what you need. Automate what slows you down.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, idx) => (
            <Card key={idx} className="flex flex-col h-full pt-0 bg-background border-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="px-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="aspect-video w-full h-[280px] rounded-t-xl object-cover"
                />
              </CardContent>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <ul className="space-y-3">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="gap-3 max-sm:flex-col max-sm:items-stretch">
                <Button onClick={openCalendly} className="bg-primary text-primary-foreground hover:bg-primary/90">Book Discovery Call</Button>
                <Button variant="outline" onClick={() => window.location.href = SITE_CONFIG.demoUrl}>See Our Work</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-20">
             <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                <h3 className="text-2xl font-light tracking-tighter sm:text-4xl">
                    Chatbots That Connect Everything
                </h3>
                <p className="max-w-[900px] text-muted-foreground md:text-lg/relaxed">
                    One intelligent bot across all your channels—web, SMS, WhatsApp, and more.
                </p>
            </div>
            <AnimatedBeamServices />
        </div>
      </div>
    </section>
  )
}
