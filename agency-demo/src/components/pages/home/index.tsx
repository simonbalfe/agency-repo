"use client"
import { useUser } from "@/src/hooks/use-user"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"

export function HomePage() {
    const router = useRouter()
    const { user } = useUser()

    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-8">Demos</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>AI Receptionist</CardTitle>
                        <CardDescription>
                            A voice-enabled AI receptionist that can handle scheduling and inquiries.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button onClick={() => router.push("/demo")}>
                            View Demo
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
