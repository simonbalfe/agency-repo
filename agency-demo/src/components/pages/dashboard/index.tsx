"use client"

import { useEffect } from "react"
import { useUser } from "@/src/hooks/use-user"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"

export function DashboardPage() {
    const { user, loading } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (!loading && !user) {
            router.push("/auth")
        }
    }, [user, loading, router])

    if (loading || !user) {
        return null
    }

    return (
        <div className="min-h-screen bg-background p-4 md:p-8">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold">Welcome back!</h1>
                    <p className="text-muted-foreground">Here&apos;s an overview of your account.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Account Info</CardTitle>
                            <CardDescription>Your account details</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div>
                                <p className="text-sm text-muted-foreground">Email</p>
                                <p className="font-medium">{user.email}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Get Started</CardTitle>
                        <CardDescription>This is your simplified dashboard.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            You can now access all the demos from the home page.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
