"use client"
import { useUser } from "@/src/hooks/use-user"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"

export function DemoPage() {
    const { user, loading } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (!loading && !user) {
            router.push("/auth?callbackUrl=/demo")
        }
    }, [user, loading, router])

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )
    }

    if (!user) {
        return null // Redirecting
    }

    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-4">Demo Page</h1>
            <p className="text-lg text-muted-foreground mb-8">
                Welcome to the email-gated demo! You are verified as {user.email}.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Marketing Agency Receptionist</CardTitle>
                        <CardDescription>
                            Talk to our AI receptionist who can handle scheduling and inquiries.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link href="/demo/receptionist">
                            <Button className="w-full">Open Demo</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
