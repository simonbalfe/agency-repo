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

const services = [
  {
    title: "AI That Talks Like Your Best Salesperson",
    description: "Customers can't tell the difference. Your AI answers calls, handles objections, and books meetings while you're at dinner.",
    image: "/images/cold_call.jpg",
    features: [
      "Voice agents that sound human",
      "Instant responses on WhatsApp & web",
      "Appointments booked automatically",
      "Warm leads, not tire-kickers"
    ]
  },
  {
    title: "Stop Doing Work a Robot Should Do",
    description: "Data entry, follow-ups, invoice reminders—gone. Reclaim 20+ hours a week.",
    image: "/images/irobot.jpg",
    features: [
      "Your CRM updates itself",
      "Emails sent at the perfect time",
      "Documents processed in seconds",
      "Systems that talk to each other"
    ]
  },
  {
    title: "Websites That Actually Convert",
    description: "Pretty pages don't pay bills. We build fast, persuasive digital experiences that turn visitors into customers.",
    image: "/images/1.png",
    features: [
      "Custom apps built for your workflow",
      "Mobile-first, always",
      "AI dashboards that surface insights",
      "Landing pages that sell"
    ]
  }
]

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-20 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-light tracking-tighter sm:text-5xl">
            Three Ways We Print You Money
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Pick one. Or let them work together.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Show Me How</Button>
                <Button variant="outline">See Examples</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-20">
             <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                <h3 className="text-2xl font-light tracking-tighter sm:text-4xl">
                    The Central Nervous System
                </h3>
                <p className="max-w-[900px] text-muted-foreground md:text-lg/relaxed">
                    We unify your communication channels into one intelligent brain.
                </p>
            </div>
            <AnimatedBeamServices />
        </div>
      </div>
    </section>
  )
}
