"use client"

import { useState, useEffect, Suspense } from "react"
import { authClient } from "@/src/services/better-auth/auth-client"
import { useRouter, useSearchParams } from "next/navigation"
import { useUser } from "@/src/hooks/use-user"
import { Loader2, Mail, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/src/components/ui/card"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/src/components/ui/input-group"
import { Button } from "@/src/components/ui/button"
import { Alert, AlertDescription } from "@/src/components/ui/alert"

function AuthPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/"
  const { user, loading: userLoading } = useUser()

  useEffect(() => {
    if (!userLoading && user) {
      router.push(callbackUrl)
    }
  }, [user, userLoading, router, callbackUrl])
  
  const [showVerification, setShowVerification] = useState(false)
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    try {
        const result = await authClient.signIn.magicLink({
            email,
            callbackURL: callbackUrl
        })
        if (result.error) {
            setError(result.error.message || "Failed to send magic link")
        } else {
            setShowVerification(true)
        }
    } catch {
        setError("An unexpected error occurred. Please try again.")
    } finally {
        setLoading(false)
    }
  }

  if (showVerification) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/50 p-4">
        <Card className="w-full max-w-[400px]">
          <CardContent className="flex flex-col gap-6 pt-6 text-center">
            <div className="flex justify-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tight">Check your email</h1>
              <p className="text-muted-foreground">
                We&apos;ve sent a magic link to <span className="font-medium text-foreground">{email}</span>. Please click the link to sign in.
              </p>
            </div>
            <div className="space-y-4">
              {email.toLowerCase().endsWith("@gmail.com") && (
                <Button 
                  asChild
                  className="w-full"
                >
                  <a 
                    href="https://mail.google.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Open Gmail
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  setShowVerification(false)
                }}
              >
                Return to Sign In
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/50 p-4">
      <Card className="w-full max-w-[400px]">
        <CardContent className="flex flex-col gap-6 pt-6">
            <div className="text-center space-y-3">
              <h1 className="text-3xl font-bold tracking-tight">
                Welcome
              </h1>
              <p className="text-base font-medium">
                Sign in to your account
              </p>
              <p className="text-sm text-muted-foreground">
                Enter your email below to receive a magic link
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <Mail className="h-4 w-4" />
                </InputGroupAddon>
                <InputGroupInput
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </InputGroup>

              <Button
                type="submit"
                disabled={loading}
                className="w-full"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending magic link...
                  </>
                ) : (
                  "Send Magic Link"
                )}
              </Button>
            </form>
        </CardContent>
      </Card>
    </div>
  )
}

export function AuthPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}>
      <AuthPageContent />
    </Suspense>
  )
}
