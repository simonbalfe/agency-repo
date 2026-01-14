import { TweetCard } from "@/components/ui/tweet-card"

export function SocialProof() {
  return (
    <section className="py-24 w-full px-6 bg-background">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-light tracking-tighter sm:text-5xl mb-4">
            Don't Take Our Word For It
          </h2>
          <p className="text-muted-foreground md:text-xl max-w-2xl">
            Real results from real businesses.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <TweetCard id="1984366181503979888" />
          <TweetCard id="2011403945265246405" />
        </div>
      </div>
    </section>
  )
}
