import { TweetCard } from "@/components/ui/tweet-card"

export function SocialProof() {
  return (
    <section id="social-proof" className="py-24 w-full px-6 bg-background">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-light tracking-tighter sm:text-5xl mb-4">
            Founders Who Shipped
          </h2>
          <p className="text-muted-foreground md:text-xl max-w-2xl">
            Real MVPs. Real automation. Real results.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <TweetCard id="1984366181503979888" />
          <TweetCard id="2011403945265246405" />
          <TweetCard id="1998398538867200389" />
        </div>
      </div>
    </section>
  )
}
