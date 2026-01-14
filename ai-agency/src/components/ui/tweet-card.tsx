import { Suspense } from "react"
import { enrichTweet, type EnrichedTweet, type TweetProps } from "react-tweet"
import { getTweet, type Tweet } from "react-tweet/api"

import { cn } from "@/lib/utils"

interface TwitterIconProps {
  className?: string
  [key: string]: unknown
}
const Twitter = ({ className, ...props }: TwitterIconProps) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <g>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
    </g>
  </svg>
)

const OLD_HANDLE = "said_hustle"
const NEW_HANDLE = "said_azizow"
const NEW_PROFILE_URL = `https://x.com/${NEW_HANDLE}`

const getFixedUser = (user: EnrichedTweet["user"]) => {
  const isTarget = user.screen_name === OLD_HANDLE
  return {
    ...user,
    screen_name: isTarget ? NEW_HANDLE : user.screen_name,
    url: isTarget ? NEW_PROFILE_URL : user.url,
  }
}

const fixText = (text: string) => {
  return text.replace(
    new RegExp(`@${OLD_HANDLE}`, "g"),
    `<a href="${NEW_PROFILE_URL}" target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-foreground transition-colors">@${NEW_HANDLE}</a>`
  )
}

const fixPlainText = (text: string) =>
  text.replace(new RegExp(`@${OLD_HANDLE}`, "g"), `@${NEW_HANDLE}`)

const Verified = ({ className, ...props }: TwitterIconProps) => (
  <svg
    aria-label="Verified Account"
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <g fill="currentColor">
      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
    </g>
  </svg>
)

export const truncate = (str: string | null, length: number) => {
  if (!str || str.length <= length) return str
  return `${str.slice(0, length - 3)}...`
}

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("bg-primary/10 rounded-md", className)} {...props} />
  )
}

export const TweetSkeleton = ({
  className,
  ...props
}: {
  className?: string
  [key: string]: unknown
}) => (
  <div
    className={cn(
      "flex size-full max-w-3xl min-w-72 flex-col gap-6 rounded-2xl border p-6 md:p-8 bg-card shadow-lg",
      className
    )}
    {...props}
  >
    <div className="flex flex-row gap-4">
      <Skeleton className="size-14 shrink-0 rounded-full" />
      <div className="flex flex-col gap-2 w-full">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
    <Skeleton className="h-32 w-full" />
    <Skeleton className="h-[400px] md:h-[500px] w-full rounded-2xl" />
  </div>
)

export const TweetNotFound = ({
  className,
  ...props
}: {
  className?: string
  [key: string]: unknown
}) => (
  <div
    className={cn(
      "flex size-full flex-col items-center justify-center gap-2 rounded-lg border p-4",
      className
    )}
    {...props}
  >
    <h3>Tweet not found</h3>
  </div>
)

export const TweetHeader = ({ tweet }: { tweet: EnrichedTweet }) => {
  const user = getFixedUser(tweet.user)
  const tweetUrl = tweet.url.replace(
    new RegExp(OLD_HANDLE, "g"),
    NEW_HANDLE
  )

  return (
    <div className="flex flex-row items-start justify-between tracking-normal">
      <div className="flex items-center space-x-4">
        <a
          href={user.url}
          target="_blank"
          rel="noreferrer"
          className="shrink-0"
        >
          <img
            title={`Profile picture of ${user.name}`}
            alt={user.screen_name}
            height={56}
            width={56}
            src={user.profile_image_url_https}
            className="border-border/50 overflow-hidden rounded-full border h-14 w-14"
          />
        </a>
        <div className="flex flex-col gap-0.5">
          <a
            href={user.url}
            target="_blank"
            rel="noreferrer"
            className="text-foreground flex items-center text-lg font-bold whitespace-nowrap transition-opacity hover:opacity-80"
          >
            {truncate(user.name, 20)}
            {user.verified ||
              (user.is_blue_verified && (
                <Verified className="ml-1 inline size-5 text-blue-500" />
              ))}
          </a>
          <div className="flex items-center space-x-1">
            <a
              href={user.url}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground text-base transition-colors"
            >
              @{truncate(user.screen_name, 16)}
            </a>
          </div>
        </div>
      </div>
      <a href={tweetUrl} target="_blank" rel="noreferrer">
        <span className="sr-only">Link to tweet</span>
        <Twitter className="text-muted-foreground hover:text-foreground size-6 items-start transition-all ease-in-out hover:scale-105" />
      </a>
    </div>
  )
}

export const TweetBody = ({ tweet }: { tweet: EnrichedTweet }) => (
  <div className="text-lg md:text-xl leading-relaxed tracking-normal wrap-break-word">
    {tweet.entities.map((entity, idx) => {
      const isTargetMention =
        entity.type === "mention" && entity.text === `@${OLD_HANDLE}`
      const text = isTargetMention
        ? `@${NEW_HANDLE}`
        : entity.type === "text"
          ? fixText(entity.text)
          : entity.text

      switch (entity.type) {
        case "url":
        case "symbol":
        case "hashtag":
        case "mention":
          return (
            <a
              key={idx}
              href={isTargetMention ? NEW_PROFILE_URL : entity.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground text-lg md:text-xl font-normal transition-colors"
            >
              <span>{text}</span>
            </a>
          )
        case "text":
          return (
            <span
              key={idx}
              className="text-foreground text-lg md:text-xl font-normal"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )
      }
    })}
  </div>
)

export const TweetMedia = ({ tweet }: { tweet: EnrichedTweet }) => {
  if (!tweet.video && !tweet.photos) return null
  return (
    <div className="flex flex-1 items-center justify-center">
      {tweet.video && (
        <video
          poster={tweet.video.poster}
          autoPlay
          loop
          muted
          playsInline
          className="rounded-2xl border shadow-sm w-full"
        >
          <source src={tweet.video.variants[0].src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {tweet.photos && (
        <div className="relative flex transform-gpu snap-x snap-mandatory gap-4 overflow-x-auto w-full">
          <div className="shrink-0 snap-center sm:w-2" />
          {tweet.photos.map((photo) => (
            <img
              key={photo.url}
              src={photo.url}
              width={photo.width}
              height={photo.height}
              title={"Photo by " + tweet.user.name}
              alt={fixPlainText(tweet.text)}
              className="h-[400px] md:h-[500px] w-full shrink-0 snap-center snap-always rounded-2xl border object-cover shadow-sm"
            />
          ))}
          <div className="shrink-0 snap-center sm:w-2" />
        </div>
      )}
      {!tweet.video &&
        !tweet.photos &&
        // @ts-expect-error package doesn't have type definitions
        tweet?.card?.binding_values?.thumbnail_image_large?.image_value.url && (
          <img
            src={
              // @ts-expect-error package doesn't have type definitions
              tweet.card.binding_values.thumbnail_image_large.image_value.url
            }
            className="h-[400px] md:h-[500px] w-full rounded-2xl border object-cover shadow-sm"
            alt={fixPlainText(tweet.text)}
          />
        )}
    </div>
  )
}

export const MagicTweet = ({
  tweet,
  className,
  ...props
}: {
  tweet: Tweet
  className?: string
}) => {
  const enrichedTweet = enrichTweet(tweet)
  return (
    <div
      className={cn(
        "relative flex h-fit w-full max-w-3xl flex-col gap-6 overflow-hidden rounded-2xl border p-6 md:p-8 bg-card shadow-lg",
        className
      )}
      {...props}
    >
      <TweetHeader tweet={enrichedTweet} />
      <TweetBody tweet={enrichedTweet} />
      <TweetMedia tweet={enrichedTweet} />
    </div>
  )
}

/**
 * TweetCard (Server Side Only)
 */
export const TweetCard = async ({
  id,
  components,
  fallback = <TweetSkeleton />,
  onError,
  ...props
}: TweetProps & {
  className?: string
}) => {
  const tweet = id
    ? await getTweet(id).catch((err) => {
        if (onError) {
          onError(err)
        } else {
          console.error(err)
        }
      })
    : undefined

  if (!tweet) {
    const NotFound = components?.TweetNotFound || TweetNotFound
    return <NotFound {...props} />
  }

  return (
    <Suspense fallback={fallback}>
      <MagicTweet tweet={tweet} {...props} />
    </Suspense>
  )
}
